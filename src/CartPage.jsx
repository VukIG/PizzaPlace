import { clearCart } from './store/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import CartItems from './CartItems';
import EmptyCart from './EmptyCart';
function CardPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className="p-5 h-screen">
      <div className="pt-5">
        <h1 className="font-bold text-4xl">Cart</h1>
      </div>
      {cartItems.length > 0 ? (
        <CartItems
          items={cartItems}
          onChange={() => {
            dispatch(clearCart());
          }}
        />
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default CardPage;
