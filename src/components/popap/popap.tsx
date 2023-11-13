import { motion } from "framer-motion";
import usePopap from "../../hooks/usePopap";
import Icon from "../utils/icon";
import Form from "./form";
import HeaderPopap from "./header-popap";
import ImagePopap from "./image-popap";

const Popap = () => {
  const { onClose } = usePopap();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // transition={transitionObjectVariants}
      className='fixed z-40 inset-0 w-full h-full min-h-[530px]  bg-[#141830]/80  p-4 flex justify-center items-center'
    >
      <motion.div
        initial={{
          opacity: 0,
          translateY: "-100%",
        }}
        animate={{ opacity: 1, translateY: "0%" }}
        exit={{ opacity: 0, translateY: "-100%" }}
        // transition={transitionObjectVariants}
        className='relative rounded-xl bg-white flex'
      >
        <div
          onClick={onClose}
          className='absolute top-4 right-4 cursor-pointer'
        >
          <Icon type='ex' />
        </div>
        <div className='hidden rounded-xl md:block md:min-w-[270px] relative overflow-hidden'>
          <ImagePopap className=' absolute top-[86px] left-[-30px]' />
        </div>
        <div className='w-full max-w-[480px] p-6 md:x-12 md:py-9'>
          <div className='space-y-8'>
            <HeaderPopap />
            <Form onClosePopap={onClose} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Popap;
