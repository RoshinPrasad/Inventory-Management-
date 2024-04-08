import React, { useState } from "react";

const AddNewBrand = ({onClose}) => {
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
              <h4>Create Brand</h4>
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
          <div class="modal-body custom-modal-body new-employee-field">
            <form action="brand-list.html">
              <div class="mb-3">
                <label class="form-label">Brand</label>
                <input type="text" class="form-control" />
              </div>
              <label class="form-label">Logo</label>
              <div class="profile-pic-upload mb-3">
                <div class="profile-pic brand-pic">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-plus-circle plus-down-add"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="16"></line>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>{" "}
                    Add Image
                  </span>
                </div>
                <div class="image-upload mb-0">
                  <input type="file" />
                  <div class="image-uploads">
                    <h4>Change Image</h4>
                  </div>
                </div>
              </div>
              <div class="mb-0">
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
              <div class="modal-footer-btn">
                <button
                  type="button"
                  class="btn btn-cancel me-2"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button type="submit" class="btn btn-submit">
                  Create Brand
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

export default AddNewBrand;
