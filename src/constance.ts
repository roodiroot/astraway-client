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
    title: "Средство для пола",
    description:
      "Эффективное средство для идеальной чистоты полов. Глубоко очищает, не оставляет разводов и безопасно для всех видов поверхностей.",
    text: "",
    icon: "adv1",
    img: require("./assets/image/3.png"),
  },
  {
    title: "Жидкое мыло",
    description:
      "Жидкое мыло для заботливого очищения и защиты. Удаляет 99.9% бактерий, питает кожу и обеспечивает мягкость. Чистые руки, здоровая кожа.",
    text: "",
    icon: "adv2",
    img: require("./assets/image/4.png"),
  },
  {
    title: "Гель для стирки",
    description:
      "Концентрированный гель для стирки, который эффективно борется с пятнами, бережет ткани и дарит одежде свежесть и долговечность.",
    text: "",
    icon: "adv3",
    img: require("./assets/image/2.png"),
  },
  {
    title: "Гель для посуды",
    description:
      "Гель для посуды, с легкостью растворяет жир и оставляет посуду безупречно чистой. Экономичный и мягкий для рук. Сияние чистоты на вашей кухне.",
    text: "",
    icon: "adv4",
    img: require("./assets/image/1.2.png"),
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
