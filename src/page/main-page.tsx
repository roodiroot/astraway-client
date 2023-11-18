import AdvantagiesBlock from "../components/advantagies-block/advantagies-block";
import Bath from "../components/blocks/bath";
import Kitchen from "../components/blocks/kitchen";
import DescriptionBlock from "../components/description-block/description-block";
import MainBlock from "../components/main-block/main-block";
import AdvantagiesBlockProdList from "../components/advantagies-block/advantagies-block-product-list";
import Icon from "../components/utils/icon";
import useScrollElement from "../hooks/useScrollElement";
import CtaBlockWrapper from "../components/cta-blocks/cta-block-wrapper";
import CtaBlockWrapperBG from "../components/cta-blocks/cta-block-wrapper-bg";

const MainPage = () => {
  const { element } = useScrollElement();
  return (
    <div id='start' ref={element.start} className='relative overflow-hidden'>
      <Icon
        type='blot1'
        className='absolute -z-10 top-[18%] left-[-30px] w-[386px]'
      />
      <MainBlock />
      <DescriptionBlock />
      <AdvantagiesBlock />
      <CtaBlockWrapper />
      <Kitchen />
      <CtaBlockWrapperBG />
      <Bath />
      {/* <Floors /> */}
      <AdvantagiesBlockProdList />

      {/* <Soap /> */}
    </div>
  );
};

export default MainPage;
