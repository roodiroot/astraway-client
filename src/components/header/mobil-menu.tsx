import { motion } from "framer-motion";

import Burger from "./burger";
import Icon from "../utils/icon";
import MobilMenuBody from "./mobil-menu-body";
import { MenuListType } from "../../constance";

const MobilMenu: React.FC<{ closeMenu: () => void; list: MenuListType[] }> = ({
  closeMenu,
  list,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed z-20 inset-0  bg-[#141830]/90 md:hidden'
    >
      <motion.div
        initial={{
          opacity: 0,
          translateX: "-100%",
        }}
        animate={{ opacity: 1, translateX: "0%" }}
        exit={{ opacity: 0, translateX: "-100%" }}
        transition={{ type: "spring", stiffness: 250, damping: 13 }}
        className='relative w-full max-w-[400px] h-full bg-white'
      >
        <Burger x onClick={closeMenu} className='absolute top-0 right-0' />
        <Icon type='logo2' className='absolute top-4 left-4 w-[150px]' />
        <MobilMenuBody list={list} onClose={closeMenu} />
      </motion.div>
    </motion.div>
  );
};

export default MobilMenu;
