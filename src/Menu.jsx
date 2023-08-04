import MenuItem from "./MenuItem";
import { FaPlus } from "react-icons/fa";

function Menu() {
  return (
    <div className="w-full flex flex-col justify-start h-full bg-slate-200 p-5 mb-5">
      <h1 className="text-4xl mb-10 font-bold">Discover menu</h1>
      <MenuItem name="Order now" icon={<FaPlus />} />
      <MenuItem name="Order now" icon={<FaPlus />} />
      <MenuItem name="Order now" icon={<FaPlus />} />
      <MenuItem name="Order now" icon={<FaPlus />} />
      <MenuItem name="Order now" icon={<FaPlus />} />
    </div>
  );
}

export default Menu;
