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
  function incCount(id,count) {
    item = grabItemInfo(id);
    const index = cartItems.findIndex((item) => item.id === id);
    if( index === -1 ){
      const {name,count,price}=item;
      cartItems.push({ name, count, price, id });
    }
    else if (count !== 0){
      cartItems[index].count = count+1;
    }
    updateCartItems([...cartItems]);
  }
  function decCount(id,count) {
    const index = cartItems.findIndex((item) => item.id === id);
    if( count>1 ){
      cartItems[index].count = count-1;
    }else{
      cartItems.splice(index, 1);
    }
    updateCartItems([...cartItems]);
  }

  function grabItemInfo(id) {
    const item = data.find((item) => {
      return item.id === id;
    });
    return item;
  }

  function removeItem(id) {
    setCartItems((prevList) => prevList.filter((item) => item.id !== id));
  }

  function calculateTotal() {
    let totalPrice = cartItems.reduce((total, item) => {
      return total + item.price * item.count;
    }, 0);
    return totalPrice.toFixed(2);
  }
  return (
    <CartContext.Provider
      value={{
        cartItems,
        updateCartItems,
        numberOfItems,
        clearCart,
        removeItem,
        incCount,
        decCount,
        grabItemInfo,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
