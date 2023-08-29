import Button from "./Button";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import Amount from "./Amount";

function RandomItem({ data }) {
  const [count, setCount] = useState(0);

  function changeCount() {
    setCount((count) => count + 1);
  }

  const { name, description, price, imageUrl } = data; // Destructure the data object

  return (
    <div className="flex gap-5 bg-white flex-col p-5 w-full rounded">
      <img className="w-full object-cover rounded h-72" src={imageUrl} alt="" />
      <div className="py-3">
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="italic font-normal">{description}</p>
      </div>
      <div className="flex w-full justify-between items-center">
        <p className="text-orange-400 text-xl font-bold">${price}</p>
        <div>
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
  );
}

export default RandomItem;
