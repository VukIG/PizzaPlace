import { createContext, useContext, useState } from 'react';
import data from './mockData';
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('items')) || []);

  const updateCartItems = (newCartItems) => {
    const updatedItems = newCartItems || [];
    setCartItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  function numberOfItems() {
    const totalNum = cartItems.reduce((sum, item) => {
      return sum + item.count;
    }, 0);
    return totalNum;
  }
  function removeItem(id) {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    updateCartItems(updatedCartItems);
  }
  function clearCart() {
    setCartItems([]);
  }
  function addOrRemoveItem(id, count) {
    const index = cartItems.findIndex((item) => item.id === id);
    const item = data.find((item) => {
      return item.id === id;
    });
    const { name, price } = item || {};
    if (count === 0 && index !== -1) {
      cartItems.splice(index, 1);
    } else if (count !== 0 && index !== -1) {
      cartItems[index].count = count;
    } else if (name !== undefined) {
      cartItems.push({ name, count, price, id });
    }
    updateCartItems([...cartItems]);
  }
  function grabItemInfo(id) {
    const item = data.find((item) => {
      return item.id === id;
    });
    return item;
  }
  return (
    <CartContext.Provider
      value={{ cartItems, updateCartItems, numberOfItems, clearCart, removeItem, addOrRemoveItem, grabItemInfo }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
