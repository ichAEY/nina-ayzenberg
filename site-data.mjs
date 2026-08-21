const bookingUrl = "tel:+79857772636";
const service = (name, price, time = "", description = "") => ({ name, price, time, description, url: bookingUrl });

export default {
  template: {
    profileType: "master",
    serviceMode: "simple",
    portfolioPreviewCount: 5,
  },

  brand: {
    name: "NINA",
    subtitle: "Nail studio",
    monogram: "N",
  },

  master: {
    name: "Нина",
    dative: "Нине",
    genitive: "Нины",
    monogram: "N",
    profession: "мастер маникюра и педикюра",
    heroTitle: "Нина — мастер маникюра и педикюра",
    heroCopy: "Маникюр, педикюр, наращивание и дизайн ногтей в уютном кабинете в Хорошёво‑Мнёвниках.",
    experienceYears: "",
    experienceAria: "",
    aboutTitle: "Нина Айзенберг",
    aboutLead: "Частный мастер маникюра и педикюра в Москве.",
    aboutParagraphs: [
      "В работе Нина делает акцент на аккуратной обработке, чистоте и внимании к пожеланиям клиента. В отзывах регулярно отмечают скорость работы, комфортную атмосферу и стойкость покрытия.",
      "В кабинете доступны маникюр и педикюр, наращивание, дизайн, мужские процедуры, а также медицинский маникюр и педикюр. Приём ведётся по предварительной записи.",
    ],
    skills: ["Маникюр и педикюр", "Наращивание и дизайн", "Аккуратная обработка"],
  },

  location: {
    city: "Москва",
    metro: "м. Народное Ополчение",
    cityMetro: "Москва · м. Народное Ополчение",
    address: "Москва, бульвар Генерала Карбышева, 13 к1",
    mapCardAddress: "бульвар Генерала Карбышева, 13 к1",
    schedule: "ежедневно 09:00–21:00",
    scheduleCapitalized: "Ежедневно 09:00–21:00",
    latitude: 55.781277,
    longitude: 37.469620,
  },

  contacts: {
    phoneDisplay: "+7 985 777-26-36",
    phoneHref: "tel:+79857772636",
    personalTelegramUrl: "",
    channelTelegramUrl: "",
  },

  links: {
    bookingUrl,
    bookingWidgetScriptUrl: "/noop.js",
    reviewsUrl: "https://yandex.com/maps/org/master_manikyura_nina_ayzenberg/130913368211/reviews/",
    mapUrl: "https://yandex.com/maps/org/master_manikyura_nina_ayzenberg/130913368211/",
    routeUrl: "https://yandex.ru/maps/?mode=routes&rtext=~55.781277%2C37.469620&rtt=auto",
    mobileMapEmbedUrl: "https://yandex.ru/map-widget/v1/?ll=37.469620%2C55.781277&mode=search&oid=130913368211&ol=biz&z=16",
    desktopMapEmbedUrl: "https://yandex.ru/map-widget/v1/?ll=37.469620%2C55.781277&z=16&l=map&pt=37.469620%2C55.781277%2Cpm2rdm",
    yandexMapHrefMatch: "yandex.com/maps/org/master_manikyura_nina_ayzenberg",
  },

  reputation: {
    rating: "5,0",
    reviewCount: "100",
  },

  images: {
    portrait: "/assets/client/master.png",
    about: "/assets/client/glavnaya.jpg",
    favicon: "/assets/client/master.png",
    beforeAfter: [],
    gallery: [
      { src: "/assets/client/portfolio/1.png", alt: "Работа Нины — маникюр 1" },
      { src: "/assets/client/portfolio/2.png", alt: "Работа Нины — маникюр 2" },
      { src: "/assets/client/portfolio/3.png", alt: "Работа Нины — маникюр 3" },
      { src: "/assets/client/portfolio/4.png", alt: "Работа Нины — маникюр 4" },
      { src: "/assets/client/portfolio/5.png", alt: "Работа Нины — маникюр 5" },
      { src: "/assets/client/portfolio/6.png", alt: "Работа Нины — маникюр 6" },
      { src: "/assets/client/portfolio/7.png", alt: "Работа Нины — маникюр 7" },
      { src: "/assets/client/portfolio/8.png", alt: "Работа Нины — маникюр 8" },
      { src: "/assets/client/portfolio/9.png", alt: "Работа Нины — маникюр 9" },
    ],
  },

  services: {
    manicure: [
      service("Классический маникюр с покрытием", "2 000–2 500 ₽", "", "Диапазон стоимости указан в карточке мастера на Яндекс Картах."),
    ],
    pedicure: [
      service("Педикюр", "Уточнить при записи", "", "Женский и мужской педикюр по предварительной записи."),
      service("Медицинский педикюр", "Уточнить при записи", "", "Услуга указана в карточке мастера на Яндекс Картах."),
    ],
  },

  serviceCategories: [
    { key: "manicure", label: "Маникюр", items: [] },
    { key: "pedicure", label: "Педикюр", items: [] },
    { key: "extensions", label: "Наращивание", items: [] },
  ],

  reviews: [
    { text: "Все очень быстро и качественно, все пожелания учтены.", author: "Яна С." },
    { text: "Чистое, уютное место. Мастер аккуратная и внимательная.", author: "Евгения Мельникова" },
    { text: "Маникюр выглядит безупречно, спасибо мастеру.", author: "Alka" },
    { text: "Покрытие носится идеально.", author: "Наталья Гребенникова" },
  ],

  promotions: [],

  amenities: [
    { title: "По записи", text: "Гибкий график и предварительная запись" },
    { title: "Большая палитра", text: "В отзывах отмечают широкий выбор цветов и гелей" },
    { title: "Мужские услуги", text: "Маникюр и педикюр для мужчин" },
  ],

  seo: {
    title: "Нина Айзенберг — маникюр и педикюр в Москве",
    description: "Маникюр, педикюр, наращивание и дизайн ногтей у Нины Айзенберг. Москва, бульвар Генерала Карбышева, 13 к1.",
    keywords: ["Нина Айзенберг", "маникюр Москва", "педикюр Москва", "Народное Ополчение", "маникюр Карбышева"],
    locale: "ru_RU",
  },

  analytics: {
    yandexMetrikaId: "",
  },
};
