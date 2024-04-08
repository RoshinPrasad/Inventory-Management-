import { useState } from "react";

import AddNewPayroll from "../../Component/AddNewPayroll";

const EmployeeSalary = () => {
  const [showAddLeave, setShowAddLeave] = useState(false);

  const handleCloseAddLeave = () => {
    setShowAddLeave(false); // Set showAddLeave to false to close the AddNewLeave component
  };

  const handleClick = () => {
    setShowAddLeave(true);
  };
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Payroll</h4>
                <h6>Manage Your Employees</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <li>
                <a
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  aria-label="Pdf"
                  data-bs-original-title="Pdf"
                >
                  <img src="images/pdf.svg" alt="img" />
                </a>
              </li>
              <li>
                <a
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  aria-label="Excel"
                  data-bs-original-title="Excel"
                >
                  <img src="images/excel.svg" alt="img" />
                </a>
              </li>
              <li>
                <a
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  aria-label="Print"
                  data-bs-original-title="Print"
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
                    className="feather feather-printer feather-rotate-ccw"
                  >
                    <polyline points="6 9 6 2 18 2 18 9"></polyline>
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                    <rect x="6" y="14" width="12" height="8"></rect>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  aria-label="Refresh"
                  data-bs-original-title="Refresh"
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
                    className="feather feather-rotate-ccw"
                  >
                    <polyline points="1 4 1 10 7 10"></polyline>
                    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  id="collapse-header"
                  aria-label="Collapse"
                  data-bs-original-title="Collapse"
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
                    className="feather feather-chevron-up"
                  >
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                </a>
              </li>
            </ul>
            <div className="page-btn">
            <a href="#" className="btn btn-added" onClick={handleClick}>
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
                className="feather feather-plus-circle me-2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
              Add New Payroll
            </a>
          </div>
        </div>
        {showAddLeave && <AddNewPayroll onClose={handleCloseAddLeave} />}

          <div className="card table-list-card">
            <div className="card-body">
              <div className="table-top">
                <div className="search-set">
                  <div className="search-input">
                    <a href="" className="btn btn-searchset">
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
                        className="feather feather-search"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </a>
                    <div
                      id="DataTables_Table_0_filter"
                      className="dataTables_filter"
                    >
                      <label>
                        {" "}
                        <input
                          type="search"
                          className="form-control form-control-sm"
                          placeholder="Search"
                          aria-controls="DataTables_Table_0"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="search-path">
                  <div className="d-flex align-items-center">
                    <a className="btn btn-filter" id="filter_search">
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
                        className="feather feather-filter filter-icon"
                      >
                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                      </svg>
                      <span>
                        <img src="images/closes.svg" alt="img" />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="form-sort">
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
                    className="feather feather-sliders info-img"
                  >
                    <line x1="4" y1="21" x2="4" y2="14"></line>
                    <line x1="4" y1="10" x2="4" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12" y2="3"></line>
                    <line x1="20" y1="21" x2="20" y2="16"></line>
                    <line x1="20" y1="12" x2="20" y2="3"></line>
                    <line x1="1" y1="14" x2="7" y2="14"></line>
                    <line x1="9" y1="8" x2="15" y2="8"></line>
                    <line x1="17" y1="16" x2="23" y2="16"></line>
                  </svg>
                  <select
                    className="select select2-hidden-accessible"
                    data-select2-id="select2-data-1-2dhp"
                    tabindex="-1"
                    aria-hidden="true"
                  >
                    <option data-select2-id="select2-data-3-lhm0">
                      Sort by Date
                    </option>
                    <option>12 09 23</option>
                    <option>26 09 23</option>
                  </select>
                  <span
                    className="select2 select2-container select2-container--default"
                    dir="ltr"
                    data-select2-id="select2-data-2-qxht"
                    style={{width: "100%"}}
                  >
                    <span className="selection">
                      <span
                        className="select2-selection select2-selection--single"
                        role="combobox"
                        aria-haspopup="true"
                        aria-expanded="false"
                        tabindex="0"
                        aria-disabled="false"
                        aria-labelledby="select2-h4sd-container"
                        aria-controls="select2-h4sd-container"
                      >
                        <span
                          className="select2-selection__rendered"
                          id="select2-h4sd-container"
                          role="textbox"
                          aria-readonly="true"
                          title="Sort by Date"
                        >
                          Sort by Date
                        </span>
                        <span
                          className="select2-selection__arrow"
                          role="presentation"
                        >
                          <b role="presentation"></b>
                        </span>
                      </span>
                    </span>
                    <span className="dropdown-wrapper" aria-hidden="true"></span>
                  </span>
                </div>
              </div>

              <div className="card mb-0" id="filter_inputs">
                <div className="card-body pb-0">
                  <div className="row">
                    <div className="col-lg-12 col-sm-12">
                      <div className="row">
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="input-blocks">
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
                              className="feather feather-user info-img"
                            >
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            <select
                              className="select select2-hidden-accessible"
                              data-select2-id="select2-data-4-y39b"
                              tabindex="-1"
                              aria-hidden="true"
                            >
                              <option data-select2-id="select2-data-6-qxnt">
                                Choose Name
                              </option>
                              <option>Macbook pro</option>
                              <option>Orange</option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--default"
                              dir="ltr"
                              data-select2-id="select2-data-5-fy58"
                              style={{width: "100%"}}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabindex="0"
                                  aria-disabled="false"
                                  aria-labelledby="select2-e8up-container"
                                  aria-controls="select2-e8up-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-e8up-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Choose Name"
                                  >
                                    Choose Name
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
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="input-blocks">
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
                              className="feather feather-stop-circle info-img"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <rect x="9" y="9" width="6" height="6"></rect>
                            </svg>
                            <select
                              className="select select2-hidden-accessible"
                              data-select2-id="select2-data-7-hy91"
                              tabindex="-1"
                              aria-hidden="true"
                            >
                              <option data-select2-id="select2-data-9-m1gb">
                                Choose Status
                              </option>
                              <option>Computers</option>
                              <option>Fruits</option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--default"
                              dir="ltr"
                              data-select2-id="select2-data-8-gym4"
                              style={{width: "100%"}}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabindex="0"
                                  aria-disabled="false"
                                  aria-labelledby="select2-rdqb-container"
                                  aria-controls="select2-rdqb-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-rdqb-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Choose Status"
                                  >
                                    Choose Status
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
                        <div className="col-lg-6 col-sm-6 col-12">
                          <div className="input-blocks">
                            <a className="btn btn-filters ms-auto">
                              {" "}
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
                                className="feather feather-search"
                              >
                                <circle cx="11" cy="11" r="8"></circle>
                                <line
                                  x1="21"
                                  y1="21"
                                  x2="16.65"
                                  y2="16.65"
                                ></line>
                              </svg>{" "}
                              Search{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="table-responsive">
                <div
                  id="DataTables_Table_0_wrapper"
                  className="dataTables_wrapper dt-bootstrap5 no-footer table-responsive"
                >
                  <table
                    className="table datanew dataTable no-footer"
                    id="DataTables_Table_0"
                    aria-describedby="DataTables_Table_0_info"
                  >
                    <thead>
                      <tr>
                        <th
                          className="no-sort sorting sorting_asc"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-sort="ascending"
                          aria-label=":activate to sort column descending"
                          style={{width: "39.4432px"}}
                        >
                          <label className="checkboxs">
                            <input type="checkbox" id="select-all" />
                            <span className="checkmarks"></span>
                          </label>
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Employee: activate to sort column ascending"
                          style={{width: "207.341px"}}
                        >
                          Employee
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Employee ID: activate to sort column ascending"
                          style={{width: "94.1591px"}}
                        >
                          Employee ID
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Email: activate to sort column ascending"
                          style={{width: "170.614px"}}
                        >
                          Email
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Salary: activate to sort column ascending"
                          style={{width: "48.8636px"}}
                        >
                          Salary
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Status: activate to sort column ascending"
                          style={{width: "62.3977px"}}
                        >
                          Status
                        </th>
                        <th
                          className="no-sort sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Action: activate to sort column ascending"
                          style={{width: "146.455px"}}
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="odd">
                        <td className="sorting_1">
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks"></span>
                          </label>
                        </td>
                        <td>
                          <div className="userimgname">
                            <a href="javascript:void(0);" className="product-img">
                              <img
                                src="images/user-01.jpg"
                                alt="product"
                              />
                            </a>
                            <div className="emp-name ">
                              <a href="javascript:void(0);">Mitchum Daniel</a>
                              <p className="role">Database Administrator</p>
                            </div>
                          </div>
                        </td>
                        <td>POS001</td>
                        <td>mir34345@example.com</td>
                        <td>$30,000</td>
                        <td>
                          <span className="badge badge-linesuccess">Paid</span>
                        </td>
                        <td className="action-table-data">
                          <div className="edit-delete-action data-view">
                            <a className="me-2" href="javascript:void(0);">
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
                                className="feather feather-eye action-eye"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                            </a>
                            <a className="me-2" href="javascript:void(0);">
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
                                className="feather feather-download action-download"
                              >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                              </svg>
                            </a>
                            <a
                              className="me-2"
                              href="#"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#offcanvasRight"
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
                                className="feather feather-edit action-edit"
                              >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                              </svg>
                            </a>
                            <a className="confirm-text" href="javascript:void(0);">
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
                                className="feather feather-trash-2"
                              >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="even">
                        <td className="sorting_1">
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks"></span>
                          </label>
                        </td>
                        <td>
                          <div className="userimgname">
                            <a href="javascript:void(0);" className="product-img">
                              <img src="images/user-02.jpg" alt="product" />
                            </a>
                            <div className="emp-name">
                              <a href="javascript:void(0);">Susan Lopez</a>
                              <p className="role">Curator</p>
                            </div>
                          </div>
                        </td>
                        <td>POS002</td>
                        <td>susanopez@example.com</td>
                        <td>$20,000</td>
                        <td>
                          <span className="badge badge-linesuccess">Paid</span>
                        </td>
                        <td className="action-table-data">
                          <div className="edit-delete-action data-view">
                            <a className="me-2" href="javascript:void(0);">
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
                                className="feather feather-eye action-eye"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                            </a>
                            <a className="me-2" href="javascript:void(0);">
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
                                className="feather feather-download action-download"
                              >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                              </svg>
                            </a>
                            <a
                              className="me-2"
                              href="#"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#offcanvasRight"
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
                                className="feather feather-edit action-edit"
                              >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                              </svg>
                            </a>
                            <a className="confirm-text" href="javascript:void(0);">
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
                                className="feather feather-trash-2"
                              >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="odd">
                        <td className="sorting_1">
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks"></span>
                          </label>
                        </td>
                        <td>
                          <div className="userimgname">
                            <a href="javascript:void(0);" className="product-img">
                              <img
                                src="images/user-03.jpg"
                                alt="product"
                              />
                            </a>
                            <div className="emp-name">
                              <a href="javascript:void(0);">Robert</a>
                              <p className="role">System Administrator</p>
                            </div>
                          </div>
                        </td>
                        <td>POS003</td>
                        <td>robertgman@example.com</td>
                        <td>$25,000</td>
                        <td>
                          <span className="badge badge-linedanger">UnPaid</span>
                        </td>
                        <td className="action-table-data">
                          <div className="edit-delete-action data-view">
                            <a className="me-2" href="javascript:void(0);">
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
                                className="feather feather-eye action-eye"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                            </a>
                            <a className="me-2" href="javascript:void(0);">
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
                                className="feather feather-download action-download"
                              >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                              </svg>
                            </a>
                            <a
                              className="me-2"
                              href="#"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#offcanvasRight"
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
                                className="feather feather-edit action-edit"
                              >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                              </svg>
                            </a>
                            <a className="confirm-text" href="javascript:void(0);">
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
                                className="feather feather-trash-2"
                              >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="even">
                        <td className="sorting_1">
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks"></span>
                          </label>
                        </td>
                        <td>
                          <div className="userimgname">
                            <a href="javascript:void(0);" className="product-img">
                              <img
                                src="/images/user-06.jpg"
                                alt="product"
                              />
                            </a>
                            <div className="emp-name">
                              <a href="javascript:void(0);">Janet Hembre</a>
                              <p className="role">Administrative Officer</p>
                            </div>
                          </div>
                        </td>
                        <td>POS004</td>
                        <td>janetembre@example.com</td>
                        <td>$23,000</td>
                        <td>
                          <span className="badge badge-linesuccess">Paid</span>
                        </td>
                        <td className="action-table-data">
                          <div className="edit-delete-action data-view">
                            <a className="me-2" href="javascript:void(0);">
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
                                className="feather feather-eye action-eye"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                            </a>
                            <a className="me-2" href="javascript:void(0);">
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
                                className="feather feather-download action-download"
                              >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                              </svg>
                            </a>
                            <a
                              className="me-2"
                              href="#"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#offcanvasRight"
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
                                className="feather feather-edit action-edit"
                              >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                              </svg>
                            </a>
                            <a className="confirm-text" href="javascript:void(0);">
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
                                className="feather feather-trash-2"
                              >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="odd">
                        <td className="sorting_1">
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks"></span>
                          </label>
                        </td>
                        <td>
                          <div className="userimgname">
                            <a href="javascript:void(0);" className="product-img">
                              <img
                                src="images/user-04.jpg"
                                alt="product"
                              />
                            </a>
                            <div className="emp-name">
                              <a href="javascript:void(0);">Russell Belle</a>
                              <p className="role">Technician</p>
                            </div>
                          </div>
                        </td>
                        <td>POS005</td>
                        <td>russellbelle@example.com</td>
                        <td>$35,000</td>
                        <td>
                          <span className="badge badge-linesuccess">Paid</span>
                        </td>
                        <td className="action-table-data">
                          <div className="edit-delete-action data-view">
                            <a className="me-2" href="javascript:void(0);">
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
                                className="feather feather-eye action-eye"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                            </a>
                            <a className="me-2" href="javascript:void(0);">
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
                                className="feather feather-download action-download"
                              >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                              </svg>
                            </a>
                            <a
                              className="me-2"
                              href="#"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#offcanvasRight"
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
                                className="feather feather-edit action-edit"
                              >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                              </svg>
                            </a>
                            <a className="confirm-text" href="javascript:void(0);">
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
                                className="feather feather-trash-2"
                              >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="even">
                        <td className="sorting_1">
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks"></span>
                          </label>
                        </td>
                        <td>
                          <div className="userimgname">
                            <a href="javascript:void(0);" className="product-img">
                              <img
                                src="images/user-05.jpg"
                                alt="product"
                              />
                            </a>
                            <div className="emp-name">
                              <a href="javascript:void(0);">Edward Muniz</a>
                              <p className="role">Office Support Secretary</p>
                            </div>
                          </div>
                        </td>
                        <td>POS006</td>
                        <td>edward@example.com</td>
                        <td>$28,000</td>
                        <td>
                          <span className="badge badge-linedanger">UnPaid</span>
                        </td>
                        <td className="action-table-data">
                          <div className="edit-delete-action data-view">
                            <a className="me-2" href="javascript:void(0);">
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
                                className="feather feather-eye action-eye"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                            </a>
                            <a className="me-2" href="javascript:void(0);">
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
                                className="feather feather-download action-download"
                              >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                              </svg>
                            </a>
                            <a
                              className="me-2"
                              href="#"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#offcanvasRight"
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
                                className="feather feather-edit action-edit"
                              >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                              </svg>
                            </a>
                            <a className="confirm-text" href="javascript:void(0);">
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
                                className="feather feather-trash-2"
                              >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="odd">
                        <td className="sorting_1">
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks"></span>
                          </label>
                        </td>
                        <td>
                          <div className="userimgname">
                            <a href="javascript:void(0);" className="product-img">
                              <img
                                src="images/user-05.jpg"
                                alt="product"
                              />
                            </a>
                            <div className="emp-name">
                              <a href="javascript:void(0);">Susan Moore</a>
                              <p className="role">Tech Lead</p>
                            </div>
                          </div>
                        </td>
                        <td>POS007</td>
                        <td>susanmoore@example.com</td>
                        <td>$27,000</td>
                        <td>
                          <span className="badge badge-linesuccess">Paid</span>
                        </td>
                        <td className="action-table-data">
                          <div className="edit-delete-action data-view">
                            <a className="me-2" href="javascript:void(0);">
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
                                className="feather feather-eye action-eye"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                            </a>
                            <a className="me-2" href="javascript:void(0);">
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
                                className="feather feather-download action-download"
                              >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                              </svg>
                            </a>
                            <a
                              className="me-2"
                              href="#"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#offcanvasRight"
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
                                className="feather feather-edit action-edit"
                              >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                              </svg>
                            </a>
                            <a className="confirm-text" href="javascript:void(0);">
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
                                className="feather feather-trash-2"
                              >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="dataTables_length" id="DataTables_Table_0_length">
                    <label>
                      <select
                        name="DataTables_Table_0_length"
                        aria-controls="DataTables_Table_0"
                        className="form-select form-select-sm"
                      >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                    </label>
                  </div>
                  <div
                    className="dataTables_paginate paging_simple_numbers"
                    id="DataTables_Table_0_paginate"
                  >
                    <ul className="pagination">
                      <li
                        className="paginate_button page-item previous disabled"
                        id="DataTables_Table_0_previous"
                      >
                        <a
                          aria-controls="DataTables_Table_0"
                          aria-disabled="true"
                          role="link"
                          data-dt-idx="previous"
                          tabindex="-1"
                          className="page-link"
                        >
                          <i className="fa fa-angle-left"></i>{" "}
                        </a>
                      </li>
                      <li className="paginate_button page-item active">
                        <a
                          href="#"
                          aria-controls="DataTables_Table_0"
                          role="link"
                          aria-current="page"
                          data-dt-idx="0"
                          tabindex="0"
                          className="page-link"
                        >
                          1
                        </a>
                      </li>
                      <li
                        className="paginate_button page-item next disabled"
                        id="DataTables_Table_0_next"
                      >
                        <a
                          aria-controls="DataTables_Table_0"
                          aria-disabled="true"
                          role="link"
                          data-dt-idx="next"
                          tabindex="-1"
                          className="page-link"
                        >
                          {" "}
                          <i className=" fa fa-angle-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="dataTables_info"
                    id="DataTables_Table_0_info"
                    role="status"
                    aria-live="polite"
                  >
                    1 - 7 of 7 items
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeSalary;
