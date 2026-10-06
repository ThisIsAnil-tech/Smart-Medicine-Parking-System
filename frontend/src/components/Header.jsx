import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo">
            💊 MedExpress from Anila
          </Link>
          
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/medicines">Medicines</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/orders">Orders</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register" className="btn btn-primary">Sign Up</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;