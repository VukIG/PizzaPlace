import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";
import { useState } from "react";
function CardPage() {
  const[items,setItems]=useState("");
  function retriveItems() {
    fetch('http://localhost:3000/items', {
      method:"GET",
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify()
    })
    .then((response)=>response.json)
    .then((items) => {
      setItems(items);
    })
    .catch(() => {
      return false;
    });
  }
  return (
    <div className="p-5 h-screen">
      <div className="pt-5">
        <h1 className="font-bold text-4xl">Cart</h1>
      </div>
      {
        retriveItems()!=false ? <CartItems items={items}/> : <EmptyCart/>
      }
      
    </div>
  );
}

export default CardPage;