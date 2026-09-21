export type Lang = "en" | "es";
export type Currency = "usd" | "eur";

export const CHECKOUT_SINGLE = "https://sun.eduzz.com/1W322XED92";

export const PRICE_SINGLE = 9.98;
export const PRICE_BUNDLE = 19.98;
export const PRICE_BUNDLE_FULL = 49.9;

export const content = {
  en: {
    htmlLang: "en",
    meta: {
      title: "Bible Animals Coloring Book | My Little Bible Adventures",
      description:
        "Bible Animals: 5 Bible stories and 22 coloring pages for kids. One booklet for $9.98 — pay in USD or EUR.",
      ogTitle: "Bible Animals | My Little Bible Adventures",
      ogDescription:
        "A joyful way to help little hearts discover God's Word through coloring and story.",
    },
    switch: { label: "Language", en: "English", es: "Español" },
    hero: {
      badge: "A little adventure with a big purpose",
      title: "Help Your Little One",
      titleAccent: "Fall in Love With Bible Stories",
      subtitle:
        "My Little Bible Adventures turns beloved Bible stories into meaningful moments of creativity, curiosity, and faith. The first booklet, Bible Animals, brings 5 stories and 22 pages to color.",
      cta: "Get Bible Animals",
      bannerAlt: "My Little Bible Adventures — Bible Animals book collection",
      startingAt: "Only",
      bannerNote: "One booklet · 5 stories · 22 coloring pages",
    },
    features: [
      ["5 Bible Stories", "One inviting booklet with five stories made for children to color, learn, and explore."],
      ["22 Pages to Color", "Twenty-two illustrations inspired by the stories, drawn for little hands."],
      ["Made for Togetherness", "A simple moment to slow down, connect, and talk about faith as a family."],
    ] as [string, string][],
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
      copy:
        "Bright, friendly illustrations invite children into the world of Bible animals. Each page creates an easy opening for questions, imagination, and conversations about God.",
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
      copy:
        "Finding an activity that holds your child's attention without losing sight of your family's values can be difficult. Bible Animals gives you an easy, meaningful option for quiet moments at home.",
      items: [
        ["A calmer kind of play", "A colorful activity for afternoons, weekends, travel, or moments when you want less screen time."],
        ["Time that brings you closer", "Sit together, color the pages, and let each story open a natural conversation about faith."],
        ["Values you feel good about", "Entertainment inspired by familiar Bible stories and created for growing hearts."],
      ] as [string, string][],
    },
    discover: {
      kicker: "What your child will discover",
      title: "Five little adventures in one joyful booklet.",
      copy:
        "Friendly animals, expressive characters, and simple coloring scenes make each story feel welcoming. Your child explores at their own pace while you connect the pictures to the message behind them.",
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
        "Start with the first booklet, or bring home the whole collection and give every child a story of their own.",
      currencyLabel: "Choose your currency",
      one: {
        kicker: "Option one",
        title: "Bible Animals — One Booklet",
        copy: "The first booklet of the collection: 5 Bible stories and 22 pages to color, learn, and explore.",
        payment: "One-time payment · also",
        bullets: [
          "1 Bible Animals booklet",
          "22 coloring pages inside",
          "Five stories to read together",
          "Instant access after purchase",
        ],
        note: "A simple first step — perfect for one child or one quiet afternoon.",
        cta: "Get the Booklet —",
      },
      two: {
        badge: "Best value",
        kicker: "Option two",
        title: "The Five-Book Collection",
        copy: "Five booklets from the collection — one for each child, one to share, one to keep.",
        save: "5 for the price of 2 · Save",
        bullets: [
          "5 complete booklets, each with many coloring pages",
          "Everything in the single booklet, five times over",
          "Perfect for bigger families and Sunday school",
        ],
        note: "Most chosen by families with more than one child, grandparents, and Sunday school teachers.",
        cta: "Get 5 Booklets —",
      },
      inside: {
        title: "Inside every booklet",
        copy:
          "A Bible story to read together, pages to color, and a question to talk about — enough for weeks of small, faith-filled moments.",
      },
      trust: ["Secure purchase", "Pay in USD & EUR", "Showing"],
    },
    steps: {
      kicker: "Made for real family moments",
      title: "One booklet, many ways to enjoy it together.",
      items: [
        ["01", "Choose an adventure", "Let your child pick the story or animal that catches their attention first."],
        ["02", "Color side by side", "Slow down together and bring each scene to life with their favorite colors."],
        ["03", "Talk about the story", "Ask what they noticed, what they felt, and what the story can teach your family."],
      ] as [string, string, string][],
      cta: "Create Our Faith-Filled Moment",
    },
    faq: {
      kicker: "Questions from parents",
      title: "Everything you may want to know.",
      items: [
        ["Who is Bible Animals for?", "It is made for parents, grandparents, caregivers, and Christian families who want a creative, faith-centered activity to enjoy with a child."],
        ["What does the booklet include?", "Five Bible stories — Noah's Ark, Daniel and the Lions, Jonah and the Big Fish, David and the Sheep, and Jesus and the Little Lamb — with 22 coloring pages in total."],
        ["Does my child need to read independently?", "No. The experience is designed to be shared, so an adult can guide the story while the child enjoys the illustrations and coloring."],
        ["When can we use it?", "Quiet afternoons, family time, Sunday activities, travel, or any moment when you want purposeful entertainment away from a screen."],
        ["Is this a replacement for a children's Bible?", "No. It is a creative companion for family faith time, designed to spark curiosity and conversations about Bible stories."],
        ["Which currencies are accepted?", "You can pay in US dollars or euros at the same simple price."],
      ] as [string, string][],
      closingTitle: "Still deciding? Start with one booklet.",
      closingCopy: "Try it for one quiet afternoon, then bring home the collection when you are ready for a story for every child.",
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
        "Animales de la Biblia: 5 historias bíblicas y 22 dibujos para colorear. Un librito por $9.98 — paga en USD o EUR.",
      ogTitle: "Animales de la Biblia | Mis Pequeñas Aventuras Bíblicas",
      ogDescription:
        "Una forma alegre de ayudar a los pequeños corazones a descubrir la Palabra de Dios coloreando.",
    },
    switch: { label: "Idioma", en: "English", es: "Español" },
    hero: {
      badge: "Una pequeña aventura con un gran propósito",
      title: "Ayuda a tu pequeño a",
      titleAccent: "enamorarse de las historias bíblicas",
      subtitle:
        "Mis Pequeñas Aventuras Bíblicas convierte historias bíblicas queridas en momentos de creatividad, curiosidad y fe. El primer librito, Animales de la Biblia, trae 5 historias y 22 dibujos para colorear.",
      cta: "Quiero Animales de la Biblia",
      bannerAlt: "Mis Pequeñas Aventuras Bíblicas — colección Animales de la Biblia",
      startingAt: "Solo",
      bannerNote: "Un librito · 5 historias · 22 dibujos para colorear",
    },
    features: [
      ["5 historias bíblicas", "Un librito con cinco historias para colorear, aprender y explorar."],
      ["22 dibujos para colorear", "Veintidós ilustraciones inspiradas en las historias, hechas para manos pequeñas."],
      ["Pensado para compartir", "Un momento sencillo para bajar el ritmo, conectar y hablar de la fe en familia."],
    ] as [string, string][],
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
      copy:
        "Ilustraciones alegres invitan a los niños al mundo de los animales de la Biblia. Cada página abre espacio para preguntas, imaginación y conversaciones sobre Dios.",
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
      copy:
        "Encontrar una actividad que mantenga la atención de tu hijo sin perder de vista los valores de tu familia no es fácil. Animales de la Biblia te da una opción sencilla y con sentido para los momentos tranquilos en casa.",
      items: [
        ["Un juego más tranquilo", "Una actividad colorida para tardes, fines de semana, viajes o momentos con menos pantallas."],
        ["Tiempo que los acerca", "Siéntense juntos, coloreen las páginas y dejen que cada historia abra una conversación sobre la fe."],
        ["Valores que te dan paz", "Entretenimiento inspirado en historias bíblicas conocidas y creado para corazones que crecen."],
      ] as [string, string][],
    },
    discover: {
      kicker: "Lo que tu hijo va a descubrir",
      title: "Cinco pequeñas aventuras en un solo librito.",
      copy:
        "Animales amigables, personajes expresivos y escenas sencillas hacen que cada historia se sienta cercana. Tu hijo explora a su ritmo mientras tú conectas los dibujos con el mensaje detrás de ellos.",
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
        "Empieza con el primer librito o lleva la colección completa y dale a cada niño su propia historia.",
      currencyLabel: "Elige tu moneda",
      one: {
        kicker: "Opción uno",
        title: "Animales de la Biblia — Un librito",
        copy: "El primer librito de la colección: 5 historias bíblicas y 22 dibujos para colorear, aprender y explorar.",
        payment: "Pago único · también",
        bullets: [
          "1 librito Animales de la Biblia",
          "22 dibujos para colorear",
          "Cinco historias para leer juntos",
          "Acceso inmediato después de la compra",
        ],
        note: "Un primer paso sencillo — ideal para un niño o una tarde tranquila.",
        cta: "Quiero el librito —",
      },
      two: {
        badge: "Mejor valor",
        kicker: "Opción dos",
        title: "La colección de 5 libritos",
        copy: "Cinco libritos de la colección — uno para cada niño, uno para compartir, uno para guardar.",
        save: "5 por el precio de 2 · Ahorras",
        bullets: [
          "5 libritos completos, cada uno con muchos dibujos",
          "Todo lo del librito individual, cinco veces",
          "Ideal para familias grandes y escuela dominical",
        ],
        note: "El favorito de familias con más de un niño, abuelos y maestros de escuela dominical.",
        cta: "Quiero 5 libritos —",
      },
      inside: {
        title: "Dentro de cada librito",
        copy:
          "Una historia bíblica para leer juntos, páginas para colorear y una pregunta para conversar — suficiente para semanas de pequeños momentos de fe.",
      },
      trust: ["Compra segura", "Paga en USD y EUR", "Mostrando"],
    },
    steps: {
      kicker: "Hecho para momentos reales en familia",
      title: "Un librito, muchas formas de disfrutarlo juntos.",
      items: [
        ["01", "Elijan una aventura", "Deja que tu hijo escoja la historia o el animal que más le llame la atención."],
        ["02", "Coloreen lado a lado", "Bajen el ritmo juntos y den vida a cada escena con sus colores favoritos."],
        ["03", "Conversen sobre la historia", "Pregúntale qué notó, qué sintió y qué puede enseñarle a la familia."],
      ] as [string, string, string][],
      cta: "Crear nuestro momento de fe",
    },
    faq: {
      kicker: "Preguntas de los papás",
      title: "Todo lo que quizás quieras saber.",
      items: [
        ["¿Para quién es Animales de la Biblia?", "Para papás, abuelos, cuidadores y familias cristianas que buscan una actividad creativa y centrada en la fe para disfrutar con un niño."],
        ["¿Qué incluye el librito?", "Cinco historias bíblicas — El Arca de Noé, Daniel y los leones, Jonás y el gran pez, David y las ovejas, y Jesús y la ovejita — con 22 dibujos para colorear en total."],
        ["¿Mi hijo necesita leer solo?", "No. La experiencia está pensada para compartirse: un adulto guía la historia mientras el niño disfruta las ilustraciones y colorea."],
        ["¿Cuándo podemos usarlo?", "Tardes tranquilas, tiempo en familia, actividades del domingo, viajes o cualquier momento en que quieras entretenimiento con propósito y sin pantallas."],
        ["¿Sustituye a una Biblia infantil?", "No. Es un compañero creativo para el tiempo de fe en familia, pensado para despertar curiosidad y conversación."],
        ["¿Qué monedas se aceptan?", "Puedes pagar en dólares o en euros al mismo precio sencillo."],
      ] as [string, string][],
      closingTitle: "¿Todavía lo piensas? Empieza con un librito.",
      closingCopy: "Pruébalo una tarde tranquila y luego lleva la colección cuando quieras una historia para cada niño.",
      closingCta: "Ver las dos opciones",
    },
    footer: {
      title: "Manos pequeñas. Fe grande. Recuerdos hermosos.",
      copy: "Mis Pequeñas Aventuras Bíblicas convierte la hora del cuento en una oportunidad para crear, conectar y explorar la Palabra de Dios juntos.",
    },
  },
} satisfies Record<Lang, unknown>;

export type Content = (typeof content)["en"];
