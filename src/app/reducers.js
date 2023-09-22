const initialState = {
  cartItems: JSON.parse(localStorage.getItem('items')) || [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CART_ITEMS':
      return { ...state, cartItems: action.payload };
    
    case 'REMOVE_ITEM':
      const updatedCart = state.cartItems.filter((item) => item.id !== action.payload);
      return { ...state, cartItems: updatedCart };

    case 'CLEAR_CART':
      return { ...state, cartItems: [] };

    case 'INCREMENT_ITEM':
      const incIndex = state.cartItems.findIndex((item) => item.id === action.payload);
      if (incIndex === -1) {
        const item = grabItemInfo(action.payload);
        const { name, price } = item;
        state.cartItems.push({ name, count: 1, price, id: action.payload });
      } else if (state.cartItems[incIndex].count !== 0) {
        state.cartItems[incIndex].count++;
      }
      return { ...state, cartItems: [...state.cartItems] };

    case 'DECREMENT_ITEM':
      const decIndex = state.cartItems.findIndex((item) => item.id === action.payload);
      if (state.cartItems[decIndex].count > 1) {
        state.cartItems[decIndex].count--;
      } else {
        state.cartItems.splice(decIndex, 1);
      }
      return { ...state, cartItems: [...state.cartItems] };
    
      case 'NUMBER_OF_ITEMS':
        return state.cartItems != undefined ? state.cartItems.reduce((sum, item) => sum + item.count, 0) : 0;
      
      case 'CALCULATE_TOTAL':
        return state.cartItems != undefined ? state.cartItems.reduce((sum, item) => sum + item.count * item.price, 0) : 0;

    default:
      return state;
  }
};

export default reducers;
