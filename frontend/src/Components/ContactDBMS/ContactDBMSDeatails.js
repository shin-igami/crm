import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ContactDBMSDeatails() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editField, setEditField] = useState(null);
    const [editValue, setEditValue] = useState("");
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/contacts/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    const handleEditClick = (field, value) => {
        setEditField(field);
        setEditValue(value);
    };

    const handleAddProduct = async (product) => {
        try {
            const response = await fetch(`http://localhost:5000/api/contacts/${id}/add-product`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const newLead = await response.json();

            setData((prevData) => [...prevData, newLead]);
        } catch (error) {
            alert("Failed to add product: " + error.message);
        }
    };

    const handleUpdate = async () => {
        const updatedData = editField.startsWith("customFields.")
            ? { customFields: { ...data.customFields, [editField.split(".")[1]]: editValue } }
            : { [editField]: editValue };

        try {
            const response = await fetch(`http://localhost:5000/api/contacts/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const updatedLead = await response.json();

            setData((prevData) => ({
                ...prevData,
                ...updatedLead,
            }));

            setEditField(null);
        } catch (error) {
            alert("Failed to update lead: " + error.message);
        }
    };

    const handleCancel = () => {
        setEditField(null);
        setEditValue("");
    };

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this record?")) {
            try {
                const response = await fetch(`http://localhost:5000/api/contacts/${id}`, {
                    method: "DELETE",
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                alert("Record deleted successfully.");
            } catch (err) {
                alert("Error deleting record: " + err.message);
            }
        }
    };
    const handleAddCustomField = () => {
        const newFieldKey = window.prompt("Enter the name of the new custom field:");

        if (!newFieldKey) {
            alert("Custom field name cannot be empty!");
            return;
        }

        if (data.customFields && data.customFields[newFieldKey]) {
            alert("A custom field with this name already exists!");
            return;
        }

        const newCustomFields = { ...data.customFields, [newFieldKey]: "" };
        setData((prevData) => ({ ...prevData, customFields: newCustomFields }));
    };

    if (loading) return <div className="text-center py-5 text-secondary">Loading...</div>;
    if (error) return <div className="text-center py-5 text-danger">Error: {error}</div>;

    const renderField = (label, fieldName, value, isEditable = true) => (
        <div
            className="d-flex justify-content-between align-items-center mb-2 p-2 rounded"
            style={{
                position: "relative",
                border: editField === fieldName ? "1px solid #007bff" : "1px solid transparent",
                cursor: isEditable ? "pointer" : "default",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.border = "1px solid #007bff")}
            onMouseLeave={(e) => (e.currentTarget.style.border = editField === fieldName ? "1px solid #007bff" : "1px solid transparent")}
            onClick={() => isEditable && handleEditClick(fieldName, value)}
        >
            <p className="mb-0 text-muted" style={{ marginRight: "10px" }}>{label}:</p>
            {editField === fieldName ? (
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1 }}>
                    <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className="form-control"
                        style={{ flex: 1, color: "black" }}
                    />
                    <button
                        className="btn btn-success btn-sm rounded-circle"
                        onClick={handleUpdate}
                        style={{ width: "30px", height: "30px", display: "flex", justifyContent: "center", alignItems: "center" }}
                    >
                        <i className="fa-solid fa-check"></i>
                    </button>
                    <button
                        className="btn btn-danger btn-sm rounded-circle"
                        onClick={handleCancel}
                        style={{ width: "30px", height: "30px", display: "flex", justifyContent: "center", alignItems: "center" }}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
            ) : (
                <h5 className="text-secondary mb-0" style={{ color: "black", flex: 1 }}>{value || "N/A"}</h5>
            )}
        </div>
    );

    return (
        <div className="container py-5">
            <div className="d-flex justify-content-end mb-3">
                <button className="btn btn-danger btn-sm me-2" onClick={handleDelete}>Delete Record</button>
                <button className="btn btn-secondary btn-sm me-2">Action 2</button>
                <button className="btn btn-success btn-sm">Action 3</button>
            </div>

            <div className="card mb-4 shadow-sm border-0 rounded-4">
                <div className="card-header bg-secondary text-white text-center rounded-top-4">
                    <h3 className="mb-0">Contact DBMS Details</h3>
                </div>
                <div className="card-body">
                    <div className="row mb-2">
                        <div className="col-lg-6 col-md-12">
                            {renderField("Lead Owner", "leadOwner", data.leadOwner)}
                        </div>
                        <div className="col-lg-6 col-md-12">
                            {renderField("Email", "emailAddress", data.emailAddress)}
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-lg-6 col-md-12">
                            {renderField("Phone", "phone", data.phone)}
                        </div>
                        <div className="col-lg-6 col-md-12">
                            {renderField("Lead Status", "leadStatus", data.leadStatus)}
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-4 shadow-sm border-0 rounded-4">
                <div className="card-header bg-secondary text-white text-center rounded-top-4">
                    <h3 className="mb-0">Additional Details</h3>
                </div>
                <div className="card-body">
                    <div className="row mb-2">
                        <div className="col-lg-6 col-md-12">
                            {renderField("First Name", "firstName", data.firstName)}
                        </div>
                        <div className="col-lg-6 col-md-12">
                            {renderField("Last Name", "lastName", data.lastName)}
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-lg-6 col-md-12">
                            {renderField("Company", "company", data.company)}
                        </div>
                        <div className="col-lg-6 col-md-12">
                            {renderField("Lead Source", "leadSource", data.leadSource)}
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-lg-6 col-md-12">
                            {renderField("Secondary Phone", "secondaryPhone", data.secondaryPhone)}
                        </div>
                        <div className="col-lg-6 col-md-12">
                            {renderField("Secondary Email", "secondaryEmailAddress", data.secondaryEmailAddress)}
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-lg-6 col-md-12">
                            {renderField("PAN", "PAN", data.PAN)}
                        </div>
                        <div className="col-lg-6 col-md-12">
                            {renderField("Aadhaar Number", "AadhaarNumber", data.AadhaarNumber)}
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-lg-4 col-md-6">
                            {renderField("Street", "street", data.street)}
                        </div>
                        <div className="col-lg-4 col-md-6">
                            {renderField("City", "city", data.city)}
                        </div>
                        <div className="col-lg-4 col-md-6">
                            {renderField("State", "state", data.state)}
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-lg-6 col-md-12">
                            {renderField("Zip Code", "zipCode", data.zipCode)}
                        </div>
                        <div className="col-lg-6 col-md-12">
                            {renderField("Country", "country", data.country)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="card shadow-sm border-0 rounded-4">
                <div className="card-header bg-secondary text-white text-center rounded-top-4">
                    <h3 className="mb-0">Custom Fields</h3>
                </div>
                <div className="card-body">
                    {data.customFields &&
                        Object.entries(data.customFields).map(([field, value]) => (
                            <div className="col-lg-6 col-md-12" key={field}>
                                {renderField(field, `customFields.${field}`, value)}
                            </div>
                        ))}
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={handleAddCustomField}
                    >
                        Add Custom Field
                    </button>
                </div>
            </div>

            <div className="card shadow-sm border-0 rounded-4">
                <div className="card-header bg-secondary text-white text-center rounded-top-4">
                    <h3 className="mb-0">Products</h3>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>Product Name</th>
                                    <th>Product Code</th>
                                    <th>Product Price</th>
                                    {/* <th>Manufacturer</th>
                                    <th>Support Start Date</th>
                                    <th>Support End Date</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {data.products && data.products.length > 0 ? (
                                    data.products.map((product, index) => (
                                        <tr key={index} className="align-middle">
                                            <td>{product.product_name}</td>
                                            <td>{product.product_code}</td>
                                            <td>{product.product_price}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="text-center text-muted">
                                            No products available.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={handleAddProduct}
                    >
                        Add Custom Field
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ContactDBMSDeatails;
