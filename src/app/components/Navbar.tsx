
import React from 'react';
import "../styles/navbar.css"
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z1Vb-O4ZL_Fz8lsi" alt="Logo" width="50" height="32" />
        <span className="brand-name">Furniro</span>
      </div>
      <ul className="nav-links">
        <Link href={"/"}>Home</Link> 
        <Link href={"#shop"}>Shop</Link>
        <Link href={"#blog"}>Blog</Link>
        <Link href={"#contact"}>Contact</Link>
      </ul>
      <div className="icons">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z1Vb-O4ZL_Fz8lsj" alt="User Icon" width="28" height="28" />
        <img src="https://dashboard.codeparrot.ai/api/assets/Z1Vb-O4ZL_Fz8lsk" alt="Search Icon" width="28" height="28" />
        <img src="https://dashboard.codeparrot.ai/api/assets/Z1Vb-O4ZL_Fz8lsl" alt="Heart Icon" width="28" height="28" />
        <img src="https://dashboard.codeparrot.ai/api/assets/Z1Vb-O4ZL_Fz8lsm" alt="Cart Icon" width="28" height="28" />
      </div>
    </nav>
  );
};

export default Navbar;

