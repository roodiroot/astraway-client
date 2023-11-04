import Icon from "../utils/icon";

const ElementList: React.FC<{
  icon: "d1" | "d2" | "d3" | "d4" | "d5";
  name: string;
}> = ({ icon, name }) => {
  return (
    <li className='relative'>
      <Icon type={icon} className='absolute top-1/2 left-0 -translate-y-1/2' />
      <div className='pl-11'>{name}</div>
    </li>
  );
};

export default ElementList;
