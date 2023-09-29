import Button from './Button';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { selectItems, selectTotalPrice } from './store/cartSlice';
function CartItems({ onChange }) {
  const cartItems = useSelector(selectItems);
  console.log(cartItems);
  let totalPrice = useSelector(selectTotalPrice);
  return (
    <div className="w-full h-[80vh]">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <div className="flex justify-between items-center mt-5">
        <div className="flex gap-3">
          <Button>Finish ordering</Button>
          <Button className="bg-white border hover:text-white border-orange-400 text-orange-400" onClick={onChange}>
            Clear cart
          </Button>
        </div>
        <div className="flex font-bold text-3xl gap-2">
          <h1>TOTAL:</h1>
          <h1>${totalPrice}</h1>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
