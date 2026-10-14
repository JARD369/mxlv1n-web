# Minimal static file server (no Python/Node required) — dev preview only, not shipped.
param([int]$Port = 8765, [string]$Root = (Split-Path -Parent $PSScriptRoot))

Add-Type -AssemblyName System.Net.HttpListener -ErrorAction SilentlyContinue

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()
Write-Host "Serving $Root at http://localhost:$Port/"

$mime = @{
  ".html" = "text/html; charset=utf-8"; ".css" = "text/css"; ".js" = "application/javascript"
  ".svg" = "image/svg+xml"; ".json" = "application/json"; ".ico" = "image/x-icon"
  ".jpg" = "image/jpeg"; ".jpeg" = "image/jpeg"; ".png" = "image/png"; ".webp" = "image/webp"
  ".mp4" = "video/mp4"
}

while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  $req = $ctx.Request
  $res = $ctx.Response
  try {
    $path = $req.Url.AbsolutePath
    if ($path -eq "/") { $path = "/index.html" }
    $filePath = Join-Path $Root ($path.TrimStart("/") -replace "/", "\")
    if (Test-Path $filePath -PathType Leaf) {
      $ext = [System.IO.Path]::GetExtension($filePath)
      $res.ContentType = if ($mime.ContainsKey($ext)) { $mime[$ext] } else { "application/octet-stream" }
      $res.Headers.Add("Accept-Ranges", "bytes")
      $bytes = [System.IO.File]::ReadAllBytes($filePath)
      $total = $bytes.Length
      $rangeHeader = $req.Headers["Range"]
      if ($rangeHeader -and $rangeHeader -match "bytes=(\d*)-(\d*)") {
        $start = if ($matches[1]) { [int64]$matches[1] } else { 0 }
        $end = if ($matches[2]) { [int64]$matches[2] } else { $total - 1 }
        if ($end -ge $total) { $end = $total - 1 }
        $len = $end - $start + 1
        $res.StatusCode = 206
        $res.Headers.Add("Content-Range", "bytes $start-$end/$total")
        $res.ContentLength64 = $len
        $res.OutputStream.Write($bytes, [int]$start, [int]$len)
      } else {
        $res.ContentLength64 = $total
        $res.OutputStream.Write($bytes, 0, $total)
      }
    } else {
      $res.StatusCode = 404
      $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
      $res.OutputStream.Write($msg, 0, $msg.Length)
    }
  } finally {
    $res.OutputStream.Close()
  }
}
