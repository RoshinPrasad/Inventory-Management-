import React, { useState } from "react";

const AddExpense = ({onClose}) => {
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
    <div class="modal-content"  style={{
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
      <div class="page-wrapper-new p-0">
        <div class="content">
          <div class="modal-header border-0 custom-modal-header">
            <div class="page-title">
              <h4>Add Expense</h4>
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
            <div class="row">
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Expense Category</label>
                  <select
                    class="select select2-hidden-accessible"
                    data-select2-id="select2-data-10-9ber"
                    tabindex="-1"
                    aria-hidden="true"
                  >
                    <option data-select2-id="select2-data-12-z141">
                      Choose
                    </option>
                    <option>Foods &amp; Snacks</option>
                    <option>Employee Benefits</option>
                  </select>
                  <span
                    class="select2 select2-container select2-container--default"
                    dir="ltr"
                    data-select2-id="select2-data-11-u0re"
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
                        aria-labelledby="select2-qpfi-container"
                        aria-controls="select2-qpfi-container"
                      >
                        <span
                          class="select2-selection__rendered"
                          id="select2-qpfi-container"
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
                <div class="input-blocks date-group">
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
                    class="feather feather-calendar info-img"
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
                  <div class="input-groupicon">
                    <input
                      type="text"
                      class="datetimepicker"
                      placeholder="Choose Date"
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Amount</label>
                  <input type="text" class="form-control" placeholder="$" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Reference</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label">Expense For</label>
                  <input type="text" class="form-control" />
                  <span class="unlimited-text">0 for Unlimited</span>
                </div>
              </div>

              <div class="col-md-12">
                <div class="edit-add card">
                  <div class="edit-add">
                    <label class="form-label">Description</label>
                  </div>
                  <div class="card-body-list input-blocks mb-0">
                    <textarea class="form-control"></textarea>
                  </div>
                  <p>Maximum 600 Characters</p>
                </div>
              </div>
            </div>
            <div class="modal-footer-btn">
              <a
                href="javascript:void(0);"
                class="btn btn-cancel me-2"
                data-bs-dismiss="modal"
              >
                Cancel
              </a>
              <a href="expense-list.html" class="btn btn-submit">
                Submit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AddExpense;
