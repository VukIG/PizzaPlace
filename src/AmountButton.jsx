// AmountButton.jsx
import { FaPlus } from 'react-icons/fa';
import Amount from './Amount';
import Button from './Button';
import { incrementItem, decrementItem } from './store/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import {selectItems } from './store/cartSlice';

function AmountButton({ id }) {
  const cartItems = useSelector(selectItems);
  const itemInCart = cartItems.find((item) => item.id === id);
  const amount = itemInCart ? itemInCart.count : 0;
  const dispatch = useDispatch();
  function incCount(e) {
    e.preventDefault();
    dispatch(incrementItem(id));
  }

  function decCount(e) {
    e.preventDefault();
    dispatch(decrementItem(id));
  }

  return (
    <div className="mr-5">
      {amount > 0 ? (
        <Amount amount={amount} onIncrement={incCount} onDecrement={decCount} />
      ) : (
        <Button onClick={incCount}>
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
