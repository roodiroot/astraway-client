import useScrollElement from "../../hooks/useScrollElement";
import BlockComponent from "../block-component/block-component";
import { BlockComponentADVType } from "./kitchen";
const img = require("../../assets/image/2.png");

const adv_list: BlockComponentADVType[] = [
  { name: "Идеально для всех типов ткани", icon: "d3" },
  { name: "Без вреда для окружающей среды", icon: "d4" },
  { name: "Идеальное сочетание цены и качества", icon: "d5" },
];

const Bath = () => {
  const { element } = useScrollElement();
  const title = (
    <h3 className='font-medium text-fiolet text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter'>
      Откройте новые возможности{" "}
      <span className='text-accent'> стирки белья</span>{" "}
    </h3>
  );
  const description = (
    <p className='text-lite'>
      Приобретая одну 5-литровую тару, вы&nbsp;получаете
      до&nbsp;165&nbsp;стирок, что на&nbsp;20% больше, чем у&nbsp;конкурентов!
      Это не&nbsp;только экономит ваш бюджет, но&nbsp;и&nbsp;снижает количество
      отходов.
    </p>
  );
  return (
    <div id='wash' ref={element.wash}>
      <BlockComponent
        title={title}
        description={description}
        list={adv_list}
        composition='c3'
        reverse
        img={img}
        color='rgba(218, 164, 190, 0.2)'
      />
    </div>
  );
};

export default Bath;
