


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const OrderHistory = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           alert("User not logged in");
//           navigate("/MyAccountSignIn");
//           return;
//         }

//         const response = await axios.get("http://localhost:5000/api/order/history", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         setOrders(response.data.orders);
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//         setError(error.response?.data?.message || "Error fetching orders");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [navigate]);

//   if (loading) return <div className="text-center py-5">Loading your orders...</div>;
//   if (error) return <div className="alert alert-danger text-center">{error}</div>;

//   return (
//     <div className="container py-5">
//       <h2 className="text-center mb-4">Your Order History</h2>
//       {orders.length === 0 ? (
//         <div className="alert alert-info text-center">You haven't placed any orders yet.</div>
//       ) : (
//         <div className="row justify-content-center">
//           {orders.map((order) => (
//             <div key={order._id} className="col-md-8 mb-4">
//               <div className="card shadow-sm">
//                 <div className="card-header bg-success text-white">
//                   <h5 className="mb-0">Order #{order._id}</h5>
//                 </div>
//                 <div className="card-body">
//                   <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
//                   <p><strong>Status:</strong> <span className="badge bg-primary">{order.status}</span></p>
//                   <h6>Items:</h6>
//                   <table className="table table-bordered table-striped">
//                     <thead>
//                       <tr>
//                         <th>Product</th>
//                         <th>Quantity</th>
//                         <th>Price</th>
//                         <th>Image</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {order.items.map((item, index) => (
//                         <tr key={index}>
//                           <td>{item.productId?.name || "Unknown Product"}</td>
//                           <td>{item.quantity}</td>
//                           <td>${item.productId?.price?.toFixed(2) || "0.00"}</td>
//                           <td>
//                             {item.productId?.image && (
//                               <img src={item.productId.image} alt={item.productId?.name} className="img-thumbnail" style={{ width: '50px', height: '50px' }} />
//                             )}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                   <p className="text-end"><strong>Total: ${order.totalAmount.toFixed(2)}</strong></p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderHistory;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("User not logged in");
          navigate("/MyAccountSignIn");
          return;
        }

        const response = await axios.get("http://localhost:5000/api/order/history", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setOrders(response.data.orders);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError(error.response?.data?.message || "Error fetching orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [navigate]);

  if (loading) return <div className="text-center py-5">Loading your orders...</div>;
  if (error) return <div className="alert alert-danger text-center">{error}</div>;

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Your Order History</h2>
      {orders.length === 0 ? (
        <div className="alert alert-info text-center">You haven't placed any orders yet.</div>
      ) : (
        <div className="row justify-content-center">
          {orders.map((order) => (
            <div key={order._id} className="col-md-8 mb-4">
              <div className="card shadow-sm">
                <div className="card-header bg-success text-white">
                  <h5 className="mb-0">Order #{order._id}</h5>
                </div>
                <div className="card-body">
                  <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
                  {/* <p><strong>Status:</strong> <span className="badge bg-primary">{order.status}</span></p> */}
                  <h6>Items:</h6>
                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Image</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.items.map((item, index) => {
                        console.log("Item data:", item);  // Debugging log to check the item data
                        return (
                          <tr key={index}>
                            <td>{item.productId?.name || "Unknown Product"}</td>
                            <td>{item.quantity}</td>
                            <td>${item.productId?.price?.toFixed(2) || "0.00"}</td>
                            <td>
                              {item.productId?.image && (
                                <img src={item.productId.image} alt={item.productId?.name} className="img-thumbnail" style={{ width: '50px', height: '50px' }} />
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  {/* <p className="text-end"><strong>Total: ${order.totalAmount.toFixed(2)}</strong></p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
