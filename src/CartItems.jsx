import { useState } from "react";
import Button from "./Button";
import CartItem from "./CartItem";

function CartItems({ items, onChange }) {
  const [list, setList] = useState(items);
  function calculateTotal() {
    let totalPrice = list.reduce((total, item) => {
      return total + item.price * item.count;
    }, 0);
    return totalPrice.toFixed(2);
  }

  function removeItem(id) {
    if (list.length == 1) {
      onChange();
    }
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
            if (newCount == 0) {
              removeItem(item.id);
            }
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
          <h1>${calculateTotal()}</h1>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
