import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Icon from "./components/utils/icon";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Popap from "./components/popap/popap";
import usePopap from "./hooks/usePopap";
import CallWidget from "./components/widgets/call-widget";

function Root() {
  const { isOpen } = usePopap();
  return (
    <div className='relative w-full h-full'>
      <Icon
        type='bg1'
        className='absolute -z-10 top-[-23px] right-[-40px] h-[615px] md:h-[800px] lg:h-[1000px] xl:h-[1275px] pointer-events-none'
      />
      <Icon
        type='bg2'
        className='absolute -z-10 top-[-85px] left-[-55px] w-[20%] xl:w-auto  xl:h-[553px]  pointer-events-none'
      />
      <AnimatePresence>{isOpen && <Popap />}</AnimatePresence>
      <CallWidget />

      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
