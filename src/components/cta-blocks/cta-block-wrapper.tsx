import StaBlock from "./sta-block";

const CtaBlockWrapper = () => {
  const title = (
    <h3 className='font-medium text-fiolet text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter'>
      Подберите идеальные решения для{" "}
      <span className='text-accent'>вашего бизнеса!</span>{" "}
    </h3>
  );
  const description = (
    <p className='text-lite'>
      Станьте частью нашего успешного партнерства! Мы&nbsp;гарантируем вам
      выгоду и&nbsp;удобство при работе. Позвольте вашему бизнесу расти вместе
      с&nbsp;нами!
    </p>
  );
  return (
    <div>
      <StaBlock title={title} description={description} />
    </div>
  );
};

export default CtaBlockWrapper;
