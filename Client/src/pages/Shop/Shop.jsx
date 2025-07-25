

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom'; // Import Link

// const ProductList = ({ cartItems, setCartItems }) => {
//   const [products, setProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState(""); // Search state
//   const [successMessage, setSuccessMessage] = useState('');
//   const navigate = useNavigate();

//   // Fetch products from the server
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const { data } = await axios.get('http://localhost:5000/api/products/all');
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Load cart from localStorage when component mounts
//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(storedCart);
//   }, [setCartItems]);

//   // Save cart to localStorage whenever it updates
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const gotoProductDetail = (product) => {
//     localStorage.setItem(`product-${product._id}`, JSON.stringify(product));
//     navigate(`/product/${product._id}`);
//   };




// const addToCart = async (product) => {
//     try {
//         const token = localStorage.getItem("token"); // ✅ Get Token
//         if (!token) {
//             console.error("❌ No token found! User is not authenticated.");
//             return;
//         }

//         console.log("📤 Token being sent:", token); // Debugging

//         const response = await axios.post(
//             "http://localhost:5000/api/add",
//             { productId: product._id, quantity: 1 },
//             {
//                 headers: { Authorization: `Bearer ${token}` }, // ✅ Send token in headers
//             }
//         );

//         console.log("✅ Product added to cart:", response.data);

//         // ✅ Navigate to the cart page after successfully adding
//         navigate("/cart"); 
//     } catch (error) {
//         console.error("❌ Error adding product to cart:", error.response?.data || error.message);
//     }
// };


  
  



//   // Filter products based on search query
//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     product.category.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <section className="my-lg-14 my-8">
//       <div className="container">
//         {/* Search Bar */}
//         <div className="mb-4">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Search for products..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>

//         {/* Success Message */}
//         {successMessage && (
//           <div className="alert alert-success" role="alert">
//             {successMessage}
//           </div>
//         )}

//         <div className="row">
//           <div className="col-12 mb-6">
//             <div className="section-head text-center mt-8">
//               <h3 className="h3style" data-title="Available Products">Available Products</h3>
//               <div className="wt-separator bg-primarys"></div>
//               <div className="wt-separator2 bg-primarys"></div>
//             </div>
//           </div>
//         </div>
//         <div className="row g-4 row-cols-lg-3 row-cols-2 row-cols-md-3">
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((product) => (
//               <div className="col fade-zoom" key={product._id}>
//                 <div className="card card-product">
//                   <div className="card-body">
//                     <div className="text-center position-relative">
//                       {product.discount && (
//                         <div className="position-absolute top-0 start-0">
//                           <span className="badge bg-success">{product.discount}% OFF</span>
//                         </div>
//                       )}
//                       <div onClick={() => gotoProductDetail(product)}>
//                         <img
//                           src={`http://localhost:5000${product.image}`}
//                           alt={product.name}
//                           className="mb-3 img-fluid"
//                           style={{ height: '200px', objectFit: 'cover' }}
//                         />
//                       </div>
//                       <div className="card-product-action">
//                         <a href="#!" className="btn-action" title="Quick View">
//                           <i className="bi bi-eye" />
//                         </a>
//                         <a href="#!" className="btn-action" title="Wishlist">
//                           <i className="bi bi-heart" />
//                         </a>
//                         <a href="#!" className="btn-action" title="Compare">
//                           <i className="bi bi-arrow-left-right" />
//                         </a>
//                       </div>
//                     </div>
//                     <div className="text-small mb-1">
//                       <a href="#!" className="text-decoration-none text-muted">
//                         <small>{product.category}</small>
//                       </a>
//                     </div>
//                     <h2 className="fs-6">
//                       <Link to={`/product/${product._id}`} className="text-inherit text-decoration-none">
//                         {product.name}
//                       </Link>
//                     </h2>
//                     <div>
//                       <small className="text-warning">
//                         <i className="bi bi-star-fill" />
//                         <i className="bi bi-star-fill" />
//                         <i className="bi bi-star-fill" />
//                         <i className="bi bi-star-fill" />
//                         <i className="bi bi-star-half" />
//                       </small>
//                       <span className="text-muted small">4.5(149)</span>
//                     </div>
//                     <div className="d-flex justify-content-between align-items-center mt-3">
//                       <div>
//                         <span className="text-dark">${product.price}</span>
//                         {product.originalPrice && (
//                           <span className="text-decoration-line-through text-muted">
//                             ${product.originalPrice}
//                           </span>
//                         )}
//                       </div>
//                       <div>
//                         <button
//                           className="btn btn-primary btn-sm"
//                           onClick={() => addToCart(product)}
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width={16}
//                             height={16}
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth={2}
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             className="feather feather-plus"
//                           >
//                             <line x1={12} y1={5} x2={12} y2={19} />
//                             <line x1={5} y1={12} x2={19} y2={12} />
//                           </svg>{" "}
//                           Add to Cart
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="col-12 text-center">
//               <p className="text-muted">No products found.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductList;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// const ProductList = ({ cartItems, setCartItems }) => {
//   const [products, setProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [successMessage, setSuccessMessage] = useState('');
//   const [categories, setCategories] = useState([]);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const { data } = await axios.get('http://localhost:5000/api/products/all');
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products", error);
//       }
//     };
//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const { data } = await axios.get('http://localhost:5000/api/categories');
//         setCategories(data);
//       } catch (error) {
//         console.error("Error fetching categories", error);
//       }
//     };
//     fetchCategories();
//   }, []);
  
//   const getCategoryName = (categoryId) => {
//     const category = categories.find(cat => cat._id === categoryId);
//     return category ? category.name : "Unknown";
//   };

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(storedCart);
//   }, [setCartItems]);

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const gotoProductDetail = (product) => {
//     localStorage.setItem(`product-${product._id}`, JSON.stringify(product));
//     navigate(`/product/${product._id}`);
//   };

//   const addToCart = async (product) => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.error("No token found! User is not authenticated.");
//         return;
//       }
//       const response = await axios.post(
//         "http://localhost:5000/api/add",
//         { productId: product._id, quantity: 1 },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       console.log("Product added to cart:", response.data);
//       navigate("/cart");
//     } catch (error) {
//       console.error("Error adding product to cart:", error.response?.data || error.message);
//     }
//   };

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     product.category.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <section className="py-5 bg-light">
//       <div className="container">
//         <div className="mb-4 text-center">
//           <input
//             type="text"
//             className="form-control w-50 mx-auto"
//             placeholder="Search for products..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>

//         {successMessage && (
//           <div className="alert alert-success text-center">{successMessage}</div>
//         )}

//         <div className="row g-4 row-cols-lg-4 row-cols-md-3 row-cols-2">
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((product) => (
//               <div className="col" key={product._id}>
//                 <div className="card shadow-sm border-0 rounded">
//                   <div className="card-body p-4 text-center">
//                     {product.discount && (
//                       <span className="badge bg-danger position-absolute top-0 start-0 m-2">
//                         {product.discount}% OFF
//                       </span>
//                     )}
//                     <div onClick={() => gotoProductDetail(product)}>
//                       <img
//                         src={`http://localhost:5000${product.image}`}
//                         alt={product.name}
//                         className="img-fluid mb-3 rounded"
//                         style={{ height: '200px', objectFit: 'cover' }}
//                       />
//                     </div>
//                     <h5 className="fw-bold text-dark">{product.name}</h5>
//                     {/* <p className="text-muted small mb-2">{product.category}</p> */}
//                     <p className="text-muted small mb-2">
//   {getCategoryName(product.category)}
// </p>

//                     <div className="d-flex justify-content-center align-items-center">
//                       <span className="text-dark fw-bold me-2">${product.price}</span>
//                       {product.originalPrice && (
//                         <span className="text-decoration-line-through text-muted">
//                           ${product.originalPrice}
//                         </span>
//                       )}
//                     </div>
//                     <button className="btn btn-primary btn-sm w-100 mt-3" onClick={() => addToCart(product)}>
//                       <i className="bi bi-cart-plus me-2"></i> Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="col-12 text-center">
//               <p className="text-muted">No products found.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ProductList = ({ cartItems, setCartItems }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [successMessage, setSuccessMessage] = useState('');
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/products/all');
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/categories');
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };
    fetchCategories();
  }, []);
  
  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat._id === categoryId);
    return category ? category.name : "Unknown";
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, [setCartItems]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const gotoProductDetail = (product) => {
    localStorage.setItem(`product-${product._id}`, JSON.stringify(product));
    navigate(`/product/${product._id}`);
  };

  const addToCart = async (product) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found! User is not authenticated.");
        return;
      }
      const response = await axios.post(
        "http://localhost:5000/api/add",
        { productId: product._id, quantity: 1 },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Product added to cart:", response.data);
      navigate("/cart");
    } catch (error) {
      console.error("Error adding product to cart:", error.response?.data || error.message);
    }
  };

  const filteredProducts = products.filter((product) => {
    const categoryName = getCategoryName(product.category);
    return (
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (categoryName && categoryName.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="mb-4 text-center">
          <input
            type="text"
            className="form-control w-50 mx-auto"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {successMessage && (
          <div className="alert alert-success text-center">{successMessage}</div>
        )}

        <div className="row g-4 row-cols-lg-4 row-cols-md-3 row-cols-2">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="col" key={product._id}>
                <div className="card shadow-sm border-0 rounded">
                  <div className="card-body p-4 text-center">
                    {product.discount && (
                      <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                        {product.discount}% OFF
                      </span>
                    )}
                    <div onClick={() => gotoProductDetail(product)}>
                      <img
                        src={`http://localhost:5000${product.image}`}
                        alt={product.name}
                        className="img-fluid mb-3 rounded"
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                    </div>
                    <h5 className="fw-bold text-dark">{product.name}</h5>
                    <p className="text-muted small mb-2">
                      {getCategoryName(product.category)}
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="text-dark fw-bold me-2">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-decoration-line-through text-muted">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <button className="btn btn-primary btn-sm w-100 mt-3" onClick={() => addToCart(product)}>
                      <i className="bi bi-cart-plus me-2"></i> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p className="text-muted">No products found.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
