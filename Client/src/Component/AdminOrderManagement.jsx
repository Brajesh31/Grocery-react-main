


// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import AdminSidebar from "../pages/admin/AdminSidebar";// Import AdminSidebar

// // const AdminOrderManagement = () => {
// //   const [orders, setOrders] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchOrders = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:5000/api/order/admin/orders");
// //         setOrders(response.data.orders);
// //       } catch (error) {
// //         console.error("Error fetching orders:", error);
// //         setError("Error fetching orders");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchOrders();
// //   }, []);

// //   if (loading) return <div className="text-center py-5">Loading orders...</div>;
// //   if (error) return <div className="alert alert-danger text-center">{error}</div>;

// //   return (
// //     <div className="container mt-5">
// //       <div className="d-flex">
// //         <AdminSidebar />
// //         <div className="flex-grow-1 ms-4">
// //           <h2 className="text-center mb-4">Admin Order Management</h2>
// //           {orders.length === 0 ? (
// //             <div className="alert alert-info text-center">No orders available.</div>
// //           ) : (
// //             <div className="table-responsive">
// //               <table className="table table-bordered table-striped">
// //                 <thead className="bg-dark text-white">
// //                   <tr>
// //                     <th>Order ID</th>
// //                     <th>Customer</th>
// //                     <th>Date</th>
// //                     <th>Status</th>
// //                     <th>Items</th>
// //                     <th>Shipping Address</th>
// //                     <th>Total for All Items</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {orders.map((order) => {
// //                     const totalForAllItems = order.items.reduce((total, item) => {
// //                       return total + (item.productId?.price || 0) * item.quantity;
// //                     }, 0);

// //                     return (
// //                       <tr key={order._id}>
// //                         <td>{order._id}</td>
// //                         <td>{order.userId?.name || "Unknown User"}</td>
// //                         <td>{new Date(order.createdAt).toLocaleDateString()}</td>
// //                         <td><span className="badge bg-primary">{order.status}</span></td>
// //                         <td>
// //                           <ul className="list-unstyled">
// //                             {order.items.map((item, index) => {
// //                               const totalPerItem = (item.productId?.price || 0) * item.quantity;
// //                               return (
// //                                 <li key={index}>
// //                                   {item.productId?.name || "Unknown Product"} - {item.quantity} x ${item.productId?.price?.toFixed(2) || "0.00"} = ${totalPerItem.toFixed(2)}
// //                                 </li>
// //                               );
// //                             })}
// //                           </ul>
// //                         </td>
// //                         <td>{order.shippingAddress || "Address not available"}</td>
// //                         <td>${totalForAllItems.toFixed(2)}</td>
// //                       </tr>
// //                     );
// //                   })}
// //                 </tbody>
// //               </table>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminOrderManagement;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import AdminSidebar from "../pages/admin/AdminSidebar"; // Import AdminSidebar

// const AdminOrderManagement = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch Orders on Component Mount
//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/order/admin/orders");
//         setOrders(response.data.orders);
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//         setError("Error fetching orders");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchOrders();
//   }, []);

//   // Remove Order with Confirmation
//   const handleRemoveOrder = async (orderId) => {
//     const confirmDelete = window.confirm("Are you sure you want to remove this order?");
//     if (!confirmDelete) return;

//     try {
//       await axios.delete(`http://localhost:5000/api/order/admin/orders/${orderId}`);
//       setOrders(orders.filter(order => order._id !== orderId));
//       alert("Order removed successfully.");
//     } catch (error) {
//       console.error("Error removing order:", error);
//       alert("Failed to remove order.");
//     }
//   };

//   // Loading or Error Handling
//   if (loading) return <div className="text-center py-5">Loading orders...</div>;
//   if (error) return <div className="alert alert-danger text-center">{error}</div>;

//   // Main Component UI
//   return (
//     <div className="container mt-5">
//       <div className="d-flex">
//         <AdminSidebar /> {/* Sidebar Component */}
//         <div className="flex-grow-1 ms-4">
//           <h2 className="text-center mb-4">Admin Order Management</h2>

//           {/* No Orders Message */}
//           {orders.length === 0 ? (
//             <div className="alert alert-info text-center">No orders available.</div>
//           ) : (
//             <div className="table-responsive">
//               <table className="table table-bordered table-striped">
//                 <thead className="bg-dark text-white">
//                   <tr>
//                     <th>Order ID</th>
//                     <th>Customer</th>
//                     <th>Date</th>
//                     <th>Status</th>
//                     <th>Items</th>
//                     <th>Shipping Address</th>
//                     <th>Total for All Items</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {orders.map((order) => {
//                     const totalForAllItems = order.items.reduce((total, item) => {
//                       return total + (item.productId?.price || 0) * item.quantity;
//                     }, 0);

