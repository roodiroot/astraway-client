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
