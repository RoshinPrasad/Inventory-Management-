import React, { useState } from "react";

const AddDesignation = ({onClose}) => {
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
      <div class="modal-content" style={{
          maxWidth: "500px",
          margin: "auto",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "9999",
          borderRadius: "5px",
        }}>
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Add Designation</h4>
              </div>
              <button
                type="button"
                class="close"
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: "40px",
                  right: "30px",
                  color: "red",
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
            <div class="modal-body custom-modal-body">
              <form action="designation.html">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <label class="form-label">Designation Name</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="input-blocks m-0">
                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                    <span className="status-label">Status</span>
                    <input
                      type="checkbox"
                      id="user5"
                      className="check"
                      checked={status}
                      onChange={toggleStatus}
                    />
                    <label htmlFor="user5" className="checktoggle"></label>
                    </div>
                  </div>
                </div>
                <div class="modal-footer-btn">
                  <button
                    type="button"
                    class="btn btn-cancel me-2"
                    onClick={handleClose}
                  >
                    Cancel
                  </button>
                  <button type="submit" class="btn btn-submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDesignation;
