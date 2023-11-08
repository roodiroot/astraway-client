import { Link } from "react-router-dom";
import { type MenuListType, menu_list } from "../../constance";
import Button from "../ui/button";
import Icon from "../utils/icon";
import usePopap from "../../hooks/usePopap";
import LinkMenuFooter from "./link-menu-footer";

const Footer = () => {
  const { onOpen } = usePopap();
  return (
    <div className='w-full max-w-8xl mx-auto px-4 relative'>
      <div className='relative z-0 w-full py-7 flex flex-row gap-10 justify-between items-center'>
        <div className=''>
          <Icon
            type='logo'
            className='hidden md:block md:w-[150px] lg:w-[219px]'
          />
          <Icon type='minlogo' className='h-[65px] block md:hidden' />
        </div>
        <div className='w-full flex items-center'>
          <nav className='w-full'>
            <ul className='hidden w-full md:max-w-[95%] lg:max-w-[70%] ml-auto md:flex justify-between'>
              {menu_list.map((i: MenuListType) => (
                <LinkMenuFooter key={i.name} name={i.name} id={i.id} />
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className='flex py-8 px-4 flex-col gap-4 sm:flex-row sm:items-end justify-between'>
        <div className='flex flex-col gap-3 justify-between'>
          <Button onClick={onOpen}>Консультация</Button>
          <div className='text-sm text-lite '>
            ООО "АС" <br /> ИНН 1300006975 <br /> КПП 130001001
          </div>
        </div>
        <div className='text-sm text-lite max-w-[300px]'>
          <div className=''>
            <div className='flex flex-row gap-9 justify-between'>
              <div className='font-medium'>Телефоны:</div>
              <div className=''>
                <a href='tel:+79279749222'>8 927 974 92 22</a> <br />
                <a href='tel:+79279749222'>8 800 974 92 22</a>
              </div>
            </div>
            <div className='flex flex-row gap-9 justify-between'>
              <div className='font-medium'>Email:</div>
              <div className=''>
                <a href='tel:+79279749222'>info@astraway.ru</a>
              </div>
            </div>
            <div className='flex flex-row gap-9 justify-between'>
              <div className='font-medium'>Карьера:</div>
              <div className=''>
                <a href='tel:+79279749222'>sale@astraway.ru</a>
              </div>
            </div>
            <a
              href='https://matryoshka-studio.ru/'
              className='text-xs inline-block py-5'
            >
              <div className=''>
                Придумала этот сайт{" "}
                <span className='underline'>«Matrёshka»</span>{" "}
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className='text-xs text-center'>
        <Link to='/confidentiality' className='underline cursor-pointer'>
          Политика конфиденциальности
        </Link>
      </div>
    </div>
  );
};

export default Footer;
