// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// // const ListUsers = () => {
// //     const [users, setUsers] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);
// //     const navigate = useNavigate();

// //     useEffect(() => {
// //         fetchUsers();
// //     }, []);

// //     const fetchUsers = async () => {
// //         try {
// //             const { data } = await axios.get("http://localhost:5000/api/getUser");
// //             setUsers(data.data);
// //         } catch (error) {
// //             setError("Failed to fetch users");
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     if (loading) return <p>Loading users...</p>;
// //     if (error) return <p>{error}</p>;

// //     return (
// //         <div>
// //             <h2>List of Users</h2>
// //             <table border="1">
// //                 <thead>
// //                     <tr>
// //                         <th>Name</th>
// //                         <th>Email</th>
// //                         <th>Profile</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {users.map(user => (
// //                         <tr key={user._id}>
// //                             <td>{user.name}</td>
// //                             <td>{user.email}</td>
// //                             <td>
// //                                 {user.profile ? (
// //                                     <img src={user.profile} alt="Profile" width="50" height="50" />
// //                                 ) : (
// //                                     "No Profile Picture"
// //                                 )}
// //                             </td>
// //                         </tr>
// //                     ))}
// //                 </tbody>
// //             </table>
// //         </div>
// //     );
// // };

// // export default ListUsers;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ListUsers = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const fetchUsers = async () => {
//         try {
//             const { data } = await axios.get("http://localhost:5000/api/getUser");
//             setUsers(data.data);
//         } catch (err) {
//             setError("Failed to fetch users. Check your server.");
//             console.error(err);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <h2>User List</h2>
//             {loading && <p>Loading...</p>}
//             {error && <p style={{ color: "red" }}>{error}</p>}
//             {!loading && users.length === 0 && <p>No users found.</p>}
//             <table border="1">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Password</th>

//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user) => (
//                         <tr key={user._id}>
//                             <td>{user.name}</td>
//                             <td>{user.email}</td>
//                             <td>{user.Password}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default ListUsers;



// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ListUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const { data } = await axios.get("http://localhost:5000/api/getUser", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setUsers(data.data);
//     } catch (err) {
//       setError("Failed to fetch users. Check your server.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>User List</h2>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {!loading && users.length === 0 && <p>No users found.</p>}
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user._id}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ListUsers;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ListUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setError("No token found, please log in.");
//         return;
//       }
      
//       console.log("Fetching users with token:", token);
      
//       const  {data}  = await axios.get("http://localhost:5000/api/getUser");
      
//       console.log("Received data:", data);
//       setUsers(data.data); // Update if the structure is different like data.users
//     } catch (err) {
//       console.log("Error fetching users:", err);
//       setError("Failed to fetch users. Check your server.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>User List</h2>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {!loading && users.length === 0 && <p>No users found.</p>}
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Edit</th>
//             <th>Delete</th>
           
//           </tr>
          
          
//         </thead>
       

//         <tbody>
//           {users.map((user) => (
//             <tr key={user._id}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <button
//                   className="btn btn-primary btn-sm me-2"
                 
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="btn btn-danger btn-sm"
                   
//                 >
//                   Delete
//                 </button>
//             </tr>
            
//           ))}
          
         
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ListUsers;


////////////////////////////////

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ListUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [newUser, setNewUser] = useState({ name: "", email: "" });
//   const [editUser, setEditUser] = useState(null);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const { data } = await axios.get("http://localhost:5000/api/getUser");
//       setUsers(data.data);
//     } catch (err) {
//       setError("Failed to fetch users. Check your server.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const addUser = async () => {
//     try {
//       const { data } = await axios.post("http://localhost:5000/api/addUser", newUser);
//       setUsers([...users, data.user]);
//       setNewUser({ name: "", email: "" });
//     } catch (err) {
//       setError("Failed to add user.");
//     }
//   };

//   const updateUser = async () => {
//     try {
//       const { data } = await axios.put(`http://localhost:5000/api/updateUser/${editUser._id}`, editUser);
//       setUsers(users.map(user => (user._id === editUser._id ? data.user : user)));
//       setEditUser(null);
//     } catch (err) {
//       setError("Failed to update user.");
//     }
//   };

//   const deleteUser = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/deleteUser/${id}`);
//       setUsers(users.filter(user => user._id !== id));
//     } catch (err) {
//       setError("Failed to delete user.");
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>User List</h2>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <input className="form-control mb-2" type="text" placeholder="Name" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
//       <input  className="form-control mb-2"type="email" placeholder="Email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
//       <button className="btn btn-success"onClick={addUser}>Add User</button>
//       {editUser && (
//         <div>
//           <input type="text" value={editUser.name} onChange={(e) => setEditUser({ ...editUser, name: e.target.value })} />
//           <input type="email" value={editUser.email} onChange={(e) => setEditUser({ ...editUser, email: e.target.value })} />
//           <button onClick={updateUser}>Update</button>
//           <button onClick={() => setEditUser(null)}>Cancel</button>
//         </div>
//       )}
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user._id}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>
//                 <button  className="btn btn-primary btn-sm me-2" onClick={() => setEditUser(user)}>Edit</button>
//                 <button  className="btn btn-danger btn-sm" onClick={() => deleteUser(user._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ListUsers;


import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "./AdminSidebar";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/getUser");
      setUsers(data.data);
    } catch (err) {
      setError("Failed to fetch users. Check your server.");
    } finally {
      setLoading(false);
    }
  };

  const addUser = async () => {
    try {
      const { data } = await axios.post("http://localhost:5000/api/addUser", newUser);
      setUsers([...users, data.user]);
      setNewUser({ name: "", email: "" });
    } catch (err) {
      setError("Failed to add user.");
    }
  };

  const updateUser = async () => {
    try {
      const { data } = await axios.put(`http://localhost:5000/api/updateUser/${editUser._id}`, editUser);
      setUsers(users.map(user => (user._id === editUser._id ? data.user : user)));
      setEditUser(null);
    } catch (err) {
      setError("Failed to update user.");
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/deleteUser/${id}`);
      setUsers(users.filter(user => user._id !== id));
    } catch (err) {
      setError("Failed to delete user.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex">
        <AdminSidebar />
        <div className="flex-grow-1 ms-4">
          <h2>User List</h2>
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
          <input className="form-control mb-2" type="text" placeholder="Name" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
          <input className="form-control mb-2" type="email" placeholder="Email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
          <button className="btn btn-success" onClick={addUser}>Add User</button>
          {editUser && (
            <div>
              <input type="text" value={editUser.name} onChange={(e) => setEditUser({ ...editUser, name: e.target.value })} />
              <input type="email" value={editUser.email} onChange={(e) => setEditUser({ ...editUser, email: e.target.value })} />
              <button onClick={updateUser}>Update</button>
              <button onClick={() => setEditUser(null)}>Cancel</button>
            </div>
          )}
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button className="btn btn-primary btn-sm me-2" onClick={() => setEditUser(user)}>Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={() => deleteUser(user._id)}>Delete</button>
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

export default ListUsers;
