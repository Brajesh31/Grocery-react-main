import React, { useEffect, useState } from 'react';

const OrderPage = () => {
  const [order, setOrder] = useState(null);  // State to store order data
  const [loading, setLoading] = useState(true);  // State for loading indicator
  const [error, setError] = useState(null);  // State for error handling

  useEffect(() => {
    // Make API call to fetch order details
    const fetchOrder = async () => {
      try {
        const response = await fetch('http://localhost:5000/checkout', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer YOUR_TOKEN_HERE`, // Send token if required
          },
        });

        if (!response.ok) {
          throw new Error('Error fetching order data');
        }

        const data = await response.json();
        setOrder(data.order);  // Store the order data in state
        setLoading(false);  // Update loading state
      } catch (err) {
        setError(err.message);  // Handle error
        setLoading(false);
      }
    };

    fetchOrder();
  }, []);

  if (loading) return <div>Loading...</div>;  // Show loading message
  if (error) return <div>Error: {error}</div>;  // Show error message if any

  return (
    <div>
      <h1>Order Details</h1>
      {order ? (
        <div>
          <p><strong>User ID:</strong> {order.userId}</p>
          <p><strong>Shipping Address:</strong> {order.shippingAddress}</p>
          <p><strong>Total Amount:</strong> ${order.totalAmount}</p>
          <h3>Items:</h3>
          <ul>
            {order.items.map((item, index) => (
              <li key={index}>
                <p><strong>Product ID:</strong> {item.productId}</p>
                <p><strong>Quantity:</strong> {item.quantity}</p>
                <p><strong>Price:</strong> ${item.price}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No order data available</p>
      )}
    </div>
  );
};

export default OrderPage;
