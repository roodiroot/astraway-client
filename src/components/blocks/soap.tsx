import useScrollElement from "../../hooks/useScrollElement";
import BlockComponent from "../block-component/block-component";
import { BlockComponentADVType } from "./kitchen";
const img = require("../../assets/image/4.png");

const adv_list: BlockComponentADVType[] = [
  { name: "Антибактериальное действие", icon: "d3" },
  { name: "Экономичный расход", icon: "d4" },
  { name: "Гипоаллергенность", icon: "d5" },
];

const Soap = () => {
  const { element } = useScrollElement();
  const title = (
    <h3 className='font-medium text-fiolet text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter'>
      Экономичное <span className='text-accent'>жидкое мыло</span>{" "}
      универсального применения
    </h3>
  );
  const description = (
    <p className='text-lite'>
      Идеально подходит как для дома, так и&nbsp;для офисов, образовательных
      и&nbsp;медицинских учреждений, обеспечивая высокую степень защиты.
      Заботится о&nbsp;здоровье кожи, делая процесс мытья рук приятным
      и&nbsp;полезным ритуалом.
    </p>
  );
  return (
    <div id='soap' ref={element.soap}>
      <BlockComponent
        title={title}
        description={description}
        list={adv_list}
        composition='c3'
        reverse
        img={img}
        color='rgba(231, 208, 97, 0.2)'
      />
    </div>
  );
};

export default Soap;
