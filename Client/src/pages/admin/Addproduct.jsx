// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const AdminProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [formData, setFormData] = useState({ name: "", price: "", category: "", description: "", stock: 0 });
//   const [editId, setEditId] = useState(null);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const { data } = await axios.get("http://localhost:5000/api/products/all");
//       setProducts(data);
//     } catch (error) {
//       console.error("Error fetching products", error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editId) {
//         await axios.put(`http://localhost:5000/api/products/update/${editId}`, formData);
//       } else {
//         await axios.post("http://localhost:5000/api/products/add", formData);
//       }
//       setFormData({ name: "", price: "", category: "", description: "", stock: 0 });
//       setEditId(null);
//       fetchProducts();
//     } catch (error) {
//       console.error("Error saving product", error);
//     }
//   };

//   const handleEdit = (product) => {
//     setFormData(product);
//     setEditId(product._id);
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this product?")) {
//       try {
//         await axios.delete(`http://localhost:5000/api/products/delete/${id}`);
//         fetchProducts();
//       } catch (error) {
//         console.error("Error deleting product", error);
//       }
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Manage Products</h2>
//       <form onSubmit={handleSubmit} className="mb-4">
//         <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" className="form-control mb-2" required />
//         <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="form-control mb-2" required />
//         <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="form-control mb-2" required />
//         <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="form-control mb-2"></textarea>
//         <input type="number" name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" className="form-control mb-2" />
//         <button type="submit" className="btn btn-success">{editId ? "Update" : "Add"} Product</button>
//       </form>

//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//             <th>Category</th>
//             <th>Stock</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product._id}>
//               <td>{product.name}</td>
//               <td>${product.price}</td>
//               <td>{product.category}</td>
//               <td>{product.stock}</td>
//               <td>
//                 <button className="btn btn-primary btn-sm me-2" onClick={() => handleEdit(product)}>Edit</button>
//                 <button className="btn btn-danger btn-sm" onClick={() => handleDelete(product._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminProducts;
/////////////////////////////////////////////


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const AdminProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [formData, setFormData] = useState({ name: "", price: "", category: "", description: "", stock: 0 });
//   const [image, setImage] = useState(null);
//   const [editId, setEditId] = useState(null);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const { data } = await axios.get("http://localhost:5000/api/products/all");
//       setProducts(data);
//     } catch (error) {
//       console.error("Error fetching products", error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formDataWithImage = new FormData();
//       Object.keys(formData).forEach((key) => {
//         formDataWithImage.append(key, formData[key]);
//       });
//       if (image) {
//         formDataWithImage.append("image", image);
//       }

//       if (editId) {
//         await axios.put(`http://localhost:5000/api/products/update/${editId}`, formDataWithImage, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//       } else {
//         await axios.post("http://localhost:5000/api/products/add", formDataWithImage, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//       }

//       setFormData({ name: "", price: "", category: "", description: "", stock: 0 });
//       setImage(null);
//       setEditId(null);
//       fetchProducts();
//     } catch (error) {
//       console.error("Error saving product", error);
//     }
//   };

//   const handleEdit = (product) => {
//     setFormData(product);
//     setEditId(product._id);
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this product?")) {
//       try {
//         await axios.delete(`http://localhost:5000/api/products/delete/${id}`);
//         fetchProducts();
//       } catch (error) {
//         console.error("Error deleting product", error);
//       }
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Manage Products</h2>
//       <form onSubmit={handleSubmit} className="mb-4">
//         <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" className="form-control mb-2" required />
//         <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="form-control mb-2" required />
//         <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="form-control mb-2" required />
//         <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="form-control mb-2"></textarea>
//         <input type="number" name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" className="form-control mb-2" />
//         <input type="file" onChange={handleImageChange} className="form-control mb-2" required={!editId} />
//         <button type="submit" className="btn btn-success">{editId ? "Update" : "Add"} Product</button>
//       </form>

