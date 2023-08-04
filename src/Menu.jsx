import MenuItem from "./MenuItem";
import { HiPlusSm } from 'react-icons/fa';

function Menu() {
  return (
    <div className="w-full h-full bg-slate-200 p-5">
      <h1 className="text-4xl mb-5 font-bold">Discover menu</h1>
      <MenuItem name="Order now" icon={<HiPlusSm />} /> 
      <MenuItem name="Order now" icon={<HiPlusSm />} /> 
      <MenuItem name="Order now" icon={<HiPlusSm />} /> 
      <MenuItem name="Order now" icon={<HiPlusSm />} /> 
      <MenuItem name="Order now" icon={<HiPlusSm />} /> 
    </div>
  );
}

export default Menu;
