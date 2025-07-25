import React, { useState } from "react";
import axios from "axios";
import AdminSidebar from "./AdminSidebar";

const AdminAddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [message, setMessage] = useState("");

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/api/categories/add", {
        name: categoryName,
      });
      setMessage(data.message || "Category added successfully.");
      setCategoryName("");
    } catch (error) {
      console.error("Error adding category", error);
      setMessage(
        error.response?.data?.message || "Failed to add category. Please try again."
      );
    }
  };
  
  
  

  return (
    <div className="container mt-5">
      <div className="d-flex">
        <AdminSidebar />
        <div className="flex-grow-1 ms-4">
          <h2>Add New Category</h2>
          {message && <div className="alert alert-info">{message}</div>}
          <form onSubmit={handleSubmit} className="mb-4">
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="Category Name"
              className="form-control mb-2"
              required
            />
            <button type="submit" className="btn btn-primary">
              Add Category
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminAddCategory;
