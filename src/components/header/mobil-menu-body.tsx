import { MenuListType } from "../../constance";
import LinkMenu from "./link-menu";

const MobilMenuBody: React.FC<{
  list: MenuListType[];
  onClose?: () => void;
}> = ({ list, onClose }) => {
  return (
    <div className='w-full h-full p-4 flex flex-col justify-between'>
      <ul className='flex-1 tracking-tighter text-2xl text-fiolet font-medium flex flex-col justify-center items-center gap-5'>
        {list.map((i) => (
          <LinkMenu
            key={i.name}
            name={i.name}
            id={i.id}
            setOpenMobilMenu={onClose}
          />
        ))}
      </ul>
      <div className=' w-full mt-auto flex justify-between items-center text-xs text-lite'>
        <a href={process.env.REACT_APP_TG_LINK}>Telegram</a>
        <a href={process.env.REACT_APP_WB}>Wildberries</a>
        <a href={process.env.REACT_APP_WHATSAPP_LINK}>Whatsapp</a>
      </div>
    </div>
  );
};

export default MobilMenuBody;
