import React, { useState } from "react";

const ImportPurchase = ({ onClose }) => {
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
        class="modal-content"
        style={{
          maxWidth: "600px",
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
                <h4>Import Purchase</h4>
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
              <form action="purchase-list.html">
                <div class="row">
                  <div class="col-lg-6 col-sm-6 col-12">
                    <div class="input-blocks">
                      <label>Supplier Name</label>
                      <div class="row">
                        <div class="col-lg-10 col-sm-10 col-10">
                          <select
                            class="select select2-hidden-accessible"
                            data-select2-id="select2-data-34-k2li"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <option data-select2-id="select2-data-36-e0p6">
                              Choose
                            </option>
                            <option>Apex Computers</option>
                            <option>Apex Computers</option>
                          </select>
                          <span
                            class="select2 select2-container select2-container--default"
                            dir="ltr"
                            data-select2-id="select2-data-35-zjqc"
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
                                aria-labelledby="select2-e49v-container"
                                aria-controls="select2-e49v-container"
                              >
                                <span
                                  class="select2-selection__rendered"
                                  id="select2-e49v-container"
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
                            <span
                              class="dropdown-wrapper"
                              aria-hidden="true"
                            ></span>
                          </span>
                        </div>
                        <div class="col-lg-2 col-sm-2 col-2 ps-0">
                          <div class="add-icon tab">
                            <a href="javascript:void(0);">
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
                                class="feather feather-plus-circle feather-plus-circles"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="16"></line>
                                <line x1="8" y1="12" x2="16" y2="12"></line>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-12">
                    <div class="input-blocks">
                      <label>Purchase Status </label>
                      <select
                        class="select select2-hidden-accessible"
                        data-select2-id="select2-data-37-l6ts"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option data-select2-id="select2-data-39-5xuw">
                          Choose
                        </option>
                        <option>Received</option>
                        <option>Ordered</option>
                        <option>Pending</option>
                      </select>
                      <span
                        class="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="select2-data-38-ts41"
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
                            aria-labelledby="select2-cvmr-container"
                            aria-controls="select2-cvmr-container"
                          >
                            <span
                              class="select2-selection__rendered"
                              id="select2-cvmr-container"
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
                        <span
                          class="dropdown-wrapper"
                          aria-hidden="true"
                        ></span>
                      </span>
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-6 col-12">
                    <div class="row">
                      <div>
                        <div class="modal-footer-btn download-file">
                          <a href="javascript:void(0)" class="btn btn-submit">
                            Download Sample File
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="input-blocks image-upload-down">
                      <label> Upload CSV File</label>
                      <div class="image-upload download">
                        <input type="file" />
                        <div class="image-uploads">
                          <img src="../images/download-img.png" alt="img" />
                          <h4>
                            Drag and drop a <span>file to upload</span>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6 col-12">
                    <div class="input-blocks">
                      <label>Order Tax</label>
                      <input type="text" value="0" />
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6 col-12">
                    <div class="input-blocks">
                      <label>Discount</label>
                      <input type="text" value="0" />
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6 col-12">
                    <div class="input-blocks">
                      <label>Shipping</label>
                      <input type="text" value="0" />
                    </div>
                  </div>
                </div>
                <div class="input-blocks summer-description-box transfer">
                  <div id="summernote3" style={{ display: "none;" }}></div>
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

export default ImportPurchase;
