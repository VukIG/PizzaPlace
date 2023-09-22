import data from '../mockData';

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('items')) || [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      const updatedCartRemove = state.cartItems.filter((item) => item.id !== action.payload);
      localStorage.setItem('items', JSON.stringify(updatedCartRemove));

      return { ...state, cartItems: updatedCartRemove };

    case 'CLEAR_CART':
      localStorage.setItem('items', JSON.stringify([]));
      return { ...state, cartItems: [] };

    case 'INCREMENT_ITEM':
      const incIndex = state.cartItems.findIndex((item) => item.id === action.payload);
      if (incIndex === -1) {
        const item = data.find((item) => item.id === action.payload);
        if (item) {
          const { name, price } = item;
          const newItem = { name, count: 1, price, id: action.payload };
          const updatedCartIncrement = [...state.cartItems, newItem];
          localStorage.setItem('items', JSON.stringify(updatedCartIncrement));
          return { ...state, cartItems: updatedCartIncrement };
        }
      } else if (state.cartItems[incIndex].count !== 0) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[incIndex] = { ...updatedCartItems[incIndex], count: updatedCartItems[incIndex].count + 1 };
        localStorage.setItem('items', JSON.stringify(updatedCartItems));
        return { ...state, cartItems: updatedCartItems };
      }
      return state;

    case 'DECREMENT_ITEM':
      const decIndex = state.cartItems.findIndex((item) => item.id === action.payload);
      if (decIndex !== -1) {
        if (state.cartItems[decIndex].count > 1) {
          const updatedCartDecrement = [...state.cartItems];
          updatedCartDecrement[decIndex] = { ...updatedCartDecrement[decIndex], count: updatedCartDecrement[decIndex].count - 1 };
          localStorage.setItem('items', JSON.stringify(updatedCartDecrement));
          return { ...state, cartItems: updatedCartDecrement };
        } else {
          const updatedCartRemove = state.cartItems.filter((item, index) => index !== decIndex);
          localStorage.setItem('items', JSON.stringify(updatedCartRemove));
          return { ...state, cartItems: updatedCartRemove };
        }
      }
      return state;

    case 'NUMBER_OF_ITEMS':
      let totalItems = 0
      if (state.cartItems.length>0) {
        totalItems = state.cartItems.reduce((sum, item) => sum + item.count, 0);
      }
      return { ...state, totalItems };
      

    case 'CALCULATE_TOTAL':
      let totalPrice = 0; 
      if (state.cartItems.length > 0) {
        totalPrice = state.cartItems.reduce((sum, item) => sum + item.count * item.price, 0).toFixed(2);
      }
      return { ...state, totalPrice };

    default:
      return state;
  }
};

export default reducers;
