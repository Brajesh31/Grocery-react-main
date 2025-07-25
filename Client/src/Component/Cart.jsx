// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS import karein

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   const fetchCartItems = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.get("http://localhost:5000/api/cartshow", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setCartItems(response.data.items);
//     } catch (error) {
//       console.error("Error fetching cart items:", error);
//     }
//   };

//   const handleRemove = async (id) => {
//     try {
//       const token = localStorage.getItem("token");
//       // Make sure the ID passed is correct
//       await axios.delete(`http://localhost:5000/api/cart/delete/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       fetchCartItems(); // Refresh the cart after removal
//     } catch (error) {
//       console.error("Error removing item:", error);
//     }
//   };
  
  

//   return (
//     <section className="container py-5">
//       <h1 className="mb-4">Shopping Cart</h1>
//       {cartItems.length === 0 ? (
//         <p className="text-muted">Your cart is empty!</p>
//       ) : (
//         <div className="table-responsive">
//           <table className="table">
//             <thead>
//               <tr>
//                 <th scope="col">Product</th>
//                 <th scope="col">Name</th>
//                 <th scope="col">Price</th>
//                 <th scope="col">Quantity</th>
//                 <th scope="col">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cartItems.map((item) => (
//                 <tr key={item.productId._id}>
//                   <td>
//                     <img
//                       src={item.productId.image}
//                       alt={item.productId.name}
//                       className="img-fluid rounded"
//                       style={{ width: "80px" }}
//                     />
//                   </td>
//                   <td>{item.productId.name}</td>
//                   <td>${item.productId.price.toFixed(2)}</td>
//                   <td>{item.quantity}</td>
//                   <td>
//                     <button
//                       className="btn btn-danger btn-sm"
//                       onClick={() => handleRemove(item.productId._id)}
//                     >
//                       Remove
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//       <div className="mt-4">
//         <Link 
//             to="/Checkout"
//             state={{ cartItems }}  // Pass cart items
//             className="btn btn-primary">
//                 Proceed to Checkout
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default Cart;


// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS import karein

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   const fetchCartItems = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.get("http://localhost:5000/api/cartshow", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setCartItems(response.data.items);
//     } catch (error) {
//       console.error("Error fetching cart items:", error);
//     }
//   };

//   const handleRemove = async (id) => {
//     try {
//       const token = localStorage.getItem("token");
//       // Make sure the ID passed is correct
//       await axios.delete(`http://localhost:5000/api/cart/delete/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       fetchCartItems(); // Refresh the cart after removal
//     } catch (error) {
//       console.error("Error removing item:", error);
//     }
//   };

//   const handleBack = () => {
//     navigate(-1);
//   };

//   return (
//     <section className="container py-5">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <button className="btn btn-secondary" onClick={handleBack}>
//           &larr; Back
//         </button>
//         <h1 className="mb-0">Shopping Cart</h1>
//       </div>
//       {cartItems.length === 0 ? (
//         <p className="text-muted">Your cart is empty!</p>
//       ) : (
//         <div className="table-responsive">
//           <table className="table">
//             <thead>
//               <tr>
//                 <th scope="col">Product</th>
//                 <th scope="col">Name</th>
//                 <th scope="col">Price</th>
//                 <th scope="col">Quantity</th>
//                 <th scope="col">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cartItems.map((item) => (
//                 <tr key={item.productId._id}>
//                   <td>
//                     <img
//                       src={item.productId.image}
//                       alt={item.productId.name}
//                       className="img-fluid rounded"
//                       style={{ width: "80px" }}
//                     />
//                   </td>
//                   <td>{item.productId.name}</td>
//                   <td>${item.productId.price.toFixed(2)}</td>
//                   <td>{item.quantity}</td>
//                   <td>
//                     <button
//                       className="btn btn-danger btn-sm"
//                       onClick={() => handleRemove(item.productId._id)}
//                     >
//                       Remove
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//       <div className="mt-4">
//         <Link
//           to="/Checkout"
//           state={{ cartItems }}  // Pass cart items
//           className="btn btn-primary"
//         >
//           Proceed to Checkout
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default Cart;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/api/cartshow", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCartItems(response.data.items);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const handleRemove = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/cart/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchCartItems();
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <button className="btn btn-outline-secondary" onClick={handleBack}>
          &larr; Back
        </button>
        <h1 className="mb-0">Shopping Cart</h1>
      </div>
      {cartItems.length === 0 ? (
        <p className="text-muted">Your cart is empty!</p>
      ) : (
        <div className="table-responsive shadow p-3 mb-5 bg-white rounded">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.productId._id}>
                  <td>
                    <img
                      src={item.productId.image}
                      alt={item.productId.name}
                      className="img-fluid rounded"
                      style={{ width: "80px" }}
                    />
                  </td>
                  <td>{item.productId.name}</td>
                  <td>${item.productId.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm shadow"
                      onClick={() => handleRemove(item.productId._id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="mt-4">
        <Link
          to="/Checkout"
          state={{ cartItems }}
          className="btn btn-primary btn-lg btn-block shadow"
        >
          Proceed to Checkout
        </Link>
      </div>
    </section>
  );
};

export default Cart;
