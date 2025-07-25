import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState([]); // Add a state for cart items

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(`product-${id}`));
    setProduct(data);
  }, [id]);

  useEffect(() => {
    // Load the cart from localStorage when the component mounts
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    // Save the cart to localStorage whenever it changes
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = () => {
    if (product) {
      const updatedCart = [...cart, product];
      setCart(updatedCart); // Update cart state
    }
  };

  if (!product) {
    return (
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <section className="my-lg-14 my-8">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={`http://localhost:5000${product.image}`}
              alt={product.name}
              className="img-fluid"
              style={{ height: '400px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-6">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div className="d-flex justify-content-between align-items-center">
              <span className="text-dark">${product.price}</span>
              {product.originalPrice && (
                <span className="text-decoration-line-through text-muted">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <button className="btn btn-primary mt-3" onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
