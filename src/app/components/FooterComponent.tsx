import React from 'react';
import '../styles/FooterComponent.css';

const FooterComponent: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h1 className="logo">Funiro.</h1>
          <address className="address">
            400 University Drive Suite 200 Coral Gables,<br />
            FL 33134 USA
          </address>
        </div>
        <div className="footer-section">
          <h2>Links</h2>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Help</h2>
          <ul>
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
        <div className="footer-section newsletter">
          <h2>Newsletter</h2>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter Your Email Address" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <p>2023 funiro. All rights reverved</p>
      </div>
    </footer>
  );
};

export default FooterComponent;