//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>Image</th>
//             <th>Name</th>
//             <th>Price</th>
//             <th>Category</th>
//             <th>Stock</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product._id}>
//               <td><img src={`http://localhost:5000${product.image}`} alt={product.name} width="50" height="50" /></td>
//               <td>{product.name}</td>
//               <td>${product.price}</td>
//               <td>{product.category}</td>
//               <td>{product.stock}</td>
//               <td>
//                 <button className="btn btn-primary btn-sm me-2" onClick={() => handleEdit(product)}>Edit</button>
//                 <button className="btn btn-danger btn-sm" onClick={() => handleDelete(product._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminProducts;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import AdminSidebar from "./AdminSidebar";
// // import User from "../../../../models/User";

  
// const AdminProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     category: "",
//     description: "",
//     stock: 0,
//   });
//   const [image, setImage] = useState(null);
//   const [editId, setEditId] = useState(null);
//   const [message, setMessage] = useState(""); // To show success or error messages

//   useEffect(() => {
//     fetchProducts();
//   }, []);

// // router.get('/search/:key',async (req,res) => {
// //   let data = await User.find({
// //     "$or":[
// //       {"first_name":{$regex:key}},
// //       {"last_name":{$regex:key}},
// //       {"Email":{$regex:key}}
// //     ]
// //   });
// //   res.status(200).json({status:1,message:"Suuccess",data:data})
// // })

//   const fetchProducts = async () => {
//     try {
//       const { data } = await axios.get("http://localhost:5000/api/products/all");
//       setProducts(data);
//     } catch (error) {
//       console.error("Error fetching products", error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formDataWithImage = new FormData();
//       Object.keys(formData).forEach((key) => {
//         formDataWithImage.append(key, formData[key]);
//       });

//       // Append image only if it's selected
//       if (image) {
//         formDataWithImage.append("image", image);
//       }

//       if (editId) {
//         // Update product
//         await axios.put(
//           `http://localhost:5000/api/products/update/${editId}`,
//           formDataWithImage,
//           {
//             headers: { "Content-Type": "multipart/form-data" },
//           }
//         );
//         setMessage("Product updated successfully.");
//       } else {
//         // Add new product
//         await axios.post("http://localhost:5000/api/products/add", formDataWithImage, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//         setMessage("Product added successfully.");
//       }

//       // Reset form
//       setFormData({ name: "", price: "", category: "", description: "", stock: 0 });
//       setImage(null);
//       setEditId(null);
//       fetchProducts();
//     } catch (error) {
//         console.error("Error saving product", error);
//         if (error.response) {
//           // The server responded with a status other than 200
//           console.error("Response Error:", error.response.data);
//           setMessage("Error: " + error.response.data.message || "Error saving product.");
//         } else if (error.request) {
//           // The request was made but no response was received
//           console.error("Request Error:", error.request);
//           setMessage("No response from server. Please try again later.");
//         } else {
//           // Something else happened in setting up the request
//           console.error("Error", error.message);
//           setMessage("Error saving product. Please try again.");
//         }
//       }
//   };

//   const handleEdit = (product) => {
//     setFormData(product);
//     setEditId(product._id);
//     setImage(null); // Ensure image is not preloaded when editing
//   };





//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this product?")) {
//       try {
//         await axios.delete(`http://localhost:5000/api/products/delete/${id}`);
//         setMessage("Product deleted successfully.");
//         fetchProducts();
//       } catch (error) {
//         console.error("Error deleting product", error);
//         setMessage("Error deleting product. Please try again.");
//       }
//     }
//   };

//   return (
    
//     <div className="container mt-5">
      
     
//       <h2>Manage Products</h2>
//            <AdminSidebar />

//       {message && <div className="alert alert-info">{message}</div>} {/* Success/Error Message */}

//       <form onSubmit={handleSubmit} className="mb-4">
     
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Product Name"
//           className="form-control mb-2"
//           required
//         />
//         <input
//           type="number"
//           name="price"
//           value={formData.price}
//           onChange={handleChange}
//           placeholder="Price"
//           className="form-control mb-2"
//           required
//         />
//         <input
//           type="text"
//           name="category"
//           value={formData.category}
//           onChange={handleChange}
//           placeholder="Category"
//           className="form-control mb-2"
//           required
//         />
//         <textarea
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           placeholder="Description"
//           className="form-control mb-2"
//         />
//         <input
//           type="number"
//           name="stock"
//           value={formData.stock}
//           onChange={handleChange}
//           placeholder="Stock"
//           className="form-control mb-2"
//         />
       
        
//         {/* Show image preview and make the file input optional on edit */}
//         <div>
//           {editId && formData.image && (
//             <div>
//               <img
//                 src={`http://localhost:5000${formData.image}`}
//                 alt="Current product"
//                 width="100"
//                 height="100"
//               />
//               <p>Current Image</p>
//             </div>
//           )}
//           <input
//             type="file"
//             onChange={handleImageChange}
//             className="form-control mb-2"
//           />
//         </div>

