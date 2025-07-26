import React from 'react';
import { useCart } from '../context/CartContext';
import './CartSidebar.css';

const CartSidebar = () => {
  const { 
    items, 
    isOpen, 
    cartTotal, 
    toggleCart, 
    removeFromCart, 
    updateQuantity 
  } = useCart();

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(item, item.selectedSize, item.selectedColor);
    } else {
      updateQuantity(item, item.selectedSize, item.selectedColor, newQuantity);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={toggleCart}></div>
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="close-btn" onClick={toggleCart}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="cart-content">
          {items.length === 0 ? (
            <div className="empty-cart">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                <path d="M20 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              <p>Your cart is empty</p>
              <button className="continue-shopping" onClick={toggleCart}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {items.map((item, index) => (
                  <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}-${index}`} className="cart-item">
                    <div className="item-image">
                      <img src={item.images[0]} alt={item.name} />
                    </div>
                    
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p className="item-variants">
                        Size: {item.selectedSize} | Color: {item.selectedColor}
                      </p>
                      <p className="item-price">${item.price}</p>
                      
                      <div className="quantity-controls">
                        <button 
                          onClick={() => handleQuantityChange(item, item.quantity - 1)}
                          className="quantity-btn"
                        >
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button 
                          onClick={() => handleQuantityChange(item, item.quantity + 1)}
                          className="quantity-btn"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item, item.selectedSize, item.selectedColor)}
                      className="remove-btn"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="cart-footer">
                <div className="cart-total">
                  <span>Total:</span>
                  <span className="total-amount">${cartTotal.toFixed(2)}</span>
                </div>
                <button className="checkout-btn">
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar; 