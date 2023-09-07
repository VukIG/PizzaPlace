import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";
import { useCart } from "./Context";
function CardPage() {
  const { cartItems, updateCartItems } = useCart();

  return (
    <div className="p-5 h-screen">
      <div className="pt-5">
        <h1 className="font-bold text-4xl">Cart</h1>
      </div>
      {cartItems.length > 0 ? (
        <CartItems
          items={cartItems}
          onChange={() => {
            updateCartItems([]);
          }}
        />
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default CardPage;
