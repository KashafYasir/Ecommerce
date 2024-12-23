import React from 'react';
import '../styles/ProductDescription.css';

const ProductDescription: React.FC = () => {
  return (
    <div className="product-description">
      <div className="tabs">
        <span className="active">Description</span>
        <span>Additional Information</span>
        <span>Reviews [5]</span>
      </div>
      <div className="description-text">
        <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
        <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
      </div>
      <div className="images">
        <img src="/whitesofa.jpeg" alt="Sofa 1" width="400" height="200" />
        <img src="/whitesofa.jpeg" alt="Sofa 2" width="400" height="200" />
      </div>
    </div>
  );
};

export default ProductDescription;

