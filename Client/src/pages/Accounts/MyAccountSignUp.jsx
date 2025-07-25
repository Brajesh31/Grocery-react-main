// import React, { useState } from 'react';
// import signupimage from '../../images/signup-g.svg';
// import { Link } from 'react-router-dom';
// import ScrollToTop from '../ScrollToTop';
// import axios from 'axios';

// const MyAccountSignUp = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { firstName, lastName, email, password } = formData;
//     try {
//       const response = await axios.post('/api/register', {
//         name: `${firstName} ${lastName}`,
//         email,
//         password
//       });
//       alert(response.data);
//     } catch (error) {
//       alert('Error registering user');
//     }
//   };

//   return (
//     <div>
//       <ScrollToTop/>
//       <section className="my-lg-14 my-8">
//         <div className="container">
//           <div className="row justify-content-center align-items-center">
//             <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
//               <img src={signupimage} alt="freshcart" className="img-fluid" />
//             </div>
//             <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
//               <div className="mb-lg-9 mb-5">
//                 <h1 className="mb-1 h2 fw-bold">Get Start Shopping</h1>
//                 <p>Welcome to FreshCart! Enter your email to get started.</p>
//               </div>
//               <form onSubmit={handleSubmit}>
//                 <div className="row g-3">
//                   <div className="col">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="First name"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="col">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Last name"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="col-12">
//                     <input
//                       type="email"
//                       className="form-control"
//                       placeholder="Email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="col-12">
//                     <input
//                       type="password"
//                       className="form-control"
//                       placeholder="Password"
//                       name="password"
//                       value={formData.password}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="col-12 d-grid">
//                     <button type="submit" className="btn btn-primary">
//                       Register
//                     </button>
//                   </div>
//                   <div className="navbar-text">
//                     Already have an account?{" "}
//                     <Link to="/MyAccountSignIn">Sign in</Link>
//                   </div>
//                   <p>
//                     <small>
//                       By continuing, you agree to our{" "}
//                       <Link to="#!"> Terms of Service</Link> &amp;{" "}
//                       <Link to="#!">Privacy Policy</Link>
//                     </small>
//                   </p>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MyAccountSignUp;
///////////////////////////////////////////

import React, { useState } from 'react';
import signupimage from '../../images/signup-g.svg';
import { Link,useNavigate } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';
import axios from 'axios';

const MyAccountSignUp = () => {
 
  const navigate=useNavigate();


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = formData;
    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        name: `${firstName} ${lastName}`,
        email,
        password
      });
      // alert(response.data.message);
      alert("Register suuccess fully");
      navigate("/MyAccountSignIn")
    } catch (error) {
      alert(error.response?.data?.message || 'Error registering user');
    }
  };

  return (
    <div>
      <ScrollToTop />
      <section className="my-lg-14 my-8">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
              <img src={signupimage} alt="freshcart" className="img-fluid" />
            </div>
            <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
              <div className="mb-lg-9 mb-5">
                <h1 className="mb-1 h2 fw-bold">Get Start Shopping</h1>
                <p>Welcome to FreshCart! Enter your email to get started.</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12 d-grid">
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                  </div>
                  <div className="navbar-text">
                    Already have an account?{" "}
                    <Link to="/MyAccountSignIn">Sign in</Link>
                  </div>
                  <p>
                    <small>
                      By continuing, you agree to our{" "}
                      <Link to="#!"> Terms of Service</Link> &amp;{" "}
                      <Link to="#!">Privacy Policy</Link>
                    </small>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyAccountSignUp;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import ScrollToTop from "../ScrollToTop";

// const MyAccountSignUp = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { firstName, lastName, email, password } = formData;
//       await axios.post("http://localhost:5000/api/register", {
//         name: `${firstName} ${lastName}`,
//         email,
//         password,
//       });
//       alert("Registration successful");
//       navigate("/MyAccountSignIn");
//     } catch (error) {
//       alert(error.response?.data?.message || "Error registering user");
//     }
//   };

//   return (
//     <div>
//       <ScrollToTop />
//       <div className="container my-5">
//         <div className="row justify-content-center">
//           <div className="col-md-5">
//             <h2>Create an Account</h2>
//             <form onSubmit={handleSubmit}>
//               <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="form-control mb-3" required />
//               <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="form-control mb-3" required />
//               <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="form-control mb-3" required />
//               <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="form-control mb-3" required />
//               <button type="submit" className="btn btn-primary w-100">Register</button>
//             </form>
//             <p className="mt-3">
//               Already have an account? <Link to="/MyAccountSignIn">Sign In</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyAccountSignUp;
