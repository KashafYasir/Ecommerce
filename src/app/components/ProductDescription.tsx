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
        <img src="https://s3-alpha-sig.figma.com/img/1421/901b/217b5f7ea72cbcd9ce3062c4165744e5?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mhwyP9paCQt1Q-cE5kI3f8HCoEJfRarh7lN8laRWyui0ELgcn~AdXEt0O2nuvBvLNKLV99q92P7tdaJousg25CP4EcrTxebV3UF--LatnhBlaPe1dBgRh-tdb0K9ABwxYpbNHGMWXiOyWbfi24JSCqVSUq2JtaJF-OB5-xCWtxV~yPcgzU9b78-8d8U29HmnmO6JhFblfMSoJYXNcmazsBWsf8OatDBICKdHYbUZ-CMJOkf0jAHlOFC3WaoD-6SHbAiCOABl83aO32qK-hozLjRYUBqA2E12Dj7c23v664MOn-cSZel8a9BOLJJ8AvWEh7jrWSzPCnWp5HsaSs5Hdw__" alt="Sofa 1" width="400" height="200" />
        <img src="https://s3-alpha-sig.figma.com/img/1421/901b/217b5f7ea72cbcd9ce3062c4165744e5?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mhwyP9paCQt1Q-cE5kI3f8HCoEJfRarh7lN8laRWyui0ELgcn~AdXEt0O2nuvBvLNKLV99q92P7tdaJousg25CP4EcrTxebV3UF--LatnhBlaPe1dBgRh-tdb0K9ABwxYpbNHGMWXiOyWbfi24JSCqVSUq2JtaJF-OB5-xCWtxV~yPcgzU9b78-8d8U29HmnmO6JhFblfMSoJYXNcmazsBWsf8OatDBICKdHYbUZ-CMJOkf0jAHlOFC3WaoD-6SHbAiCOABl83aO32qK-hozLjRYUBqA2E12Dj7c23v664MOn-cSZel8a9BOLJJ8AvWEh7jrWSzPCnWp5HsaSs5Hdw__" alt="Sofa 2" width="400" height="200" />
      </div>
    </div>
  );
};

export default ProductDescription;

