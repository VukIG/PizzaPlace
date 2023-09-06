import { PiPlusBold } from "react-icons/pi";
import { AiOutlineMinus } from "react-icons/ai";
import Button from "./Button";
import { useState, useEffect } from "react";
import { json } from "react-router-dom";

function Amount({ amount, name, price, onChange, className = "" }) {
  const [count, setCount] = useState(amount);
  let storageItems = JSON.parse(localStorage.getItem("items")) || [];
  function addProduct() {
    if (storageItems != null) {
      let product = storageItems.find((item) => item.name === name);
      if (product) {
        product.count = count;
      } else {
        const newItem = {
          name: name,
          price: price,
          count: count,
        };
        storageItems.push(newItem);
      }
      localStorage.setItem("items", JSON.stringify(storageItems));
    }
  }
  function removeProduct() {
    let newItemList = storageItems.filter((item) => item.count !== 0);
    storageItems = newItemList;
    localStorage.setItem("items", JSON.stringify(newItemList));
  }
  useEffect(() => {
    count < 1 ? removeProduct() : addProduct();
  }, [count]);

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
