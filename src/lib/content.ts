export type Lang = "en" | "es";
export type Currency = "usd" | "eur";

export const CHECKOUT_SINGLE = "https://sun.eduzz.com/1W322XED92";
export const CHECKOUT_BUNDLE = "https://sun.eduzz.com/7WXGGV2O0A";

export const GUARANTEE_DAYS = 7; // ⚠️ deixe igual ao prazo de garantia configurado na Eduzz

export const PRICE_SINGLE = 9.98;
export const PRICE_BUNDLE = 17.32;
export const FULL_PRICE_SINGLE = 24.95;
export const FULL_PRICE_BUNDLE = 43.3;

export const content = {
  en: {
    htmlLang: "en",
    meta: {
      title: "Bible Animals Coloring Book | My Little Bible Adventures",
      description:
        "Bible Animals: 5 Bible stories and 22 coloring pages for kids. A digital PDF booklet to print at home, $9.98 — pay in USD or EUR.",
      ogTitle: "Bible Animals | My Little Bible Adventures",
      ogDescription:
        "A joyful way to help little hearts discover God's Word through coloring and story.",
    },
    switch: { label: "Language", en: "English", es: "Español" },
    promo: { label: "Launch price · 60% OFF", locale: "en-US" },
    hero: {
      badge: "A little adventure with a big purpose",
      title: "Help Your Little One",
      titleAccent: "Fall in Love With Bible Stories",
      subtitle:
        "My Little Bible Adventures turns beloved Bible stories into meaningful moments of creativity, curiosity, and faith. The first booklet, Bible Animals, brings 5 stories and 22 pages to color.",
      cta: "Get Bible Animals",
      bannerAlt: "My Little Bible Adventures — Bible Animals book collection",
      startingAt: "Only",
      bannerNote: "Digital PDF · 5 stories · 22 pages",
    },
    format: {
      kicker: "What is Bible Animals?",
      title: "A digital coloring booklet you can print at home.",
      intro:
        "Bible Animals is a digital PDF booklet, not a physical book, so nothing is shipped. As soon as your payment is confirmed you get instant access. Save the file on your phone, tablet or computer and print the pages on regular paper whenever you like.",
      items: [
        [
          "Digital PDF file",
          "One file with everything inside. Instant access after payment, with no waiting for delivery.",
        ],
        [
          "Print at home",
          "Print on regular paper as many times as you want: one child today, a sibling or a friend next week.",
        ],
        [
          "5 Bible stories",
          "Noah's Ark, Daniel and the Lions, Jonah and the Big Fish, David and the Sheep, and Jesus and the Little Lamb.",
        ],
        ["22 coloring pages", "Friendly illustrations to color with crayons, pencils or markers."],
      ] as [string, string][],
      stepsTitle: "How it works",
      steps: [
        "Choose your option and pay securely.",
        "Get instant access to your PDF.",
        "Download, print and color together.",
      ],
    },
    features: [
      [
        "5 Bible Stories",
        "One inviting booklet with five stories made for children to color, learn, and explore.",
      ],
      [
        "22 Pages to Color",
        "Twenty-two illustrations inspired by the stories, drawn for little hands.",
      ],
      [
        "Made for Togetherness",
        "A simple moment to slow down, connect, and talk about faith as a family.",
      ],
    ] as [string, string][],
    gallery: {
      kicker: "A Peek Inside",
      title: "Illustrations your child will love to color",
    },
    stories: {
      kicker: "Inside Bible Animals",
      title: "Five stories your child will love.",
      intro:
        "Each story comes to life through friendly illustrations, with 22 coloring pages in total across the booklet.",
      list: [
        "Noah's Ark",
        "Daniel and the Lions",
        "Jonah and the Big Fish",
        "David and the Sheep",
        "Jesus and the Little Lamb",
      ],
    },
    product: {
      kicker: "Color. Learn. Explore.",
      title: "A screen-free activity with a story that matters.",
      copy: "Bright, friendly illustrations invite children into the world of Bible animals. Each page creates an easy opening for questions, imagination, and conversations about God.",
      bullets: [
        "Five Bible stories in one booklet",
        "22 child-friendly coloring illustrations",
        "A thoughtful gift for a little believer",
      ],
      imageAlt: "Bible Animals booklet with colorful Bible story books and pencils",
    },
    parents: {
      kicker: "For parents who want something better",
      title: "Entertainment can be fun, creative, and rooted in faith.",
      copy: "Finding an activity that holds your child's attention without losing sight of your family's values can be difficult. Bible Animals gives you an easy, meaningful option for quiet moments at home.",
      items: [
        [
          "A calmer kind of play",
          "A colorful activity for afternoons, weekends, travel, or moments when you want less screen time.",
        ],
        [
          "Time that brings you closer",
          "Sit together, color the pages, and let each story open a natural conversation about faith.",
        ],
        [
          "Values you feel good about",
          "Entertainment inspired by familiar Bible stories and created for growing hearts.",
        ],
      ] as [string, string][],
    },
    discover: {
      kicker: "What your child will discover",
      title: "Five little adventures in one joyful booklet.",
      copy: "Friendly animals, expressive characters, and simple coloring scenes make each story feel welcoming. Your child explores at their own pace while you connect the pictures to the message behind them.",
      items: [
        ["Story-led pages", "Pictures inspired by beloved moments from the Bible."],
        ["22 coloring pages", "Bold, inviting scenes made to spark imagination."],
        ["Faith conversations", "A gentle starting point for talking about God together."],
        ["Easy to share", "A thoughtful choice for your own child or a Christian family."],
      ] as [string, string][],
      imageAlt: "Colorful My Little Bible Adventures collection for Christian family time",
    },
    offer: {
      brand: "My Little Bible Adventures",
      title: "Bring Bible Animals home today.",
      subtitle:
        "Start with Bible Animals, or choose two faith-filled adventures with the complete two-book collection.",
      discount: "60% OFF · LAUNCH PRICE",
      was: "Was",
      now: "Now",
      currencyLabel: "Choose your currency",
      one: {
        kicker: "Option one",
        title: "Bible Animals — Digital Booklet (PDF)",
        copy: "The first booklet of the collection: 5 Bible stories and 22 pages to color, learn, and explore.",
        payment: "One-time payment · also",
        bullets: [
          "1 digital booklet (PDF file)",
          "22 coloring pages inside",
          "Five stories to read together",
          "Instant access — print at home as often as you like",
        ],
        note: "A simple first step — perfect for one child or one quiet afternoon.",
        cta: "Get the Booklet —",
      },
      two: {
        badge: "Best value",
        kicker: "Option two",
        title: "The Two-Book Collection",
        copy: "Two different coloring books that bring beloved Bible stories to life through creativity and faith. Both are digital PDFs with instant access.",
        bullets: [
          "Bible Animals coloring book (PDF)",
          "Bible Heroes coloring book (PDF)",
          "Two faith-centered adventures to enjoy together",
          "Instant access — print at home as often as you like",
        ],
        note: "More stories and more meaningful screen-free moments in one collection.",
        cta: "Get the 2-Book Collection —",
      },
      inside: {
        title: "Inside every booklet",
        copy: "A Bible story to read together, pages to color, and a question to talk about — enough for weeks of small, faith-filled moments.",
      },
      guarantee: {
        title: `${GUARANTEE_DAYS}-day guarantee`,
        copy: `Try it with your family. If Bible Animals is not what you expected, ask for a refund within ${GUARANTEE_DAYS} days of your purchase.`,
      },
      trust: ["Secure purchase", "Pay in USD & EUR", "Showing"],
    },
    steps: {
      kicker: "Made for real family moments",
      title: "One booklet, many ways to enjoy it together.",
      items: [
        [
          "01",
          "Choose an adventure",
          "Let your child pick the story or animal that catches their attention first.",
        ],
        [
          "02",
          "Color side by side",
          "Slow down together and bring each scene to life with their favorite colors.",
        ],
        [
          "03",
          "Talk about the story",
          "Ask what they noticed, what they felt, and what the story can teach your family.",
        ],
      ] as [string, string, string][],
      cta: "Create Our Faith-Filled Moment",
    },
    faq: {
      kicker: "Questions from parents",
      title: "Everything you may want to know.",
      items: [
        [
          "Is it a physical book or a digital file?",
          "It is a digital PDF booklet. Nothing is shipped: you get instant access after payment and print the pages at home.",
        ],
        [
          "How do I receive it?",
          "As soon as your payment is confirmed you get access to download the PDF. You can keep it on your phone, tablet or computer.",
        ],
        [
          "Can I print it more than once?",
          "Yes. Print the pages on regular paper as many times as your family needs.",
        ],
        [
          "What if we do not like it?",
          `You are covered by a ${GUARANTEE_DAYS}-day guarantee. Ask for a refund within ${GUARANTEE_DAYS} days of your purchase.`,
        ],
        [
          "Is it safe to pay?",
          "Yes. Payment is processed through a secure checkout, in US dollars or euros.",
        ],
        [
          "Who is Bible Animals for?",
          "It is made for parents, grandparents, caregivers, and Christian families who want a creative, faith-centered activity to enjoy with a child.",
        ],
        [
          "What does the booklet include?",
          "Five Bible stories — Noah's Ark, Daniel and the Lions, Jonah and the Big Fish, David and the Sheep, and Jesus and the Little Lamb — with 22 coloring pages in total.",
        ],
        [
          "Does my child need to read independently?",
          "No. The experience is designed to be shared, so an adult can guide the story while the child enjoys the illustrations and coloring.",
        ],
        [
          "When can we use it?",
          "Quiet afternoons, family time, Sunday activities, travel, or any moment when you want purposeful entertainment away from a screen.",
        ],
        [
          "Is this a replacement for a children's Bible?",
          "No. It is a creative companion for family faith time, designed to spark curiosity and conversations about Bible stories.",
        ],
        [
          "Which currencies are accepted?",
          "You can pay in US dollars or euros at the same simple price.",
        ],
      ] as [string, string][],
      closingTitle: "Still deciding? Start with one booklet.",
      closingCopy:
        "Choose Bible Animals on its own, or get both Bible Animals and Bible Heroes for even more faith-filled moments.",
      closingCta: "See the Two Options",
    },
    footer: {
      title: "Small hands. Big faith. Beautiful memories.",
      copy: "My Little Bible Adventures makes story time a chance to create, connect, and explore God's Word together.",
    },
  },
  es: {
    htmlLang: "es",
    meta: {
      title: "Animales de la Biblia para Colorear | Mis Pequeñas Aventuras Bíblicas",
      description:
        "Animales de la Biblia: 5 historias bíblicas y 22 dibujos para colorear. Librito digital en PDF para imprimir en casa, $9.98 — paga en USD o EUR.",
      ogTitle: "Animales de la Biblia | Mis Pequeñas Aventuras Bíblicas",
      ogDescription:
        "Una forma alegre de ayudar a los pequeños corazones a descubrir la Palabra de Dios coloreando.",
    },
    switch: { label: "Idioma", en: "English", es: "Español" },
    promo: { label: "Precio de lanzamiento · 60% DE DESCUENTO", locale: "es-ES" },
    hero: {
      badge: "Una pequeña aventura con un gran propósito",
      title: "Ayuda a tu pequeño a",
      titleAccent: "enamorarse de las historias bíblicas",
      subtitle:
        "Mis Pequeñas Aventuras Bíblicas convierte historias bíblicas queridas en momentos de creatividad, curiosidad y fe. El primer librito, Animales de la Biblia, trae 5 historias y 22 dibujos para colorear.",
      cta: "Quiero Animales de la Biblia",
      bannerAlt: "Mis Pequeñas Aventuras Bíblicas — colección Animales de la Biblia",
      startingAt: "Solo",
      bannerNote: "PDF digital · 5 historias · 22 dibujos",
    },
    format: {
      kicker: "¿Qué es Animales de la Biblia?",
      title: "Un librito digital para colorear que imprimes en casa.",
      intro:
        "Animales de la Biblia es un librito digital en PDF, no un libro físico, así que no se envía nada. En cuanto se confirma tu pago recibes acceso inmediato. Guarda el archivo en tu celular, tableta o computadora e imprime las páginas en papel normal cuando quieras.",
      items: [
        [
          "Archivo PDF digital",
          "Un solo archivo con todo dentro. Acceso inmediato tras el pago, sin esperar envíos.",
        ],
        [
          "Imprime en casa",
          "Imprime en papel normal cuantas veces quieras: para un niño hoy, un hermano o un amigo la próxima semana.",
        ],
        [
          "5 historias bíblicas",
          "El Arca de Noé, Daniel y los leones, Jonás y el gran pez, David y las ovejas, y Jesús y el corderito.",
        ],
        [
          "22 dibujos para colorear",
          "Ilustraciones amigables para colorear con crayones, lápices o marcadores.",
        ],
      ] as [string, string][],
      stepsTitle: "Cómo funciona",
      steps: [
        "Elige tu opción y paga de forma segura.",
        "Recibe acceso inmediato a tu PDF.",
        "Descarga, imprime y coloreen juntos.",
      ],
    },
    features: [
      [
        "5 historias bíblicas",
        "Un librito con cinco historias para colorear, aprender y explorar.",
      ],
      [
        "22 dibujos para colorear",
        "Veintidós ilustraciones inspiradas en las historias, hechas para manos pequeñas.",
      ],
      [
        "Pensado para compartir",
        "Un momento sencillo para bajar el ritmo, conectar y hablar de la fe en familia.",
      ],
    ] as [string, string][],
    gallery: {
      kicker: "Un Vistazo Por Dentro",
      title: "Ilustraciones que tu pequeño va a amar colorear",
    },
    stories: {
      kicker: "Dentro de Animales de la Biblia",
      title: "Cinco historias que tu pequeño va a amar.",
      intro:
        "Cada historia cobra vida con ilustraciones amigables, con 22 dibujos para colorear en total dentro del librito.",
      list: [
        "El Arca de Noé",
        "Daniel y los leones",
        "Jonás y el gran pez",
        "David y las ovejas",
        "Jesús y la ovejita",
      ],
    },
    product: {
      kicker: "Colorear. Aprender. Explorar.",
      title: "Una actividad sin pantallas con una historia que importa.",
      copy: "Ilustraciones alegres invitan a los niños al mundo de los animales de la Biblia. Cada página abre espacio para preguntas, imaginación y conversaciones sobre Dios.",
      bullets: [
        "Cinco historias bíblicas en un librito",
        "22 ilustraciones para colorear pensadas para niños",
        "Un regalo lleno de cariño para un pequeño creyente",
      ],
      imageAlt: "Librito Animales de la Biblia con libros coloridos y lápices",
    },
    parents: {
      kicker: "Para papás que quieren algo mejor",
      title: "El entretenimiento puede ser divertido, creativo y lleno de fe.",
      copy: "Encontrar una actividad que mantenga la atención de tu hijo sin perder de vista los valores de tu familia no es fácil. Animales de la Biblia te da una opción sencilla y con sentido para los momentos tranquilos en casa.",
      items: [
        [
          "Un juego más tranquilo",
          "Una actividad colorida para tardes, fines de semana, viajes o momentos con menos pantallas.",
        ],
        [
          "Tiempo que los acerca",
          "Siéntense juntos, coloreen las páginas y dejen que cada historia abra una conversación sobre la fe.",
        ],
        [
          "Valores que te dan paz",
          "Entretenimiento inspirado en historias bíblicas conocidas y creado para corazones que crecen.",
        ],
      ] as [string, string][],
    },
    discover: {
      kicker: "Lo que tu hijo va a descubrir",
      title: "Cinco pequeñas aventuras en un solo librito.",
      copy: "Animales amigables, personajes expresivos y escenas sencillas hacen que cada historia se sienta cercana. Tu hijo explora a su ritmo mientras tú conectas los dibujos con el mensaje detrás de ellos.",
      items: [
        ["Páginas con historia", "Dibujos inspirados en momentos queridos de la Biblia."],
        ["22 dibujos para colorear", "Escenas amplias y claras para despertar la imaginación."],
        ["Conversaciones de fe", "Un punto de partida suave para hablar de Dios juntos."],
        ["Fácil de regalar", "Una linda elección para tu hijo o para una familia cristiana."],
      ] as [string, string][],
      imageAlt: "Colección colorida Mis Pequeñas Aventuras Bíblicas para tiempo en familia",
    },
    offer: {
      brand: "Mis Pequeñas Aventuras Bíblicas",
      title: "Lleva Animales de la Biblia a tu casa hoy.",
      subtitle:
        "Empieza con Animales de la Biblia o elige dos aventuras llenas de fe con la colección de dos libros.",
      discount: "60% DE DESCUENTO · PRECIO DE LANZAMIENTO",
      was: "Antes",
      now: "Ahora",
      currencyLabel: "Elige tu moneda",
      one: {
        kicker: "Opción uno",
        title: "Animales de la Biblia — Librito digital (PDF)",
        copy: "El primer librito de la colección: 5 historias bíblicas y 22 dibujos para colorear, aprender y explorar.",
        payment: "Pago único · también",
        bullets: [
          "1 librito digital (archivo PDF)",
          "22 dibujos para colorear",
          "Cinco historias para leer juntos",
          "Acceso inmediato — imprime en casa cuantas veces quieras",
        ],
        note: "Un primer paso sencillo — ideal para un niño o una tarde tranquila.",
        cta: "Quiero el librito —",
      },
      two: {
        badge: "Mejor valor",
        kicker: "Opción dos",
        title: "Colección de 2 libros",
        copy: "Dos libros diferentes para colorear que dan vida a historias bíblicas a través de la creatividad y la fe. Ambos son PDF digitales con acceso inmediato.",
        bullets: [
          "Animales de la Biblia (PDF)",
          "Héroes de la Biblia (PDF)",
          "Dos aventuras cristianas para disfrutar juntos",
          "Acceso inmediato — imprime en casa cuantas veces quieras",
        ],
        note: "Más historias y más momentos con propósito lejos de las pantallas en una sola colección.",
        cta: "Quiero la colección de 2 libros —",
      },
      inside: {
        title: "Dentro de cada librito",
        copy: "Una historia bíblica para leer juntos, páginas para colorear y una pregunta para conversar — suficiente para semanas de pequeños momentos de fe.",
      },
      guarantee: {
        title: `Garantía de ${GUARANTEE_DAYS} días`,
        copy: `Pruébalo con tu familia. Si Animales de la Biblia no es lo que esperabas, pide el reembolso dentro de ${GUARANTEE_DAYS} días desde tu compra.`,
      },
      trust: ["Compra segura", "Paga en USD y EUR", "Mostrando"],
    },
    steps: {
      kicker: "Hecho para momentos reales en familia",
      title: "Un librito, muchas formas de disfrutarlo juntos.",
      items: [
        [
          "01",
          "Elijan una aventura",
          "Deja que tu hijo escoja la historia o el animal que más le llame la atención.",
        ],
        [
          "02",
          "Coloreen lado a lado",
          "Bajen el ritmo juntos y den vida a cada escena con sus colores favoritos.",
        ],
        [
          "03",
          "Conversen sobre la historia",
          "Pregúntale qué notó, qué sintió y qué puede enseñarle a la familia.",
        ],
      ] as [string, string, string][],
      cta: "Crear nuestro momento de fe",
    },
    faq: {
      kicker: "Preguntas de los papás",
      title: "Todo lo que quizás quieras saber.",
      items: [
        [
          "¿Es un libro físico o un archivo digital?",
          "Es un librito digital en PDF. No se envía nada: recibes acceso inmediato tras el pago e imprimes las páginas en casa.",
        ],
        [
          "¿Cómo lo recibo?",
          "En cuanto se confirma tu pago recibes acceso para descargar el PDF. Puedes guardarlo en tu celular, tableta o computadora.",
        ],
        [
          "¿Puedo imprimirlo más de una vez?",
          "Sí. Imprime las páginas en papel normal tantas veces como tu familia lo necesite.",
        ],
        [
          "¿Y si no nos gusta?",
          `Tienes una garantía de ${GUARANTEE_DAYS} días. Pide el reembolso dentro de ${GUARANTEE_DAYS} días desde tu compra.`,
        ],
        ["¿Es seguro pagar?", "Sí. El pago se procesa en un checkout seguro, en dólares o euros."],
        [
          "¿Para quién es Animales de la Biblia?",
          "Para papás, abuelos, cuidadores y familias cristianas que buscan una actividad creativa y centrada en la fe para disfrutar con un niño.",
        ],
        [
          "¿Qué incluye el librito?",
          "Cinco historias bíblicas — El Arca de Noé, Daniel y los leones, Jonás y el gran pez, David y las ovejas, y Jesús y la ovejita — con 22 dibujos para colorear en total.",
        ],
        [
          "¿Mi hijo necesita leer solo?",
          "No. La experiencia está pensada para compartirse: un adulto guía la historia mientras el niño disfruta las ilustraciones y colorea.",
        ],
        [
          "¿Cuándo podemos usarlo?",
          "Tardes tranquilas, tiempo en familia, actividades del domingo, viajes o cualquier momento en que quieras entretenimiento con propósito y sin pantallas.",
        ],
        [
          "¿Sustituye a una Biblia infantil?",
          "No. Es un compañero creativo para el tiempo de fe en familia, pensado para despertar curiosidad y conversación.",
        ],
        [
          "¿Qué monedas se aceptan?",
          "Puedes pagar en dólares o en euros al mismo precio sencillo.",
        ],
      ] as [string, string][],
      closingTitle: "¿Todavía lo piensas? Empieza con un librito.",
      closingCopy:
        "Elige Animales de la Biblia o lleva también Héroes de la Biblia para disfrutar aún más momentos llenos de fe.",
      closingCta: "Ver las dos opciones",
    },
    footer: {
      title: "Manos pequeñas. Fe grande. Recuerdos hermosos.",
      copy: "Mis Pequeñas Aventuras Bíblicas convierte la hora del cuento en una oportunidad para crear, conectar y explorar la Palabra de Dios juntos.",
    },
  },
} satisfies Record<Lang, unknown>;

export type Content = (typeof content)["en"];
