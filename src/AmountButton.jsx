import { useState,useEffect } from 'react';
import Amount from './Amount';
import Button from './Button';
import { FaPlus } from 'react-icons/fa';
import { useCart } from './CartContext';

function AmountButton({ id }) {
  const { removeItem, grabItemInfo, cartItems, onIncrement, onDecrement } = useCart();
  const itemInfo = grabItemInfo(id);
  const { name, price } = itemInfo || {};
  const itemInCart = cartItems.find((item) => item.id === id);
  const amount = itemInCart ? itemInCart.count : 0;
  const [count, setCount] = useState(amount || 0);

  function incCount(e) {
    e.preventDefault(); 
    onIncrement(id,count);  
  }

  function decCount(e) {
    e.preventDefault();
    onDecrement(id,count);
  }


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
          onIncrement={incCount}
          onDecrement={decCount}

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
