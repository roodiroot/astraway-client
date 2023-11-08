import usePopap from "../../hooks/usePopap";
import Icon from "../utils/icon";

const AdvantadesItem: React.FC<{
  icon:
    | "logo"
    | "minlogo"
    | "bg1"
    | "bg2"
    | "c1"
    | "c2"
    | "c3"
    | "star"
    | "ok"
    | "bgicon"
    | "adv1"
    | "adv2"
    | "adv3"
    | "adv4"
    | "more"
    | "d1"
    | "d2"
    | "d3"
    | "d4"
    | "d5";
  title: string;
  description: string;
  img: string;
}> = ({ icon, title, description, img }) => {
  const { onOpen } = usePopap();
  return (
    <div className='flex flex-col justify-between gap-5 max-w-[400px] mx-auto'>
      <div className='relative w-full flex justify-center aspect-[4/5]'>
        {/* <Icon type='bgicon' className='relative z-0 ' />
        <Icon
          type={icon}
          className='absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        /> */}
        <img
          src={img}
          alt=''
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover'
        />
      </div>
      <div className='flex flex-col gap-3'>
        <h3 className='text-fiolet font-medium tracking-tighter text-2xl sm:text-3xl md:text-[33px]'>
          {title}
        </h3>
        <p className='font-medium text-lg line-clamp-5 text-lite'>
          {description}
        </p>
        <div className='flex gap-2 items-center cursor-pointer'>
          <div
            onClick={onOpen}
            className='font-medium text-accent text-[22px] md:text-2xl tracking-tighter'
          >
            Запросить цену{" "}
          </div>
          <Icon type='more' />
        </div>
      </div>
    </div>
  );
};

export default AdvantadesItem;
