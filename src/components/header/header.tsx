import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { type MenuListType, menu_list } from "../../constance";
import Button from "../ui/button";
import Icon from "../utils/icon";
import Burger from "./burger";
import MobilMenu from "./mobil-menu";
import { Link } from "react-router-dom";
import LinkMenu from "./link-menu";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='w-full max-w-8xl mx-auto px-4'>
      <AnimatePresence>
        {open && (
          <MobilMenu closeMenu={() => setOpen(false)} list={menu_list} />
        )}
      </AnimatePresence>
      <div className='relative z-0 w-full py-7 flex flex-row gap-3 md:gap-10 justify-between items-center'>
        <Link to='/' className=''>
          <Icon
            type='logo2'
            className='hidden md:block md:w-[150px] lg:w-[219px]'
          />
          <Icon type='minlogo' className='h-[65px] block md:hidden' />
        </Link>
        <div className='w-full flex items-center'>
          <nav className='w-full'>
            <ul className='hidden w-full md:max-w-[95%] lg:max-w-[70%] ml-auto md:flex justify-between'>
              {menu_list.map((i: MenuListType) => (
                <LinkMenu key={i.name} name={i.name} id={i.id} />
              ))}
            </ul>
          </nav>
          <Button className='md:ml-7 lg:ml-10 xl:ml-20'>
            8 (927)-974-92-22
          </Button>
        </div>
        <Burger className='md:hidden' onClick={() => setOpen(true)} />
      </div>
    </div>
  );
};

export default Header;
