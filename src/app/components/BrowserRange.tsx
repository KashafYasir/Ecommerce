import React from 'react';
import '../styles/BrowserRange.css'

const BrowseRange: React.FC = () => {
  return (
    <div className="browse-range">
      <h2>Browse The Range</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="categories">
        <div className="category">
          <img src="/table.jpeg" alt="Dining" width="381" height="480" />
          <p>Dining</p>
        </div>
        <div className="category">
          <img src="/pillow.jpeg" alt="Living" width="381" height="480" />
          <p>Living</p>
        </div>
        <div className="category">
          <img src="/sidevaas.jpeg" alt="Bedroom" width="381" height="480" />
          <p>Bedroom</p>
        </div>
      </div>
    </div>
  );
};

export default BrowseRange;

