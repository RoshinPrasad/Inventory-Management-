import React, { useState } from "react";

const AddUsers = ({onClose}) => {
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
        class="page-wrapper-new p-0"
        style={{
          maxWidth: "500px",
          margin: "auto",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "9999",
          height: "99vh",
          borderRadius: "5px",
          overflowY: "auto",
        }}
      >
        <div class="content">
          <div class="modal-header border-0 custom-modal-header">
            <div class="page-title">
              <h4>Add User</h4>
            </div>
            <button
              type="button"
              class="close"
              onClick={handleClose} 
              style={{
                position: "absolute",
                top: "20px",
                right: "30px",
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
          <div class="modal-body custom-modal-body">
            <form action="users.html">
              <div class="row">
                <div class="col-lg-12">
                  <div class="new-employee-field">
                    <span>Avatar</span>
                    <div class="profile-pic-upload mb-2">
                      <div class="profile-pic">
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
                          Profile Photo
                        </span>
                      </div>
                      <div class="input-blocks mb-0">
                        <div class="image-upload mb-0">
                          <input type="file" />
                          <div class="image-uploads">
                            <h4>Change Image</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="input-blocks">
                    <label>User Name</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="input-blocks">
                    <label>Phone</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="input-blocks">
                    <label>Email</label>
                    <input type="email" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="input-blocks">
                    <label>Role</label>
                    <select
                      class="select select2-hidden-accessible"
                      data-select2-id="select2-data-13-uxjv"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <option data-select2-id="select2-data-15-wg8h">
                        Choose
                      </option>
                      <option>Manager</option>
                      <option>Admin</option>
                    </select>
                    <span
                      class="select2 select2-container select2-container--default"
                      dir="ltr"
                      data-select2-id="select2-data-14-hfcl"
                      style={{ width: "100%;" }}
                    >
                      <span class="selection">
                        <span
                          class="select2-selection select2-selection--single"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabindex="0"
                          aria-disabled="false"
                          aria-labelledby="select2-jxth-container"
                          aria-controls="select2-jxth-container"
                        >
                          <span
                            class="select2-selection__rendered"
                            id="select2-jxth-container"
                            role="textbox"
                            aria-readonly="true"
                            title="Choose"
                          >
                            Choose
                          </span>
                          <span
                            class="select2-selection__arrow"
                            role="presentation"
                          >
                            <b role="presentation"></b>
                          </span>
                        </span>
                      </span>
                      <span class="dropdown-wrapper" aria-hidden="true"></span>
                    </span>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="input-blocks">
                    <label>Password</label>
                    <div class="pass-group">
                      <input type="password" class="pass-input" />
                      <span class="fas toggle-password fa-eye-slash"></span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="input-blocks">
                    <label>Confirm Passworrd</label>
                    <div class="pass-group">
                      <input type="password" class="pass-input" />
                      <span class="fas toggle-password fa-eye-slash"></span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="mb-0 input-blocks">
                    <label class="form-label">Descriptions</label>
                    <textarea class="form-control mb-1">Type Message</textarea>
                    <p>Maximum 600 Characters</p>
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
  );
};

export default AddUsers;
