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
       placeholder card when it's empty. `youtube` expects a specific video
       URL (embeddable); `youtubeChannel` is used as a "view channel" link
       when there's no single video to embed yet. */
    links: {
      spotify: "https://open.spotify.com/artist/7jcRDw4YVAX16SQdwYjnbX",
      soundcloud: "https://soundcloud.com/pablo-malvin",
      youtube: "",
      youtubeChannel: "https://youtube.com/@pablomalvin"
    },

    /* Optional "new release" call-to-action in the hero. Leave url empty to
       hide the button entirely. */
    newRelease: {
      url: ""
    },

    i18n: {
      es: {
        htmlLang: "es",
        skipLink: "Saltar al contenido",
        navBio: "Bio",
        navMusic: "Música",
        navLangSwitchTo: "EN",
        heroKicker: "DJ & Productor Musical",
        heroSub: "Sets envolventes entre lo analógico y lo digital.",
        heroCta: "Escuchar",
        heroNewRelease: "Nuevo lanzamiento",
        scrollCue: "Desliza",
        bioNum: "02",
        bioKicker: "Músico & Diseñador Sonoro",
        bioTitle: "Viaje emocional y cinematográfico.",
        bioText: "Pablo Malvin es músico y diseñador sonoro. Debutó como DJ en 2017 en el Club Janis (CDMX) con grooves hipnóticos de techno que atraviesan el rock, el jazz y texturas de ritmos europeos. Su estilo de mezcla es fresco y elegante, melódico y rítmico: sets envolventes que transforman la pista de baile en un viaje emocional y cinematográfico. Con un oído curado y una fuerte sensibilidad estética, crea experiencias sonoras inmersivas jugando con contrastes entre lo analógico y lo digital, lo nostálgico y lo futurista, priorizando siempre la conexión energética con el público. Su trabajo atraviesa programas de TV, fashion films y podcasts.",
        genresLabel: "Géneros",
        baseLabel: "Con base en",
        musicNum: "03",
        musicKicker: "Escucha",
        musicTitle: "Selecciones.",
        musicComingSoon: "Próximamente",
        musicComingSoonSub: "Aún no hay enlace conectado.",
        youtubeChannelCta: "Ver canal en YouTube",
        footerBookingLabel: "Booking",
        footerRights: "Todos los derechos reservados.",
        langAnnounce: "Idioma cambiado a Español"
      },
      en: {
        htmlLang: "en",
        skipLink: "Skip to content",
        navBio: "Bio",
        navMusic: "Music",
        navLangSwitchTo: "ES",
        heroKicker: "DJ & Music Producer",
        heroSub: "Immersive sets between the analog and the digital.",
        heroCta: "Listen",
        heroNewRelease: "New release",
        scrollCue: "Scroll",
        bioNum: "02",
        bioKicker: "Musician & Sound Designer",
        bioTitle: "An emotional, cinematic journey.",
        bioText: "Pablo Malvin is a musician and sound designer. He debuted as a DJ in 2017 at Club Janis (Mexico City) with hypnotic techno grooves running through rock, jazz, and European rhythmic textures. His mixing style is fresh and elegant, melodic and rhythmic — immersive sets that turn the dance floor into an emotional, cinematic journey. With a curated ear and a strong aesthetic sensibility, he crafts immersive sonic experiences that play with contrasts between analog and digital, nostalgic and futuristic, always prioritizing energetic connection with the audience. His work spans TV shows, fashion films, and podcasts.",
        genresLabel: "Genres",
        baseLabel: "Based in",
        musicNum: "03",
        musicKicker: "Listen",
        musicTitle: "Selected tracks.",
        musicComingSoon: "Coming soon",
        musicComingSoonSub: "No link connected yet.",
        youtubeChannelCta: "View channel on YouTube",
        footerBookingLabel: "Booking",
        footerRights: "All rights reserved.",
        langAnnounce: "Language switched to English"
      }
    }
  };
})();
