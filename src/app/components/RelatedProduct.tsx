"use client"
import React from 'react';
import '../styles/RelatedProduct.css'
interface ProductCardProps {
  imageId: string;
  name: string;
  description: string;
  price: string;
  originalPrice: string;
  discount: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageId,
  name,
  description,
  price,
  originalPrice,
  discount,
}) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img
          src={`${imageId}`}
          alt={name}
          className="product-image"
        />
        <div className="discount-label">{discount}</div>
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

interface ShowMoreButtonProps {
  onClick: () => void;
}

const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({ onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="show-more-button"
    >
      Show More
    </button>
  );
};

const RelatedProducts: React.FC = () => {
  const products = [
    {
      imageId: '1',
      name: 'Syltherine',
      description: 'Stylish cafe chair',
      price: 'Rp 2.500.000',
      originalPrice: 'Rp 3.500.000',
      discount: '-30%'
    },
    {
      imageId: '2',
      name: 'Leviosa',
      description: 'Stylish cafe chair',
      price: 'Rp 2.500.000',
      originalPrice: 'Rp 3.500.000',
      discount: '-30%'
    },
    {
      imageId: '3',
      name: 'Lolito',
      description: 'Luxury big sofa',
      price: 'Rp 7.000.000',
      originalPrice: 'Rp 14.000.000',
      discount: '-50%'
    },
    {
      imageId: '4',
      name: 'Respira',
      description: 'Outdoor bar table and stool',
      price: 'Rp 500.000',
      originalPrice: '',
      discount: 'New'
    }
  ];

  const handleShowMore = () => {
    console.log('Show more products');
  };

  return (
    <div className="related-products">
      <h1 className="title">Related Products</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <ShowMoreButton onClick={handleShowMore} />
    </div>
  );
};

export default RelatedProducts;
