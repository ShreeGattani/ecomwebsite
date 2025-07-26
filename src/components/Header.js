import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = () => {
  const { cartItemCount, toggleCart } = useCart();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>EcomStore</h1>
        </Link>
        
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products/men" className="nav-link">Men</Link>
          <Link to="/products/women" className="nav-link">Women</Link>
          <Link to="/products/kids" className="nav-link">Kids</Link>
        </nav>
        
        <div className="cart-icon" onClick={toggleCart}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
            <path d="M20 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          {cartItemCount > 0 && (
            <span className="cart-count">{cartItemCount}</span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 