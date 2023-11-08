import { cn } from "../../lib/utils";

const LinkMenuFooter: React.FC<{
  setOpenMobilMenu?: () => void;
  name: string;
  id: string;
}> = ({ name, id, setOpenMobilMenu }) => {
  return (
    <li
      className={cn(
        setOpenMobilMenu
          ? ""
          : "text-lg p-2 cursor-pointer hover:text-accent transition"
      )}
    >
      <a href={`#${id}`}>{name}</a>
    </li>
  );
};

export default LinkMenuFooter;
