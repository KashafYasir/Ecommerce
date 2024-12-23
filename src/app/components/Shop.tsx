import React from 'react';
import '../styles/Shop.css';



const ShopComponent: React.FC = () => {
  return (
    
    <div id='shop' className="shop-container">
     
      <div className="shop-background">
        <div className="shop-title">
          <h1>Shop</h1>
        </div>
        <div className="shop-breadcrumb">
          <span>Home</span>
          <span className="breadcrumb-separator">&gt;</span>
          <span>Shop</span>
        </div>
      </div>
     

      
    </div>
  );
};

export default ShopComponent;

