import { useState, useEffect } from "react";
import { PiPlusBold } from "react-icons/pi";
import { AiOutlineMinus } from "react-icons/ai";
import { useCart } from "./Context";
import Button from "./Button";

function Amount({ amount, name, price, onChange, id, className = "" }) {
  const [count, setCount] = useState(amount);
  const { cartItems, updateCartItems } = useCart();

  useEffect(() => {
    const index = cartItems.findIndex((item) => item.id === id);
    if (count === 0) {
      if (index !== -1) {
        cartItems.splice(index, 1);
      }
    } else {
      if (index !== -1) {
        cartItems[index].count = count;
      } else if (name != undefined) {
        cartItems.push({ name, count, price, id });
      }
    }
    updateCartItems([...cartItems]);
  }, [count]);

  function incCount(e) {
    e.preventDefault();
    setCount(count + 1);
    onChange((count) => count+1);
  }

  function decCount(e) {
    e.preventDefault();
    setCount(count - 1);
    onChange((count) => count-1);
  }

  return (
    <div
      className={`flex justify-center align-middle gap-2 items-center ${className}`}
    >
      <Button className="rounded-full w-12 h-12" onClick={decCount}>
        <AiOutlineMinus />
      </Button>
      <span>{count}</span>
      <Button className="rounded-full w-12 h-12" onClick={incCount}>
        <PiPlusBold />
      </Button>
    </div>
  );
}

export default Amount;
