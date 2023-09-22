import Amount from './Amount';
import Button from './Button';
import { incrementItem, decrementItem, removeItem } from './app/actions';
import { useDispatch } from 'react-redux';
function CartItem({ item }) {
  const { name, price, id, count } = item;
  const dispatch=useDispatch();
  function incCount(e) {
    e.preventDefault();
    dispatch(incrementItem(id));
  }

  function decCount(e) {
    e.preventDefault();
    dispatch(decrementItem(id));
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
            dispatch(removeItem(id));
          }}
        />
        <Button
          className="h-12"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          Remove
        </Button>
      </div>
    </div>
  );
}

export default CartItem;
