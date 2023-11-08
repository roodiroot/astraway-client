export type SOCIALType = {
  icon: "vk" | "ws" | "tg";
  bg: string;
  link: string | undefined;
};
export const link_list: SOCIALType[] = [
  { icon: "ws", bg: "#25D366", link: process.env.REACT_APP_WHATSAPP_LINK },
  { icon: "tg", bg: "#0088cc", link: process.env.REACT_APP_TG_LINK },
  // { icon: "vk", bg: "#0077FF", link: process.env.REACT_APP_VK_LINK },
];

export type ADVType = {
  title: string;
  description: string;
  text: string;
  icon: "adv1" | "adv2" | "adv3" | "adv4";
  img: string;
};

export const adv_list: ADVType[] = [
  {
    title: "Средство для пола",
    description:
      "Эффективное средство для идеальной чистоты полов. Глубоко очищает, не оставляет разводов и безопасно для всех видов поверхностей.",
    text: "",
    icon: "adv1",
    img: require("../../assets/image/3.png"),
  },
  {
    title: "Жидкое мыло",
    description:
      "Жидкое мыло для заботливого очищения и защиты. Удаляет 99.9% бактерий, питает кожу и обеспечивает мягкость. Чистые руки, здоровая кожа.",
    text: "",
    icon: "adv2",
    img: require("../../assets/image/4.png"),
  },
  {
    title: "Гель для стирки",
    description:
      "Концентрированный гель для стирки, который эффективно борется с пятнами, бережет ткани и дарит одежде свежесть и долговечность.",
    text: "",
    icon: "adv3",
    img: require("../../assets/image/2.png"),
  },
  {
    title: "Гель для посуды",
    description:
      "Гель для посуды, с легкостью растворяет жир и оставляет посуду безупречно чистой. Экономичный и мягкий для рук. Сияние чистоты на вашей кухне.",
    text: "",
    icon: "adv4",
    img: require("../../assets/image/1.2.png"),
  },
];
