import { useState, useEffect } from "react";
import Button from "./Button";
import CartItem from "./CartItem";

function CartItems({ items, onChange }) {
  const [list, setList] = useState(items);
  const [total, setTotal] = useState(0);

  function calculateTotal() {
    let totalPrice = 0;
    list.forEach((item) => {
      totalPrice += item.price * item.count;
    });
    setTotal(totalPrice);
  }

  useEffect(() => {
    calculateTotal();
  }, [list]);

  function removeItem(id) {
    setList((prevList) => prevList.filter((item) => item.id !== id));
  }

  function setCount(id, newCount) {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, count: newCount } : item,
      ),
    );
  }

  return (
    <div className="w-full h-[80vh]">
      {list.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          amount={item.count}
          onZero={() => {
            removeItem(item.id);
          }}
          onChange={(newCount) => {
            setCount(item.id, newCount);
          }}
        />
      ))}

      <div className="flex justify-between items-center mt-5">
        <div className="flex gap-3">
          <Button>Finish ordering</Button>
          <Button
            className="bg-white border hover:text-white border-orange-400 text-orange-400"
            onClick={onChange}
          >
            Clear cart
          </Button>
        </div>
        <div className="flex font-bold text-3xl gap-2">
          <h1>TOTAL:</h1>
          <h1>${total}</h1>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
