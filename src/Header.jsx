import Logo from "../src/logo.svg";
import Button from "./Button";
import Nav from "./Nav";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className="flex px-[15px] py-[10px] bg-stone-800 justify-between items-center">
        <div className="flex justify-start items-center">
          <img src={Logo} alt="" />
          <Nav />
        </div>
        <div>
          <Button>
            <div className="flex gap-1 align-middle justify-center items-center">
              <span>Cart</span> <FaShoppingCart />
            </div>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Header;
