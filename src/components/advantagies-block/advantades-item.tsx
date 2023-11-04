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
}> = ({ icon, title, description }) => {
  return (
    <div className='flex flex-col justify-between gap-5 lg:gap-9 max-w-[400px] mx-auto'>
      <div className='relative w-full flex justify-center'>
        <Icon type='bgicon' className='relative z-0 ' />
        <Icon
          type={icon}
          className='absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
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
          <div className='font-medium text-accent text-[22px] md:text-2xl tracking-tighter'>
            Читать еще{" "}
          </div>
          <Icon type='more' />
        </div>
      </div>
    </div>
  );
};

export default AdvantadesItem;
