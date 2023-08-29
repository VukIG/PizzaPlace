import Button from "./Button";
import { FaPlus } from "react-icons/fa";
import RandomList from "./RandomList";
import { useState } from "react";
import Amount from "./Amount";
import { useParams } from "react-router-dom";
import data from "./mockData";

function MenuDetails() {
  const { id } = useParams(); // Get the menu item ID from the URL parameter
  const menuItem = data.find((item) => item.id === parseInt(id));
  let toppings = menuItem.toppings;
  const [count, setCount] = useState(0);
  function changeCount() {
    setCount((count) => count + 1);
  }
  return (
    <div className="w-full bg-slate-200 p-6">
      <div className="flex rounded gap-12 bg-white justify-center items-center">
        <img
          className="rounded m-5 h-80 object-cover w-full"
          src={menuItem.imageUrl}
          alt=""
        />
        <div className="flex flex-col justify-center w-full ">
          <div className="flex flex-col justify-start ">
            <h1 className="text-4xl font-bold pb-3">{menuItem.name}</h1>
            <p>{menuItem.description}</p>
            <div className="mt-7">
              <h1 className="font-bold">Topings:</h1>
              <ul className="italic list-disc	ml-10">
                {toppings.map((topping) => {
                  return <li key={topping.id}>{topping.name}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="flex mt-10 justify-between w-full items-center">
            <h1 className="text-orange-400 text-xl font-bold">
              ${menuItem.price}
            </h1>
            <div className="mr-5">
              {count > 0 ? (
                <Amount
                  amount={count}
                  onZero={() => {
                    setCount(0);
                  }}
                />
              ) : (
                <Button onClick={changeCount}>
                  <div className="flex gap-3 align-middle justify-center items-center">
                    <span>Add to cart</span>
                    <FaPlus />
                  </div>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-4xl font-bold ">You may also like</div>
      <div className="flex"><RandomList /></div>
    </div>
  );
}

export default MenuDetails;
