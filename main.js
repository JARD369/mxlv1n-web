/* main.js — entry point. Classic script (no ES modules), IIFE pattern. */
(function () {
  "use strict";

  var data = window.__BRAND__ || {};
  var $ = function (sel, scope) { return (scope || document).querySelector(sel); };
  var $$ = function (sel, scope) { return Array.prototype.slice.call((scope || document).querySelectorAll(sel)); };

  function safe(fn, name) {
    try { fn(); } catch (e) { console.warn("[" + name + "]", e); }
  }

  var LANG_KEY = "mxlv1n-lang";

  function getInitialLang() {
    try {
      var stored = localStorage.getItem(LANG_KEY);
      if (stored === "es" || stored === "en") return stored;
    } catch (e) { /* localStorage unavailable — fall through */ }
    return (navigator.language || "es").toLowerCase().indexOf("es") === 0 ? "es" : "en";
  }

  function applyLang(lang) {
    var dict = (data.i18n || {})[lang];
    if (!dict) return;

    document.documentElement.setAttribute("lang", dict.htmlLang || lang);

    $$("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] == null) return;
      if (el.hasAttribute("data-split")) {
        el.setAttribute("data-pending-text", dict[key]);
        renderSplit(el, dict[key]);
      } else {
        el.textContent = dict[key];
      }
    });

    $$("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (dict[key] != null) el.setAttribute("alt", dict[key]);
    });

    var switchLabel = $("#langSwitchLabel");
    if (switchLabel) switchLabel.textContent = dict.navLangSwitchTo || (lang === "es" ? "EN" : "ES");

    var announcer = $("#langAnnouncer");
    if (announcer) announcer.textContent = dict.langAnnounce || "";
  }

  /* data-split elements without data-i18n (e.g. the brand wordmark) split once,
     using their own hardcoded text — language-independent. */
  function initStaticSplits() {
    $$('[data-split]:not([data-i18n])').forEach(function (el) {
      renderSplit(el, el.textContent.trim());
    });
  }

  function initLangSwitch() {
    var btn = $("#langSwitch");
    if (!btn) return;
    var current = getInitialLang();
    applyLang(current);

    btn.addEventListener("click", function () {
      current = current === "es" ? "en" : "es";
      try { localStorage.setItem(LANG_KEY, current); } catch (e) { /* ignore */ }
      applyLang(current);
    });
  }

  /* Split text into words, preserving <br> and inline emphasis (gotcha A.4). */
  function renderSplit(el, text) {
    var words = String(text).split(/(\s+)/).map(function (w) {
      if (/^\s+$/.test(w)) return w;
      return '<span class="split-word" aria-hidden="true">' + escHTML(w) + "</span>";
    }).join("");
    el.setAttribute("aria-label", text);
    el.innerHTML = words;
    requestAnimationFrame(function () {
      $$(".split-word", el).forEach(function (w, i) {
        setTimeout(function () { w.classList.add("is-visible"); }, i * 40);
      });
    });
  }

  function escHTML(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* Reveal-on-scroll: threshold kept low + 6s safety net (gotcha A.8). */
  function initReveals() {
    var targets = $$(".reveal");
    if (!targets.length) return;

    if (typeof IntersectionObserver === "undefined") {
      targets.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.01, rootMargin: "0px 0px -2% 0px" });

    targets.forEach(function (el) { io.observe(el); });

    setTimeout(function () {
      $$(".reveal:not(.is-visible)").forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-visible");
      });
    }, 6000);
  }

  /* Mount real embeds when a link is present in manifest; otherwise the
     hardcoded "coming soon" placeholder in the HTML stays as-is. */
  function embedUrlFor(platform, url) {
    if (platform === "spotify") {
      var m = url.match(/open\.spotify\.com\/(track|album|artist|playlist)\/([a-zA-Z0-9]+)/);
      return m ? "https://open.spotify.com/embed/" + m[1] + "/" + m[2] : url;
    }
    if (platform === "soundcloud") {
      return "https://w.soundcloud.com/player/?url=" + encodeURIComponent(url) + "&color=%23ffc400&auto_play=false&visual=false";
    }
    if (platform === "youtube") {
      var v = url.match(/(?:v=|youtu\.be\/|embed\/)([a-zA-Z0-9_-]{6,})/);
      return v ? "https://www.youtube.com/embed/" + v[1] : url;
    }
    return url;
  }

  function youtubeVideoId(url) {
    var m = String(url || "").match(/(?:v=|youtu\.be\/|embed\/)([a-zA-Z0-9_-]{6,})/);
    return m ? m[1] : null;
  }

  function mountEmbed(target, platform, url) {
    var iframe = document.createElement("iframe");
    iframe.src = embedUrlFor(platform, url);
    iframe.loading = "lazy";
    iframe.allow = "autoplay; encrypted-media";
    iframe.height = platform === "youtube" ? "180" : "152";
    iframe.title = platform + " embed";
    target.innerHTML = "";
    target.appendChild(iframe);
  }

  /* YouTube channel links (no single video to embed) render as a link-out
     card instead — YouTube blocks embedding channel pages in an iframe. */
  function mountChannelLink(target, url) {
    var dict = (data.i18n || {})[getInitialLang()] || {};
    var a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.className = "music-channel-link";
    a.innerHTML =
      '<img class="music-channel-thumb" src="assets/img/youtube-thumb.jpg" alt="" loading="lazy" decoding="async" width="621" height="900" />' +
      '<span class="music-channel-cta" data-i18n="youtubeChannelCta">' + escHTML(dict.youtubeChannelCta || "View channel") + "</span>";
    target.innerHTML = "";
    target.appendChild(a);
  }

  function mountMusicEmbeds() {
    var links = data.links || {};

    ["spotify", "soundcloud"].forEach(function (platform) {
      var url = links[platform];
      if (!url) return;
      var target = $('[data-embed-target="' + platform + '"]');
      if (!target || target.dataset.mounted) return;
      target.dataset.mounted = "1";
      mountEmbed(target, platform, url);
    });

    var ytTarget = $('[data-embed-target="youtube"]');
    if (ytTarget && !ytTarget.dataset.mounted) {
      if (links.youtube && youtubeVideoId(links.youtube)) {
        ytTarget.dataset.mounted = "1";
        mountEmbed(ytTarget, "youtube", links.youtube);
      } else if (links.youtubeChannel) {
        ytTarget.dataset.mounted = "1";
        mountChannelLink(ytTarget, links.youtubeChannel);
      }
    }
  }

  function mountHeroNewRelease() {
    var btn = $("#heroNewRelease");
    var url = (data.newRelease || {}).url;
    if (!btn || !url) return;
    btn.href = url;
    btn.hidden = false;
  }

  function setFooterYear() {
    var el = $("#footerYear");
    if (el) el.textContent = data.year || new Date().getFullYear();
  }

  function boot() {
    safe(initStaticSplits, "initStaticSplits");
    safe(initLangSwitch, "initLangSwitch");
    safe(initReveals, "initReveals");
    safe(mountMusicEmbeds, "mountMusicEmbeds");
    safe(mountHeroNewRelease, "mountHeroNewRelease");
    safe(setFooterYear, "setFooterYear");
    document.documentElement.classList.add("is-ready");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
