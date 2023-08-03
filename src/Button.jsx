import { FaShoppingCart } from "react-icons/fa";

function Button() {
  return (
    <button className="bg-orange-400 text-white py-[10px] px-[15px] flex rounded items-center">
      <p className="p-1">Button</p>
      <FaShoppingCart />
    </button>
  );
}

export default Button;
