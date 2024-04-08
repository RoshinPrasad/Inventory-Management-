import { useState } from "react";
const AdminLeave = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="add-item d-flex">
            <div className="page-title">
              <h4>Leaves</h4>
              <h6>Manage your Leaves</h6>
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
            <a href="leave-types.html" className="btn btn-added">
              Leave type
            </a>
          </div>
        </div>

        <div className="card table-list-card">
          <div className="card-body pb-0">
            <div className="table-top">
              <div className="input-blocks search-set mb-0">
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
                  <div id="DataTables_Table_0_filter" className="dataTables_filter">
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
                  <div className="layout-hide-box">
                    <a href="javascript:void(0);" className="me-3 layout-box">
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
                        className="feather feather-layout feather-search"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="3" y1="9" x2="21" y2="9"></line>
                        <line x1="9" y1="21" x2="9" y2="9"></line>
                      </svg>
                    </a>
                    <div className="layout-drop-item card">
                      <div className="drop-item-head">
                        <h5>Want to manage datatable?</h5>
                        <p>
                          Please drag and drop your column to reorder your table
                          and enable see option as you want.
                        </p>
                      </div>
                      <ul>
                        <li>
                          <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <span className="status-label">
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
                                className="feather feather-menu"
                              >
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                              </svg>
                              Shop
                            </span>
                            <input
                              type="checkbox"
                              id="option1"
                              className="check"
                              checked=""
                            />
                            <label for="option1" className="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <span className="status-label">
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
                                className="feather feather-menu"
                              >
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                              </svg>
                              Product
                            </span>
                            <input
                              type="checkbox"
                              id="option2"
                              className="check"
                              checked=""
                            />
                            <label for="option2" className="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <span className="status-label">
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
                                className="feather feather-menu"
                              >
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                              </svg>
                              Reference No
                            </span>
                            <input
                              type="checkbox"
                              id="option3"
                              className="check"
                              checked=""
                            />
                            <label for="option3" className="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <span className="status-label">
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
                                className="feather feather-menu"
                              >
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                              </svg>
                              Date
                            </span>
                            <input
                              type="checkbox"
                              id="option4"
                              className="check"
                              checked=""
                            />
                            <label for="option4" className="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <span className="status-label">
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
                                className="feather feather-menu"
                              >
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                              </svg>
                              Responsible Person
                            </span>
                            <input
                              type="checkbox"
                              id="option5"
                              className="check"
                              checked=""
                            />
                            <label for="option5" className="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <span className="status-label">
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
                                className="feather feather-menu"
                              >
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                              </svg>
                              Notes
                            </span>
                            <input
                              type="checkbox"
                              id="option6"
                              className="check"
                              checked=""
                            />
                            <label for="option6" className="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <span className="status-label">
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
                                className="feather feather-menu"
                              >
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                              </svg>
                              Quantity
                            </span>
                            <input
                              type="checkbox"
                              id="option7"
                              className="check"
                              checked=""
                            />
                            <label for="option7" className="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <span className="status-label">
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
                                className="feather feather-menu"
                              >
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                              </svg>
                              Actions
                            </span>
                            <input
                              type="checkbox"
                              id="option8"
                              className="check"
                              checked=""
                            />
                            <label for="option8" className="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
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
                  <div className="col-lg-2 col-sm-6 col-12">
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
                        data-select2-id="select2-data-4-tkzm"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option data-select2-id="select2-data-6-3as1">
                          Choose Employee
                        </option>
                        <option>Mitchum Daniel</option>
                        <option>Susan Lopez</option>
                        <option>Robert Grossman</option>
                        <option>Janet Hembre</option>
                      </select>
                      <span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="select2-data-5-4kxr"
                        style={{width: "100%;"}}
                      >
                        <span className="selection">
                          <span
                            className="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="0"
                            aria-disabled="false"
                            aria-labelledby="select2-tjr5-container"
                            aria-controls="select2-tjr5-container"
                          >
                            <span
                              className="select2-selection__rendered"
                              id="select2-tjr5-container"
                              role="textbox"
                              aria-readonly="true"
                              title="Choose Employee"
                            >
                              Choose Employee
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
                  <div className="col-lg-2 col-sm-6 col-12">
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
                        className="feather feather-box info-img"
                      >
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                      </svg>
                      <select
                        className="select select2-hidden-accessible"
                        data-select2-id="select2-data-7-gvq7"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option data-select2-id="select2-data-9-dhep">
                          Choose Type
                        </option>
                        <option>Sick Leave</option>
                        <option>Maternity</option>
                        <option>Vacation</option>
                      </select>
                      <span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="select2-data-8-vby1"
                        style={{width: "100%;"}}
                      >
                        <span className="selection">
                          <span
                            className="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="0"
                            aria-disabled="false"
                            aria-labelledby="select2-823p-container"
                            aria-controls="select2-823p-container"
                          >
                            <span
                              className="select2-selection__rendered"
                              id="select2-823p-container"
                              role="textbox"
                              aria-readonly="true"
                              title="Choose Type"
                            >
                              Choose Type
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
                  <div className="col-lg-2 col-sm-6 col-12">
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
                      <div className="input-groupicon">
                        <input
                          type="text"
                          className="datetimepicker"
                          placeholder="From Date - To Date"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
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
                      <div className="input-groupicon">
                        <input
                          type="text"
                          className="datetimepicker"
                          placeholder="Applied Date"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
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
                        data-select2-id="select2-data-10-syzj"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option data-select2-id="select2-data-12-3rh3">
                          Choose Status
                        </option>
                        <option>Approved</option>
                        <option>Rejected</option>
                      </select>
                      <span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="select2-data-11-otty"
                        style={{width: "100%;"}}
                      >
                        <span className="selection">
                          <span
                            className="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="0"
                            aria-disabled="false"
                            aria-labelledby="select2-xxu7-container"
                            aria-controls="select2-xxu7-container"
                          >
                            <span
                              className="select2-selection__rendered"
                              id="select2-xxu7-container"
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
                  <div className="col-lg-2 col-sm-6 col-12 ms-auto">
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
                        aria-label="    : activate to sort column descending"
                        style={{width: "35px;"}}
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
                        aria-label="Emp Name: activate to sort column ascending"
                        style={{width: "180.725px;"}}
                      >
                        Emp Name
                      </th>
                      <th
                        className="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-label="Emp Id: activate to sort column ascending"
                        style={{width: "47.5375px;"}}
                      >
                        Emp Id
                      </th>
                      <th
                        className="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-label="Type: activate to sort column ascending"
                        style={{width: "51.8375px;"}}
                      >
                        Type
                      </th>
                      <th
                        className="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-label="From Date: activate to sort column ascending"
                        style={{width: "71.85px;"}}
                      >
                        From Date
                      </th>
                      <th
                        className="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-label="To Date: activate to sort column ascending"
                        style={{width: "69.9px;"}}
                      >
                        To Date
                      </th>
                      <th
                        className="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-label="Days/Hours: activate to sort column ascending"
                        style={{width: "79.9125px;"}}
                      >
                        Days/Hours
                      </th>
                      <th
                        className="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-label="Shift: activate to sort column ascending"
                        style={{width: "35.3px;"}}
                      >
                        Shift
                      </th>
                      <th
                        className="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-label="Applied On: activate to sort column ascending"
                        style={{width: "78.15px;"}}
                      >
                        Applied On
                      </th>
                      <th
                        className="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-label="Status: activate to sort column ascending"
                        style={{width: "84px;"}}
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
                        style={{width: "44.3625px;"}}
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
                            <img src="../images/user-01.jpg" alt="product" />
                          </a>
                          <div>
                            <a href="javascript:void(0);">Mitchum Daniel</a>
                            <span className="emp-team">Database Administrator</span>
                          </div>
                        </div>
                      </td>
                      <td>POS001</td>
                      <td>Sick Leave</td>
                      <td>02 Aug 2023</td>
                      <td>03 Aug 2023</td>
                      <td>01 Day</td>
                      <td>Regular</td>
                      <td>02 Aug 2023</td>
                      <td>
                        <span className="badges status-badge">Approved</span>
                      </td>
                      <td className="action-table-data">
                        <div className="edit-delete-action">
                          <a
                            className="me-3 confirm-text p-2"
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
                          <a href="javascript:void(0);" className="product-img">
                            <img src="../images/user-02.jpg" alt="product" />
                          </a>
                          <div>
                            <a href="javascript:void(0);">Susan Lopez</a>
                            <span className="emp-team">Curator</span>
                          </div>
                        </div>
                      </td>
                      <td>POS002</td>
                      <td>Sick Leave</td>
                      <td>07 Aug 2023</td>
                      <td>07 Aug 2023</td>
                      <td>2 hrs</td>
                      <td>Regular</td>
                      <td>07 Aug 2023</td>
                      <td>
                        <span className="badges unstatus-badge">Rejected</span>
                      </td>
                      <td className="action-table-data">
                        <div className="edit-delete-action">
                          <a
                            className="me-3 confirm-text p-2"
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
                          <a href="javascript:void(0);" className="product-img">
                            <img src="../images/user-03.jpg" alt="product" />
                          </a>
                          <div>
                            <a href="javascript:void(0);">Robert Grossman</a>
                            <span className="emp-team">System Administrator</span>
                          </div>
                        </div>
                      </td>
                      <td>POS003</td>
                      <td>Sick Leave</td>
                      <td>03 Aug 2023</td>
                      <td>04 Aug 2023</td>
                      <td>01 Day</td>
                      <td>Regular</td>
                      <td>03 Aug 2023</td>
                      <td>
                        <div className="input-blocks leave-table">
                          <select
                            className="select select2-hidden-accessible"
                            data-select2-id="select2-data-13-0c0f"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <option data-select2-id="select2-data-15-w7en">
                              Approve
                            </option>
                            <option>Rejected</option>
                          </select>
                          <span
                            className="select2 select2-container select2-container--default"
                            dir="ltr"
                            data-select2-id="select2-data-14-eyuk"
                            style={{width: "100%;"}}
                          >
                            <span className="selection">
                              <span
                                className="select2-selection select2-selection--single"
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabindex="0"
                                aria-disabled="false"
                                aria-labelledby="select2-7ma5-container"
                                aria-controls="select2-7ma5-container"
                              >
                                <span
                                  className="select2-selection__rendered"
                                  id="select2-7ma5-container"
                                  role="textbox"
                                  aria-readonly="true"
                                  title="Approve"
                                >
                                  Approve
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
                      </td>
                      <td className="action-table-data">
                        <div className="edit-delete-action">
                          <a
                            className="me-3 confirm-text p-2"
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
                          <a href="javascript:void(0);" className="product-img">
                            <img src="../images/user-06.jpg" alt="product" />
                          </a>
                          <div>
                            <a href="javascript:void(0);">Janet Hembre</a>
                            <span className="emp-team">Administrative Officer</span>
                          </div>
                        </div>
                      </td>
                      <td>POS004</td>
                      <td>Maternity</td>
                      <td>05 Aug 2023</td>
                      <td>07 Aug 2023</td>
                      <td>02 Days</td>
                      <td>Regular</td>
                      <td>05 Aug 2023</td>
                      <td>
                        <div className="input-blocks leave-table">
                          <select
                            className="select select2-hidden-accessible"
                            data-select2-id="select2-data-16-r57i"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <option data-select2-id="select2-data-18-x66x">
                              Approve
                            </option>
                            <option>Rejected</option>
                          </select>
                          <span
                            className="select2 select2-container select2-container--default"
                            dir="ltr"
                            data-select2-id="select2-data-17-e8q2"
                            style={{width: "100%;"}}
                          >
                            <span className="selection">
                              <span
                                className="select2-selection select2-selection--single"
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabindex="0"
                                aria-disabled="false"
                                aria-labelledby="select2-4z1r-container"
                                aria-controls="select2-4z1r-container"
                              >
                                <span
                                  className="select2-selection__rendered"
                                  id="select2-4z1r-container"
                                  role="textbox"
                                  aria-readonly="true"
                                  title="Approve"
                                >
                                  Approve
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
                      </td>
                      <td className="action-table-data">
                        <div className="edit-delete-action">
                          <a
                            className="me-3 confirm-text p-2"
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
                          <a href="javascript:void(0);" className="product-img">
                            <img src="../images/user-04.jpg" alt="product" />
                          </a>
                          <div>
                            <a href="javascript:void(0);">Russell Belle</a>
                            <span className="emp-team">Technician</span>
                          </div>
                        </div>
                      </td>
                      <td>POS005</td>
                      <td>Vacation</td>
                      <td>08 Aug 2023</td>
                      <td>10 Aug 2023</td>
                      <td>03 Days</td>
                      <td>Regular</td>
                      <td>08 Aug 2023</td>
                      <td>
                        <div className="input-blocks leave-table">
                          <select
                            className="select select2-hidden-accessible"
                            data-select2-id="select2-data-19-hct6"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <option data-select2-id="select2-data-21-ryfo">
                              Approve
                            </option>
                            <option>Rejected</option>
                          </select>
                          <span
                            className="select2 select2-container select2-container--default"
                            dir="ltr"
                            data-select2-id="select2-data-20-3t0b"
                            style={{width: "100%;"}}
                          >
                            <span className="selection">
                              <span
                                className="select2-selection select2-selection--single"
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabindex="0"
                                aria-disabled="false"
                                aria-labelledby="select2-4lxt-container"
                                aria-controls="select2-4lxt-container"
                              >
                                <span
                                  className="select2-selection__rendered"
                                  id="select2-4lxt-container"
                                  role="textbox"
                                  aria-readonly="true"
                                  title="Approve"
                                >
                                  Approve
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
                      </td>
                      <td className="action-table-data">
                        <div className="edit-delete-action">
                          <a
                            className="me-3 confirm-text p-2"
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
                          <a href="javascript:void(0);" className="product-img">
                            <img src="../images/user-05.jpg" alt="product" />
                          </a>
                          <div>
                            <a href="javascript:void(0);">Edward K. Muniz</a>
                            <span className="emp-team">
                              Office Support Secretary
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>POS006</td>
                      <td>Sick Leave</td>
                      <td>03 Aug 2023</td>
                      <td>03 Aug 2023</td>
                      <td>2 hrs</td>
                      <td>Regular</td>
                      <td>03 Aug 2023</td>
                      <td>
                        <div className="input-blocks leave-table">
                          <select
                            className="select select2-hidden-accessible"
                            data-select2-id="select2-data-22-jg85"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <option data-select2-id="select2-data-24-7bbx">
                              Approve
                            </option>
                            <option>Rejected</option>
                          </select>
                          <span
                            className="select2 select2-container select2-container--default"
                            dir="ltr"
                            data-select2-id="select2-data-23-3y5u"
                            style={{width: "100%;"}}
                          >
                            <span className="selection">
                              <span
                                className="select2-selection select2-selection--single"
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabindex="0"
                                aria-disabled="false"
                                aria-labelledby="select2-vq3n-container"
                                aria-controls="select2-vq3n-container"
                              >
                                <span
                                  className="select2-selection__rendered"
                                  id="select2-vq3n-container"
                                  role="textbox"
                                  aria-readonly="true"
                                  title="Approve"
                                >
                                  Approve
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
                      </td>
                      <td className="action-table-data">
                        <div className="edit-delete-action">
                          <a
                            className="me-3 confirm-text p-2"
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
                  1 - 6 of 6 items
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLeave;
