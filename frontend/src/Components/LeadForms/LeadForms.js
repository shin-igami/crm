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
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await fetch("http://localhost:5000/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send the form data as a JSON string
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setResponseMessage(result.message || "Form submitted successfully!");
      setError(null); // Clear errors if the request succeeds
    } catch (err) {
      setError(err.message || "Something went wrong!");
      setResponseMessage(""); // Clear success message if an error occurs
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Lead Information */}
        <div className="LeadForms">
          <div className="rows d-flex justify-content-between my-2 w-75 mx-auto">
            <h3>Lead Information</h3>
          </div>
          <div className="rows d-flex justify-content-between my-2 w-75 mx-auto">
            <div style={{ width: "40%" }}>
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
            <div style={{ width: "40%" }}>
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
            <div style={{ width: "40%" }}>
              <label className="form-label m-1">First Name</label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div style={{ width: "40%" }}>
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
            <div style={{ width: "40%" }}>
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
            <div style={{ width: "40%" }}>
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
            <div style={{ width: "40%" }}>
              <label className="form-label m-1">Lead Source</label>
              <input
                type="text"
                name="leadSource"
                className="form-control"
                value={formData.leadSource}
                onChange={handleChange}
              />
            </div>
            <div style={{ width: "40%" }}>
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
          {/* Add other form fields similarly */}
        </div>

        {/* Address Information */}
        <div className="LeadForms mt-5">
          <div className="rows d-flex justify-content-between my-2 w-75 mx-auto">
            <h3>Address Information</h3>
          </div>
          <div className="rows d-flex justify-content-between my-2 w-75 mx-auto">
            <div style={{ width: "40%" }}>
              <label className="form-label m-1">Street</label>
              <input
                type="text"
                name="street"
                className="form-control"
                value={formData.street}
                onChange={handleChange}
              />
            </div>
            <div style={{ width: "40%" }}>
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
          {/* Add other address fields */}
        </div>

        {/* Submit Button */}
        <div className="LeadForms mt-5">
          <div className="rows d-flex justify-content-end my-2 w-75 mx-auto">
            <button type="submit" className="btn btn-primary btn-sm py-2 px-5">
              Submit
            </button>
          </div>
        </div>

        {/* Display Response or Error */}
        {responseMessage && <p className="text-success">{responseMessage}</p>}
        {error && <p className="text-danger">{error}</p>}
      </form>
    </>
  );
}

export default LeadForms;
