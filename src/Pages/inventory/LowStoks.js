import React, { useState } from "react";
import SentMail from "../../Component/SentMail";


function LowStoks() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const [showAddLeave, setShowAddLeave] = useState(false);

  const handleCloseAddLeave = () => {
    setShowAddLeave(false);
  };

  const handleClick = () => {
    setShowAddLeave(true);
  };

  return (
    <>
      <div className="page-wrapper" style={{ minHeight: "295px;" }}>
        <div className="content">
          <div className="page-header">
            <div className="page-title me-auto">
              <h4>Low Stocks</h4>
              <h6>Manage your low stocks</h6>
            </div>
            <ul className="table-top-head low-stock-top-head">
              <li>
                <div className="status-toggle d-flex justify-content-between align-items-center">
                  <input
                    type="checkbox"
                    id="user2"
                    className="check"
                    checked={isChecked}
                    onChange={handleToggle}
                  />
                  <label htmlFor="user2" className="checktoggle">
                    checkbox
                  </label>
                  Notify
                </div>
              </li>
              <li>
                <a href="#" className="btn btn-secondary" onClick={handleClick}>
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
                    className="feather feather-mail"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Send Email
                </a>
              </li>
              {showAddLeave && <SentMail onClose={handleCloseAddLeave} />}
              <li>
                <a
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  aria-label="Pdf"
                  data-bs-original-title="Pdf"
                >
                  <img src="../../images/pdf.svg" alt="img" />
                </a>
              </li>
              <li>
                <a
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  aria-label="Excel"
                  data-bs-original-title="Excel"
                >
                  <img src="../../images/excel.svg" alt="img" />
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
          </div>
          <div className="table-tab">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Low Stocks
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
                  aria-controls="pills-profile"
                  aria-selected="false"
                  tabindex="-1"
                >
                  Out of Stocks
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="card table-list-card">
                  <div className="card-body">
                    <div className="table-top">
                      <div className="search-set">
                        <div className="search-input">
                          <a href="#" className="btn btn-searchset">
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
                          <div
                            id="DataTables_Table_1_filter"
                            className="dataTables_filter"
                          >
                            <label>
                              {" "}
                              <input
                                type="search"
                                className="form-control form-control-sm"
                                placeholder="Search"
                                aria-controls="DataTables_Table_1"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="search-path">
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
                            <img src="../../images/closes.svg" alt="img" />
                          </span>
                        </a>
                      </div>
                      <div className="form-sort">
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <select
                      className="select"
                      style={{
                        padding: "8px",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 18 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='feather feather-sliders info-img'%3E%3Cline x1='4' y1='21' x2='4' y2='14'/%3E%3Cline x1='4' y1='10' x2='4' y2='3'/%3E%3Cline x1='12' y1='21' x2='12' y2='12'/%3E%3Cline x1='12' y1='8' x2='12' y2='3'/%3E%3Cline x1='20' y1='21' x2='20' y2='16'/%3E%3Cline x1='20' y1='12' x2='20' y2='3'/%3E%3Cline x1='1' y1='14' x2='7' y2='14'/%3E%3Cline x1='9' y1='8' x2='15' y2='8'/%3E%3Cline x1='17' y1='16' x2='23' y2='16'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        border: "1px solid gray",
                        backgroundPosition: "5px center",
                        paddingLeft: "20px",
                        width: "105%",
                        borderRadius: "3px",
                      }}
                    >
                      <option
                        value=""
                        disabled
                        selected
                        style={{ backgroundColor: "transparent" }}
                      >
                        Sort by Date
                      </option>
                      <option
                        value="newest"
                        style={{
                          backgroundColor: "transparent",
                          padding: "8px 16px",
                          borderRadius: "0",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "orange")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor = "transparent")
                        }
                      >
                        Newest
                      </option>
                      <option
                        value="oldest"
                        style={{
                          backgroundColor: "transparent",
                          padding: "8px 16px",
                          borderRadius: "0",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "orange")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor = "transparent")
                        }
                      >
                        Oldest
                      </option>
                    </select>
                  </div>
                </div>
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
                                className="feather feather-box info-img"
                              >
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                <line x1="12" y1="22.08" x2="12" y2="12"></line>
                              </svg>
                              <select
                                className="select select2-hidden-accessible"
                                data-select2-id="select2-data-4-gexj"
                                tabindex="-1"
                                aria-hidden="true"
                              >
                                <option data-select2-id="select2-data-6-7psp">
                                  Choose Product
                                </option>
                                <option>Lenovo 3rd Generation </option>
                                <option>Nike Jordan </option>
                                <option>Amazon Echo Dot </option>
                              </select>
                              <span
                                className="select2 select2-container select2-container--default"
                                dir="ltr"
                                data-select2-id="select2-data-5-56gb"
                                style={{ width: "100px;" }}
                              >
                                <span className="selection">
                                  <span
                                    className="select2-selection select2-selection--single"
                                    role="combobox"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    tabindex="0"
                                    aria-disabled="false"
                                    aria-labelledby="select2-bcux-container"
                                    aria-controls="select2-bcux-container"
                                  >
                                    <span
                                      className="select2-selection__rendered"
                                      id="select2-bcux-container"
                                      role="textbox"
                                      aria-readonly="true"
                                      title="Choose Product"
                                    >
                                      Choose Product
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
                                data-select2-id="select2-data-7-ag11"
                                tabindex="-1"
                                aria-hidden="true"
                              >
                                <option data-select2-id="select2-data-9-eu8a">
                                  Choose Category
                                </option>
                                <option>Laptop</option>
                                <option>Shoe</option>
                                <option>Speaker</option>
                              </select>
                              <span
                                className="select2 select2-container select2-container--default"
                                dir="ltr"
                                data-select2-id="select2-data-8-l4iq"
                                style={{ width: "100px;" }}
                              >
                                <span className="selection">
                                  <span
                                    className="select2-selection select2-selection--single"
                                    role="combobox"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    tabindex="0"
                                    aria-disabled="false"
                                    aria-labelledby="select2-jeku-container"
                                    aria-controls="select2-jeku-container"
                                  >
                                    <span
                                      className="select2-selection__rendered"
                                      id="select2-jeku-container"
                                      role="textbox"
                                      aria-readonly="true"
                                      title="Choose Category"
                                    >
                                      Choose Category
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
                                className="feather feather-archive info-img"
                              >
                                <polyline points="21 8 21 21 3 21 3 8"></polyline>
                                <rect x="1" y="3" width="22" height="5"></rect>
                                <line x1="10" y1="12" x2="14" y2="12"></line>
                              </svg>
                              <select
                                className="select select2-hidden-accessible"
                                data-select2-id="select2-data-10-rz28"
                                tabindex="-1"
                                aria-hidden="true"
                              >
                                <option data-select2-id="select2-data-12-64rt">
                                  Choose Warehouse
                                </option>
                                <option>Lavish Warehouse </option>
                                <option>Lobar Handy </option>
                                <option>Traditional Warehouse </option>
                              </select>
                              <span
                                className="select2 select2-container select2-container--default"
                                dir="ltr"
                                data-select2-id="select2-data-11-cp5s"
                                style={{ width: "100px;" }}
                              >
                                <span className="selection">
                                  <span
                                    className="select2-selection select2-selection--single"
                                    role="combobox"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    tabindex="0"
                                    aria-disabled="false"
                                    aria-labelledby="select2-jzjw-container"
                                    aria-controls="select2-jzjw-container"
                                  >
                                    <span
                                      className="select2-selection__rendered"
                                      id="select2-jzjw-container"
                                      role="textbox"
                                      aria-readonly="true"
                                      title="Choose Warehouse"
                                    >
                                      Choose Warehouse
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
                                style={{ width: "35px;" }}
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
                                aria-label="Warehouse: activate to sort column ascending"
                                style={{ width: "128.458px;" }}
                              >
                                Warehouse
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Store: activate to sort column ascending"
                                style={{ width: "36.7083px;" }}
                              >
                                Store
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Product: activate to sort column ascending"
                                style={{ width: "186px;" }}
                              >
                                Product
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Category: activate to sort column ascending"
                                style={{ width: "62.625px;" }}
                              >
                                Category
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-label="SKU: activate to sort column ascending"
                                style={{ width: "29.8229px;" }}
                              >
                                SKU
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Qty: activate to sort column ascending"
                                style={{ width: "25.0104px;" }}
                              >
                                Qty
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Qty Alert: activate to sort column ascending"
                                style={{ width: "64.0625px;" }}
                              >
                                Qty Alert
                              </th>
                              <th
                                className="no-sort sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Action: activate to sort column ascending"
                                style={{ width: "56.6667px;" }}
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
                              <td>Lavish Warehouse </td>
                              <td>Crinol</td>
                              <td>
                                <div className="productimgname">
                                  <a
                                    href="javascript:void(0);"
                                    className="product-img stock-img"
                                  >
                                    <img
                                      src="../../images/stock-img-01.png"
                                      alt="product"
                                    />
                                  </a>
                                  <a href="javascript:void(0);">
                                    Lenovo 3rd Generation{" "}
                                  </a>
                                </div>
                              </td>
                              <td>Laptop</td>
                              <td>PT001</td>
                              <td>15</td>
                              <td>10</td>
                              <td className="action-table-data">
                                <div className="edit-delete-action">
                                  <a
                                    className="me-2 p-2"
                                    href="javascript:void(0);"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit-stock"
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
                                      <line
                                        x1="10"
                                        y1="11"
                                        x2="10"
                                        y2="17"
                                      ></line>
                                      <line
                                        x1="14"
                                        y1="11"
                                        x2="14"
                                        y2="17"
                                      ></line>
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
                              <td>Lobar Handy</td>
                              <td>Selosy</td>
                              <td>
                                <div className="productimgname">
                                  <a
                                    href="javascript:void(0);"
                                    className="product-img stock-img"
                                  >
                                    <img
                                      src="../../images/stock-img-02.png"
                                      alt="product"
                                    />
                                  </a>
                                  <a href="javascript:void(0);">Nike Jordan </a>
                                </div>
                              </td>
                              <td>Shoe</td>
                              <td>PT002</td>
                              <td>17</td>
                              <td>08</td>
                              <td className="action-table-data">
                                <div className="edit-delete-action">
                                  <a
                                    className="me-2 p-2"
                                    href="javascript:void(0);"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit-stock"
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
                                      <line
                                        x1="10"
                                        y1="11"
                                        x2="10"
                                        y2="17"
                                      ></line>
                                      <line
                                        x1="14"
                                        y1="11"
                                        x2="14"
                                        y2="17"
                                      ></line>
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
                              <td>Quaint Warehouse</td>
                              <td>Logerro</td>
                              <td>
                                <div className="productimgname">
                                  <a
                                    href="javascript:void(0);"
                                    className="product-img stock-img"
                                  >
                                    <img
                                      src="../../images/stock-img-03.png"
                                      alt="product"
                                    />
                                  </a>
                                  <a href="javascript:void(0);">
                                    Apple Series 5 Watch{" "}
                                  </a>
                                </div>
                              </td>
                              <td>Electronics</td>
                              <td>PT003</td>
                              <td>14</td>
                              <td>12</td>
                              <td className="action-table-data">
                                <div className="edit-delete-action">
                                  <a
                                    className="me-2 p-2"
                                    href="javascript:void(0);"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit-stock"
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
                                      <line
                                        x1="10"
                                        y1="11"
                                        x2="10"
                                        y2="17"
                                      ></line>
                                      <line
                                        x1="14"
                                        y1="11"
                                        x2="14"
                                        y2="17"
                                      ></line>
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
                              <td>Traditional Warehouse</td>
                              <td>Vesloo</td>
                              <td>
                                <div className="productimgname">
                                  <a
                                    href="javascript:void(0);"
                                    className="product-img stock-img"
                                  >
                                    <img
                                      src="../../images/stock-img-04.png"
                                      alt="product"
                                    />
                                  </a>
                                  <a href="javascript:void(0);">
                                    Amazon Echo Dot
                                  </a>
                                </div>
                              </td>
                              <td>Speaker</td>
                              <td>PT004</td>
                              <td>20</td>
                              <td>15</td>
                              <td className="action-table-data">
                                <div className="edit-delete-action">
                                  <a
                                    className="me-2 p-2"
                                    href="javascript:void(0);"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit-stock"
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
                                      <line
                                        x1="10"
                                        y1="11"
                                        x2="10"
                                        y2="17"
                                      ></line>
                                      <line
                                        x1="14"
                                        y1="11"
                                        x2="14"
                                        y2="17"
                                      ></line>
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
                              <td>Cool Warehouse</td>
                              <td>Crompy</td>
                              <td>
                                <div className="productimgname">
                                  <a
                                    href="javascript:void(0);"
                                    className="product-img stock-img"
                                  >
                                    <img
                                      src="../../images/stock-img-05.png"
                                      alt="product"
                                    />
                                  </a>
                                  <a href="javascript:void(0);">Lobar Handy</a>
                                </div>
                              </td>
                              <td>Furnitures</td>
                              <td>PT005</td>
                              <td>18</td>
                              <td>13</td>
                              <td className="action-table-data">
                                <div className="edit-delete-action">
                                  <a
                                    className="me-2 p-2"
                                    href="javascript:void(0);"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit-stock"
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
                                      <line
                                        x1="10"
                                        y1="11"
                                        x2="10"
                                        y2="17"
                                      ></line>
                                      <line
                                        x1="14"
                                        y1="11"
                                        x2="14"
                                        y2="17"
                                      ></line>
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
                          1 - 5 of 5 items
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="card table-list-card">
                  <div className="card-body">
                    <div className="table-top">
                      <div className="search-set">
                        <div className="search-input">
                          <a href="#" className="btn btn-searchset">
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
                          <div
                            id="DataTables_Table_1_filter"
                            className="dataTables_filter"
                          >
                            <label>
                              {" "}
                              <input
                                type="search"
                                className="form-control form-control-sm"
                                placeholder="Search"
                                aria-controls="DataTables_Table_1"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="search-path">
                        <a className="btn btn-filter" id="filter_search1">
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
                            <img src="../../images/closes.svg" alt="img" />
                          </span>
                        </a>
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
                          data-select2-id="select2-data-13-unhs"
                          tabindex="-1"
                          aria-hidden="true"
                        >
                          <option data-select2-id="select2-data-15-7vlb">
                            Sort by Date
                          </option>
                          <option>Newest</option>
                          <option>Oldest</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id="select2-data-14-ien9"
                          style={{ width: "100px;" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabindex="0"
                              aria-disabled="false"
                              aria-labelledby="select2-4q1v-container"
                              aria-controls="select2-4q1v-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-4q1v-container"
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
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          ></span>
                        </span>
                      </div>
                    </div>

                    <div className="card" id="filter_inputs1">
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
                                className="feather feather-box info-img"
                              >
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                <line x1="12" y1="22.08" x2="12" y2="12"></line>
                              </svg>
                              <select
                                className="select select2-hidden-accessible"
                                data-select2-id="select2-data-16-anfr"
                                tabindex="-1"
                                aria-hidden="true"
                              >
                                <option data-select2-id="select2-data-18-f8vz">
                                  Choose Product
                                </option>
                                <option>Lenovo 3rd Generation </option>
                                <option>Nike Jordan </option>
                                <option>Amazon Echo Dot </option>
                              </select>
                              <span
                                className="select2 select2-container select2-container--default"
                                dir="ltr"
                                data-select2-id="select2-data-17-p26x"
                                style={{ width: "100px;" }}
                              >
                                <span className="selection">
                                  <span
                                    className="select2-selection select2-selection--single"
                                    role="combobox"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    tabindex="0"
                                    aria-disabled="false"
                                    aria-labelledby="select2-cgi1-container"
                                    aria-controls="select2-cgi1-container"
                                  >
                                    <span
                                      className="select2-selection__rendered"
                                      id="select2-cgi1-container"
                                      role="textbox"
                                      aria-readonly="true"
                                      title="Choose Product"
                                    >
                                      Choose Product
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
                                data-select2-id="select2-data-19-ciz6"
                                tabindex="-1"
                                aria-hidden="true"
                              >
                                <option data-select2-id="select2-data-21-n4kk">
                                  Choose Category
                                </option>
                                <option>Laptop</option>
                                <option>Shoe</option>
                                <option>Speaker</option>
                              </select>
                              <span
                                className="select2 select2-container select2-container--default"
                                dir="ltr"
                                data-select2-id="select2-data-20-zb6k"
                                style={{ width: "100px;" }}
                              >
                                <span className="selection">
                                  <span
                                    className="select2-selection select2-selection--single"
                                    role="combobox"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    tabindex="0"
                                    aria-disabled="false"
                                    aria-labelledby="select2-hjfp-container"
                                    aria-controls="select2-hjfp-container"
                                  >
                                    <span
                                      className="select2-selection__rendered"
                                      id="select2-hjfp-container"
                                      role="textbox"
                                      aria-readonly="true"
                                      title="Choose Category"
                                    >
                                      Choose Category
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
                                className="feather feather-archive info-img"
                              >
                                <polyline points="21 8 21 21 3 21 3 8"></polyline>
                                <rect x="1" y="3" width="22" height="5"></rect>
                                <line x1="10" y1="12" x2="14" y2="12"></line>
                              </svg>
                              <select
                                className="select select2-hidden-accessible"
                                data-select2-id="select2-data-22-zlod"
                                tabindex="-1"
                                aria-hidden="true"
                              >
                                <option data-select2-id="select2-data-24-cb9q">
                                  Choose Warehouse
                                </option>
                                <option>Lavish Warehouse </option>
                                <option>Lobar Handy </option>
                                <option>Traditional Warehouse </option>
                              </select>
                              <span
                                className="select2 select2-container select2-container--default"
                                dir="ltr"
                                data-select2-id="select2-data-23-6oat"
                                style={{ width: "100px;" }}
                              >
                                <span className="selection">
                                  <span
                                    className="select2-selection select2-selection--single"
                                    role="combobox"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    tabindex="0"
                                    aria-disabled="false"
                                    aria-labelledby="select2-eq24-container"
                                    aria-controls="select2-eq24-container"
                                  >
                                    <span
                                      className="select2-selection__rendered"
                                      id="select2-eq24-container"
                                      role="textbox"
                                      aria-readonly="true"
                                      title="Choose Warehouse"
                                    >
                                      Choose Warehouse
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

                    <div className="table-responsive">
                      <div
                        id="DataTables_Table_1_wrapper"
                        className="dataTables_wrapper dt-bootstrap5 no-footer table-responsive"
                      >
                        <table
                          className="table datanew dataTable no-footer"
                          id="DataTables_Table_1"
                          aria-describedby="DataTables_Table_1_info"
                        >
                          <thead>
                            <tr>
                              <th
                                className="no-sort sorting sorting_asc"
                                tabindex="0"
                                aria-controls="DataTables_Table_1"
                                rowspan="1"
                                colspan="1"
                                aria-sort="ascending"
                                aria-label="




: activate to sort column descending"
                                style={{ width: "0px;" }}
                              >
                                <label className="checkboxs">
                                  <input type="checkbox" id="select-all2" />
                                  <span className="checkmarks"></span>
                                </label>
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_1"
                                rowspan="1"
                                colspan="1"
                                aria-label="Warehouse: activate to sort column ascending"
                                style={{ width: "0px;" }}
                              >
                                Warehouse
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_1"
                                rowspan="1"
                                colspan="1"
                                aria-label="Store: activate to sort column ascending"
                                style={{ width: "0px;" }}
                              >
                                Store
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_1"
                                rowspan="1"
                                colspan="1"
                                aria-label="Product: activate to sort column ascending"
                                style={{ width: "0px;" }}
                              >
                                Product
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_1"
                                rowspan="1"
                                colspan="1"
                                aria-label="Category: activate to sort column ascending"
                                style={{ width: "0px;" }}
                              >
                                Category
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_1"
                                rowspan="1"
                                colspan="1"
                                aria-label="SKU: activate to sort column ascending"
                                style={{ width: "0px;" }}
                              >
                                SKU
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_1"
                                rowspan="1"
                                colspan="1"
                                aria-label="Qty: activate to sort column ascending"
                                style={{ width: "0px;" }}
                              >
                                Qty
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_1"
                                rowspan="1"
                                colspan="1"
                                aria-label="Qty Alert: activate to sort column ascending"
                                style={{ width: "0px;" }}
                              >
                                Qty Alert
                              </th>
                              <th
                                className="no-sort sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_1"
                                rowspan="1"
                                colspan="1"
                                aria-label="Action: activate to sort column ascending"
                                style={{ width: "0px;" }}
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
                              <td>Lavish Warehouse </td>
                              <td>Crinol</td>
                              <td>
                                <div className="productimgname">
                                  <a
                                    href="javascript:void(0);"
                                    className="product-img stock-img"
                                  >
                                    <img
                                      src="../../images/stock-img-01.png"
                                      alt="product"
                                    />
                                  </a>
                                  <a href="javascript:void(0);">
                                    Lenovo 3rd Generation{" "}
                                  </a>
                                </div>
                              </td>
                              <td>Laptop</td>
                              <td>PT001</td>
                              <td>15</td>
                              <td>10</td>
                              <td className="action-table-data">
                                <div className="edit-delete-action">
                                  <a
                                    className="me-2 p-2"
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
                                      <line
                                        x1="10"
                                        y1="11"
                                        x2="10"
                                        y2="17"
                                      ></line>
                                      <line
                                        x1="14"
                                        y1="11"
                                        x2="14"
                                        y2="17"
                                      ></line>
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
                              <td>Lobar Handy</td>
                              <td>Selosy</td>
                              <td>
                                <div className="productimgname">
                                  <a
                                    href="javascript:void(0);"
                                    className="product-img stock-img"
                                  >
                                    <img
                                      src="../../images/stock-img-02.png"
                                      alt="product"
                                    />
                                  </a>
                                  <a href="javascript:void(0);">Nike Jordan </a>
                                </div>
                              </td>
                              <td>Shoe</td>
                              <td>PT002</td>
                              <td>17</td>
                              <td>08</td>
                              <td className="action-table-data">
                                <div className="edit-delete-action">
                                  <a
                                    className="me-2 p-2"
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
                                      <line
                                        x1="10"
                                        y1="11"
                                        x2="10"
                                        y2="17"
                                      ></line>
                                      <line
                                        x1="14"
                                        y1="11"
                                        x2="14"
                                        y2="17"
                                      ></line>
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
                              <td>Quaint Warehouse</td>
                              <td>Logerro</td>
                              <td>
                                <div className="productimgname">
                                  <a
                                    href="javascript:void(0);"
                                    className="product-img stock-img"
                                  >
                                    <img
                                      src="../../images/stock-img-03.png"
                                      alt="product"
                                    />
                                  </a>
                                  <a href="javascript:void(0);">
                                    Apple Series 5 Watch{" "}
                                  </a>
                                </div>
                              </td>
                              <td>Electronics</td>
                              <td>PT003</td>
                              <td>14</td>
                              <td>12</td>
                              <td className="action-table-data">
                                <div className="edit-delete-action">
                                  <a
                                    className="me-2 p-2"
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
                                      <line
                                        x1="10"
                                        y1="11"
                                        x2="10"
                                        y2="17"
                                      ></line>
                                      <line
                                        x1="14"
                                        y1="11"
                                        x2="14"
                                        y2="17"
                                      ></line>
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
                              <td>Traditional Warehouse</td>
                              <td>Vesloo</td>
                              <td>
                                <div className="productimgname">
                                  <a
                                    href="javascript:void(0);"
                                    className="product-img stock-img"
                                  >
                                    <img
                                      src="../../images/stock-img-04.png"
                                      alt="product"
                                    />
                                  </a>
                                  <a href="javascript:void(0);">
                                    Amazon Echo Dot
                                  </a>
                                </div>
                              </td>
                              <td>Speaker</td>
                              <td>PT004</td>
                              <td>20</td>
                              <td>15</td>
                              <td className="action-table-data">
                                <div className="edit-delete-action">
                                  <a
                                    className="me-2 p-2"
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
                                      <line
                                        x1="10"
                                        y1="11"
                                        x2="10"
                                        y2="17"
                                      ></line>
                                      <line
                                        x1="14"
                                        y1="11"
                                        x2="14"
                                        y2="17"
                                      ></line>
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
                              <td>Cool Warehouse</td>
                              <td>Crompy</td>
                              <td>
                                <div className="productimgname">
                                  <a
                                    href="javascript:void(0);"
                                    className="product-img stock-img"
                                  >
                                    <img
                                      src="../../images/stock-img-05.png"
                                      alt="product"
                                    />
                                  </a>
                                  <a href="javascript:void(0);">Lobar Handy</a>
                                </div>
                              </td>
                              <td>Furnitures</td>
                              <td>PT005</td>
                              <td>18</td>
                              <td>13</td>
                              <td className="action-table-data">
                                <div className="edit-delete-action">
                                  <a
                                    className="me-3 p-2"
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
                                      <line
                                        x1="10"
                                        y1="11"
                                        x2="10"
                                        y2="17"
                                      ></line>
                                      <line
                                        x1="14"
                                        y1="11"
                                        x2="14"
                                        y2="17"
                                      ></line>
                                    </svg>
                                  </a>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div
                          className="dataTables_length"
                          id="DataTables_Table_1_length"
                        >
                          <label>
                            <select
                              name="DataTables_Table_1_length"
                              aria-controls="DataTables_Table_1"
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
                          id="DataTables_Table_1_paginate"
                        >
                          <ul className="pagination">
                            <li
                              className="paginate_button page-item previous disabled"
                              id="DataTables_Table_1_previous"
                            >
                              <a
                                aria-controls="DataTables_Table_1"
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
                                aria-controls="DataTables_Table_1"
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
                              id="DataTables_Table_1_next"
                            >
                              <a
                                aria-controls="DataTables_Table_1"
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
                          id="DataTables_Table_1_info"
                          role="status"
                          aria-live="polite"
                        >
                          1 - 5 of 5 items
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LowStoks;
