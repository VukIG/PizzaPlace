import { useState } from 'react';
import Amount from './Amount';
import Button from './Button';
import { FaPlus } from 'react-icons/fa';
import { useCart } from './CartContext';

function AmountButton({ id }) {
  const { removeItem, grabItemInfo, cartItems } = useCart();
  const itemInfo = grabItemInfo(id);
  const { name, price } = itemInfo || {};

  const itemInCart = cartItems.find((item) => item.id === id);
  const amount = itemInCart ? itemInCart.count : 0;
  const [count, setCount] = useState(amount || 0);

  function changeCount(e) {
    e.preventDefault();
    setCount((count) => count + 1);
  }

  return (
    <div className="mr-5">
      {count > 0 ? (
        <Amount
          amount={count}
          name={name}
          price={price}
          id={id}
          onRemove={() => {
            setCount(0);
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
