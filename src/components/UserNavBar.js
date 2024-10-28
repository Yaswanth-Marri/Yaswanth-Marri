// UserNavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './UserNavBar.css'; // Assuming a CSS file for styles

const UserNavBar = () => {
  return (
    <nav className="user-nav">
      <div className="logo">
        <Link to="/">ShopLogo</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li className="dropdown">
          <Link to="/shop" className="dropbtn">Shop</Link>
          <div className="dropdown-content">
            <Link to="/category/electronics">Electronics</Link>
            <Link to="/category/fashion">Fashion</Link>
            <Link to="/category/home-goods">Home Goods</Link>
          </div>
        </li>
        <li><Link to="/offers">Offers</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li className="dropdown">
          <Link to="/account" className="dropbtn">Account</Link>
          <div className="dropdown-content">
            <Link to="/account/orders">Order History</Link>
            <Link to="/account/wishlist">Wishlist</Link>
            <Link to="/account/profile">Profile</Link>
          </div>
        </li>
        <li>
          <input type="text" placeholder="Search..." className="search-bar" />
        </li>
      </ul>
    </nav>
  );
};

export default UserNavBar;
