import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import Logo from '../src/logo.svg';
import Nav from './Nav';
import Button from './Button';
import { useDispatch } from 'react-redux';
import {numberOfItems } from './app/actions';
function Header() {
  const dispatch = useDispatch();
  
  const itemNum = dispatch(numberOfItems());
  return (
    <>
      <div className="flex px-[15px] py-[10px] bg-stone-800 justify-between items-center">
        <div className="flex justify-start items-center">
          <img src={Logo} alt="" />
          <Nav />
        </div>
        <div>
          <div className="flex gap-3 justify-center items-center align-middle">
            {itemNum !== 0 ? (
              <div className="text-xl bg-orange-200 text-orange-400 rounded-full p-3 h-9 ">
                <div className="relative top-[-60%]">{itemNum}</div>
              </div>
            ) : (
              <div className=""></div>
            )}
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
