import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  const updateCartItems = (newCartItems) => {
    const updatedItems = newCartItems || []; // Ensure it's an array, even if newCartItems is undefined
    setCartItems(updatedItems);
    console.log(updatedItems)
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };
  
  return (
    <CartContext.Provider value={{ cartItems, updateCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
