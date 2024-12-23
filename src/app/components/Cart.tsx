import React from 'react';
import '../styles/Cart.css';



const ShopComponent: React.FC = () => {
  return (
    
    <><div className="cart-container">

          <div className="cart-background">
              <div className="cart-title">
                  <h1>Cart</h1>
              </div>
              <div className="cart-breadcrumb">
                  <span>Home</span>
                  <span className="breadcrumb-separator">&gt;</span>
                  <span>Cart</span>
              </div>
          </div>




      </div><div className="cartcomponent-container">
              <div className="cart-table">
                  <div className="cart-header">
                      <div>Product</div>
                      <div>Price</div>
                      <div>Quantity</div>
                      <div>Subtotal</div>
                  </div>
                  <div className="cart-item">
                      <img src="https://dashboard.codeparrot.ai/api/assets/Z1XN94wTRzcMVVtb" alt="Product" className="product-image" />
                      <div className="product-name">Asgaard sofa</div>
                      <div className="product-price">Rs. 250,000.00</div>
                      <input type="number" className="product-quantity" value="1" readOnly />
                      <div className="product-subtotal">Rs. 250,000.00</div>
                      <button className="delete-button">🗑️</button>
                  </div>
              </div>
              <div className="cart-totals">
                  <h2>Cart Totals</h2>
                  <div className="totals-row">
                      <span>Subtotal</span>
                      <span className="subtotal-amount">Rs. 250,000.00</span>
                  </div>
                  <div className="totals-row">
                      <span>Total</span>
                      <span className="total-amount">Rs. 250,000.00</span>
                  </div>
                  <button className="checkout-button">Check Out</button>
              </div>
          </div>
          
          </>


       
    
  );
};

export default ShopComponent;

