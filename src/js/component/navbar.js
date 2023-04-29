import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <i className="fas fa-address-book fa-lg mx-2"></i>Contact List
        </Link>
        <Link to="/add-form" className="btn btn-primary">
          <i className="fas fa-user-plus mx-1"></i>Add New Contact
        </Link>
      </div>
    </nav>
  );
};
