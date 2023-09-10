import Logo from "../src/logo.svg";
import Button from "./Button";
import Nav from "./Nav";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "./Context";
import { useEffect } from "react";

function Header() {
  const { cartItems } = useCart();
  useEffect(()=>{
    numberOfItems();
  },[cartItems])
  function numberOfItems() {
    const totalNum = cartItems.reduce((sum, item)=>{
      return sum + item.count
    },0);
    return totalNum;
  }
  return (
    <>
      <div className="flex px-[15px] py-[10px] bg-stone-800 justify-between items-center">
        <div className="flex justify-start items-center">
          <img src={Logo} alt="" />
          <Nav />
        </div>
        <div>
          <div className="flex gap-3 justify-center items-center align-middle">
            <div className="text-xl bg-orange-200 text-orange-400 rounded-full p-3 h-9 ">
              <div className="relative top-[-60%]">
                {numberOfItems()}
              </div>
            </div>
            <Link to="/menu/card">
              <Button>
                <div className="flex gap-1 align-middle justify-center items-center">
                  <span>Cart</span> <FaShoppingCart />
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
