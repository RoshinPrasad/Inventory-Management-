import React, { useState, useEffect } from "react";

const AddNewPayroll = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      onClose();
    }, 300); 
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
        transition: "opacity 0.3s ease",
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? "all" : "none"
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: isOpen ? "300px" : "100%", 
          width: "80%",
          height: "100%",
          zIndex: "9999",
          transition: "left 0.3s ease",
          overflowY: "auto", 
        }}
      >
        <div className="page-wrapper-new">
          <div className="content">
            <div className="page-header justify-content-between">
              <div className="page-title">
                <h4>Add New Payroll</h4>
              </div>
              <div className="page-btn">
                <a
                  href="javascript:void(0);"
                  className="btn btn-added"
                  onClick={handleClose}
                >
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
                    className="feather feather-arrow-left me-2"
                  >
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                  Back To List
                </a>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <form action="payroll-list.html">
                  <div className="row">
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Select Employee <span>*</span>
                        </label>
                        <select
                          className="select select2 select2-hidden-accessible"
                          data-select2-id="select2-data-10-jg1p"
                          tabindex="-1"
                          aria-hidden="true"
                        >
                          <option data-select2-id="select2-data-12-nwq3">
                            Choose
                          </option>
                          <option>Computers</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id="select2-data-11-57yz"
                          style={{ width: "100%;" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabindex="0"
                              aria-disabled="false"
                              aria-labelledby="select2-mmip-container"
                              aria-controls="select2-mmip-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-mmip-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Choose"
                              >
                                Choose
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation"></b>
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          ></span>
                        </span>
                      </div>
                    </div>
                    <div className="text-title">
                      <p>Salary Information</p>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Basic Salary <span>*</span>
                      </label>
                      <input type="text" className="text-form form-control" />
                    </div>
                    <div className="payroll-info d-flex">
                      <p>Status</p>
                      <div className="status-updates">
                        <ul
                          className="nav nav-pills list mb-3"
                          id="pills-tab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              id="pills-home-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-home"
                              type="button"
                              role="tab"
                              aria-selected="true"
                            >
                              <span className="form-check form-check-inline ">
                                <span className="form-check-label">Paid</span>
                              </span>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="pills-profile-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-profile"
                              type="button"
                              role="tab"
                              aria-selected="false"
                              tabindex="-1"
                            >
                              <span className="form-check form-check-inline">
                                <span className="form-check-label">Unpaid</span>
                              </span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="payroll-title">
                      <p>Allowances</p>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          HRA Allowance <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="allowances-one"
                        />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Conveyance <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="conveyance"
                        />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Medical Allowance <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="medical-allowance"
                        />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Bonus <span>*</span>
                        </label>
                        <input type="text" className="form-control" id="bonus" />
                      </div>
                    </div>
                    <div className="sub-form">
                      <div className="mb-3 flex-grow-1">
                        <label className="form-label">Others</label>
                        <input type="text" className="text-form form-control" />
                      </div>
                      <div className="subadd-btn">
                        <a href="#" className="btn btn-add">
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
                            className="feather feather-plus-circle"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="16"></line>
                            <line x1="8" y1="12" x2="16" y2="12"></line>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="payroll-title">
                      <p>Deductions</p>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          PF <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="pf-allowances"
                        />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Professional Tax <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="professional"
                        />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          TDS <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="tds-allowances"
                        />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Loans &amp; Others <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="other-allowances"
                        />
                      </div>
                    </div>
                    <div className="sub-form">
                      <div className="mb-3 flex-grow-1">
                        <label className="form-label">Others</label>
                        <input type="text" className="text-form form-control" />
                      </div>
                      <div className="subadd-btn">
                        <a href="#" className="btn btn-add">
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
                            className="feather feather-plus-circle"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="16"></line>
                            <line x1="8" y1="12" x2="16" y2="12"></line>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="payroll-title">
                      <p>Deductions</p>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Total Allowance <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="total-allowances"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Total Deduction <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="total-deduction"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Net Salary <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="salary-allowances"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="view-btn">
                        <button type="button" className="btn btn-previw me-2">
                          Preview
                        </button>
                        <button type="button" className="btn btn-reset me-2">
                          Reset
                        </button>
                        <button type="" className="btn btn-save">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewPayroll;
