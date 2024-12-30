import React, { useState } from "react";

function LeadForms() {
  const [formData, setFormData] = useState({
    leadOwner: "",
    company: "",
    firstName: "",
    lastName: "",
    phone: "",
    emailAddress: "",
    leadSource: "",
    leadStatus: "",
    secondaryPhone: "",
    secondaryEmailAddress: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    description: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setResponseMessage(result.message || "Form submitted successfully!");
      setError(null);
    } catch (err) {
      setError(err.message || "Something went wrong!");
      setResponseMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Lead Information */}
      <div className="container my-4">
        <h3 className="text-center">Lead Information</h3>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Lead Owner</label>
            <input
              type="text"
              name="leadOwner"
              className="form-control"
              value={formData.leadOwner}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Company</label>
            <input
              type="text"
              name="company"
              className="form-control"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Phone</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="emailAddress"
              className="form-control"
              value={formData.emailAddress}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Lead Source</label>
            <input
              type="text"
              name="leadSource"
              className="form-control"
              value={formData.leadSource}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Lead Status</label>
            <input
              type="text"
              name="leadStatus"
              className="form-control"
              value={formData.leadStatus}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Secondary Phone</label>
            <input
              type="text"
              name="secondaryPhone"
              className="form-control"
              value={formData.secondaryPhone}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Secondary Email Address</label>
            <input
              type="email"
              name="secondaryEmailAddress"
              className="form-control"
              value={formData.secondaryEmailAddress}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Address Information */}
      <div className="container my-4">
        <h3 className="text-center">Address Information</h3>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Street</label>
            <input
              type="text"
              name="street"
              className="form-control"
              value={formData.street}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">City</label>
            <input
              type="text"
              name="city"
              className="form-control"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">State</label>
            <input
              type="text"
              name="state"
              className="form-control"
              value={formData.state}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Zip Code</label>
            <input
              type="text"
              name="zipCode"
              className="form-control"
              value={formData.zipCode}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-12">
            <label className="form-label">Country</label>
            <input
              type="text"
              name="country"
              className="form-control"
              value={formData.country}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="container my-4">
        <h3 className="text-center">Description</h3>
        <div className="row mb-3">
          <div className="col-md-12">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="container text-end my-4">
        <button type="submit" className="btn btn-primary btn-lg px-5">
          Submit
        </button>
      </div>

      {/* Display Response or Error */}
      {responseMessage && <p className="text-success text-center">{responseMessage}</p>}
      {error && <p className="text-danger text-center">{error}</p>}
    </form>
  );
}

export default LeadForms;
