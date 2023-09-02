import { useState, useEffect } from "react";
import Amount from "./Amount";
import Button from "./Button";
import { FaPlus } from "react-icons/fa";

function AmountButton({ dataProp }) {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(count);

  function changeCount(e) {
    e.preventDefault();
    setCount((count) => count + 1);
    setData(count);
  }
  useEffect(() => {
    dataProp(count);
  }, [count, dataProp]);
  return (
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
  );
}

export default AmountButton;
