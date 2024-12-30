import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Leads.css";  // Import the custom CSS for styling

function Leads() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/leads");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
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
  }, []);

  if (loading) {
    return (
      <div className="text-center py-5">
        <p className="text-primary fs-4">
          <i className="fas fa-spinner fa-spin me-2"></i> Loading...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-5">
        <p className="text-danger fs-4">
          <i className="fas fa-exclamation-circle me-2"></i> Error: {error}
        </p>
      </div>
    );
  }

  const handleLeadClick = (id) => {
    navigate(`/leads/details/${id}`);
  };

  const CreateForm = () => {
    navigate(`/leads/add`);
  };

  const ManageLeads = () => {
    navigate(`/leads/manage`);
  };

  return (
    <div className="container-fluid leads-container">
      <div className="row py-3">
        <div className="col-12 d-flex justify-content-between align-items-center">
          {/* Dropdown for options */}
          <div className="dropdown">
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-ellipsis-h me-2"></i> Options
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-filter me-2"></i> Filter by Lead Source
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-building me-2"></i> Filter by Company
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-envelope me-2"></i> Filter by Email
                </a>
              </li>
            </ul>
          </div>

          {/* Buttons Section */}
          <div className="btn-group">
            <button onClick={CreateForm} type="button" className="btn btn-primary">
              <i className="fas fa-user-plus me-2"></i> Create New Lead
            </button>
            <button
              onClick={ManageLeads}
              type="button"
              className="btn btn-secondary ms-3"
            >
              <i className="fas fa-cogs me-2"></i> Manage Leads
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="table-responsive shadow-sm rounded">
            <table className="table table-bordered table-striped table-hover">
              <thead className="table-light">
                <tr>
                  <th>
                    <i className="fas fa-user me-2"></i> Lead Name
                  </th>
                  <th>
                    <i className="fas fa-building me-2"></i> Company
                  </th>
                  <th>
                    <i className="fas fa-envelope me-2"></i> Email
                  </th>
                  <th>
                    <i className="fas fa-phone me-2"></i> Phone
                  </th>
                  <th>
                    <i className="fas fa-tag me-2"></i> Lead Source
                  </th>
                  <th>
                    <i className="fas fa-check-circle me-2"></i> Lead Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((lead) => (
                    <tr
                      key={lead._id}
                      className="clickable-row"
                      onClick={() => handleLeadClick(lead._id)}
                    >
                      <td>{lead.firstName}</td>
                      <td>{lead.company}</td>
                      <td>{lead.emailAddress}</td>
                      <td>{lead.phone}</td>
                      <td>{lead.leadSource}</td>
                      <td>{lead.leadStatus}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leads;
