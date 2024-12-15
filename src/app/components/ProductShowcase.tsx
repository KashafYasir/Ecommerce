"use client"
import React from 'react';

interface ProductCardProps {
  imageId: string;
  title: string;
  rating: number;
  price: string;
}

const ProductCart: React.FC<ProductCardProps> = ({ imageId, title, rating, price }) => {
  return (
    // <div style={styles.card}>
      <img src={`https://placeholder.pics/svg?${imageId}`} alt={title} style={styles.image} />
    //   {/* <div style={styles.info}> */}
    //     <h2 style={styles.title}>{title}</h2>
    //     <div style={styles.rating}>{'⭐'.repeat(rating)}</div>
    //     <div style={styles.price}>{price}</div>
    //   </div>
    // // </div>
  );
};

interface AddToCartButtonProps {
  onClick: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onClick }) => {
  return (
    <button 
      onClick={onClick} 
      style={styles.addToCartButton}
    >
      Add To Cart
    </button>
  );
};

interface ProductDetailsProps {
  productName: string;
  productDescription: string;
  specifications: string[];
  warranty: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  productName,
  productDescription,
  specifications,
  warranty,
}) => {
  return (
    <div style={styles.productDetails}>
      <img 
        src={`https://s3-alpha-sig.figma.com/img/e8ee/1dc9/413c23f2d7371be94a52ea9020db45cc?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LmOPsf9DBZ4v0G2AA9BBzwyVXg3MBjcmD4EyNBQKK6DPFtzTyvIGyhr2~yQZdLJsQTlWjnmnrBE8VMcU5bKKiaybfwnnAQqwm-iQqer2T8RHwWrzUZefssBx9HQBUrnVhgEKJrGsZz2d9avJE-r~o7v-d~nN6nOQHyJhqojKwdka2srnNITSSaxMTL8FRtpdghdtOiwyDy28CwDa293G7X9HmOk63zdnpd9Y3kQFdAwpDnSYrcMcCyDdbzIq43f7BvFGxV2KMI9JwoJn0sP6YVIAIAeqq08j6Ro3f5xBfariMccGqhvlzXo5LwHhBCLLo7J8i~-~upTsn68IsI4wpw_`} 
        alt={productName} 
        // style={styles.productImage}
      />
      <h2 style={styles.productName}>{productName}</h2>
      <p style={styles.productDescription}>{productDescription}</p>
      <h3 style={styles.specificationsTitle}>Specifications:</h3>
      <ul>
        {specifications.map((spec, index) => (
          <li key={index} style={styles.specification}>{spec}</li>
        ))}
      </ul>
      <p style={styles.warranty}>Warranty: {warranty}</p>
      <AddToCartButton onClick={() => console.log('Added to cart!')} />
    </div>
  );
};

const ProductShowcase: React.FC = () => {
  return (
    <div style={styles.showcaseContainer}>
      <ProductCart imageId="117:725" title="Modern Sofa" rating={4} price="$999" />
      <ProductCart imageId="117:725" title="Classic Chair" rating={5} price="$199" />
      <ProductDetails 
        productName="Luxury Sofa Set"
        productDescription="A luxurious sofa set for your living room."
        specifications={["Leather", "Wooden Frame", "Comfort Cushions"]}
        warranty="2 Years"
      />
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '283px',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '16px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  info: {
    padding: '8px 0',
    textAlign: 'center',
  },
  title: {
    fontSize: '18px',
    margin: '8px 0',
  },
  rating: {
    color: '#ffcc00',
    marginBottom: '8px',
  },
  price: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  addToCartButton: {
    backgroundColor: '#b58829',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    padding: '17px 48px',
    fontSize: '20px',
    fontWeight: 400,
    fontFamily: 'Poppins, sans-serif',
    lineHeight: '30px',
    cursor: 'pointer',
    width: '215px',
    height: '64px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '16px',
  },
  productDetails: {
    border: '1px solid #ccc',
    padding: '16px',
    width: '300px',
    margin: '16px',
  },
  productImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  productName: {
    fontSize: '1.5em',
    margin: '16px 0',
  },
  productDescription: {
    margin: '8px 0',
  },
  specificationsTitle: {
    fontSize: '1.2em',
    margin: '16px 0',
  },
  specification: {
    margin: '4px 0',
  },
  warranty: {
    margin: '16px 0',
    fontWeight: 'bold',
  },
  showcaseContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px',
    backgroundColor: '#000',
    color: '#fff',
  },
};

export default ProductShowcase;

