import { useRef } from "react";
import AdvantagiesBlock from "../components/advantagies-block/advantagies-block";
import Bath from "../components/blocks/bath";
import Floors from "../components/blocks/floors";
import Kitchen from "../components/blocks/kitchen";
import Soap from "../components/blocks/soap";
import DescriptionBlock from "../components/description-block/description-block";
import MainBlock from "../components/main-block/main-block";
import AdvantagiesBlockProdList from "../components/advantagies-block/advantagies-block-product-list";
import Icon from "../components/utils/icon";
import useScrollElement from "../hooks/useScrollElement";

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
      <Kitchen />
      <Bath />
      {/* <Floors /> */}
      <AdvantagiesBlockProdList />
      {/* <Soap /> */}
    </div>
  );
};

export default MainPage;
