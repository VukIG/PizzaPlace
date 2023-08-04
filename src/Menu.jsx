import MenuItem from "./MenuItem";
import { FaShoppingCart } from 'react-icons/fa';

function Menu() {
  return (
    <div className="w-full h-full bg-slate-200 p-5">
      <h1 className="text-4xl mb-5 font-bold">Discover menu</h1>
      <MenuItem name="Order now" icon={<FaShoppingCart />} /> 
      <MenuItem name="Order now" icon={<FaShoppingCart />} /> 
      <MenuItem name="Order now" icon={<FaShoppingCart />} /> 
      <MenuItem name="Order now" icon={<FaShoppingCart />} /> 
      <MenuItem name="Order now" icon={<FaShoppingCart />} /> 
    </div>
  );
}

export default Menu;