//         <button type="submit" className="btn btn-success">
//           {editId ? "Update" : "Add"} Product
//         </button>
//       </form>

//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>Image</th>
//             <th>Name</th>
//             <th>Price</th>
//             <th>Category</th>
//             <th>Stock</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product._id}>
//               <td>
//                 <img
//                   src={`http://localhost:5000${product.image}`}
//                   alt={product.name}
//                   width="50"
//                   height="50"
//                 />
//               </td>
//               <td>{product.name}</td>
//               <td>${product.price}</td>
//               <td>{product.category}</td>
//               <td>{product.stock}</td>
//               <td>
//                 <button 
//                   className="btn btn-primary btn-sm me-2"
//                   onClick={() => handleEdit(product)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="btn btn-danger btn-sm"
//                   onClick={() => handleDelete(product._id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
       
//         </tbody>
        
//       </table>
//     </div>
//   );
// };

// export default AdminProducts;



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import AdminSidebar from "./AdminSidebar";

// const AdminProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     category: "",
//     description: "",
//     stock: 0,
//   });
//   const [image, setImage] = useState(null);
//   const [editId, setEditId] = useState(null);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const { data } = await axios.get("http://localhost:5000/api/products/all");
//       setProducts(data);
//     } catch (error) {
//       console.error("Error fetching products", error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formDataWithImage = new FormData();
//       Object.keys(formData).forEach((key) => {
//         formDataWithImage.append(key, formData[key]);
//       });

//       if (image) {
//         formDataWithImage.append("image", image);
//       }

//       if (editId) {
//         await axios.put(
//           `http://localhost:5000/api/products/update/${editId}`,
//           formDataWithImage,
//           {
//             headers: { "Content-Type": "multipart/form-data" },
//           }
//         );
//         setMessage("Product updated successfully.");
//       } else {
//         await axios.post("http://localhost:5000/api/products/add", formDataWithImage, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//         setMessage("Product added successfully.");
//       }

//       setFormData({ name: "", price: "", category: "", description: "", stock: 0 });
//       setImage(null);
//       setEditId(null);
//       fetchProducts();
//     } catch (error) {
//       console.error("Error saving product", error);
//       if (error.response) {
//         console.error("Response Error:", error.response.data);
//         setMessage("Error: " + error.response.data.message || "Error saving product.");
//       } else if (error.request) {
//         console.error("Request Error:", error.request);
//         setMessage("No response from server. Please try again later.");
//       } else {
//         console.error("Error", error.message);
//         setMessage("Error saving product. Please try again.");
//       }
//     }
//   };

//   const handleEdit = (product) => {
//     setFormData(product);
//     setEditId(product._id);
//     setImage(null);
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this product?")) {
//       try {
//         await axios.delete(`http://localhost:5000/api/products/delete/${id}`);
//         setMessage("Product deleted successfully.");
//         fetchProducts();
//       } catch (error) {
//         console.error("Error deleting product", error);
//         setMessage("Error deleting product. Please try again.");
//       }
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="d-flex">
//         <AdminSidebar />
//         <div className="flex-grow-1 ms-4">
//           <h2>Manage Products</h2>

//           {message && <div className="alert alert-info">{message}</div>}

//           <form onSubmit={handleSubmit} className="mb-4">
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Product Name"
//               className="form-control mb-2"
//               required
//             />
//             <input
//               type="number"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//               placeholder="Price"
//               className="form-control mb-2"
//               required
//             />
//             <input
//               type="text"
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               placeholder="Category"
//               className="form-control mb-2"
//               required
//             />
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               placeholder="Description"
//               className="form-control mb-2"
//             />
//             <input
//               type="number"
//               name="stock"
//               value={formData.stock}
//               onChange={handleChange}
//               placeholder="Stock"
//               className="form-control mb-2"
//             />
            
