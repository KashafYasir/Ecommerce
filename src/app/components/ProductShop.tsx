"use client"
import React, { useState } from 'react';
import '../styles/productShop.css';


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
    <div className="product-c">
      <div className="image-container">
        <img src={`${imageId}`} alt={name} />
        <div className="discount-label">{discount}</div>
      </div>
      <div className="product-i">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="price-info">
          <span className="price">{price}</span>
          <span className="original-price">{originalPrice}</span>
        </div>
      </div>
    </div>
  );
};

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    
    <div style={styles.paginationContainer}>
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={page === currentPage ? styles.activePage : styles.pageButton}
        >
          {page}
        </button>
      ))}
   
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={styles.pageButton}
      >
        Next
      </button>
    </div>
      
    
  );
};

const styles = {
  paginationContainer: {
    display: 'flex',
    gap: '38px',
    alignItems: 'center',
  },
  pageButton: {
    width: '60px',
    height: '60px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '30px',
    color: '#000',
 
    cursor: 'pointer',
   
  },
  activePage: {
    width: '60px',
    height: '60px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    backgroundColor: '#b58500',
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '30px',
    color: '#fff',
    cursor: 'pointer',
 
  },
};

const ProductShop: React.FC = () => {
  const products = [
    { imageId: '1', name: 'Syltherine', description: 'Stylish cafe chair', price: 'Rp 2.500.000', originalPrice: 'Rp 3.500.000', discount: '-30%' },
    { imageId: '2', name: 'Leviosa', description: 'Stylish cafe chair', price: 'Rp 2.500.000', originalPrice: '', discount: '' },
    { imageId: '3', name: 'Lolito', description: 'Luxury big sofa', price: 'Rp 7.000.000', originalPrice: 'Rp 14.000.000', discount: '-50%' },
    { imageId: '4', name: 'Respira', description: 'Outdoor bar table and stool', price: 'Rp 500.000', originalPrice: '', discount: 'New' },
    { imageId: '1', name: 'Syltherine', description: 'Stylish cafe chair', price: 'Rp 2.500.000', originalPrice: 'Rp 3.500.000', discount: '-30%' },
    { imageId: '2', name: 'Leviosa', description: 'Stylish cafe chair', price: 'Rp 2.500.000', originalPrice: '', discount: '' },
    { imageId: '3', name: 'Lolito', description: 'Luxury big sofa', price: 'Rp 7.000.000', originalPrice: 'Rp 14.000.000', discount: '-50%' },
    { imageId: '4', name: 'Respira', description: 'Outdoor bar table and stool', price: 'Rp 500.000', originalPrice: '', discount: 'New' },
    { imageId: '1', name: 'Syltherine', description: 'Stylish cafe chair', price: 'Rp 2.500.000', originalPrice: 'Rp 3.500.000', discount: '-30%' },
    { imageId: '2', name: 'Leviosa', description: 'Stylish cafe chair', price: 'Rp 2.500.000', originalPrice: '', discount: '' },
    { imageId: '3', name: 'Lolito', description: 'Luxury big sofa', price: 'Rp 7.000.000', originalPrice: 'Rp 14.000.000', discount: '-50%' },
    { imageId: '4', name: 'Respira', description: 'Outdoor bar table and stool', price: 'Rp 500.000', originalPrice: '', discount: 'New' },
    
  ];

  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 3;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="product-g">
      <div className="products">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default ProductShop;

