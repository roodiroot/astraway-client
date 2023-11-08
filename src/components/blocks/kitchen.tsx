import useScrollElement from "../../hooks/useScrollElement";
import BlockComponent from "../block-component/block-component";
const img = require("../../assets/image/1.png");

export type BlockComponentADVType = {
  name: string;
  icon: "d1" | "d2" | "d3" | "d4" | "d5";
};
const adv_list: BlockComponentADVType[] = [
  { name: "Мощное средство против жира", icon: "d1" },
  { name: "Антибактериальные свойства", icon: "d2" },
  { name: "Обильная пена", icon: "d1" },
];

const Kitchen = () => {
  const { element } = useScrollElement();
  const title = (
    <h3 className='font-medium text-fiolet text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter'>
      Почувствуйте силу природы{" "}
      <span className='text-accent'>на Вашей кухне</span>{" "}
    </h3>
  );
  const description = (
    <p className='text-lite'>
      Натуральные экстракты Краматорских ягод не&nbsp;только обогащают гель
      полезными свойствами, но&nbsp;и&nbsp;оставляют легкий, приятный аромат
      на&nbsp;вашей посуде.
    </p>
  );
  return (
    <div id='kitchen' ref={element.kitchen}>
      <BlockComponent
        title={title}
        description={description}
        list={adv_list}
        composition='c2'
        img={img}
        color='rgba(165, 187, 140, 0.2)'
      />
    </div>
  );
};

export default Kitchen;
