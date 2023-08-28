import { PiPlusBold } from "react-icons/pi";
import { AiOutlineMinus } from "react-icons/ai";
import Button from "./Button";
import { useState } from "react";
function Amount({ amount, onZero }) {
  const [count, setCount] = useState(amount);
  function incCount() {
    setCount(count => count +1);
  }
  function decCount() {
    count > 1 ? setCount(count => count - 1) : onZero();
  }
  return (
    <div className="flex justify-center align-middle gap-2 items-center">
      <Button onClick={incCount}>
        <PiPlusBold />
      </Button>
      <span>{count}</span>
      <Button onClick={decCount}>
        <AiOutlineMinus />
      </Button>
    </div>
  );
}

export default Amount;
