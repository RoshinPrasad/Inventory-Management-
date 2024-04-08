import React, { useState } from "react";

const AddNewRole = ({ onClose }) => {
    const [status, setStatus] = useState(false);

    const toggleStatus = () => {
      setStatus(!status);
    };
  
    const handleClose = () => {
      onClose(); 
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
                    width: "500px",
                    margin: "auto",
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: "9999",
                    borderRadius: "5px",               
                }}
            >
                <div className="content">
                    <div className="modal-header border-0 custom-modal-header">
                        <div className="page-title">
                            <h4>Create Role</h4>
                        </div>
                        <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={handleClose} 
              style={{
                position: "absolute",
                top: "40px",
                right: "40px",
                color:'red',
                cursor: "pointer",
                backgroundColor: "transparent",
                border: "none",
                padding: "0",
                fontSize: "1.5rem",
              }}
            >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body custom-modal-body">
                        <form action="">
                            <div className="mb-0">
                                <label className="form-label">Role Name</label>
                                <input type="text" className="form-control" />
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
                                    Create Role
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewRole;
