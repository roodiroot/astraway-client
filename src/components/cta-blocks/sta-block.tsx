import { ReactNode } from "react";
import { BlockComponentCTAType } from "../../constance";
import Container from "../utils/container";
import { cn } from "../../lib/utils";
import Button from "../ui/button";
import ElementList from "../block-component/element-list";
import usePopap from "../../hooks/usePopap";

const StaBlock: React.FC<{
  title: ReactNode;
  description: ReactNode;
  list?: BlockComponentCTAType[];
  bg?: boolean;
}> = ({ title, description, list, bg }) => {
  const { onOpen } = usePopap();
  return (
    <div className='w-full py-[50px] md:py-[100px]'>
      <div className='px-4 max-w-[1600px] -mx-10 md:mx-auto md-px-0'>
        <div className={cn("rounded-3xl py-24", bg && "bg-[#EFF3FC]")}>
          <Container className=''>
            <div className='mx-10 flex items-center flex-col-reverse md:flex-row-reverse md:mx-auto'>
              <div className='relative w-full max-w-[650px] pt-6 md:max-w-full md:pt-0 flex md:justify-end'>
                <Button onClick={onOpen}>Получить прайс</Button>
              </div>
              <div className='w-full max-w-[650px] space-y-6'>
                {title}
                {description}
                {list && (
                  <ul className='flex flex-col gap-2 font-medium text-xl sm:text-2xl md:text-3xl tracking-tighter text-fiolet'>
                    {list.map((i) => (
                      <ElementList name={i.name} key={i.name} />
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default StaBlock;
