import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(
        item => 
          item.id === action.payload.id && 
          item.selectedSize === action.payload.selectedSize &&
          item.selectedColor === action.payload.selectedColor
      );
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id && 
            item.selectedSize === action.payload.selectedSize &&
            item.selectedColor === action.payload.selectedColor
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload]
        };
      }
    
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => 
          !(item.id === action.payload.id && 
            item.selectedSize === action.payload.selectedSize &&
            item.selectedColor === action.payload.selectedColor)
        )
      };
    
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id && 
          item.selectedSize === action.payload.selectedSize &&
          item.selectedColor === action.payload.selectedColor
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    
    case 'TOGGLE_CART':
      return {
        ...state,
        isOpen: !state.isOpen
      };
    
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false
  });

  const addToCart = (product, selectedSize, selectedColor, quantity = 1) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...product,
        selectedSize,
        selectedColor,
        quantity
      }
    });
  };

  const removeFromCart = (product, selectedSize, selectedColor) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        id: product.id,
        selectedSize,
        selectedColor
      }
    });
  };

  const updateQuantity = (product, selectedSize, selectedColor, quantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: {
        id: product.id,
        selectedSize,
        selectedColor,
        quantity
      }
    });
  };

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  const cartTotal = state.items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  const cartItemCount = state.items.reduce((count, item) => {
    return count + item.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{
      items: state.items,
      isOpen: state.isOpen,
      cartTotal,
      cartItemCount,
      addToCart,
      removeFromCart,
      updateQuantity,
      toggleCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 