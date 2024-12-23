import React from 'react';
import '../styles/GalleryComponent.css';

const GalleryComponent: React.FC = () => {
  return (
    <div className="gallery-container">
      <div className="title">
        <h2>Share your setup with</h2>
        <h1>#FuniroFurniture</h1>
      </div>
      <div className="gallery-grid">
        <img src="/side.jpeg" alt="Image 1" width="10"height="20"/>
        <img src="/lapradio.jpeg" alt="Image 2" width="300" height="400" />
        <img src="/dinning.jpeg" alt="Image 3" width="300" height="400" />
        <img src="/bed.jpeg" alt="Image 4" width="300" height="400" />
        <img src="/window.jpeg" alt="Image 5" width="300" height="400" />
        <img
          src="/brownchair.jpeg"
          alt="Image 6"
          width="300"
          height="400"
        />
        <img
          src="/camra.jpeg"
          width="300"
          height="400"
        />
        <img
          src="/whitevaas.jpeg"
                    alt="Image 8"
          width="300"
          height="400"
        />
      </div>
    </div>
  );
};

export default GalleryComponent;

