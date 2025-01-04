import React, { useState } from "react";

function ContactDBMSForm() {
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
    PAN: "", // New PAN field
    AadhaarNumber: "", // New Aadhaar Number field
    customFields: {},
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCustomFieldChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      customFields: { ...prev.customFields, [key]: value },
    }));
  };

  const addCustomField = () => {
    const fieldName = prompt("Enter the name of the custom field:");
    if (fieldName) {
      setFormData((prev) => ({
        ...prev,
        customFields: { ...prev.customFields, [fieldName]: "" },
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contacts", {
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
      {/* Lead Contact Information */}
      <div className="LeadForms">
        <div className="rows d-flex justify-content-between my-2 w-75 mx-auto">
          <h3>Lead Contact Information</h3>
        </div>
        <div className="rows d-flex justify-content-between my-2 w-75 mx-auto">
          <div className="col-md-5 col-sm-12">
            <label className="form-label m-1">Lead Owner</label>
            <input
              type="text"
              name="leadOwner"
              className="form-control"
              value={formData.leadOwner}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-5 col-sm-12">
            <label className="form-label m-1">Company</label>
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
        <div className="rows d-flex justify-content-between my-2 w-75 mx-auto">
          <div className="col-md-5 col-sm-12">
            <label className="form-label m-1">First Name</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-5 col-sm-12">
            <label className="form-label m-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="rows d-flex justify-content-between my-2 w-75 mx-auto">
          <div className="col-md-5 col-sm-12">
            <label className="form-label m-1">Phone</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-5 col-sm-12">
            <label className="form-label m-1">Email Address</label>
            <input
              type="email"
              name="emailAddress"
              className="form-control"
              value={formData.emailAddress}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="rows d-flex justify-content-between my-2 w-75 mx-auto">
          <div className="col-md-5 col-sm-12">
            <label className="form-label m-1">Lead Source</label>
            <input
              type="text"
              name="leadSource"
              className="form-control"
              value={formData.leadSource}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-5 col-sm-12">
            <label className="form-label m-1">Lead Status</label>
            <input
              type="text"
              name="leadStatus"
              className="form-control"
              value={formData.leadStatus}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="rows d-flex justify-content-between my-2 w-75 mx-auto">
          <div className="col-md-5 col-sm-12">
            <label className="form-label m-1">Secondary Phone</label>
            <input
              type="text"
              name="secondaryPhone"
              className="form-control"
              value={formData.secondaryPhone}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-5 col-sm-12">
            <label className="form-label m-1">Secondary Email Address</label>
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
      <div className="LeadForms mt-5">
        <div className="rows d-flex justify-content-between my-2 w-75 mx-auto">
          <h3>Address Information</h3>
        </div>
        <div className="rows d-flex justify-content-between my-2 w-75 mx-auto">
          <div className="col-md-5 col-sm-12">
            <label className="form-label m-1">Street</label>
            <input
              type="text"
              name="street"
              className="form-control"
              value={formData.street}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-5 col-sm-12">
            <label className="form-label m-1">City</label>
            <input
              type="text"
              name="city"
              className="form-control"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="rows d-flex justify-content-between my-2 w-75 mx-auto">
          <div className="col-md-5 col-sm-12">
            <label className="form-label m-1">State</label>
            <input
              type="text"
              name="state"
              className="form-control"
              value={formData.state}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-5 col-sm-12">
            <label className="form-label m-1">Zip Code</label>
            <input
              type="text"
              name="zipCode"
              className="form-control"
              value={formData.zipCode}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="rows d-flex justify-content-between my-2 w-75 mx-auto">
          <div className="col-md-5 col-sm-12">
            <label className="form-label m-1">Country</label>
            <input
              type="text"
              name="country"
              className="form-control"
              value={formData.country}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-5 col-sm-12">
            <label className="form-label m-1">Description</label>
            <textarea
              name="description"
              className="form-control"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      </div>
  {/* Additional Information */}
  <div className="LeadForms mt-5">
        <div className="rows d-flex justify-content-between my-2 w-75 mx-auto">
          <h3>Additional Information</h3>
        </div>
        <div className="rows d-flex justify-content-between my-2 w-75 mx-auto">
          <div className="col-md-5 col-sm-12">
            <label className="form-label m-1">PAN</label>
            <input
              type="text"
              name="PAN"
              className="form-control"
              value={formData.PAN}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-5 col-sm-12">
            <label className="form-label m-1">Aadhaar Number</label>
            <input
              type="text"
              name="AadhaarNumber"
              className="form-control"
              value={formData.AadhaarNumber}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      {/* Custom Fields */}
      <div className="LeadForms mt-5">
        <div className="rows d-flex justify-content-between my-2 w-75 mx-auto">
          <h3>Custom Fields</h3>
        </div>
        {Object.entries(formData.customFields).map(([key, value], index) => (
          <div
            key={index}
            className="rows d-flex justify-content-between my-2 w-75 mx-auto"
          >
            <div className="col-md-5 col-sm-12">
              <label className="form-label m-1">{key}</label>
              <input
                type="text"
                name={key}
                className="form-control"
                value={value}
                onChange={(e) => handleCustomFieldChange(key, e.target.value)}
              />
            </div>
          </div>
        ))}
        <div className="rows d-flex justify-content-center my-2 w-75 mx-auto">
          <button
            type="button"
            className="btn btn-primary"
            onClick={addCustomField}
          >
            Add Custom Field
          </button>
        </div>
      </div>

      <div className="rows d-flex justify-content-center my-4 w-75 mx-auto">
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </div>
      {responseMessage && (
        <div className="alert alert-success text-center">
          {responseMessage}
        </div>
      )}
      {error && (
        <div className="alert alert-danger text-center">{error}</div>
      )}
    </form>
  );
}

export default ContactDBMSForm;
  