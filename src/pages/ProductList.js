import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products';
import './ProductList.css';

const ProductList = () => {
  const { category } = useParams();
  
  // Filter products by category (case-insensitive)
  const filteredProducts = products.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );

  const getCategoryTitle = (category) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <div className="product-list">
      <div className="container">
        <div className="page-header">
          <h1>{getCategoryTitle(category)} Collection</h1>
          <p>Discover our latest {category.toLowerCase()} fashion items</p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="no-products">
            <h2>No products found</h2>
            <p>We're working on adding more {category.toLowerCase()} products.</p>
            <Link to="/" className="back-home">Back to Home</Link>
          </div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <Link 
                key={product.id} 
                to={`/product/${product.id}`} 
                className="product-card"
              >
                <div className="product-image">
                  <img src={product.images[0]} alt={product.name} />
                  <div className="product-overlay">
                    <span className="view-details">View Details</span>
                  </div>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-category">{product.category}</p>
                  <p className="product-price">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList; 