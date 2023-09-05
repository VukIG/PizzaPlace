import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";
import { useState, useEffect } from "react";
function CardPage() {
  //za sada koristim samo objekat items, prilikom izrade cart logic tiketa logika ce biti promenjena
  const listOfItems = [
    {
      title: "Margherita Supreme",
      price: 12.99,
      count: 1,
      id: 1,
    },
    {
      title: "Spicy Veggie Fiesta",
      price: 14.99,
      count: 1,
      id: 2,
    },
    {
      title: "Margherita Supreme",
      price: 12.99,
      count: 1,
      id: 3,
    },
  ];
  const [items, setItems] = useState(listOfItems);
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