//                     return (
//                       <tr key={order._id}>
//                         <td>{order._id}</td>
//                         <td>{order.userId?.name || "Unknown User"}</td>
//                         <td>{new Date(order.createdAt).toLocaleDateString()}</td>
//                         <td><span className="badge bg-primary">{order.status}</span></td>
//                         <td>
//                           <ul className="list-unstyled">
//                             {order.items.map((item, index) => {
//                               const totalPerItem = (item.productId?.price || 0) * item.quantity;
//                               return (
//                                 <li key={index}>
//                                   {item.productId?.name || "Unknown Product"} - {item.quantity} x ${item.productId?.price?.toFixed(2) || "0.00"} = ${totalPerItem.toFixed(2)}
//                                 </li>
//                               );
//                             })}
//                           </ul>
//                         </td>
//                         <td>{order.shippingAddress || "Address not available"}</td>
//                         <td>${totalForAllItems.toFixed(2)}</td>
//                         <td>
//                           <button 
//                             className="btn btn-danger"
//                             onClick={() => handleRemoveOrder(order._id)}
//                           >
//                             Remove
//                           </button>
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminOrderManagement;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminSidebar from "../pages/admin/AdminSidebar";

const AdminOrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Orders on Component Mount
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/order/admin/orders");
        setOrders(response.data.orders);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError("Error fetching orders");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  // Remove Order Function
  const handleRemoveOrder = async (orderId) => {
    const confirmDelete = window.confirm("Are you sure you want to remove this order?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/order/admin/orders/${orderId}`);
      setOrders(orders.filter(order => order._id !== orderId));
      alert("Order removed successfully.");
    } catch (error) {
      console.error("Error removing order:", error);
      alert("Failed to remove order.");
    }
  };

  // Update Order Status to "Complete"
  const handleMarkAsComplete = async (orderId) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/order/admin/orders/${orderId}/status`, {
        status: "Complete",
      });
      const updatedOrder = response.data.order;

      // Update State
      setOrders(orders.map(order => 
        order._id === orderId ? { ...order, status: updatedOrder.status } : order
      ));
      alert("Order status updated to 'Complete'.");
    } catch (error) {
      console.error("Error updating order status:", error);
      alert("Failed to update order status.");
    }
  };

  if (loading) return <div className="text-center py-5">Loading orders...</div>;
  if (error) return <div className="alert alert-danger text-center">{error}</div>;

  return (
    <div className="container mt-5">
      <div className="d-flex">
        <AdminSidebar />
        <div className="flex-grow-1 ms-4">
          <h2 className="text-center mb-4">Admin Order Management</h2>

          {orders.length === 0 ? (
            <div className="alert alert-info text-center">No orders available.</div>
          ) : (
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead className="bg-dark text-white">
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Items</th>
                    <th>Shipping Address</th>
                    <th>Total for All Items</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => {
                    const totalForAllItems = order.items.reduce((total, item) => {
                      return total + (item.productId?.price || 0) * item.quantity;
                    }, 0);

                    return (
                      <tr key={order._id}>
                        <td>{order._id}</td>
                        <td>{order.userId?.name || "Unknown User"}</td>
                        <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                        <td>
                          <span className={`badge ${order.status === "Complete" ? "bg-success" : "bg-primary"}`}>
                            {order.status}
                          </span>
                        </td>
                        <td>
                          <ul className="list-unstyled">
                            {order.items.map((item, index) => {
                              const totalPerItem = (item.productId?.price || 0) * item.quantity;
                              return (
                                <li key={index}>
                                  {item.productId?.name || "Unknown Product"} - {item.quantity} x ${item.productId?.price?.toFixed(2) || "0.00"} = ${totalPerItem.toFixed(2)}
                                </li>
                              );
                            })}
                          </ul>
                        </td>
                        <td>{order.shippingAddress || "Address not available"}</td>
                        <td>${totalForAllItems.toFixed(2)}</td>
                        <td className="d-flex gap-2">
                          <button 
                            className="btn btn-success btn-sm"
                            onClick={() => handleMarkAsComplete(order._id)}
                            disabled={order.status === "Complete"}
                          >
                            Mark Complete
                          </button>
                          <button 
                            className="btn btn-danger btn-sm"
                            onClick={() => handleRemoveOrder(order._id)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminOrderManagement;
