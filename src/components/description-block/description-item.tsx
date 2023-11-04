import Icon from "../utils/icon";

const DescriptionItem: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className='flex gap-2 items-center'>
      <Icon type='ok' className='w-[23.3px] md:w-[31.5px]' />
      <div className='text-2xl  md:text-3xl lg:text-4xl'>{text}</div>
    </div>
  );
};

export default DescriptionItem;
