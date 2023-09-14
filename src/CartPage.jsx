import CartItems from './CartItems';
import EmptyCart from './EmptyCart';
import { useCart } from './CartContext';
function CardPage() {
  const { cartItems, clearCart } = useCart();

  return (
    <div className="p-5 h-screen">
      <div className="pt-5">
        <h1 className="font-bold text-4xl">Cart</h1>
      </div>
      {cartItems.length > 0 ? (
        <CartItems
          items={cartItems}
          onChange={() => {
            clearCart();
          }}
        />
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default CardPage;
