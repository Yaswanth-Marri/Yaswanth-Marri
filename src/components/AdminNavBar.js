 // AdminNavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNavBar.css';

const AdminNavBar = () => {
  return (
    <nav className="admin-nav">
      <div className="admin-logo">
        <Link to="/admin">Admin Dashboard</Link>
      </div>
      <ul className="admin-nav-links">
        <li><Link to="/admin">Dashboard</Link></li>
        <li className="dropdown">
          <Link to="/admin/products" className="dropbtn">Products</Link>
          <div className="dropdown-content">
            <Link to="/admin/products/add">Add Product</Link>
            <Link to="/admin/products">View Products</Link>
            <Link to="/admin/categories">Manage Categories</Link>
          </div>
        </li>
        <li><Link to="/admin/orders">Orders</Link></li>
        <li><Link to="/admin/customers">Customers</Link></li>
        <li><Link to="/admin/reports">Reports</Link></li>
        <li><Link to="/admin/settings">Settings</Link></li>
      </ul>
    </nav>
  );
};

export default AdminNavBar;
