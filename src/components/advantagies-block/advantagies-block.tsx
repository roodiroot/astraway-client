import Container from "../utils/container";
import Icon from "../utils/icon";
import AdvantadesItem from "./advantades-item";

const adv_list: {
  title: string;
  description: string;
  text: string;
  icon: "adv1" | "adv2" | "adv3" | "adv4";
}[] = [
  {
    title: "Эффективность",
    description:
      "Гели были разработаны с использованием передовых технологий, чтобы обеспечить максимально чистое и безупречное белье.",
    text: "",
    icon: "adv1",
  },
  {
    title: "Деликатный Уход",
    description:
      "Наши средства разработаны так, чтобы они бережно ухаживали за тканями, предотвращая износ и сохраняя яркость цветов на Ваших вещах.",
    text: "",
    icon: "adv2",
  },
  {
    title: "Сияющая Чистота",
    description:
      "С нашим гелем ваша посуда будет сиять от чистоты. Он удаляет даже самые стойкие пятна и остатки, оставляя поверхность мерцающей и блестящей.",
    text: "",
    icon: "adv3",
  },
  {
    title: "Безопасность",
    description:
      "Гель для мытья посуды создан с использованием безопасных и биоразлагаемых компонентов, что делает его экологически дружественным выбором.",
    text: "",
    icon: "adv4",
  },
];

const AdvantagiesBlock = () => {
  return (
    <Container>
      <div className='w-full py-[74px] md:py-[150px]'>
        <div className='grid grid-cols-1 gap-[93px]  md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-9'>
          {adv_list.map((i) => (
            <AdvantadesItem
              key={i.title}
              icon={i.icon}
              title={i.title}
              description={i.description}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AdvantagiesBlock;
