/* lib/manifest.js — brand data, no logic. IIFE, exposes window.__BRAND__ only. */
(function () {
  "use strict";

  window.__BRAND__ = {
    name: "MXLV1N",
    realName: "Pablo Malvin",
    instagram: "https://www.instagram.com/pablomalvin/",
    instagramHandle: "@pablomalvin",
    year: new Date().getFullYear(),

    /* Set these once you have real links — the Música section renders an
       embed automatically when a URL is present, and a "coming soon"
       placeholder card when it's empty. */
    links: {
      spotify: "",
      soundcloud: "",
      youtube: ""
    },

    i18n: {
      es: {
        htmlLang: "es",
        skipLink: "Saltar al contenido",
        navBio: "Bio",
        navMusic: "Música",
        navLangSwitchTo: "EN",
        heroKicker: "Productor · DJ · Techno",
        heroSub: "Ritmo crudo, groove oscuro, sonido de club.",
        heroCta: "Escuchar",
        scrollCue: "Desliza",
        bioNum: "02",
        bioKicker: "Quién es",
        bioTitle: "Sonido que golpea.",
        bioText: "MXLV1N es el alias de Pablo Malvin, productor y DJ enfocado en techno crudo y groove de club. Sus sets combinan percusión hipnótica con texturas industriales, pensados para pistas que no piden permiso.",
        bioTextNote: "(Texto de ejemplo — reemplázalo por tu biografía real.)",
        musicNum: "03",
        musicKicker: "Escucha",
        musicTitle: "Selecciones.",
        musicComingSoon: "Próximamente",
        musicComingSoonSub: "Aún no hay enlace conectado.",
        musicListen: "Escuchar en",
        footerRights: "Todos los derechos reservados.",
        langAnnounce: "Idioma cambiado a Español"
      },
      en: {
        htmlLang: "en",
        skipLink: "Skip to content",
        navBio: "Bio",
        navMusic: "Music",
        navLangSwitchTo: "ES",
        heroKicker: "Producer · DJ · Techno",
        heroSub: "Raw rhythm, dark groove, club sound.",
        heroCta: "Listen",
        scrollCue: "Scroll",
        bioNum: "02",
        bioKicker: "Who is",
        bioTitle: "Sound that hits.",
        bioText: "MXLV1N is the alias of Pablo Malvin, a producer and DJ focused on raw techno and club groove. His sets combine hypnotic percussion with industrial textures, built for floors that don't ask permission.",
        bioTextNote: "(Placeholder copy — replace with your real bio.)",
        musicNum: "03",
        musicKicker: "Listen",
        musicTitle: "Selected tracks.",
        musicComingSoon: "Coming soon",
        musicComingSoonSub: "No link connected yet.",
        musicListen: "Listen on",
        footerRights: "All rights reserved.",
        langAnnounce: "Language switched to English"
      }
    }
  };
})();
