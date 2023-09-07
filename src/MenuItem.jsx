import { Link } from "react-router-dom";
import AmountButton from "./AmountButton";
import { useCart } from "./Context";
import {useState,useEffect} from "react";

function MenuItem({ data }) {
  const { name, description, imageUrl, price, id } = data;
  const { cartItems } = useCart();  
  const[count,setCount]=useState(0);
  useEffect(() => {
    const itemInCart = cartItems.find(item => item.name === name);
    setCount(itemInCart ? setCount(itemInCart.count) : setCount(0));
  }, [cartItems, name]);
  return (
    <div>
      <Link to={`/menu/details/${id}`}>
        <div className=" rounded-lg flex align-middle items-center bg-white justify-between mb-5">
          <div className="flex items-center gap-5">
            <img
              className="w-[100px] h-[100px] my-5 ml-5 rounded-lg"
              src={imageUrl}
              alt=""
            />
            <div className="flex flex-col justify-start items-start ">
              <h1 className="text-xl font-bold">{name}</h1>
              <p className="py-3 text-sm italic">{description}</p>
              <h1 className="font-bold text-orange-400">${price}</h1>
            </div>
          </div>
          <AmountButton name={name} price={price} amount={count} />
        </div>
      </Link>
    </div>
  );
}

export default MenuItem;
