import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";
import { useState } from "react";
import { useCart } from "./Context";
function CardPage() {
  const { cartItems, updateCartItems} = useCart();
  const [items, setItems] = useState(cartItems);
  return (
    <div className="p-5 h-screen">
      <div className="pt-5">
        <h1 className="font-bold text-4xl">Cart</h1>
      </div>
      {items.length > 0 ? (
        <CartItems
          items={items}
          onChange={() => {
            setItems([]);
          }}
        />
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default CardPage;
