// AmountButton.jsx
import { FaPlus } from 'react-icons/fa';
import { useCart } from './CartContext';
import Amount from './Amount';
import Button from './Button';
function AmountButton({ id }) {
  const { cartItems, onIncrement, onDecrement } = useCart();
  const itemInCart = cartItems.find((item) => item.id === id);
  const amount = itemInCart ? itemInCart.count : 0;

  function incCount(e) {
    e.preventDefault();
    onIncrement(id);
  }

  function decCount(e) {
    e.preventDefault();
    onDecrement(id);
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
