import usePopap from "../../hooks/usePopap";
import Button from "../ui/button";
import Container from "../utils/container";
import Icon from "../utils/icon";

const MainBlock = () => {
  const { onOpen } = usePopap();
  return (
    <Container className="sm:h-[80vh] sm:flex sm:items-center">
      <div className="flex flex-col sm:flex-row md:items-center py-[55px]">
        <div className="block w-full  space-y-5  sm:space-y-6 sm:max-w-[400px] md:space-y-7 md:max-w-[600px] lg:space-y-8 lg:max-w-[819px]">
          <h1 className="font-bold text-fiolet text-4xl leading-[100%] md:text-5xl lg:text-6xl tracking-tighter">
            Прямые поставки бытовой химии от&nbsp;производителя{" "}
            <span className="text-accent">для Вашего бизнеса</span>
          </h1>
          <p className="text-lite text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Закажите бытовую химию в&nbsp;крупных объемах и&nbsp;сэкономьте на&nbsp;каждой упаковке.
          </p>
          <div className="flex flex-col gap-2 md:flex-row md:gap-7">
            <Button onClick={onOpen}>Подробнее</Button>
            <Button onClick={onOpen} variant="outline">
              Консультация
            </Button>
          </div>
        </div>
        <div className="relative py-[202px]">
          <Icon
            type="c1"
            className="absolute top-1/2 right-[-100px] -translate-y-1/2  w-[430px] sm:w-[500px] sm:right-auto sm:left-0 lg:w-[690px]"
          />
        </div>
      </div>
    </Container>
  );
};

export default MainBlock;
