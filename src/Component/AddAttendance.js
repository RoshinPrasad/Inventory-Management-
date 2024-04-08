import React, { useState } from "react";

const AddAttendance = ({onClose}) => {
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
    <div class="modal-content"
     style={{
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
              <h4>Add Attendance</h4>
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
            <form action="attendance-admin.html">
              <div class="row">
                <div class="col-lg-12">
                  <div class="mb-3">
                    <label class="form-label">Employee Name</label>
                    <select
                      class="select select2-hidden-accessible"
                      data-select2-id="select2-data-25-67ym"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <option data-select2-id="select2-data-27-m8rm">
                        Choose
                      </option>
                      <option>Mitchum Daniel</option>
                      <option>Janet Hembre</option>
                      <option>Russell Belle</option>
                    </select>
                    <span
                      class="select2 select2-container select2-container--default"
                      dir="ltr"
                      data-select2-id="select2-data-26-z7kc"
                      style={{width: "100%;"}}
                    >
                      <span class="selection">
                        <span
                          class="select2-selection select2-selection--single"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabindex="0"
                          aria-disabled="false"
                          aria-labelledby="select2-8an1-container"
                          aria-controls="select2-8an1-container"
                        >
                          <span
                            class="select2-selection__rendered"
                            id="select2-8an1-container"
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
                    <label>Clock In</label>
                    <div class="form-icon">
                      <input
                        type="text"
                        class="form-control timepicker"
                        placeholder="Select"
                      />
                      <span class="cus-icon">
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
                          class="feather feather-clock"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="input-blocks">
                    <label>Clock Out</label>
                    <div class="form-icon">
                      <input
                        type="text"
                        class="form-control timepicker"
                        placeholder="Select"
                      />
                      <span class="cus-icon">
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
                          class="feather feather-clock"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                      </span>
                    </div>
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

export default AddAttendance;
