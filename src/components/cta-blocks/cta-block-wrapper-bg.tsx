import { BlockComponentCTAType } from "../../constance";
import StaBlock from "./sta-block";

const cta_list: BlockComponentCTAType[] = [
  { name: "Индивидуальные условия" },
  { name: "Подтвержденное высокое качество" },
  { name: "Гибкая логистика" },
];

const CtaBlockWrapperBG = () => {
  const title = (
    <h3 className='font-medium text-fiolet text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter'>
      Управляете сетью магазинов или{" "}
      <span className='text-accent'>оптовым складом?</span>{" "}
    </h3>
  );
  const description = (
    <p className='text-lite'>
      Наша компания предлагает эксклюзивные условия сотрудничества для оптовых
      покупателей. Мы&nbsp;производим широкий ассортимент бытовой химии
    </p>
  );
  return (
    <div>
      <StaBlock title={title} description={description} list={cta_list} bg />
    </div>
  );
};

export default CtaBlockWrapperBG;
