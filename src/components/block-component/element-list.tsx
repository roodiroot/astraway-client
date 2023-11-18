import { cn } from "../../lib/utils";
import Icon from "../utils/icon";

const ElementList: React.FC<{
  name: string;
  icon?: "d1" | "d2" | "d3" | "d4" | "d5";
}> = ({ icon, name }) => {
  return (
    <li className='relative'>
      {icon && (
        <Icon
          type={icon}
          className='absolute top-1/2 left-0 -translate-y-1/2'
        />
      )}
      <div className={cn(icon && "pl-11")}>{name}</div>
    </li>
  );
};

export default ElementList;
