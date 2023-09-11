import { useEffect, useState } from "react";
import Amount from "./Amount";
import Button from "./Button";

function CartItem({ item, amount, onZero, onChange }) {
  const { name, price } = item;
  const [count, setCount] = useState(amount);
  useEffect(() => {
    console.log(count);
    onChange(count);
  }, [count]);

  return (
    <div className="flex justify-between py-5 border-b border-black items-center">
      <div className="flex justify-around gap-3 items-baseline">
        <h1 className="text-3xl">{count}</h1>
        <span>X</span>
        <h1 className="text-3xl">{name}</h1>
      </div>
      <div className="flex justify-around gap-3 items-center">
        <h1 className="font-bold text-3xl">${(price * count).toFixed(2)}</h1>
        <Amount
          amount={count}
          onChange={(newCount) => {
            setCount(newCount);
          }}
        />
        <Button className="h-12" onClick={onZero}>
          Remove
        </Button>
      </div>
    </div>
  );
}

export default CartItem;
