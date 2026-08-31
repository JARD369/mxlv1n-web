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
        navGallery: "Galería",
        navLangSwitchTo: "EN",
        heroKicker: "DJ & Productor Musical",
        heroSub: "Sets envolventes entre lo analógico y lo digital.",
        heroPhotoAlt: "Pablo Malvin (MXLV1N) con audífonos",
        heroCta: "Escuchar",
        heroNewRelease: "Nuevo lanzamiento",
        scrollCue: "Desliza",
        bioKicker: "Músico & Diseñador Sonoro",
        bioTitle: "Viaje emocional y cinematográfico.",
        bioText1: "Pablo Malvin es músico, DJ y diseñador sonoro. Desde su debut como DJ en clubes de Ciudad de México, ha desarrollado un lenguaje propio donde el techno se cruza con el rock, el jazz y la electrónica contemporánea.",
        bioText2: "Sus sets combinan precisión rítmica, sensibilidad melódica y una selección elegante para transformar la pista de baile en una experiencia inmersiva. Entre lo analógico y lo digital, la nostalgia y el futuro, construye narrativas sonoras que buscan una conexión genuina con el público.",
        bioText3: "Como diseñador sonoro, crea identidades musicales en sus canciones de autor, jingles para programas de televisión y fashion films, siempre con una mirada estética, contemporánea y cinematográfica.",
        bioPhotoAlt: "Retrato de Pablo Malvin (MXLV1N)",
        genresLabel: "Géneros",
        baseLabel: "Con base en",
        musicKicker: "Escucha",
        musicTitle: "Selecciones.",
        musicComingSoon: "Próximamente",
        musicComingSoonSub: "Aún no hay enlace conectado.",
        youtubeChannelCta: "Ver canal en YouTube",
        galleryKicker: "Fotos",
        galleryTitle: "En vivo y en estudio.",
        galleryAlt1: "Pablo Malvin de pie, tocando la guitarra",
        galleryAlt2: "Pablo Malvin tocando la guitarra de perfil",
        galleryAlt3: "Pablo Malvin agachado, tocando la guitarra con intensidad",
        galleryAlt4: "Retrato de Pablo Malvin tocando la guitarra, luz dramática",
        galleryAlt5: "Retrato de Pablo Malvin en blanco y negro, de perfil",
        galleryAlt6: "Pablo Malvin sentado con la guitarra",
        footerBookingLabel: "Booking",
        footerRights: "Todos los derechos reservados.",
        langAnnounce: "Idioma cambiado a Español"
      },
      en: {
        htmlLang: "en",
        skipLink: "Skip to content",
        navBio: "Bio",
        navMusic: "Music",
        navGallery: "Gallery",
        navLangSwitchTo: "ES",
        heroKicker: "DJ & Music Producer",
        heroSub: "Immersive sets between the analog and the digital.",
        heroPhotoAlt: "Pablo Malvin (MXLV1N) wearing headphones",
        heroCta: "Listen",
        heroNewRelease: "New release",
        scrollCue: "Scroll",
        bioKicker: "Musician & Sound Designer",
        bioTitle: "An emotional, cinematic journey.",
        bioText1: "Pablo Malvin is a musician, DJ, and sound designer. Since his debut as a DJ in Mexico City clubs, he has developed a language of his own where techno meets rock, jazz, and contemporary electronic music.",
        bioText2: "His sets combine rhythmic precision, melodic sensibility, and an elegant track selection that turns the dance floor into an immersive experience. Between the analog and the digital, nostalgia and the future, he builds sonic narratives that seek a genuine connection with the audience.",
        bioText3: "As a sound designer, he creates musical identities for his own original songs, jingles for TV shows, and fashion films — always with an aesthetic, contemporary, and cinematic eye.",
        bioPhotoAlt: "Portrait of Pablo Malvin (MXLV1N)",
        genresLabel: "Genres",
        baseLabel: "Based in",
        musicKicker: "Listen",
        musicTitle: "Selected tracks.",
        musicComingSoon: "Coming soon",
        musicComingSoonSub: "No link connected yet.",
        youtubeChannelCta: "View channel on YouTube",
        galleryKicker: "Photos",
        galleryTitle: "Live and in the studio.",
        galleryAlt1: "Pablo Malvin standing, playing guitar",
        galleryAlt2: "Pablo Malvin playing guitar in profile",
        galleryAlt3: "Pablo Malvin crouching, playing guitar intensely",
        galleryAlt4: "Portrait of Pablo Malvin playing guitar, dramatic light",
        galleryAlt5: "Black and white portrait of Pablo Malvin in profile",
        galleryAlt6: "Pablo Malvin seated with the guitar",
        footerBookingLabel: "Booking",
        footerRights: "All rights reserved.",
        langAnnounce: "Language switched to English"
      }
    }
  };
})();
