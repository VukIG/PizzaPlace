import { useState } from "react";
import Amount from "./Amount";
import Button from "./Button";
import { FaPlus } from "react-icons/fa";
import { useCart } from "./Context";

function AmountButton({ name, price, amount, id }) {
  const { cartItems, updateCartItems } = useCart();
  const [count, setCount] = useState(amount);

  function changeCount(e) {
    e.preventDefault();
    setCount((count) => count + 1);
  }
  function removeItem() {
    setCount(0);
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    updateCartItems(updatedCartItems);
  }

  return (
    <div className="mr-5">
      {count > 0 ? (
        <Amount
          amount={count}
          name={name}
          price={price}
          id={id}
          onChange={() => {
            removeItem(id);
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
