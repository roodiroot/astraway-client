import useScrollElement from "../../hooks/useScrollElement";
import BlockComponent from "../block-component/block-component";
import { BlockComponentADVType } from "./kitchen";
const img = require("../../assets/image/3.png");

const adv_list: BlockComponentADVType[] = [
  { name: "Глубокая очистка", icon: "d3" },
  { name: "Без разводов и лишнего мыла", icon: "d4" },
  { name: "Под каждый тип покрытия", icon: "d5" },
];

const Floors = () => {
  const { element } = useScrollElement();
  const title = (
    <h3 className='font-medium text-fiolet text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter'>
      Гели для мойки <span className='text-accent'> любых типов полов</span>{" "}
    </h3>
  );
  const description = (
    <p className='text-lite'>
      Проникает в&nbsp;поры любого типа напольных покрытий, эффективно удаляя
      грязь и&nbsp;пятна без лишних усилий. Оставляет поверхности блестящими без
      полос и&nbsp;разводов после высыхания.
    </p>
  );
  return (
    <div id='floors' ref={element.floors}>
      <BlockComponent
        title={title}
        description={description}
        list={adv_list}
        composition='c3'
        img={img}
        color='rgba(236, 214, 114, 0.2)'
      />
    </div>
  );
};

export default Floors;
