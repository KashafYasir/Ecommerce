import React from 'react';
import '../styles/Contact.css';
import Navbar from '../components/Navbar';


const Contact: React.FC = () => {
  return (
    
    <div id='contact' className="contact-container">
     
      <div className="contact-background">
        <div className="contact-title">
          <h1>Contact</h1>
        </div>
        <div className="contact-breadcrumb">
          <span>Home</span>
          <span className="breadcrumb-separator">&gt;</span>
          <span>Contact</span>
        </div>
      </div>
   

      
    </div>
  );
};

export default Contact;

