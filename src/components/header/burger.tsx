import { cn } from "../../lib/utils";
import Icon from "../utils/icon";

const Burger: React.FC<{
  onClick?: () => void;
  className?: string;
  x?: boolean;
}> = ({ onClick, className, x }) => {
  return (
    <div
      onClick={onClick}
      className={cn("block w-12 h-12 p-6 relative cursor-pointer", className)}
    >
      <Icon
        type={x ? "ex" : "burger"}
        className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
      />
    </div>
  );
};

export default Burger;
