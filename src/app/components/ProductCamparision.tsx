import React from 'react';
import '../styles/ProductCamparision.css';
import Navbar from './Navbar';


const ProductCamparision: React.FC = () => {
  return (
    
    <div className="productcamparision-container">
     
      <div className="productcamparision-background">
        <div className="productcamparision-title">
          <h1>ProductCamparision</h1>
        </div>
        <div className="productcamparision-breadcrumb">
          <span>Home</span>
          <span className="breadcrumb-separator">&gt;</span>
          <span>ProductCamparision</span>
        </div>
      </div>
   

      
    </div>
  );
};

export default ProductCamparision;

