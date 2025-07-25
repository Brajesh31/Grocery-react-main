import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlass } from "react-loader-spinner";

const MyAccountAddress = () => {
  const [loaderStatus, setLoaderStatus] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    country: "India",
    state: "Gujarat",
    zipCode: "",
    businessName: "",
    isDefault: false,
  });
  const [editingIndex, setEditingIndex] = useState(null);

  // Load addresses from local storage on component mount
  useEffect(() => {
    const storedAddresses = JSON.parse(localStorage.getItem("addresses")) || [];
    setAddresses(storedAddresses);
  }, []);

  // Save updated addresses to local storage
  const saveToLocalStorage = (updatedAddresses) => {
    localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
    setAddresses(updatedAddresses);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  // Handle form submission
  const handleFormSubmit = () => {
    if (editingIndex !== null) {
      const updatedAddresses = [...addresses];
      updatedAddresses[editingIndex] = formData;
      saveToLocalStorage(updatedAddresses);
    } else {
      const updatedAddresses = [...addresses, formData];
      saveToLocalStorage(updatedAddresses);
    }
    resetForm();
  };

  // Reset form data
  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      address1: "",
      address2: "",
      city: "",
      country: "India",
      state: "Gujarat",
      zipCode: "",
      businessName: "",
      isDefault: false,
    });
    setEditingIndex(null);
  };

  // Handle address deletion
  const handleDelete = (index) => {
    const updatedAddresses = addresses.filter((_, i) => i !== index);
    saveToLocalStorage(updatedAddresses);
  };

  // Handle editing an address
  const handleEdit = (index) => {
    setFormData(addresses[index]);
    setEditingIndex(index);
  };

  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="p-6 d-flex justify-content-between align-items-center d-md-none">
                <h3 className="fs-5 mb-0">Account Setting</h3>
                <button
                  className="btn btn-outline-gray-400 text-muted d-md-none"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasAccount"
                  aria-controls="offcanvasAccount"
                >
                  <i className="fas fa-bars"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12 border-end d-none d-md-block">
              <div className="pt-10 pe-lg-10">
                <ul className="nav flex-column nav-pills nav-pills-dark">
                  <li className="nav-item">
                    <Link className="nav-link" to="/OrderHistory">
                      <i className="fas fa-shopping-bag me-2" />
                      Your Orders
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/MyAccountSetting">
                      <i className="fas fa-cog me-2" />
                      Settings
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link className="nav-link active" to="/MyAccountAddress">
                      <i className="fas fa-map-marker-alt me-2" />
                      Address
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/MyAcconutPaymentMethod">
                      <i className="fas fa-credit-card me-2" />
                      Payment Method
                    </Link>
                  </li> */}
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/MyAcconutNotification">
                      <i className="fas fa-bell me-2" />
                      Notification
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <hr />
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/Grocery-react/">
                      <i className="fas fa-sign-out-alt me-2" />
                      Log out
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-12">
              <div>
                {loaderStatus ? (
                  <div className="loader-container">
                    <MagnifyingGlass
                      visible={true}
                      height="100"
                      width="100"
                      ariaLabel="magnifying-glass-loading"
                      wrapperStyle={{}}
                      glassColor="#c0efff"
                      color="#0aad0a"
                    />
                  </div>
                ) : (
                  <>
                    <div className="p-6 p-lg-10">
                      <div className="d-flex justify-content-between mb-6">
                        <h2 className="mb-0">Address</h2>
                        <button
                          className="btn btn-outline-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#addAddressModal"
                        >
                          Add a new address
                        </button>
                      </div>
                      <div className="row">
                        {addresses.map((address, index) => (
                          <div
                            className="col-lg-5 col-xxl-4 col-12 mb-4"
                            key={index}
                          >
                            <div className="border p-6 rounded-3">
                              <p className="mb-6">
                                {address.firstName} {address.lastName}
                                <br />
                                {address.address1}, {address.address2}
                                <br />
                                {address.city}, {address.state}, {address.zipCode}
                                <br />
                                {address.country}
                              </p>
                              <div className="mt-4">
                                <button
                                  className="btn btn-sm btn-info me-3"
                                  onClick={() => handleEdit(index)}
                                  data-bs-toggle="modal"
                                  data-bs-target="#addAddressModal"
                                >
                                  Edit
                                </button>
                                <button
                                  className="btn btn-sm btn-danger"
                                  onClick={() => handleDelete(index)}
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="modal fade"
        id="addAddressModal"
        tabIndex={-1}
        aria-labelledby="addAddressModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body p-6">
              <h5 className="h6 mb-1" id="addAddressModalLabel">
                {editingIndex !== null ? "Edit Address" : "New Shipping Address"}
              </h5>
              <div className="row g-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address Line 1"
                  name="address1"
                  value={formData.address1}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address Line 2"
                  name="address2"
                  value={formData.address2}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
                <select
                  className="form-select"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                >
                  <option>India</option>
                  <option>UK</option>
                  <option>USA</option>
                  <option>UAE</option>
                </select>
                <select
                  className="form-select"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                >
                  <option>Gujarat</option>
                  <option>Maharashtra</option>
                  <option>Rajasthan</option>
                  <option>Delhi</option>
                </select>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Zip Code"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Business Name (Optional)"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                />
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="isDefault"
                    checked={formData.isDefault}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label">Set as Default</label>
                </div>
              </div>
              <div className="d-flex justify-content-end mt-4">
                <button
                  className="btn btn-outline-secondary me-2"
                  data-bs-dismiss="modal"
                  onClick={resetForm}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary"
                  onClick={handleFormSubmit}
                  data-bs-dismiss="modal"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccountAddress;
