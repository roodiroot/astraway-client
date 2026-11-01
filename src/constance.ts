export type MenuListType = {
  name: string;
  id: string;
};
export const menu_list: MenuListType[] = [
  { name: "Главная", id: "start" },
  { name: "Для кого", id: "for" },
  { name: "Преиму́ществa", id: "advantages" },
  { name: "Ассортимент", id: "products" },
];

export type ADVType = {
  title: string;
  description: string;
  text: string;
  icon: "adv1" | "adv2" | "adv3" | "adv4";
  img: string;
};

export const list_products: ADVType[] = [
  {
    title: "Средство для пола «Лимон»",
    description:
      "Универсальное средство для повседневного мытья пола с ароматом лимона. Объём — 5 л.",
    text: "",
    icon: "adv1",
    img: require("./assets/image/products/v4/image_27.jpg"),
  },
  {
    title: "Мыло для рук «Черника»",
    description:
      "Жидкое мыло с ароматом черники для ежедневного мытья рук. Канистра 5 л и флакон с дозатором 1 л.",
    text: "",
    icon: "adv2",
    img: require("./assets/image/products/v4/image_26.jpg"),
  },
  {
    title: "Крем-мыло для рук «Кокос»",
    description:
      "Крем-мыло с ароматом кокоса для ежедневного ухода за руками. Канистра 5 л и флакон с дозатором 1 л.",
    text: "",
    icon: "adv2",
    img: require("./assets/image/products/v4/image_34.jpg"),
  },
  {
    title: "Гель для стирки «Морская свежесть», 2 л",
    description:
      "Гель для стирки белья с ароматом морской свежести. Флакон с ручкой и мерным колпачком, объём — 2 л.",
    text: "",
    icon: "adv3",
    img: require("./assets/image/products/v4/image_31.jpg"),
  },
  {
    title: "Гель для стирки «Морская свежесть», 5 л",
    description:
      "Гель для стирки белья с ароматом морской свежести в большой канистре. Объём — 5 л.",
    text: "",
    icon: "adv3",
    img: require("./assets/image/products/v4/image_33.jpg"),
  },
  {
    title: "Гель для стирки «Розовая свежесть», 2 л",
    description:
      "Гель для стирки белья с ароматом розовой свежести. Флакон с ручкой и мерным колпачком, объём — 2 л.",
    text: "",
    icon: "adv3",
    img: require("./assets/image/products/v4/image_32.jpg"),
  },
  {
    title: "Гель для стирки «Розовая свежесть», 5 л",
    description:
      "Гель для стирки белья с ароматом розовой свежести в большой канистре. Объём — 5 л.",
    text: "",
    icon: "adv3",
    img: require("./assets/image/products/v4/image_25.jpg"),
  },
  {
    title: "Гель для посуды «Лимон»",
    description:
      "Гель для ежедневного мытья посуды с ароматом лимона. Канистра 5 л и флакон с дозатором 1 л.",
    text: "",
    icon: "adv3",
    img: require("./assets/image/products/v4/image_29.jpg"),
  },
  {
    title: "Гель для посуды «Алоэ»",
    description:
      "Гель для ежедневного мытья посуды с ароматом алоэ. Канистра 5 л и флакон с дозатором 1 л.",
    text: "",
    icon: "adv3",
    img: require("./assets/image/products/v4/image_30.jpg"),
  },
  {
    title: "Кондиционер для белья «Цветочное поле»",
    description:
      "Кондиционер-ополаскиватель для ухода за бельём после стирки с цветочным ароматом. Объём — 5 л.",
    text: "",
    icon: "adv3",
    img: require("./assets/image/products/v4/image_28.jpg"),
  },
  {
    title: "Кондиционер для белья «Лаванда»",
    description:
      "Кондиционер-ополаскиватель для ухода за бельём после стирки с ароматом лаванды. Объём — 5 л.",
    text: "",
    icon: "adv3",
    img: require("./assets/image/products/v4/image_35.jpg"),
  },
  {
    title: "Автошампунь для бесконтактной мойки",
    description:
      "Средство для бесконтактной мойки автомобиля и удаления дорожных загрязнений. Объём — 20 л.",
    text: "",
    icon: "adv4",
    img: require("./assets/image/products/v4/astraway-car-shampoo-white-v2 4.jpg"),
  },
  {
    title: "Автошампунь «Премиум»",
    description:
      "Профессиональный автошампунь с усиленной формулой для мойки автомобиля. Объём — 20 л.",
    text: "",
    icon: "adv4",
    img: require("./assets/image/products/v4/astraway-car-shampoo-premium-white 4.jpg"),
  },
  {
    title: "Автошампунь «Актив»",
    description:
      "Автошампунь для бережной мойки автомобиля и удаления дорожных загрязнений. Объём — 20 л.",
    text: "",
    icon: "adv4",
    img: require("./assets/image/products/v4/astraway-car-shampoo-active-white 4.jpg"),
  },
];
export const adv_list: ADVType[] = [
  {
    title: "Эффективность",
    description:
      "Гели были разработаны с использованием передовых технологий, чтобы обеспечить максимально чистое и безупречное белье.",
    text: "",
    icon: "adv1",
    img: require("./assets/image/3.png"),
  },
  {
    title: "Деликатный уход",
    description:
      "Наши средства разработаны так, чтобы он и бережно ухаживали за тканями, предотвращая износ и сохраняя яркость цветов на Ваших вещах.",
    text: "",
    icon: "adv2",
    img: require("./assets/image/4.png"),
  },
  {
    title: "Сияющая чистота",
    description:
      "С нашим гелем ваша посуда будет сиять от чистоты. Он удаляет даже самые стойкие пятна и остатки, оставляя поверхность мерцающей и блестящей.",
    text: "",
    icon: "adv3",
    img: require("./assets/image/2.png"),
  },
  {
    title: "Безопасность",
    description:
      "Гель для мытья посуды создан с использованием безопасных и биоразлагаемых компонентов, что делает его экологически дружественным выбором.",
    text: "",
    icon: "adv4",
    img: require("./assets/image/1.2.png"),
  },
];

export type BlockComponentCTAType = {
  name: string;
};