//             <div>
//               {editId && formData.image && (
//                 <div>
//                   <img
//                     src={`http://localhost:5000${formData.image}`}
//                     alt="Current product"
//                     width="100"
//                     height="100"
//                   />
//                   <p>Current Image</p>
//                 </div>
//               )}
//               <input
//                 type="file"
//                 onChange={handleImageChange}
//                 className="form-control mb-2"
//               />
//             </div>

//             <button type="submit" className="btn btn-success">
//               {editId ? "Update" : "Add"} Product
//             </button>
//           </form>

//           <table className="table table-bordered">
//             <thead>
//               <tr>
//                 <th>Image</th>
//                 <th>Name</th>
//                 <th>Price</th>
//                 <th>Category</th>
//                 <th>Stock</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((product) => (
//                 <tr key={product._id}>
//                   <td>
//                     <img
//                       src={`http://localhost:5000${product.image}`}
//                       alt={product.name}
//                       width="50"
//                       height="50"
//                     />
//                   </td>
//                   <td>{product.name}</td>
//                   <td>${product.price}</td>
//                   <td>{product.category}</td>
//                   <td>{product.stock}</td>
//                   <td>
//                     <button 
//                       className="btn btn-primary btn-sm me-2"
//                       onClick={() => handleEdit(product)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="btn btn-danger btn-sm"
//                       onClick={() => handleDelete(product._id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminProducts;


import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminSidebar from "./AdminSidebar";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    stock: 0,
  });
  const [image, setImage] = useState(null);
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/products/all");
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/categories");
      console.log("Fetched categories:", data); // Add this line
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataWithImage = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataWithImage.append(key, formData[key]);
      });

      if (image) {
        formDataWithImage.append("image", image);
      }

      if (editId) {
        await axios.put(
          `http://localhost:5000/api/products/update/${editId}`,
          formDataWithImage,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        setMessage("Product updated successfully.");
      } else {
        await axios.post("http://localhost:5000/api/products/add", formDataWithImage, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setMessage("Product added successfully.");
      }

      setFormData({ name: "", price: "", category: "", description: "", stock: 0 });
      setImage(null);
      setEditId(null);
      fetchProducts();
    } catch (error) {
      console.error("Error saving product", error);
      if (error.response) {
        console.error("Response Error:", error.response.data);
        setMessage("Error: " + error.response.data.message || "Error saving product.");
      } else if (error.request) {
        console.error("Request Error:", error.request);
        setMessage("No response from server. Please try again later.");
      } else {
        console.error("Error", error.message);
        setMessage("Error saving product. Please try again.");
      }
    }
  };

  const handleEdit = (product) => {
    setFormData(product);
    setEditId(product._id);
    setImage(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`http://localhost:5000/api/products/delete/${id}`);
        setMessage("Product deleted successfully.");
        fetchProducts();
      } catch (error) {
        console.error("Error deleting product", error);
        setMessage("Error deleting product. Please try again.");
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex">
        <AdminSidebar />
        <div className="flex-grow-1 ms-4">
          <h2>Manage Products</h2>

          {message && <div className="alert alert-info">{message}</div>}

          <form onSubmit={handleSubmit} className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Product Name"
              className="form-control mb-2"
              required
            />
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
              className="form-control mb-2"
              required
            />
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="form-control mb-2"
              required
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
               <option key={category._id} value={category._id}>
               {category.name}
             </option>
              ))}
            </select>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              className="form-control mb-2"
            />
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              placeholder="Stock"
              className="form-control mb-2"
            />
            
            <div>
              {editId && formData.image && (
                <div>
                  <img
                    src={`http://localhost:5000${formData.image}`}
                    alt="Current product"
                    width="100"
                    height="100"
                  />
                  <p>Current Image</p>
                </div>
              )}
              <input
                type="file"
                onChange={handleImageChange}
                className="form-control mb-2"
              />
            </div>

            <button type="submit" className="btn btn-success">
              {editId ? "Update" : "Add"} Product
            </button>
          </form>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                {/* <th>Category</th> */}
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>
                    <img
                      src={`http://localhost:5000${product.image}`}
                      alt={product.name}
                      width="50"
                      height="50"
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  {/* <td>{product.category.name}</td> */}
                  {/* <td>{product.category?.name || "No Category"}</td> */}
                  <td>{product.stock}</td>
                  <td>
                    <button 
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => handleEdit(product)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
