import React, { useState } from "react";

const AddNewLeave = ({ onClose }) => {
  const [status, setStatus] = useState(false);

  const toggleStatus = () => {
    setStatus(!status);
  };

  const handleClose = () => {
    onClose(); // Call the onClose function passed from the parent component
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: "9998",
      }}
    >
      <div
        className="page-wrapper-new p-0"
        style={{
          maxWidth: "500px",
          margin: "auto",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "9999",
          backgroundColor: "white", // Add a background color to the modal content
          padding: "20px", // Add some padding for better appearance
        }}
      >
        <div className="content">
          <div className="modal-header border-0 custom-modal-header">
            <div className="page-title">
              <h4>Add New Leave Type</h4>
            </div>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={handleClose} 
              style={{
                position: "absolute",
                top: "40px",
                right: "20px",
                cursor: "pointer",
                backgroundColor: "transparent",
                color: "red",
                border: "none",
                padding: "0",
                fontSize: "1.5rem", 
              }}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body custom-modal-body">
            <form action="leave-types.html">
              <div className="row">
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label">Leave Quota</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="input-blocks m-0">
                  <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                    <span className="status-label">Status</span>
                    <input
                      type="checkbox"
                      id="user3"
                      className="check"
                      checked={status}
                      onChange={toggleStatus}
                    />
                    <label htmlFor="user3" className="checktoggle">
                      {" "}
                    </label>
                  </div>
                </div>
              </div>
              <div className="modal-footer-btn">
                <button
                  type="button"
                  className="btn btn-cancel me-2"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewLeave;
