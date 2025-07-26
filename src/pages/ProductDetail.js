import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import products from '../data/products';
import Magnifier from 'react-magnifier';
import './ProductDetail.css';

const getImageUrl = (url, size) => {
  // Replace w=...&h=... with new size
  return url.replace(/w=\d+/, `w=${size}`).replace(/h=\d+/, `h=${size}`);
};

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === parseInt(id));
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="product-detail">
        <div className="container">
          <div className="not-found">
            <h2>Product not found</h2>
            <p>The product you're looking for doesn't exist.</p>
            <Link to="/" className="back-home">Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select both size and color');
      return;
    }
    
    addToCart(product, selectedSize, selectedColor, quantity);
    alert('Product added to cart!');
  };

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const largeImg = getImageUrl(product.images[selectedImage], 1200);

  return (
    <div className="product-detail">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span> / </span>
          <Link to={`/products/${product.category.toLowerCase()}`}>{product.category}</Link>
          <span> / </span>
          <span>{product.name}</span>
        </div>

        <div className="product-content">
          <div className="product-gallery">
            <div className="main-image-container">
              <Magnifier
                src={product.images[selectedImage]}
                zoomImgSrc={largeImg}
                width={400}
                zoomFactor={2}
                mgWidth={150}
                mgHeight={150}
                mgBorderWidth={2}
                mgShape="square"
                mgShowOverflow={true}
                mgMouseOffsetX={0}
                mgMouseOffsetY={0}
              />
            </div>
            
            <div className="thumbnail-images">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={getImageUrl(image, 100)}
                  alt={`${product.name} ${index + 1}`}
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </div>
          </div>

          <div className="product-info">
            <h1>{product.name}</h1>
            <p className="product-category">{product.category}</p>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>

            <div className="variant-selection">
              <div className="size-selection">
                <h3>Size</h3>
                <div className="variant-options">
                  {product.variants.sizes.map((size) => (
                    <button
                      key={size}
                      className={`variant-btn ${selectedSize === size ? 'selected' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="color-selection">
                <h3>Color</h3>
                <div className="variant-options">
                  {product.variants.colors.map((color) => (
                    <button
                      key={color}
                      className={`variant-btn ${selectedColor === color ? 'selected' : ''}`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div className="quantity-selection">
                <h3>Quantity</h3>
                <div className="quantity-controls">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span className="quantity">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <button 
              className="add-to-cart-btn"
              onClick={handleAddToCart}
              disabled={!selectedSize || !selectedColor}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 