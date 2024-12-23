import React from 'react';
import '../styles/FeatureComponent.css';

const featuresData = [
  {
    id: 1,
    title: 'High Quality',
    description: 'crafted from top materials',
    imageId: 'https://w7.pngwing.com/pngs/156/101/png-transparent-award-cup-prize-trophy-winning-education-and-school-glyph-px-icon.png'
  },
  {
    id: 2,
    title: 'Warranty Protection',
    description: 'Over 2 years',
    imageId: 'https://png.pngtree.com/png-vector/20210307/ourlarge/pngtree-illustration-of-warranty-badge-icon-good-for-packaging-png-image_3016735.png'
  },
  {
    id: 3,
    title: 'Free Shipping',
    description: 'Order over 150 $',
    imageId: 'https://th.bing.com/th/id/OIP.vBWn-cLjNMhLJ7DJJJ3ewAAAAA?rs=1&pid=ImgDetMain'
  },
  {
    id: 4,
    title: '24 / 7 Support',
    description: 'Dedicated support',
    imageId: 'https://thumbs.dreamstime.com/b/customer-support-helpdesk-technician-help-logo-symbol-icon-hotline-service-headphones-249464479.jpg'
  },
];

const FeaturesComponent: React.FC = () => {
  return (
    <div className="features-container">
      {featuresData.map(feature => (
        <div key={feature.id} className="feature-item">
          <img src={`https://placeholder.pics/svg?${feature.imageId}`} alt={feature.title} width="60" height="60" />
          <div className="feature-text">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesComponent;

