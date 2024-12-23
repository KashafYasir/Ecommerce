"use client"
import React, { useState } from 'react';
import '../styles/ProductPage.css';

const ProductPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState('/asfarpc.jpg');
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);

  const images = [
    { id: '/1st.jpg' },
    { id: '/2nd.jpg' },
    { id: '/asfarpc2.jpg' },
    { id: '/brown.sofa.jpg' },
  ];

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="product-page">
      <div className="gallery-container">
        <div className="thumbnails">
          {images.map((image) => (
            <img
              key={image.id}
              src={`${image.id}`}
              alt="Product Thumbnail"
              className={`thumbnail ${selectedImage === image.id ? 'active' : ''}`}
              onClick={() => setSelectedImage(image.id)}
            />
          ))}
        </div>
        <div className="main-image">
          <img
            src={`${selectedImage}`}
            alt="Selected Product"
            className="selected-image"
          />
        </div>
      </div>
      <div className="product-details">
        <h1 className="title">Asgaard sofa</h1>
        <p className="price">Rs. 250,000.00</p>
        <div className="review">
          <span>★ ★ ★ ★ ★</span>
          <span className="review-text">5 Customer Review</span>
        </div>
        <p className="description">
          Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
        </p>
        <div className="size-selector">
          <div className="size-label">Size</div>
          <div className="size-options">
            {['L', 'XL', 'XS'].map((size) => (
              <button
                key={size}
                className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="color-selector">
          <h3 className="color-title">Color</h3>
          <div className="color-options">
            {['#000', '#6B44FF', '#D4AF37'].map((color, index) => (
              <div
                key={index}
                className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorSelect(color)}
              />
            ))}
          </div>
        </div>
        <div className="quantity-selector">
          <button className="decrement" onClick={handleDecrement}>-</button>
          <span className="quantity">{quantity}</span>
          <button className="increment" onClick={handleIncrement}>+</button>
        </div>
        <div className="action-buttons">
          <button className="add-to-cart">Add To Cart</button>
          <button className="compare">+ Compare</button>
        </div>
        <div className="product-meta">
          <div className="details">SKU: SS001</div>
          <div className="details">Category: Sofas</div>
          <div className="details">Tags: Sofa, Chair, Home, Shop</div>
        </div>
        <div className="social-icons">
          <img src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-facebook-icon-png-image_9015416.png" alt="Facebook" width="20" height="20" />
          <img src="https://th.bing.com/th/id/OIP.BFKsODAsFkgWZjQtPVMslgHaHa?rs=1&pid=ImgDetMain" alt="Twitter" width="25" height="25" />
          <img src="https://th.bing.com/th/id/OIP.NN_29U5mI6l_KAfhsxQksgHaHa?rs=1&pid=ImgDetMain" alt="LinkedIn" width="20" height="20" />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

