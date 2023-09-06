import { PiPlusBold } from "react-icons/pi";
import { AiOutlineMinus } from "react-icons/ai";
import Button from "./Button";
import { useState } from "react";

function Amount({ amount, onChange, className = "" }) {
  const [count, setCount] = useState(amount);

  function incCount(e) {
    e.preventDefault();
    setCount((count) => count + 1);
    onChange(count + 1);
  }

  function decCount(e) {
    e.preventDefault();
    setCount((count) => count - 1);
    onChange(count - 1);
  }

  return (
    <div className="flex justify-center align-middle gap-2 items-center">
      <Button className="rounded-full w-12 h-12 " onClick={decCount}>
        <AiOutlineMinus />
      </Button>
      <span>{count}</span>
      <Button className="rounded-full w-12 h-12 " onClick={incCount}>
        <PiPlusBold />
      </Button>
    </div>
  );
}

export default Amount;
