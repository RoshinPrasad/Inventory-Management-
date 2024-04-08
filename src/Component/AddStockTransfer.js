import React, { useState } from "react";

const AddStockTransfer = ({onClose}) => {
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
              <h4>Add Transfer</h4>
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
            <form action="stock-transfer.html">
              <div class="row">
                <div class="col-lg-6">
                  <div class="input-blocks">
                    <label>Warehouse From</label>
                    <select
                      class="select select2-hidden-accessible"
                      data-select2-id="select2-data-10-mztq"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <option data-select2-id="select2-data-12-dk19">
                        Choose
                      </option>
                      <option>Lobar Handy</option>
                      <option>Quaint Warehouse</option>
                    </select>
                    <span
                      class="select2 select2-container select2-container--default"
                      dir="ltr"
                      data-select2-id="select2-data-11-6oly"
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
                          aria-labelledby="select2-725u-container"
                          aria-controls="select2-725u-container"
                        >
                          <span
                            class="select2-selection__rendered"
                            id="select2-725u-container"
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
                    <label>Warehouse To</label>
                    <select
                      class="select select2-hidden-accessible"
                      data-select2-id="select2-data-13-q7mr"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <option data-select2-id="select2-data-15-zjkh">
                        Choose
                      </option>
                      <option>Selosy</option>
                      <option>Logerro</option>
                    </select>
                    <span
                      class="select2 select2-container select2-container--default"
                      dir="ltr"
                      data-select2-id="select2-data-14-clc1"
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
                          aria-labelledby="select2-fail-container"
                          aria-controls="select2-fail-container"
                        >
                          <span
                            class="select2-selection__rendered"
                            id="select2-fail-container"
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
                <div class="col-lg-12">
                  <div class="input-blocks">
                    <label>Responsible Person</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="input-blocks search-form mb-3">
                    <label>Product</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Select Product"
                    />
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
                      class="feather feather-search"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="input-blocks search-form mb-0">
                    <label>Notes</label>
                    <textarea class="form-control"></textarea>
                  </div>
                </div>
              </div>
              <div class="modal-footer-btn">
                <button
                  type="button"
                  class="btn btn-cancel me-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" class="btn btn-submit">
                  Create
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

export default AddStockTransfer;
