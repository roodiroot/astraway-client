import Icon from "../utils/icon";
import DescriptionItem from "./description-item";

const advantage_list = ["Экономия", "Качество", "Экологичность"];

const DescriptionBlock = () => {
  return (
    <div className='w-full max-w-[500px] sm:max-w-[813px] mx-auto px-4'>
      <div className='space-y-5 py-[74px]  sm:space-y-6  md:space-y-7 md:py-[100px]  lg:space-y-8 '>
        <h2 className='font-medium text-fiolet tracking-tighter text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex justify-center flex-col gap-[1px] sm:flex-row sm:gap-6 sm:items-center'>
          <span className='whitespace-nowrap'>Мойка посуды</span>
          <span>
            <Icon type='star' />
          </span>
          <span className='whitespace-nowrap'>Стирка белья</span>
        </h2>
        <p className='text-lite text-lg sm:text-xl md:text-2xl lg:text-3xl text-start sm:text-center'>
          Мы&nbsp;обеспечиваем Вас продукцией высочайшего качества, позволяя Вам
          сэкономить деньги и&nbsp;время, при этом не&nbsp;уступая
          в&nbsp;эффективности.
        </p>
        <div className='flex flex-col sm:flex-row sm:justify-center gap-6 md:gap-8 justify-between text-fiolet tracking-tighter'>
          {advantage_list.map((i) => (
            <DescriptionItem text={i} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DescriptionBlock;
