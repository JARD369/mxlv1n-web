# MXLV1N — sitio web

Sitio estático (HTML/CSS/JS puro, sin build, sin npm) para el productor/DJ MXLV1N (Pablo Malvin).

## Estructura

```
index.html        ← única página (bio + música)
styles.css         ← todos los estilos
main.js             ← idioma ES/EN, animaciones de scroll, embeds de música
lib/manifest.js  ← todo el contenido editable (textos ES/EN, enlaces)
assets/favicon.svg
.htaccess              ← solo si algún día hosteas en Apache/Hostinger
_headers               ← reglas de caché para Cloudflare Pages
```

## Editar contenido

Todo el texto y los enlaces viven en **`lib/manifest.js`**. No hace falta tocar el HTML para:

- Cambiar la biografía (`i18n.es.bioText` / `i18n.en.bioText`).
- Conectar tu música: completa `links.spotify`, `links.soundcloud` y/o `links.youtube` con la URL real de tu perfil/track. En cuanto haya una URL, la tarjeta correspondiente en la sección "Música" pasa de "Próximamente" a mostrar el reproductor embebido automáticamente.
- Cambiar el link de Instagram (`instagram` / `instagramHandle`).

## Ver el sitio en local

Si tienes Python:

```bash
python3 -m http.server 8765
```

Si no (como en este equipo), usa el servidor incluido en `tools/serve.ps1` (PowerShell, sin dependencias):

```powershell
powershell -ExecutionPolicy Bypass -File tools\serve.ps1
```

Ambos sirven en `http://localhost:8765/`. Abrir `index.html` con doble clic también funciona (no usa módulos ES ni imports), pero un servidor local es más fiel a cómo se verá en producción.

## Deploy

Ver las instrucciones de GitHub + Cloudflare Pages que te dio Claude en el chat.

Cada vez que cambies `styles.css` o `main.js`, sube el número de versión `?v=` en los `<link>`/`<script>` de `index.html` (evita que quede una versión vieja cacheada).
