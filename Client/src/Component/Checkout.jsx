// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Checkout = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
  
//   const cartItems = location.state?.cartItems || [];
//   const [shippingAddress, setShippingAddress] = useState('');
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!cartItems || cartItems.length === 0) {
//       setTotalAmount(0);
//       return;
//     }
    
//     const total = cartItems.reduce((sum, item) => {
//       if (!item || !item.productId || typeof item.productId.price !== "number") {
//         console.error("Invalid item detected:", item);
//         return sum;
//       }
//       return sum + item.productId.price * item.quantity;
//     }, 0);
    
//     setTotalAmount(total);
//   }, [cartItems]);
  
//   const handleCheckout = async () => {
//     setLoading(true);
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         alert("You are not logged in. Please log in first.");
//         setLoading(false);
//         return;
//       }
      
//       await axios.post(
//         "http://localhost:5000/api/order/checkout",
//         { shippingAddress },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
      
//       alert("Order placed successfully!");
//       navigate("/order-success");
//     } catch (error) {
//       console.error("Error during checkout:", error);
//       alert(error.response?.data?.message || "Error placing order");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container py-5">
//       <div className="card p-4 shadow-lg border-0 rounded">
//         <h2 className="text-center mb-4 text-primary">Checkout</h2>
//         {cartItems.length === 0 ? (
//           <p className="text-muted text-center">Your cart is empty.</p>
//         ) : (
//           <>
//             <div className="checkout-items border-bottom pb-3 mb-3">
//               {cartItems.map((item) => {
//                 const product = item.productId;
//                 const imageUrl = product.image.startsWith("http")
//                   ? product.image
//                   : `http://localhost:5000${product.image}`;
//                 return (
//                   <div key={product._id} className="d-flex align-items-center mb-3">
//                     <img
//                       src={imageUrl}
//                       alt={product.name}
//                       className="rounded border"
//                       style={{ width: "80px", height: "80px", objectFit: "cover", marginRight: "15px" }}
//                       onError={(e) => (e.target.src = "/placeholder.jpg")}
//                     />
//                     <div>
//                       <h5 className="mb-1">{product.name}</h5>
//                       <p className="mb-0 text-muted">{item.quantity} x ${product.price.toFixed(2)}</p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             <h4 className="text-end">Total: <span className="text-success">${totalAmount.toFixed(2)}</span></h4>
            
//             <div className="mb-3">
//               <label className="form-label fw-bold">Shipping Address</label>
//               <textarea
//                 className="form-control rounded p-3"
//                 value={shippingAddress}
//                 onChange={(e) => setShippingAddress(e.target.value)}
//                 placeholder="Enter shipping address"
//                 required
//                 rows="3"
//               />
//             </div>
            
//             <button
//               onClick={handleCheckout}
//               disabled={loading || !shippingAddress}
//               className="btn btn-primary btn-lg w-100"
//             >
//               {loading ? (
//                 <span>
//                   <i className="fas fa-spinner fa-spin me-2"></i> Processing...
//                 </span>
//               ) : (
//                 <span>
//                   <i className="fas fa-check-circle me-2"></i> Proceed to Checkout
//                 </span>
//               )}
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Checkout;




// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// // Load Stripe using your **publishable key**
// const stripePromise = loadStripe('pk_test_51Qrsb5CS7MAi8hTOVI8QQmTHx8sIqgY8B4tRFkB9RsIKvTez1dlKjOd5KliFiXaLaggyibN2DVsiIeMirZifjOj500u0Y9afiT');

// const Checkout = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
  
//   const cartItems = location.state?.cartItems || [];
//   const [shippingAddress, setShippingAddress] = useState('');
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!cartItems || cartItems.length === 0) {
//       setTotalAmount(0);
//       return;
//     }
    
//     const total = cartItems.reduce((sum, item) => {
//       if (!item || !item.productId || typeof item.productId.price !== "number") {
//         console.error("Invalid item detected:", item);
//         return sum;
//       }
//       return sum + item.productId.price * item.quantity;
//     }, 0);
    
//     setTotalAmount(total);
//   }, [cartItems]);

//   return (
//     <div className="container py-5">
//       <div className="card p-4 shadow-lg border-0 rounded">
//         <h2 className="text-center mb-4 text-primary">Checkout</h2>
        
//         {cartItems.length === 0 ? (
//           <p className="text-muted text-center">Your cart is empty.</p>
//         ) : (
//           <>
//             <div className="checkout-items border-bottom pb-3 mb-3">
//               {cartItems.map((item) => {
//                 const product = item.productId;
//                 const imageUrl = product.image.startsWith("http")
//                   ? product.image
//                   : `http://localhost:5000${product.image}`;
//                 return (
//                   <div key={product._id} className="d-flex align-items-center mb-3">
//                     <img
//                       src={imageUrl}
//                       alt={product.name}
//                       className="rounded border"
//                       style={{ width: "80px", height: "80px", objectFit: "cover", marginRight: "15px" }}
//                       onError={(e) => (e.target.src = "/placeholder.jpg")}
//                     />
//                     <div>
//                       <h5 className="mb-1">{product.name}</h5>
//                       <p className="mb-0 text-muted">{item.quantity} x ${product.price.toFixed(2)}</p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             <h4 className="text-end">Total: <span className="text-success">${totalAmount.toFixed(2)}</span></h4>
            
//             <div className="mb-3">
//               <label className="form-label fw-bold">Shipping Address</label>
//               <textarea
//                 className="form-control rounded p-3"
//                 value={shippingAddress}
//                 onChange={(e) => setShippingAddress(e.target.value)}
//                 placeholder="Enter shipping address"
//                 required
//                 rows="3"
//               />
//             </div>

//             <Elements stripe={stripePromise}>
//               <PaymentForm totalAmount={totalAmount} shippingAddress={shippingAddress} navigate={navigate} />
//             </Elements>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// // Payment Form Component
// const PaymentForm = ({ totalAmount, shippingAddress, navigate }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);

//   const handlePayment = async (e) => {
//     e.preventDefault();
//     if (!stripe || !elements) return;

//     setLoading(true);
//     try {
//       const { data } = await axios.post("http://localhost:5000/api/stripe/create-payment-intent", {
//         amount: totalAmount * 100, // Convert to cents
//       });

//       const { clientSecret } = data;
//       const result = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: { card: elements.getElement(CardElement) },
//       });

//       if (result.error) {
//         alert(result.error.message);
//       } else if (result.paymentIntent.status === "succeeded") {
//         alert("Payment successful!");
//         navigate("/order-success");
//       }
//     } catch (error) {
//       console.error("Payment error:", error);
//       alert("Payment failed. Try again.");
//     }
//     setLoading(false);
//   };

//   return (
//     <form onSubmit={handlePayment}>
//       <div className="card p-3 my-3">
//         <CardElement options={{ hidePostalCode: true }} />
//       </div>
//       <button className="btn btn-primary w-100" type="submit" disabled={loading || !stripe}>
//         {loading ? "Processing..." : "Pay Now"}
//       </button>
//     </form>
//   );
// };

// export default Checkout;





import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Load Stripe using your publishable key
//const stripePromise = loadStripe('pk_test_51Qrsb5CS7MAi8hTOVI8QQmTHx8sIqgY8B4tRFkB9RsIKvTez1dlKjOd5KliFiXaLaggyibN2DVsiIeMirZifjOj500u0Y9afiT');

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = location.state?.cartItems || [];
  const [shippingAddress, setShippingAddress] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (!cartItems || cartItems.length === 0) {
      setTotalAmount(0);
      return;
    }

    const total = cartItems.reduce((sum, item) => {
      if (!item || !item.productId || typeof item.productId.price !== "number") {
        console.error("Invalid item detected:", item);
        return sum;
      }
      return sum + item.productId.price * item.quantity;
    }, 0);

    setTotalAmount(total);
  }, [cartItems]);

  return (
    <div className="container py-5">
      <div className="card p-4 shadow-lg border-0 rounded">
        <h2 className="text-center mb-4 text-primary">Checkout</h2>
        
        {cartItems.length === 0 ? (
          <p className="text-muted text-center">Your cart is empty.</p>
        ) : (
          <>
            <div className="checkout-items border-bottom pb-3 mb-3">
              {cartItems.map((item) => {
                const product = item.productId;
                const imageUrl = product.image.startsWith("http")
                  ? product.image
                  : `http://localhost:5000${product.image}`;
                return (
                  <div key={product._id} className="d-flex align-items-center mb-3">
                    <img
                      src={imageUrl}
                      alt={product.name}
                      className="rounded border"
                      style={{ width: "80px", height: "80px", objectFit: "cover", marginRight: "15px" }}
                      onError={(e) => (e.target.src = "/placeholder.jpg")}
                    />
                    <div>
                      <h5 className="mb-1">{product.name}</h5>
                      <p className="mb-0 text-muted">{item.quantity} x ${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <h4 className="text-end">
              Total: <span className="text-success">${totalAmount.toFixed(2)}</span>
            </h4>

            <div className="mb-3">
              <label className="form-label fw-bold">Shipping Address</label>
              <textarea
                className="form-control rounded p-3"
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
                placeholder="Enter shipping address"
                required
                rows="3"
              />
            </div>

            <Elements stripe={stripePromise}>
              <PaymentForm 
                totalAmount={totalAmount} 
                shippingAddress={shippingAddress} 
                cartItems={cartItems} 
                navigate={navigate} 
              />
            </Elements>
          </>
        )}
      </div>
    </div>
  );
};

// Payment Form Component
const PaymentForm = ({ totalAmount, shippingAddress, cartItems, navigate }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("You are not logged in. Please log in first.");
        setLoading(false);
        return;
      }

      // Step 1: Create Payment Intent
      const { data } = await axios.post(
        "http://localhost:5000/api/stripe/create-payment-intent",
        { amount: totalAmount * 100 },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const { clientSecret } = data;

      // Step 2: Confirm Payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      });

      if (result.error) {
        alert(result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        // Step 3: Create Order
        await axios.post(
          "http://localhost:5000/api/order/checkout",
          { 
            shippingAddress, 
            cartItems, 
            totalAmount 
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        alert("Payment successful and order placed!");
        navigate("/order-success");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert(error.response?.data?.message || "Payment failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handlePayment}>
      <div className="card p-3 my-3">
        <CardElement options={{ hidePostalCode: true }} />
      </div>
      <button className="btn btn-primary w-100" type="submit" disabled={loading || !stripe}>
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

export default Checkout;
