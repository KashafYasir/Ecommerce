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
          src={`https://placeholder.pics/svg?${imageId}`}
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
      imageUrl:'"https://s3-alpha-sig.figma.com/img/1421/901b/217b5f7ea72cbcd9ce3062c4165744e5?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mhwyP9paCQt1Q-cE5kI3f8HCoEJfRarh7lN8laRWyui0ELgcn~AdXEt0O2nuvBvLNKLV99q92P7tdaJousg25CP4EcrTxebV3UF--LatnhBlaPe1dBgRh-tdb0K9ABwxYpbNHGMWXiOyWbfi24JSCqVSUq2JtaJF-OB5-xCWtxV~yPcgzU9b78-8d8U29HmnmO6JhFblfMSoJYXNcmazsBWsf8OatDBICKdHYbUZ-CMJOkf0jAHlOFC3WaoD-6SHbAiCOABl83aO32qK-hozLjRYUBqA2E12Dj7c23v664MOn-cSZel8a9BOLJJ8AvWEh7jrWSzPCnWp5HsaSs5Hdw__"',
      imageId: '1',
      name: 'Syltherine',
      description: 'Stylish cafe chair',
      price: 'Rp 2.500.000',
      originalPrice: 'Rp 3.500.000',
      discount: '-30%'
    },
    {
      imageUrl:'"https://s3-alpha-sig.figma.com/img/1421/901b/217b5f7ea72cbcd9ce3062c4165744e5?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mhwyP9paCQt1Q-cE5kI3f8HCoEJfRarh7lN8laRWyui0ELgcn~AdXEt0O2nuvBvLNKLV99q92P7tdaJousg25CP4EcrTxebV3UF--LatnhBlaPe1dBgRh-tdb0K9ABwxYpbNHGMWXiOyWbfi24JSCqVSUq2JtaJF-OB5-xCWtxV~yPcgzU9b78-8d8U29HmnmO6JhFblfMSoJYXNcmazsBWsf8OatDBICKdHYbUZ-CMJOkf0jAHlOFC3WaoD-6SHbAiCOABl83aO32qK-hozLjRYUBqA2E12Dj7c23v664MOn-cSZel8a9BOLJJ8AvWEh7jrWSzPCnWp5HsaSs5Hdw__"',

      imageId: '2',
      name: 'Leviosa',
      description: 'Stylish cafe chair',
      price: 'Rp 2.500.000',
      originalPrice: 'Rp 3.500.000',
      discount: '-30%'
    },
    {
      imageUrl:'"https://s3-alpha-sig.figma.com/img/1421/901b/217b5f7ea72cbcd9ce3062c4165744e5?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mhwyP9paCQt1Q-cE5kI3f8HCoEJfRarh7lN8laRWyui0ELgcn~AdXEt0O2nuvBvLNKLV99q92P7tdaJousg25CP4EcrTxebV3UF--LatnhBlaPe1dBgRh-tdb0K9ABwxYpbNHGMWXiOyWbfi24JSCqVSUq2JtaJF-OB5-xCWtxV~yPcgzU9b78-8d8U29HmnmO6JhFblfMSoJYXNcmazsBWsf8OatDBICKdHYbUZ-CMJOkf0jAHlOFC3WaoD-6SHbAiCOABl83aO32qK-hozLjRYUBqA2E12Dj7c23v664MOn-cSZel8a9BOLJJ8AvWEh7jrWSzPCnWp5HsaSs5Hdw__"',

      imageId: '3',
      name: 'Lolito',
      description: 'Luxury big sofa',
      price: 'Rp 7.000.000',
      originalPrice: 'Rp 14.000.000',
      discount: '-50%'
    },
    {
      imageUrl:'"https://s3-alpha-sig.figma.com/img/1421/901b/217b5f7ea72cbcd9ce3062c4165744e5?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mhwyP9paCQt1Q-cE5kI3f8HCoEJfRarh7lN8laRWyui0ELgcn~AdXEt0O2nuvBvLNKLV99q92P7tdaJousg25CP4EcrTxebV3UF--LatnhBlaPe1dBgRh-tdb0K9ABwxYpbNHGMWXiOyWbfi24JSCqVSUq2JtaJF-OB5-xCWtxV~yPcgzU9b78-8d8U29HmnmO6JhFblfMSoJYXNcmazsBWsf8OatDBICKdHYbUZ-CMJOkf0jAHlOFC3WaoD-6SHbAiCOABl83aO32qK-hozLjRYUBqA2E12Dj7c23v664MOn-cSZel8a9BOLJJ8AvWEh7jrWSzPCnWp5HsaSs5Hdw__"',

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
