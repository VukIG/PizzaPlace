import { useLocation } from "react-router-dom";
import Button from "./Button";
import { FaPlus } from "react-icons/fa";
import RandomList from "./RandomList";
import { useState, useEffect } from "react";
import Amount from "./Amount";
function MenuDetails() {
  const propLocation = useLocation();
  const propData = location.state?.prop || {}; // Use optional chaining to handle null
  useEffect(()=>{
    console.log(propData)
  },[propData])
  
  const [count, setCount] = useState(0);
  function changeCount() {
    setCount((count) => count + 1);
  }
  return (
    <div className="w-full bg-slate-200 p-6">
      <div className="flex rounded gap-12 bg-white justify-center items-center">
        <img
          className="rounded m-5 h-80 object-cover w-full"
          src="../src/assets/pizzaBanner.jpeg"
          alt=""
        />
        <div className="flex flex-col justify-center w-full ">
          <div className="flex flex-col justify-start ">
            <h1 className="text-4xl font-bold pb-3">Vegan Veggie</h1>
            <p>Daiya vegan mozzarella, paired with fresh veggies</p>
            <div className="mt-7">
              <h1 className="font-bold">Topings:</h1>
              <ul className="italic list-disc	ml-10">
                <li>Mozzarela</li>
                <li>Tomatto</li>
                <li>Onion</li>
                <li>Mushrooms</li>
              </ul>
            </div>
          </div>
          <div className="flex mt-10 justify-between w-full items-center">
            <h1 className="text-orange-400 text-xl font-bold">$150</h1>
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
      <div className="flex">
        <RandomList />
      </div>
    </div>
  );
}

export default MenuDetails;
