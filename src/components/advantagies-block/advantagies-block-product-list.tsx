import { ADVType, list_products } from "../../constance";
import useScrollElement from "../../hooks/useScrollElement";
import Container from "../utils/container";
import AdvantadesItem from "./advantades-item";

const AdvantagiesBlockProdList = () => {
  const { element } = useScrollElement();
  return (
    <Container>
      <div
        id='products'
        ref={element.products}
        className='w-full py-[74px] md:py-[150px]'
      >
        <div className='grid grid-cols-1 gap-[93px]  md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-9'>
          {list_products.map((i: ADVType) => (
            <AdvantadesItem
              key={i.title}
              icon={i.icon}
              title={i.title}
              description={i.description}
              img={i.img}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AdvantagiesBlockProdList;
