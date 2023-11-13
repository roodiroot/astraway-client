import { ReactNode } from "react";
import Container from "../utils/container";
import Icon from "../utils/icon";
import { BlockComponentADVType } from "../blocks/kitchen";
import ElementList from "./element-list";
import { cn } from "../../lib/utils";

const BlockComponent: React.FC<{
  title: ReactNode;
  description: ReactNode;
  list: BlockComponentADVType[];
  composition: "c1" | "c2" | "c3";
  img: string;
  color: string;
  reverse?: boolean;
}> = ({ title, description, list, composition, reverse, img, color }) => {
  console.log(img);
  return (
    <Container>
      <div className='w-full py-[100px] md:py-[200px]'>
        <div
          className={cn(
            "flex",
            reverse
              ? "flex-col-reverse md:flex-row-reverse"
              : "flex-col-reverse md:flex-row"
          )}
        >
          <div className='relative w-full py-[200px] '>
            {/* <Icon
              type='bg-composition'
              fill={color}
              className={cn(
                "absolute -z-10 top-1/2 -translate-y-1/2 w-[615px] lg:w-[829px] right-[-200px]",
                reverse
                  ? "md:left-auto md:-right-[100px]"
                  : "md:right-auto md:-left-[100px]"
              )}
            /> */}
            <Icon
              type={composition}
              fill={color}
              className={cn(
                "absolute -z-10 top-1/2 -translate-y-1/2 w-[615px] lg:w-[829px] right-[-200px]",
                reverse
                  ? "md:left-auto md:-right-[100px]"
                  : "md:right-auto md:-left-[100px]"
              )}
            />
            {/* <img
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover'
              src={img}
              alt=''
            /> */}
          </div>
          <div className='w-full max-w-[650px] space-y-8'>
            {title}
            {description}
            <ul className='flex flex-col gap-6 font-medium text-xl sm:text-2xl md:text-3xl tracking-tighter text-fiolet'>
              {list.map((i) => (
                <ElementList icon={i.icon} name={i.name} key={i.name} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BlockComponent;
