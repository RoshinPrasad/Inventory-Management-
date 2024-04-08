import { useState } from "react";

import AddUsers from "../../Component/AddUsers";

const Users = () => {
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
    <div className="page-wrapper" style={{ minHeight: "764px" }}>
      <div className="content">
        <div className="page-header">
          <div className="add-item d-flex">
            <div className="page-title">
              <h4>User List</h4>
              <h6>Manage Your Users</h6>
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
              Add New Users
            </a>
          </div>
        </div>
        {showAddLeave && <AddUsers onClose={handleCloseAddLeave} />}

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
                      <img src="../images/closes.svg" alt="img" />
                    </span>
                  </a>
                </div>
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
                        className="feather feather-user info-img"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <select
                        className="select select2-hidden-accessible"
                        data-select2-id="select2-data-4-4mdy"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option data-select2-id="select2-data-6-1lid">
                          Choose Name
                        </option>
                        <option>Lilly</option>
                        <option>Benjamin</option>
                      </select>
                      <span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="select2-data-5-r0ph"
                        style={{ width: "100%" }}
                      >
                        <span className="selection">
                          <span
                            className="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="0"
                            aria-disabled="false"
                            aria-labelledby="select2-73ru-container"
                            aria-controls="select2-73ru-container"
                          >
                            <span
                              className="select2-selection__rendered"
                              id="select2-73ru-container"
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
                        data-select2-id="select2-data-7-lcmr"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option data-select2-id="select2-data-9-dz67">
                          Choose Status
                        </option>
                        <option>Active</option>
                        <option>Inactive</option>
                      </select>
                      <span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="select2-data-8-vtp1"
                        style={{ width: "100%" }}
                      >
                        <span className="selection">
                          <span
                            className="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="0"
                            aria-disabled="false"
                            aria-labelledby="select2-wwrj-container"
                            aria-controls="select2-wwrj-container"
                          >
                            <span
                              className="select2-selection__rendered"
                              id="select2-wwrj-container"
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
                        className="feather feather-zap info-img"
                      >
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                      </svg>
                      <select
                        className="select select2-hidden-accessible"
                        data-select2-id="select2-data-10-2vg2"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option data-select2-id="select2-data-12-7qb6">
                          Choose Role
                        </option>
                        <option>Store Keeper</option>
                        <option>Salesman</option>
                      </select>
                      <span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="select2-data-11-q8so"
                        style={{ width: "100%" }}
                      >
                        <span className="selection">
                          <span
                            className="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="0"
                            aria-disabled="false"
                            aria-labelledby="select2-3t1w-container"
                            aria-controls="select2-3t1w-container"
                          >
                            <span
                              className="select2-selection__rendered"
                              id="select2-3t1w-container"
                              role="textbox"
                              aria-readonly="true"
                              title="Choose Role"
                            >
                              Choose Role
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
                        aria-label="




: activate to sort column descending"
                        style={{ width: "45.775px" }}
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
                        aria-label="User Name: activate to sort column ascending"
                        style={{ width: "106.35px" }}
                      >
                        User Name
                      </th>
                      <th
                        className="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-label="Phone: activate to sort column ascending"
                        style={{ width: "105.238px" }}
                      >
                        Phone
                      </th>
                      <th
                        className="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-label="email: activate to sort column ascending"
                        style={{ width: "166.1px" }}
                      >
                        email
                      </th>
                      <th
                        className="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-label="Role: activate to sort column ascending"
                        style={{ width: "101.312px" }}
                      >
                        Role
                      </th>
                      <th
                        className="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-label="Created On: activate to sort column ascending"
                        style={{ width: "95.4625px" }}
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
                        style={{ width: "75.4125px" }}
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
                        style={{ width: "125.95px" }}
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
                          <a
                            href="javascript:void(0);"
                            className="userslist-img bg-img"
                          >
                            <img src="../images/user-23.jpg" alt="product" />
                          </a>
                          <div>
                            <a href="javascript:void(0);">Thomas</a>
                          </div>
                        </div>
                      </td>
                      <td>+12163547758</td>
                      <td>thomas@example.com</td>
                      <td>Admin</td>
                      <td>19 Jan 2023</td>
                      <td>
                        <span className="badge badge-linedanger">Inactive</span>
                      </td>
                      <td className="action-table-data">
                        <div className="edit-delete-action">
                          <a
                            className="me-2 p-2 mb-0"
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
                              className="feather feather-eye action-eye"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          </a>
                          <a
                            className="me-2 p-2 mb-0"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-units"
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
                            className="me-2 confirm-text p-2 mb-0"
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
                      <td>
                        <div className="userimgname">
                          <a
                            href="javascript:void(0);"
                            className="userslist-img"
                          >
                            <img src="../images/user-15.jpg" alt="product" />
                          </a>
                          <div>
                            <a href="javascript:void(0);">Rose</a>
                          </div>
                        </div>
                      </td>
                      <td>+11367529510 </td>
                      <td>rose@example.com</td>
                      <td>Manager</td>
                      <td>23 Jan 2023</td>
                      <td>
                        <span className="badge badge-linesuccess">Active</span>
                      </td>
                      <td className="action-table-data">
                        <div className="edit-delete-action">
                          <a
                            className="me-2 p-2 mb-0"
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
                              className="feather feather-eye action-eye"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          </a>
                          <a
                            className="me-2 p-2 mb-0"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-units"
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
                            className="me-2 confirm-text p-2 mb-0"
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
                      <td>
                        <div className="userimgname">
                          <a
                            href="javascript:void(0);"
                            className="userslist-img bg-img"
                          >
                            <img src="../images/user-16.jpg" alt="product" />
                          </a>
                          <div>
                            <a href="javascript:void(0);">Benjamin</a>
                          </div>
                        </div>
                      </td>
                      <td>+15362789414 </td>
                      <td>benjamin@example.com</td>
                      <td>Salesman</td>
                      <td>07 Feb 2023</td>
                      <td>
                        <span className="badge badge-linesuccess">Active</span>
                      </td>
                      <td className="action-table-data">
                        <div className="edit-delete-action">
                          <a
                            className="me-2 p-2 mb-0"
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
                              className="feather feather-eye action-eye"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          </a>
                          <a
                            className="me-2 p-2 mb-0"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-units"
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
                            className="me-2 confirm-text p-2 mb-0"
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
                      <td>
                        <div className="userimgname">
                          <a
                            href="javascript:void(0);"
                            className="userslist-img"
                          >
                            <img src="../images/user-17.jpg" alt="product" />
                          </a>
                          <div>
                            <a href="javascript:void(0);">Kaitlin</a>
                          </div>
                        </div>
                      </td>
                      <td>+18513094627</td>
                      <td>kaitlin@example.com</td>
                      <td>Supervisor</td>
                      <td>18 Feb 2023</td>
                      <td>
                        <span className="badge badge-linesuccess">Active</span>
                      </td>
                      <td className="action-table-data">
                        <div className="edit-delete-action">
                          <a
                            className="me-2 p-2 mb-0"
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
                              className="feather feather-eye action-eye"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          </a>
                          <a
                            className="me-2 p-2 mb-0"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-units"
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
                            className="me-2 confirm-text p-2 mb-0"
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
                      <td>
                        <div className="userimgname">
                          <a
                            href="javascript:void(0);"
                            className="userslist-img bg-img"
                          >
                            <img src="../images/user-18.jpg" alt="product" />
                          </a>
                          <div>
                            <a href="javascript:void(0);">Lilly</a>
                          </div>
                        </div>
                      </td>
                      <td>+14678219025</td>
                      <td>lilly@example.com</td>
                      <td>Store Keeper</td>
                      <td>16 Mar 2023</td>
                      <td>
                        <span className="badge badge-linedanger">Inactive</span>
                      </td>
                      <td className="action-table-data">
                        <div className="edit-delete-action">
                          <a
                            className="me-2 p-2 mb-0"
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
                              className="feather feather-eye action-eye"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          </a>
                          <a
                            className="me-2 p-2 mb-0"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-units"
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
                            className="me-2 confirm-text p-2 mb-0"
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
                      <td>
                        <div className="userimgname">
                          <a
                            href="javascript:void(0);"
                            className="userslist-img bg-img"
                          >
                            <img src="../images/user-19.jpg" alt="product" />
                          </a>
                          <div>
                            <a href="javascript:void(0);">Freda</a>
                          </div>
                        </div>
                      </td>
                      <td>+10913278319</td>
                      <td>freda@example.com</td>
                      <td>Purchase</td>
                      <td>29 Mar 2023</td>
                      <td>
                        <span className="badge badge-linedanger">Inactive</span>
                      </td>
                      <td className="action-table-data">
                        <div className="edit-delete-action">
                          <a
                            className="me-2 p-2 mb-0"
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
                              className="feather feather-eye action-eye"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          </a>
                          <a
                            className="me-2 p-2 mb-0"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-units"
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
                            className="me-2 confirm-text p-2 mb-0"
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
                      <td>
                        <div className="userimgname">
                          <a
                            href="javascript:void(0);"
                            className="userslist-img"
                          >
                            <img src="../images/user-17.jpg" alt="product" />
                          </a>
                          <div>
                            <a href="javascript:void(0);">Alwin</a>
                          </div>
                        </div>
                      </td>
                      <td>+19125852947</td>
                      <td>alwin@example.com</td>
                      <td>Delivery Biker</td>
                      <td>03 Apr 2023</td>
                      <td>
                        <span className="badge badge-linesuccess">Active</span>
                      </td>
                      <td className="action-table-data">
                        <div className="edit-delete-action">
                          <a
                            className="me-2 p-2 mb-0"
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
                              className="feather feather-eye action-eye"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          </a>
                          <a
                            className="me-2 p-2 mb-0"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-units"
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
                            className="me-2 confirm-text p-2 mb-0"
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
                      <td>
                        <div className="userimgname">
                          <a
                            href="javascript:void(0);"
                            className="userslist-img"
                          >
                            <img src="../images/user-06.jpg" alt="product" />
                          </a>
                          <div>
                            <a href="javascript:void(0);">Maybelle</a>
                          </div>
                        </div>
                      </td>
                      <td>+13671835209</td>
                      <td>maybelle@example.com</td>
                      <td>Maintenance</td>
                      <td>13 Apr 2023</td>
                      <td>
                        <span className="badge badge-linesuccess">Active</span>
                      </td>
                      <td className="action-table-data">
                        <div className="edit-delete-action">
                          <a
                            className="me-2 p-2 mb-0"
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
                              className="feather feather-eye action-eye"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          </a>
                          <a
                            className="me-2 p-2 mb-0"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-units"
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
                            className="me-2 confirm-text p-2 mb-0"
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
                      <td>
                        <div className="userimgname">
                          <a
                            href="javascript:void(0);"
                            className="userslist-img bg-img"
                          >
                            <img src="../images/user-06.jpg" alt="product" />
                          </a>
                          <div>
                            <a href="javascript:void(0);">Ellen</a>
                          </div>
                        </div>
                      </td>
                      <td>+19756194733</td>
                      <td>ellen@example.com</td>
                      <td>Quality Analyst</td>
                      <td>17 May 2023</td>
                      <td>
                        <span className="badge badge-linesuccess">Active</span>
                      </td>
                      <td className="action-table-data">
                        <div className="edit-delete-action">
                          <a
                            className="me-2 p-2 mb-0"
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
                              className="feather feather-eye action-eye"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          </a>
                          <a
                            className="me-2 p-2 mb-0"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-units"
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
                            className="me-2 confirm-text p-2 mb-0"
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
                      <td>
                        <div className="userimgname">
                          <a
                            href="javascript:void(0);"
                            className="userslist-img"
                          >
                            <img src="../images/user-17.jpg" alt="product" />
                          </a>
                          <div>
                            <a href="javascript:void(0);">Grace</a>
                          </div>
                        </div>
                      </td>
                      <td>+19167850925</td>
                      <td>grace@example.com</td>
                      <td>Accountant</td>
                      <td>21 May 2023</td>
                      <td>
                        <span className="badge badge-linesuccess">Active</span>
                      </td>
                      <td className="action-table-data">
                        <div className="edit-delete-action">
                          <a
                            className="me-2 p-2 mb-0"
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
                              className="feather feather-eye action-eye"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          </a>
                          <a
                            className="me-2 p-2 mb-0"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-units"
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
                            className="me-2 confirm-text p-2 mb-0"
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
                  1 - 10 of 10 items
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
