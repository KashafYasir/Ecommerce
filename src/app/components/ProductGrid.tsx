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
          src={`_${1}`}
          alt="chair"
          className="product-image"
        />
         <img
          src={`https://s3-alpha-sig.figma.com/img/2084/99f3/7c62fb49f7d4a1a6a5dc5959b40150ed?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KGgPoxLDFIWiK-XNxN8kl8mLRyW3lDeR8u1iOgAvZNtUakPNswq~E0BXv7sXxV7Ljan8tJa6IZ69OrtSA~hOeJmZpui-KFn7AwzvmjzLdRzySOygzXdj-9yMjf4LZKbUV5dNuy~EhyG3SsCZbqs4fW83vZZuL1IyWw29tAQoyW-V~e8YpgfpEcXraPAptC7GCgcRVqeagwVeVX22Ua9deUH6iFxMGjNv0eza52naGRU8xBWGWeiucer7mBlPGO-bU2MA-bkmTISuiQExFV4uEEISkD8FzlJIhJbFbv9V8J4sIkSYNC9QrhIKivJePLsbZIiyTdxVNiBYNe7DApIzMw__${2}`}
          alt="Chair"
          className="product-image"
        />
         <img
          src="https://s3-alpha-sig.figma.com/img/1f73/e563/4a5dbc0c29efbae1beca6ab40dd9b598?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g5WIoe~p317suY-0jLxVhxDMCcleJZLU-U6e8m3ZmnVqk5DRSG6J1KYfh7HWy7tg8R259dgbULyUBvNxuAahBJG37qrsProPMbZpOAyfQBkaGGHMiAJBPVPVDTmNMYpsCXqK0o4bL5aeXqhElTcdPHESICMEyxQO2aM-RvvX1LHtjs~YHqxsi4i-EBrCaJjWnd1M9TP3Rw8768Sorgvt~Rn9CQrJKyfku5IxjTTpS9~q~pcdpF8jGJSE4cJBOgCu8aH7GbJmJU9yeT79PCYxNCEGaWk4TOzZr~l4vpkr3dqXerVLhl0Ilrtk07IkUj7SKZ2O9BTtwRsIblLPyDDw1g_"
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
  imageId: '1', name: 'Syltherine', description: 'Stylish cafe chair', price: 'Rp 2.500.000', originalPrice: 'Rp 3.500.000', discount: '-30%' },
    { imageId: '2', name: 'Leviosa', description: 'Stylish cafe chair', price: 'Rp 2.500.000', originalPrice: 'Rp 3.500.000' },
    { imageId: '3', name: 'Lolito', description: 'Luxury big sofa', price: 'Rp 7.000.000', originalPrice: 'Rp 14.000.000', discount: '-50%' },
    { imageId: '4', name: 'Respira', description: 'Outdoor bar table and stool', price: 'Rp 500.000', originalPrice: '', label: 'New' },
    { imageId: '5', name: 'Grifo', description: 'Night lamp', price: 'Rp 1.500.000', originalPrice: '' },
    { imageId: '6', name: 'Muggo', description: 'Small mug', price: 'Rp 150.000', originalPrice: '' },
    { imageId: '7', name: 'Pingky', description: 'Cute bed set', price: 'Rp 7.000.000', originalPrice: 'Rp 14.000.000', discount: '-50%' },
    { imageId: '8', name: 'Potty', description: 'Minimalist flower pot', price: 'Rp 500.000', originalPrice: '', label: 'New' },
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
