import React, { useState } from "react";

const AddNewHoliday = ({ onClose }) => {
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
          maxWidth: "500px",
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
              <h4>Add Holiday</h4>
            </div>
            <button
              type="button"
              className="close"
              aria-label="Close"
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
          <div className="modal-body custom-modal-body">
            <form action="holidays.html">
              <div className="row">
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label>Add Holiday</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-blocks">
                    <label>Start Date</label>
                    <div className="input-groupicon calender-input">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-calendar info-img"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <input
                        type="text"
                        className="datetimepicker"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-blocks">
                    <label>End Date</label>
                    <div className="input-groupicon calender-input">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-calendar info-img"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <input
                        type="text"
                        className="datetimepicker"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-blocks">
                    <label>No of Days</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="01"
                    />
                  </div>
                </div>
                <div className="input-blocks m-0">
                  <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
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

export default AddNewHoliday;
