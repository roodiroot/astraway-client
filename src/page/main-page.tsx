import { useRef } from "react";
import AdvantagiesBlock from "../components/advantagies-block/advantagies-block";
import Bath from "../components/blocks/bath";
import Floors from "../components/blocks/floors";
import Kitchen from "../components/blocks/kitchen";
import Soap from "../components/blocks/soap";
import DescriptionBlock from "../components/description-block/description-block";
import MainBlock from "../components/main-block/main-block";

const MainPage = () => {
  const kitchen = useRef<null | HTMLDivElement>(null);
  return (
    <div className='relative'>
      <MainBlock />
      <DescriptionBlock />
      <AdvantagiesBlock />
      <Kitchen />
      <Bath />
      <Floors />
      <Soap />
    </div>
  );
};

export default MainPage;
