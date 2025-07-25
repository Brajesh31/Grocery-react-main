import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminSidebar = () => {
  return (
    <div className="d-flex flex-column p-4 bg-dark text-white shadow rounded-3" style={{ height: "100vh", width: "250px" }}>
      <h3 className="text-center mb-4 fw-bold text-light">Admin Panel</h3>
      <ul className="list-unstyled">
        <li className="mb-3">
          <Link to="/product" className="text-decoration-none text-light d-flex align-items-center">
            <i className="bi bi-box-seam me-2 text-warning" style={{ fontSize: "1.5rem" }}></i> 
            <span>Manage Products</span>
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/users" className="text-decoration-none text-light d-flex align-items-center">
            <i className="bi bi-person-lines-fill me-2 text-info" style={{ fontSize: "1.5rem" }}></i> 
            <span>User Management</span>
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/adminOrderManagement" className="text-decoration-none text-light d-flex align-items-center">
            <i className="bi bi-cart-check me-2 text-success" style={{ fontSize: "1.5rem" }}></i> 
            <span>Manage Orders</span>
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/AdminAddCategory" className="text-decoration-none text-light d-flex align-items-center">
            <i className="bi bi-cart-check me-2 text-success" style={{ fontSize: "1.5rem" }}></i> 
            <span>Category</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
