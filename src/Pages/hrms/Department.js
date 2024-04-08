import { useState } from "react";

import AddDepartment from "../../Component/AddDepartment";

const Department = () => {
  const [isGrid, setIsGrid] = useState(true);
  const [showAddLeave, setShowAddLeave] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleCloseAddLeave = () => {
    setShowAddLeave(false);
  };

  const handleClick = () => {
    setShowAddLeave(true);
  };

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="add-item d-flex">
            <div className="page-title">
              <h4>Department</h4>
              <h6>Manage your departments</h6>
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
                <img src="../images/pdf.svg" alt="img" />
              </a>
            </li>
            <li>
              <a
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                aria-label="Excel"
                data-bs-original-title="Excel"
              >
                <img src="../images/excel.svg" alt="img" />
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
              Add New Department
            </a>
          </div>
        </div>
        {showAddLeave && <AddDepartment onClose={handleCloseAddLeave} />}

        <div className="card">
          <div className="card-body pb-0">
            <div className="table-top table-top-new">
              <div className="search-set mb-0">
                <div className="total-employees">
                  <h6>
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
                      className="feather feather-users feather-user"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    Total Employees <span>21</span>
                  </h6>
                </div>
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
                  <input type="search" className="form-control" />
                </div>
              </div>
              <div className="search-path d-flex align-items-center search-path-new">
                <div className="d-flex">
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
                      <img src="../images/closes.svg" alt="img" />
                    </span>
                  </a>
                  <a
                    onClick={() => setIsGrid(false)}
                    className={isGrid ? "btn-list " : "btn-list active"}
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
                      className="feather feather-list feather-user"
                    >
                      <line x1="8" y1="6" x2="21" y2="6"></line>
                      <line x1="8" y1="12" x2="21" y2="12"></line>
                      <line x1="8" y1="18" x2="21" y2="18"></line>
                      <line x1="3" y1="6" x2="3.01" y2="6"></line>
                      <line x1="3" y1="12" x2="3.01" y2="12"></line>
                      <line x1="3" y1="18" x2="3.01" y2="18"></line>
                    </svg>
                  </a>
                  <a
                    onClick={() => setIsGrid(true)}
                    className={isGrid ? "btn-list active" : "btn-list"}
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
                      className="feather feather-grid feather-user"
                    >
                      <rect x="3" y="3" width="7" height="7"></rect>
                      <rect x="14" y="3" width="7" height="7"></rect>
                      <rect x="14" y="14" width="7" height="7"></rect>
                      <rect x="3" y="14" width="7" height="7"></rect>
                    </svg>
                  </a>
                </div>
                <li
                className="nav-item dropdown main-drop select-store-dropdown"
                style={{ border: "1px solid gray", listStyleType: "none" }}
              >
                <a
                  href="#"
                  className="dropdown-toggle nav-link select-store"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown();
                  }}
                >
                  <span
                    className="user-info"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <span
                      className="user-letter"
                      style={{
                        padding: "8px",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 18 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='feather feather-sliders info-img'%3E%3Cline x1='4' y1='21' x2='4' y2='14'/%3E%3Cline x1='4' y1='10' x2='4' y2='3'/%3E%3Cline x1='12' y1='21' x2='12' y2='12'/%3E%3Cline x1='12' y1='8' x2='12' y2='3'/%3E%3Cline x1='20' y1='21' x2='20' y2='16'/%3E%3Cline x1='20' y1='12' x2='20' y2='3'/%3E%3Cline x1='1' y1='14' x2='7' y2='14'/%3E%3Cline x1='9' y1='8' x2='15' y2='8'/%3E%3Cline x1='17' y1='16' x2='23' y2='16'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        border: "none",
                        backgroundPosition: "center center",
                        paddingLeft: "20px",
                        width: "105%",
                      }}
                    ></span>
                    <span className="user-detail" style={{ marginLeft: "2px" }}>
                      <span className="user-name">Sort By Date</span>
                    </span>
                  </span>
                </a>
                {isOpen && (
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    style={{ display: "block" }}
                  >
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={(e) => e.preventDefault()}
                    >
                      Ascending
                    </a>
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={(e) => e.preventDefault()}
                    >
                      Descending
                    </a>
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={(e) => e.preventDefault()}
                    >
                      Latest
                    </a>
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={(e) => e.preventDefault()}
                    >
                      Oldest
                    </a>
                  </div>
                )}
              </li>
              </div>
            </div>

            {isGrid ? (
              <div className="card" id="filter_inputs">
                <div className="card-body pb-0">
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
                          className="feather feather-file-text info-img"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                        <select
                          className="select select2-hidden-accessible"
                          data-select2-id="select2-data-4-h0em"
                          tabindex="-1"
                          aria-hidden="true"
                        >
                          <option data-select2-id="select2-data-6-bk30">
                            Choose Department
                          </option>
                          <option>UI/UX</option>
                          <option>HR</option>
                          <option>Admin</option>
                          <option>Engineering</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id="select2-data-5-im5x"
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
                              aria-labelledby="select2-jj6i-container"
                              aria-controls="select2-jj6i-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-jj6i-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Choose Department"
                              >
                                Choose Department
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
                          className="feather feather-users info-img"
                        >
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        <select
                          className="select select2-hidden-accessible"
                          data-select2-id="select2-data-7-e2oa"
                          tabindex="-1"
                          aria-hidden="true"
                        >
                          <option data-select2-id="select2-data-9-8vl7">
                            Choose HOD
                          </option>
                          <option>Mitchum Daniel</option>
                          <option>Susan Lopez</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id="select2-data-8-3c5l"
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
                              aria-labelledby="select2-5vq3-container"
                              aria-controls="select2-5vq3-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-5vq3-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Choose HOD"
                              >
                                Choose HOD
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
                    <div className="col-lg-3 col-sm-6 col-12 ms-auto">
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
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                          </svg>{" "}
                          Search{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
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
                          aria-label=": activate to sort column descending"
                          style={{ width: "51.0125px;" }}
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
                          aria-label="Department: activate to sort column ascending"
                          style={{ width: "109.412px;" }}
                        >
                          Department
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="HOD: activate to sort column ascending"
                          style={{ width: "174.425px;" }}
                        >
                          HOD
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Members: activate to sort column ascending"
                          style={{ width: "85.975px;" }}
                        >
                          Members
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Total Members: activate to sort column ascending"
                          style={{ width: "132.913px;" }}
                        >
                          Total Members
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Created On: activate to sort column ascending"
                          style={{ width: "103.812px;" }}
                        >
                          Created On
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Status: activate to sort column ascending"
                          style={{ width: "77.6125px;" }}
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
                          style={{ width: "126.438px;" }}
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
                        <td>UI/UX</td>
                        <td>
                          <div className="userimgname">
                            <a
                              href="javascript:void(0);"
                              className="product-img"
                            >
                              <img src="../images/user-01.jpg" alt="product" />
                            </a>
                            <div>
                              <a href="javascript:void(0);">Steven</a>
                            </div>
                          </div>
                        </td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <ul>
                                <li>
                                  <a href="javascript:void(0);">
                                    <img src="../images/user-03.jpg" alt="" />
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <img src="../images/user-04.jpg" alt="" />
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <img src="../images/user-06.jpg" alt="" />
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <img src="../images/user-05.jpg" alt="" />
                                    <span>+3</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </td>
                        <td>07</td>
                        <td>25 Jan 2023</td>
                        <td>
                          <span className="badge badge-linesuccess">
                            Active
                          </span>
                        </td>
                        <td className="action-table-data">
                          <div className="edit-delete-action">
                            <a className="me-2 p-2" href="javascript:void(0);">
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
                                className="feather feather-eye"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                            </a>
                            <a
                              className="me-2 p-2"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-department"
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
                                className="feather feather-edit"
                              >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                              </svg>
                            </a>
                            <a
                              className="confirm-text p-2"
                              href="javascript:void(0);"
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
                        <td>HR</td>
                        <td>
                          <div className="userimgname">
                            <a
                              href="javascript:void(0);"
                              className="product-img"
                            >
                              <img src="../images/user-02.jpg" alt="product" />
                            </a>
                            <div>
                              <a href="javascript:void(0);">Susan Lopez</a>
                            </div>
                          </div>
                        </td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <ul>
                                <li>
                                  <a href="javascript:void(0);">
                                    <img src="../images/user-03.jpg" alt="" />
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <img src="../images/user-04.jpg" alt="" />
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <img src="../images/user-06.jpg" alt="" />
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <img src="../images/user-05.jpg" alt="" />
                                    <span>+3</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </td>
                        <td>05</td>
                        <td>29 Jan 2023</td>
                        <td>
                          <span className="badge badge-linesuccess">
                            Active
                          </span>
                        </td>
                        <td className="action-table-data">
                          <div className="edit-delete-action">
                            <a className="me-2 p-2" href="javascript:void(0);">
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
                                className="feather feather-eye"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                            </a>
                            <a
                              className="me-2 p-2"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-department"
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
                                className="feather feather-edit"
                              >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                              </svg>
                            </a>
                            <a
                              className="confirm-text p-2"
                              href="javascript:void(0);"
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
                        <td>Admin</td>
                        <td>
                          <div className="userimgname">
                            <a
                              href="javascript:void(0);"
                              className="product-img"
                            >
                              <img src="../images/user-03.jpg" alt="product" />
                            </a>
                            <div>
                              <a href="javascript:void(0);">Robert Grossman</a>
                            </div>
                          </div>
                        </td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <ul>
                                <li>
                                  <a href="javascript:void(0);">
                                    <img src="../images/user-03.jpg" alt="" />
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <img src="../images/user-04.jpg" alt="" />
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <img src="../images/user-06.jpg" alt="" />
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <img src="../images/user-05.jpg" alt="" />
                                    <span>+3</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </td>
                        <td>06</td>
                        <td>13 Feb 2023</td>
                        <td>
                          <span className="badges-inactive">Inactive</span>
                        </td>
                        <td className="action-table-data">
                          <div className="edit-delete-action">
                            <a className="me-2 p-2" href="javascript:void(0);">
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
                                className="feather feather-eye"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                            </a>
                            <a
                              className="me-2 p-2"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-department"
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
                                className="feather feather-edit"
                              >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                              </svg>
                            </a>
                            <a
                              className="confirm-text p-2"
                              href="javascript:void(0);"
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
                        <td>Technician</td>
                        <td>
                          <div className="userimgname">
                            <a
                              href="javascript:void(0);"
                              className="product-img"
                            >
                              <img src="../images/user-06.jpg" alt="product" />
                            </a>
                            <div>
                              <a href="javascript:void(0);">Janet Hembre</a>
                            </div>
                          </div>
                        </td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <ul>
                                <li>
                                  <a href="javascript:void(0);">
                                    <img src="../images/user-03.jpg" alt="" />
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <img src="../images/user-04.jpg" alt="" />
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <img src="../images/user-06.jpg" alt="" />
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <img src="../images/user-05.jpg" alt="" />
                                    <span>+3</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </td>
                        <td>08</td>
                        <td>27 Feb 2023</td>
                        <td>
                          <span className="badges-success">Active</span>
                        </td>
                        <td className="action-table-data">
                          <div className="edit-delete-action">
                            <a className="me-2 p-2" href="javascript:void(0);">
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
                                className="feather feather-eye"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                            </a>
                            <a
                              className="me-2 p-2"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-department"
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
                                className="feather feather-edit"
                              >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                              </svg>
                            </a>
                            <a
                              className="confirm-text p-2"
                              href="javascript:void(0);"
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
                        <td>Support</td>
                        <td>
                          <div className="userimgname">
                            <a
                              href="javascript:void(0);"
                              className="product-img"
                            >
                              <img src="../images/user-04.jpg" alt="product" />
                            </a>
                            <div>
                              <a href="javascript:void(0);">Russell Belle</a>
                            </div>
                          </div>
                        </td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <ul>
                                <li>
                                  <a href="javascript:void(0);">
                                    <img src="../images/user-03.jpg" alt="" />
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <img src="../images/user-04.jpg" alt="" />
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <img src="../images/user-06.jpg" alt="" />
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <img src="../images/user-05.jpg" alt="" />
                                    <span>+3</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </td>
                        <td>04</td>
                        <td>02 Mar 2023</td>
                        <td>
                          <span className="badges-success">Active</span>
                        </td>
                        <td className="action-table-data">
                          <div className="edit-delete-action">
                            <a className="me-2 p-2" href="javascript:void(0);">
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
                                className="feather feather-eye"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                            </a>
                            <a
                              className="me-2 p-2"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-department"
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
                                className="feather feather-edit"
                              >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                              </svg>
                            </a>
                            <a
                              className="confirm-text p-2"
                              href="javascript:void(0);"
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
                        <td>Engineering</td>
                        <td>
                          <div className="userimgname">
                            <a
                              href="javascript:void(0);"
                              className="product-img"
                            >
                              <img src="../images/user-05.jpg" alt="product" />
                            </a>
                            <div>
                              <a href="javascript:void(0);">Edward K. Muniz</a>
                            </div>
                          </div>
                        </td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <ul>
                                <li>
                                  <a href="javascript:void(0);">
                                    <img src="../images/user-03.jpg" alt="" />
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <img src="../images/user-04.jpg" alt="" />
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <img src="../images/user-06.jpg" alt="" />
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <img src="../images/user-05.jpg" alt="" />
                                    <span>+3</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </td>
                        <td>10</td>
                        <td>17 Mar 2023</td>
                        <td>
                          <span className="badges-inactive">Inactive</span>
                        </td>
                        <td className="action-table-data">
                          <div className="edit-delete-action">
                            <a className="me-2 p-2" href="javascript:void(0);">
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
                                className="feather feather-eye"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                            </a>
                            <a
                              className="me-2 p-2"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-department"
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
                                className="feather feather-edit"
                              >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                              </svg>
                            </a>
                            <a
                              className="confirm-text p-2"
                              href="javascript:void(0);"
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
                        <td>Admin</td>
                        <td>
                          <div className="userimgname">
                            <a
                              href="javascript:void(0);"
                              className="product-img"
                            >
                              <img src="../images/user-06.jpg" alt="product" />
                            </a>
                            <div>
                              <a href="javascript:void(0);">Susan Moore</a>
                            </div>
                          </div>
                        </td>
                        <td>
                          <ul className="team-members">
                            <li>
                              <ul>
                                <li>
                                  <a href="javascript:void(0);">
                                    <img src="../images/user-03.jpg" alt="" />
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <img src="../images/user-04.jpg" alt="" />
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <img src="../images/user-06.jpg" alt="" />
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <img src="../images/user-05.jpg" alt="" />
                                    <span>+3</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </td>
                        <td>03</td>
                        <td>20 Mar 2023</td>
                        <td>
                          <span className="badges-success">Active</span>
                        </td>
                        <td className="action-table-data">
                          <div className="edit-delete-action">
                            <a className="me-2 p-2" href="javascript:void(0);">
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
                                className="feather feather-eye"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                            </a>
                            <a
                              className="me-2 p-2"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-department"
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
                                className="feather feather-edit"
                              >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                              </svg>
                            </a>
                            <a
                              className="confirm-text p-2"
                              href="javascript:void(0);"
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
                  <div
                    className="dataTables_length"
                    id="DataTables_Table_0_length"
                  >
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
            )}
          </div>
        </div>

        <div className="employee-grid-widget">
          <div className="row">
            <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
              <div className="employee-grid-profile">
                <div className="profile-head">
                  <div className="dep-name">
                    <h5 className="active">UI/UX</h5>
                  </div>
                  <div className="profile-head-action">
                    <div className="dropdown profile-action">
                      <a
                        href="#"
                        className="action-icon dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
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
                          className="feather feather-more-vertical feather-user"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="12" cy="5" r="1"></circle>
                          <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-department"
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
                              className="feather feather-edit info-img"
                            >
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item confirm-text mb-0"
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
                              className="feather feather-trash-2 info-img"
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="profile-info department-profile-info">
                  <div className="profile-pic">
                    <img src="../images/user-01.jpg" alt="" />
                  </div>
                  <h4>Mitchum Daniel</h4>
                </div>
                <ul className="team-members">
                  <li>Total Members: 07</li>
                  <li>
                    <ul>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-01.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-02.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-03.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-04.jpg" alt="" />
                          <span>+4</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
              <div className="employee-grid-profile">
                <div className="profile-head">
                  <div className="dep-name">
                    <h5 className="active">HR</h5>
                  </div>
                  <div className="profile-head-action">
                    <div className="dropdown profile-action">
                      <a
                        href="#"
                        className="action-icon dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
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
                          className="feather feather-more-vertical feather-user"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="12" cy="5" r="1"></circle>
                          <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-department"
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
                              className="feather feather-edit info-img"
                            >
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item confirm-text mb-0"
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
                              className="feather feather-trash-2 info-img"
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="profile-info department-profile-info">
                  <div className="profile-pic">
                    <img src="../images/user-02.jpg" alt="" />
                  </div>
                  <h4>Susan Lopez</h4>
                </div>
                <ul className="team-members">
                  <li>Total Members: 05</li>
                  <li>
                    <ul>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-03.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-04.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-05.jpg" alt="" />
                          <span>+3</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
              <div className="employee-grid-profile">
                <div className="profile-head">
                  <div className="dep-name">
                    <h5 className="inactive">Admin</h5>
                  </div>
                  <div className="profile-head-action">
                    <div className="dropdown profile-action">
                      <a
                        href="#"
                        className="action-icon dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
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
                          className="feather feather-more-vertical feather-user"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="12" cy="5" r="1"></circle>
                          <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-department"
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
                              className="feather feather-edit info-img"
                            >
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item confirm-text mb-0"
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
                              className="feather feather-trash-2 info-img"
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="profile-info department-profile-info">
                  <div className="profile-pic">
                    <img src="../images/user-03.jpg" alt="" />
                  </div>
                  <h4>Robert Grossman</h4>
                </div>
                <ul className="team-members">
                  <li>Total Members: 06</li>
                  <li>
                    <ul>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-03.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-04.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-06.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-05.jpg" alt="" />
                          <span>+3</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
              <div className="employee-grid-profile">
                <div className="profile-head">
                  <div className="dep-name">
                    <h5 className="active">Admin</h5>
                  </div>
                  <div className="profile-head-action">
                    <div className="dropdown profile-action">
                      <a
                        href="#"
                        className="action-icon dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
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
                          className="feather feather-more-vertical feather-user"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="12" cy="5" r="1"></circle>
                          <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-department"
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
                              className="feather feather-edit info-img"
                            >
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item confirm-text mb-0"
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
                              className="feather feather-trash-2 info-img"
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="profile-info department-profile-info">
                  <div className="profile-pic">
                    <img src="../images/user-06.jpg" alt="" />
                  </div>
                  <h4>Janet Hembre</h4>
                </div>
                <ul className="team-members">
                  <li>Total Members: 04</li>
                  <li>
                    <ul>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-03.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-04.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-06.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-05.jpg" alt="" />
                          <span>+3</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
              <div className="employee-grid-profile">
                <div className="profile-head">
                  <div className="dep-name">
                    <h5 className="inactive">Technician</h5>
                  </div>
                  <div className="profile-head-action">
                    <div className="dropdown profile-action">
                      <a
                        href="#"
                        className="action-icon dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
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
                          className="feather feather-more-vertical feather-user"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="12" cy="5" r="1"></circle>
                          <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-department"
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
                              className="feather feather-edit info-img"
                            >
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item confirm-text mb-0"
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
                              className="feather feather-trash-2 info-img"
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="profile-info department-profile-info">
                  <div className="profile-pic">
                    <img src="../images/user-04.jpg" alt="" />
                  </div>
                  <h4>Russell Belle</h4>
                </div>
                <ul className="team-members">
                  <li>Total Members: 08</li>
                  <li>
                    <ul>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-03.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-04.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-06.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-05.jpg" alt="" />
                          <span>+3</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
              <div className="employee-grid-profile">
                <div className="profile-head">
                  <div className="dep-name">
                    <h5 className="active">Support</h5>
                  </div>
                  <div className="profile-head-action">
                    <div className="dropdown profile-action">
                      <a
                        href="#"
                        className="action-icon dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
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
                          className="feather feather-more-vertical feather-user"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="12" cy="5" r="1"></circle>
                          <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-department"
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
                              className="feather feather-edit info-img"
                            >
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item confirm-text mb-0"
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
                              className="feather feather-trash-2 info-img"
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="profile-info department-profile-info">
                  <div className="profile-pic">
                    <img src="../images/user-05.jpg" alt="" />
                  </div>
                  <h4>Edward K. Muniz</h4>
                </div>
                <ul className="team-members">
                  <li>Total Members: 04</li>
                  <li>
                    <ul>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-03.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-04.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-06.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-05.jpg" alt="" />
                          <span>+3</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
              <div className="employee-grid-profile">
                <div className="profile-head">
                  <div className="dep-name">
                    <h5 className="inactive">Engineering</h5>
                  </div>
                  <div className="profile-head-action">
                    <div className="dropdown profile-action">
                      <a
                        href="#"
                        className="action-icon dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
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
                          className="feather feather-more-vertical feather-user"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="12" cy="5" r="1"></circle>
                          <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-department"
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
                              className="feather feather-edit info-img"
                            >
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item confirm-text mb-0"
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
                              className="feather feather-trash-2 info-img"
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="profile-info department-profile-info">
                  <div className="profile-pic">
                    <img src="../images/user-06.jpg" alt="" />
                  </div>
                  <h4>Susan Moore</h4>
                </div>
                <ul className="team-members">
                  <li>Total Members: 10</li>
                  <li>
                    <ul>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-03.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-04.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-06.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-09.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-05.jpg" alt="" />
                          <span>+6</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
              <div className="employee-grid-profile">
                <div className="profile-head">
                  <div className="dep-name">
                    <h5 className="inactive">Admin</h5>
                  </div>
                  <div className="profile-head-action">
                    <div className="dropdown profile-action">
                      <a
                        href="#"
                        className="action-icon dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
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
                          className="feather feather-more-vertical feather-user"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="12" cy="5" r="1"></circle>
                          <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-department"
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
                              className="feather feather-edit info-img"
                            >
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item confirm-text mb-0"
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
                              className="feather feather-trash-2 info-img"
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="profile-info department-profile-info">
                  <div className="profile-pic">
                    <img src="../images/user-08.jpg" alt="" />
                  </div>
                  <h4>Lance Jackson</h4>
                </div>
                <ul className="team-members">
                  <li>Total Members: 03</li>
                  <li>
                    <ul>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-03.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-04.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-06.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-05.jpg" alt="" />
                          <span>+3</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
              <div className="employee-grid-profile">
                <div className="profile-head">
                  <div className="dep-name">
                    <h5 className="inactive">PHP Development</h5>
                  </div>
                  <div className="profile-head-action">
                    <div className="dropdown profile-action">
                      <a
                        href="#"
                        className="action-icon dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
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
                          className="feather feather-more-vertical feather-user"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="12" cy="5" r="1"></circle>
                          <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-department"
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
                              className="feather feather-edit info-img"
                            >
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item confirm-text mb-0"
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
                              className="feather feather-trash-2 info-img"
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="profile-info department-profile-info">
                  <div className="profile-pic">
                    <img src="../images/user-11.jpg" alt="" />
                  </div>
                  <h4>Mitchum Daniel</h4>
                </div>
                <ul className="team-members">
                  <li>Total Members: 09</li>
                  <li>
                    <ul>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-03.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-04.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-06.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-05.jpg" alt="" />
                          <span>+3</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
              <div className="employee-grid-profile">
                <div className="profile-head">
                  <div className="dep-name">
                    <h5 className="active">React</h5>
                  </div>
                  <div className="profile-head-action">
                    <div className="dropdown profile-action">
                      <a
                        href="#"
                        className="action-icon dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
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
                          className="feather feather-more-vertical feather-user"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="12" cy="5" r="1"></circle>
                          <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-department"
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
                              className="feather feather-edit info-img"
                            >
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item confirm-text mb-0"
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
                              className="feather feather-trash-2 info-img"
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="profile-info department-profile-info">
                  <div className="profile-pic">
                    <img src="../images/user-06.jpg" alt="" />
                  </div>
                  <h4>Susan Moore</h4>
                </div>
                <ul className="team-members">
                  <li>Total Members: 07</li>
                  <li>
                    <ul>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-03.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-04.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-06.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-05.jpg" alt="" />
                          <span>+3</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
              <div className="employee-grid-profile">
                <div className="profile-head">
                  <div className="dep-name">
                    <h5 className="active">Angular</h5>
                  </div>
                  <div className="profile-head-action">
                    <div className="dropdown profile-action">
                      <a
                        href="#"
                        className="action-icon dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
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
                          className="feather feather-more-vertical feather-user"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="12" cy="5" r="1"></circle>
                          <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-department"
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
                              className="feather feather-edit info-img"
                            >
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item confirm-text mb-0"
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
                              className="feather feather-trash-2 info-img"
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="profile-info department-profile-info">
                  <div className="profile-pic">
                    <img src="../images/user-03.jpg" alt="" />
                  </div>
                  <h4>Lance Jackson</h4>
                </div>
                <ul className="team-members">
                  <li>Total Members: 07</li>
                  <li>
                    <ul>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-03.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-04.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-06.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-05.jpg" alt="" />
                          <span>+3</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
              <div className="employee-grid-profile">
                <div className="profile-head">
                  <div className="dep-name">
                    <h5 className="active">NodeJS</h5>
                  </div>
                  <div className="profile-head-action">
                    <div className="dropdown profile-action">
                      <a
                        href="#"
                        className="action-icon dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
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
                          className="feather feather-more-vertical feather-user"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="12" cy="5" r="1"></circle>
                          <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-department"
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
                              className="feather feather-edit info-img"
                            >
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item confirm-text mb-0"
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
                              className="feather feather-trash-2 info-img"
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="profile-info department-profile-info">
                  <div className="profile-pic">
                    <img src="../images/user-13.jpg" alt="" />
                  </div>
                  <h4>Robert Grossman</h4>
                </div>
                <ul className="team-members">
                  <li>Total Members: 07</li>
                  <li>
                    <ul>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-03.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-04.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-06.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <img src="../images/user-05.jpg" alt="" />
                          <span>+3</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row custom-pagination">
            <div className="col-md-12">
              <div className="paginations d-flex justify-content-end mb-3">
                <span>
                  <i className="fas fa-chevron-left"></i>
                </span>
                <ul className="d-flex align-items-center page-wrap">
                  <li>
                    <a href="javascript:void(0);" className="active">
                      1
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">2</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">3</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">4</a>
                  </li>
                </ul>
                <span>
                  <i className="fas fa-chevron-right"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;
