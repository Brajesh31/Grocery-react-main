import React, { useState } from "react";
import signinimage from "../../images/signin-g.svg";
import { Link, useNavigate } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import axios from "axios";

const MyAccountSignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", formData);
      const { token, role } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      alert("Login successful");
      role === "admin" ? navigate("/admin") : navigate("/Grocery-react");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div>
      <ScrollToTop />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <h2>Sign in to FreshCart</h2>
            <form onSubmit={handleSubmit}>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="form-control mb-3" required />
              <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="form-control mb-3" required />
              <button type="submit" className="btn btn-primary w-100">Sign In</button>
            </form>
            <p className="mt-3">
              Don’t have an account? <Link to="/MyAccountSignUp">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MyAccountSignIn;



// Frontend: MyAccountSignIn.js
// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import ScrollToTop from "../ScrollToTop";

// const MyAccountSignIn = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:5000/api/login", formData);
//       const { token, role, user } = response.data;

//       localStorage.setItem("token", token);
//       localStorage.setItem("role", role);
//       localStorage.setItem("userName", user.name); // Store user name

//       alert(`Login successful! Welcome, ${user.name}`);
//       role === "admin" ? navigate("/admin") : navigate("/Grocery-react");
//     } catch (error) {
//       alert(error.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div>
//       <ScrollToTop />
//       <div className="container my-5">
//         <div className="row justify-content-center">
//           <div className="col-md-5">
//             <h2>Sign in to FreshCart</h2>
//             <form onSubmit={handleSubmit}>
//               <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="form-control mb-3" required />
//               <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="form-control mb-3" required />
//               <button type="submit" className="btn btn-primary w-100">Sign In</button>
//             </form>
//             <p className="mt-3">
//               Don’t have an account? <Link to="/MyAccountSignUp">Sign Up</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyAccountSignIn;
