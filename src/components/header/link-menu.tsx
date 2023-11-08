import { useRef, useEffect } from "react";
import useScrollElement from "../../hooks/useScrollElement";
import { cn } from "../../lib/utils";
import usePopap from "../../hooks/usePopap";

const LinkMenu: React.FC<{
  setOpenMobilMenu?: () => void;
  name: string;
  id: string;
}> = ({ name, id, setOpenMobilMenu }) => {
  const { addElement } = useScrollElement();
  const ref = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    addElement({ ref, name: id });
  }, [id]);
  const hendleClick = () => {
    if (ref?.current) {
      ref?.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (setOpenMobilMenu) {
      setOpenMobilMenu();
    }
  };
  return (
    <li
      onClick={hendleClick}
      className={cn(
        setOpenMobilMenu
          ? ""
          : "text-lg p-2 cursor-pointer hover:text-accent transition"
      )}
    >
      {name}
    </li>
  );
};

export default LinkMenu;
