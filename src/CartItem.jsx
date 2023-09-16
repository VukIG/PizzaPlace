import Amount from './Amount';
import Button from './Button';
import { useCart } from './CartContext';

function CartItem({ item }) {
  const { name, price, id, count } = item;
  const { onIncrement, onDecrement } = useCart();
  const { removeItem } = useCart();
  function incCount(e) {
    e.preventDefault();
    onIncrement(id, count);
  }

  function decCount(e) {
    e.preventDefault();
    onDecrement(id, count);
  }
  return (
    <div className="flex justify-between py-5 border-b border-black items-center">
      <div className="flex justify-around gap-3 items-baseline">
        <h1 className="text-3xl">{count}</h1>
        <span>X</span>
        <h1 className="text-3xl">{name}</h1>
      </div>
      <div className="flex justify-around gap-3 items-center">
        <h1 className="font-bold text-3xl">${(price * count).toFixed(2)}</h1>
        <Amount
          onIncrement={incCount}
          onDecrement={decCount}
          amount={count}
          onRemove={() => {
            removeItem(id);
          }}
        />
        <Button
          className="h-12"
          onClick={() => {
            removeItem(id);
          }}
        >
          Remove
        </Button>
      </div>
    </div>
  );
}

export default CartItem;
