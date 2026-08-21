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
    heroCopy: "Профессиональный маникюр и педикюр с вниманием к форме, покрытию и деталям — в частном кабинете в Хорошёво‑Мнёвниках.",
    experienceYears: "2+",
    experienceAria: "Более двух лет опыта",
    aboutTitle: "Нина Айзенберг",
    aboutLead: "Мастер маникюра и педикюра с опытом более двух лет.",
    aboutParagraphs: [
      "Нина работает с женским и мужским маникюром и педикюром, наращиванием и дизайном ногтей. В карточке мастера также указаны медицинский маникюр и педикюр.",
      "Приём ведётся по предварительной записи. В отзывах чаще всего отмечают аккуратность работы, чистоту кабинета, комфортную атмосферу и внимание к пожеланиям.",
    ],
    skills: ["Маникюр и педикюр", "Наращивание и дизайн", "Женский и мужской сервис"],
  },

  location: {
    city: "Москва",
    metro: "м. Народное Ополчение",
    cityMetro: "Москва · м. Народное Ополчение",
    address: "Москва, бульвар Генерала Карбышева, 13, корп. 1",
    mapCardAddress: "бульвар Генерала Карбышева, 13, корп. 1",
    schedule: "пн–сб 10:00–22:00",
    scheduleCapitalized: "Пн–сб 10:00–22:00",
    latitude: 55.781475,
    longitude: 37.469779,
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
    routeUrl: "https://yandex.ru/maps/?mode=routes&rtext=~55.781475%2C37.469779&rtt=auto",
    mobileMapEmbedUrl: "https://yandex.ru/map-widget/v1/?ll=37.469779%2C55.781475&mode=search&oid=130913368211&ol=biz&z=16",
    desktopMapEmbedUrl: "https://yandex.ru/map-widget/v1/?ll=37.469779%2C55.781475&z=16&l=map&pt=37.469779%2C55.781475%2Cpm2rdm",
    yandexMapHrefMatch: "yandex.com/maps/org/master_manikyura_nina_ayzenberg",
  },

  reputation: {
    rating: "5,0",
    reviewCount: "101",
  },

  images: {
    portrait: "/assets/client/glavnaya.jpg",
    about: "/assets/client/master.png",
    favicon: "/favicon.svg",
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

  // Exact public Yandex price list, checked against the full "Стоимость услуг" dataset.
  services: {
    manicure: [
      service("Маникюр женский аппаратный", "1800 ₽"),
      service("Маникюр женский комбинированный", "1800 ₽"),
      service("Маникюр покрытие лак", "2300 ₽"),
      service("Маникюр с покрытием гель лак", "2800 ₽"),
      service("Снятие", "700 ₽"),
      service("Мужской маникюр", "1800 ₽"),
      service("Французский маникюр", "3500 ₽"),
    ],
    pedicure: [
      service("Женский гигиенический педикюр", "2800 ₽"),
      service("Женский педикюр комплекс", "3800 ₽"),
      service("Мужской педикюр комплекс", "3500 ₽"),
    ],
  },

  serviceCategories: [
    { key: "manicure", label: "Маникюр", items: [] },
    { key: "pedicure", label: "Педикюр", items: [] },
  ],

  reviews: [
    { text: "Работа четкая, качественная, с учетом пожеланий.", author: "Ivan K." },
    { text: "Профессионализм и внимание к деталям впечатляют.", author: "Анастасия Д." },
    { text: "Маникюр Нина делает аккуратно и профессионально.", author: "Оксана И." },
  ],

  promotions: [],

  amenities: [
    { title: "По записи", text: "Приём по предварительной записи" },
    { title: "Наращивание и дизайн", text: "Наращивание ногтей и арт‑дизайн" },
    { title: "Мужские услуги", text: "Маникюр и педикюр для мужчин" },
  ],

  seo: {
    title: "Нина Айзенберг — маникюр и педикюр в Москве",
    description: "Маникюр, педикюр и дизайн ногтей у Нины Айзенберг. Москва, бульвар Генерала Карбышева, 13, корп. 1.",
    keywords: ["Нина Айзенберг", "маникюр Москва", "педикюр Москва", "Народное Ополчение", "маникюр Карбышева"],
    locale: "ru_RU",
  },

  analytics: {
    yandexMetrikaId: "",
  },
};
