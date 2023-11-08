import Container from "../utils/container";
import { ADVType, adv_list } from "../widgets/constanse";
import AdvantadesItem from "./advantades-item";

const AdvantagiesBlock = () => {
  return (
    <Container>
      <div className='w-full py-[74px] md:py-[150px]'>
        <div className='grid grid-cols-1 gap-[93px]  md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-9'>
          {adv_list.map((i: ADVType) => (
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

export default AdvantagiesBlock;
