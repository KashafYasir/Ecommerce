import React from 'react';
import '../styles/ProductGrid.css'

interface ProductCardProps {
  imageId: string;
  name: string;
  description: string;
  price: string;
  originalPrice: string;
  discount?: string;
  label?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageId,
  name,
  description,
  price,
  originalPrice,
  discount,
  label,
}) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img
          src={`${imageId}`}
          alt="chair"
          className="product-image"
        />
         <img
          src={`${imageId}`}
          alt="Chair"
          className="product-image"
        />
         <img
          src={`${imageId}`}
          alt="chair"
          className="product-image"
        />
        {discount && <div className="discount-badge">{discount}</div>}
        {label && <div className="label-badge">{label}</div>}
      </div>
      <div className="product-info">
        <h2 className="product-name">{name}</h2>
        <p className="product-description">{description}</p>
        <div className="product-pricing">
          <span className="product-price">{price}</span>
          <span className="product-original-price">{originalPrice}</span>
        </div>
      </div>
    </div>
  );
};

const ProductGrid: React.FC = () => {
  const products = [
    {
  imageId: '/table.jpeg', name: 'Syltherine', description: 'Stylish cafe chair', price: 'Rp 2.500.000', originalPrice: 'Rp 3.500.000', discount: '-30%' },
    { imageId: '/chair.jpeg', name: 'Leviosa', description: 'Stylish cafe chair', price: 'Rp 2.500.000', originalPrice: 'Rp 3.500.000' },
    { imageId: '/whitesofa.jpeg', name: 'Lolito', description: 'Luxury big sofa', price: 'Rp 7.000.000', originalPrice: 'Rp 14.000.000', discount: '-50%' },
    { imageId: '/blacksofa.jpeg', name: 'Respira', description: 'Outdoor bar table and stool', price: 'Rp 500.000', originalPrice: '', label: 'New' },
    { imageId: '/table.jpeg', name: 'Grifo', description: 'Night lamp', price: 'Rp 1.500.000', originalPrice: '' },
    { imageId: '/chair.jpeg', name: 'Muggo', description: 'Small mug', price: 'Rp 150.000', originalPrice: '' },
    { imageId: '/whitesofa.jpeg', name: 'Pingky', description: 'Cute bed set', price: 'Rp 7.000.000', originalPrice: 'Rp 14.000.000', discount: '-50%' },
    { imageId: 'blacksofa.jpeg', name: 'Potty', description: 'Minimalist flower pot', price: 'Rp 500.000', originalPrice: '', label: 'New' },
  ];

  return (
    <div className="product-grid">
      <h1 className="grid-title">Our Products</h1>
      <div className="grid-container">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <div className="show-more-container">
        <button className="show-more-button">Show More</button>
      </div>
    </div>
  );
};

export default ProductGrid;
