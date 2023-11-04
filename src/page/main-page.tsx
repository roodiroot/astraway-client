import AdvantagiesBlock from "../components/advantagies-block/advantagies-block";
import Bath from "../components/blocks/bath";
import Kitchen from "../components/blocks/kitchen";
import DescriptionBlock from "../components/description-block/description-block";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import MainBlock from "../components/main-block/main-block";
import Icon from "../components/utils/icon";

const MainPage = () => {
  return (
    <div className='relative'>
      <Icon
        type='bg1'
        className='absolute -z-10 top-[-23px] right-[-40px] h-[615px] md:h-[800px] lg:h-[1000px] xl:h-[1275px] pointer-events-none'
      />
      <Icon
        type='bg2'
        className='absolute -z-10 top-[-85px] left-[-55px] w-[20%] xl:w-auto  xl:h-[553px]  pointer-events-none'
      />
      <Header />
      <MainBlock />
      <DescriptionBlock />
      <AdvantagiesBlock />
      <Kitchen />
      <Bath />
      <Footer />
    </div>
  );
};

export default MainPage;
