import React from "react";

const SupplierReport = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Supplier Report</h4>
                <h6>Manage Your Supplier Report</h6>
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
          </div>
          <div className="table-tab">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="purchase-report-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#purchase-report"
                  type="button"
                  role="tab"
                  aria-controls="purchase-report"
                  aria-selected="true"
                >
                  Purchase
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="payment-report-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#payment-report"
                  type="button"
                  role="tab"
                  aria-controls="payment-report"
                  aria-selected="false"
                  tabindex="-1"
                >
                  Payment
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="return-report-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#return-report"
                  type="button"
                  role="tab"
                  aria-controls="return-report"
                  aria-selected="false"
                  tabindex="-1"
                >
                  Return
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="purchase-report"
                role="tabpanel"
                aria-labelledby="purchase-report-tab"
              >
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
                            id="DataTables_Table_2_filter"
                            className="dataTables_filter"
                          >
                            <label>
                              {" "}
                              <input
                                type="search"
                                className="form-control form-control-sm"
                                placeholder="Search"
                                aria-controls="DataTables_Table_2"
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
                            <img src="images/closes.svg" alt="img" />
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
                                data-select2-id="select2-data-4-cijs"
                                tabindex="-1"
                                aria-hidden="true"
                              >
                                <option data-select2-id="select2-data-6-1lw6">
                                  Choose Product
                                </option>
                                <option>Apple Series 5 Watch</option>
                                <option>Amazon Echo Dot</option>
                              </select>
                              <span
                                className="select2 select2-container select2-container--default"
                                dir="ltr"
                                data-select2-id="select2-data-5-45bg"
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
                                    aria-labelledby="select2-n4we-container"
                                    aria-controls="select2-n4we-container"
                                  >
                                    <span
                                      className="select2-selection__rendered"
                                      id="select2-n4we-container"
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
                                data-select2-id="select2-data-7-n1sj"
                                tabindex="-1"
                                aria-hidden="true"
                              >
                                <option data-select2-id="select2-data-9-e3yy">
                                  Choose Status
                                </option>
                                <option>Received</option>
                              </select>
                              <span
                                className="select2 select2-container select2-container--default"
                                dir="ltr"
                                data-select2-id="select2-data-8-ch4z"
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
                                    aria-labelledby="select2-uocz-container"
                                    aria-controls="select2-uocz-container"
                                  >
                                    <span
                                      className="select2-selection__rendered"
                                      id="select2-uocz-container"
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
                          <div className="col-lg-2 col-sm-6 col-12">
                            <div className="input-blocks">
                              <div className="position-relative daterange-wraper">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="datetimes"
                                  placeholder="From Date - To Date"
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
                                  className="feather feather-calendar feather-14 info-img"
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
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-sm-6 col-12 ms-auto">
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
                                style={{width: "38.3864px"}}
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
                                aria-label="Purchase Date: activate to sort column ascending"
                                style={{width: "105.648px"}}
                              >
                                Purchase Date
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Product: activate to sort column ascending"
                                style={{width: "198.034px"}}
                              >
                                Product
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Purchase Amount: activate to sort column ascending"
                                style={{width: "129.057px"}}
                              >
                                Purchase Amount
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Purchase Qty: activate to sort column ascending"
                                style={{width: "97.5227px"}}
                              >
                                Purchase Qty
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Paid: activate to sort column ascending"
                                style={{width: "32.9886px"}}
                              >
                                Paid
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Balance: activate to sort column ascending"
                                style={{width: " 58.7727px"}}
                              >
                                Balance
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_0"
                                rowspan="1"
                                colspan="1"
                                aria-label="Status: activate to sort column ascending"
                                style={{width: " 70.8636px"}}
                              >
                                Status
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
                              <td>19 Jan 2023</td>
                              <td className="productimgname">
                                <div className="view-product me-2">
                                  <a href="javascript:void(0);">
                                    <img
                                      src="images/stock-img-01.png"
                                      alt="product"
                                    />
                                  </a>
                                </div>
                                <a href="javascript:void(0);">
                                  Lenovo 3rd Generation
                                </a>
                              </td>
                              <td>$1500</td>
                              <td>50</td>
                              <td>$1500</td>
                              <td>$0.00</td>
                              <td>
                                <span className="badges status-badge">
                                  Received
                                </span>
                              </td>
                            </tr>
                            <tr className="even">
                              <td className="sorting_1">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks"></span>
                                </label>
                              </td>
                              <td>24 Jan 2023</td>
                              <td className="productimgname">
                                <div className="view-product me-2">
                                  <a href="javascript:void(0);">
                                    <img
                                      src="images/stock-img-06.png"
                                      alt="product"
                                    />
                                  </a>
                                </div>
                                <a href="javascript:void(0);">Bold V3.2</a>
                              </td>
                              <td>$1200</td>
                              <td>20</td>
                              <td>$1200</td>
                              <td>$0.00</td>
                              <td>
                                <span className="badges status-badge">
                                  Received
                                </span>
                              </td>
                            </tr>
                            <tr className="odd">
                              <td className="sorting_1">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks"></span>
                                </label>
                              </td>
                              <td>03 Feb 2023</td>
                              <td className="productimgname">
                                <div className="view-product me-2">
                                  <a href="javascript:void(0);">
                                    <img
                                      src="images/stock-img-02.png"
                                      alt="product"
                                    />
                                  </a>
                                </div>
                                <a href="javascript:void(0);">Nike Jordan</a>
                              </td>
                              <td>$2000</td>
                              <td>30</td>
                              <td>$2000</td>
                              <td>$0.00</td>
                              <td>
                                <span className="badges status-badge">
                                  Received
                                </span>
                              </td>
                            </tr>
                            <tr className="even">
                              <td className="sorting_1">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks"></span>
                                </label>
                              </td>
                              <td>15 Feb 2023</td>
                              <td className="productimgname">
                                <div className="view-product me-2">
                                  <a href="javascript:void(0);">
                                    <img
                                      src="images/stock-img-03.png"
                                      alt="product"
                                    />
                                  </a>
                                </div>
                                <a href="javascript:void(0);">
                                  Apple Series 5 Watch
                                </a>
                              </td>
                              <td>$800</td>
                              <td>80</td>
                              <td>$800</td>
                              <td>$0.00</td>
                              <td>
                                <span className="badges status-badge">
                                  Received
                                </span>
                              </td>
                            </tr>
                            <tr className="odd">
                              <td className="sorting_1">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks"></span>
                                </label>
                              </td>
                              <td>12 Mar 2023</td>
                              <td className="productimgname">
                                <div className="view-product me-2">
                                  <a href="javascript:void(0);">
                                    <img
                                      src="images/stock-img-04.png"
                                      alt="product"
                                    />
                                  </a>
                                </div>
                                <a href="javascript:void(0);">
                                  Amazon Echo Dot
                                </a>
                              </td>
                              <td>$500</td>
                              <td>70</td>
                              <td>$500</td>
                              <td>$0.00</td>
                              <td>
                                <span className="badges status-badge">
                                  Received
                                </span>
                              </td>
                            </tr>
                            <tr className="even">
                              <td className="sorting_1">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks"></span>
                                </label>
                              </td>
                              <td>25 Mar 2023</td>
                              <td className="productimgname">
                                <div className="view-product me-2">
                                  <a href="javascript:void(0);">
                                    <img
                                      src="images/stock-img-05.png"
                                      alt="product"
                                    />
                                  </a>
                                </div>
                                <a href="javascript:void(0);">Lobar Handy</a>
                              </td>
                              <td>$400</td>
                              <td>100</td>
                              <td>$400</td>
                              <td>$0.00</td>
                              <td>
                                <span className="badges status-badge">
                                  Received
                                </span>
                              </td>
                            </tr>
                            <tr className="odd">
                              <td className="sorting_1">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks"></span>
                                </label>
                              </td>
                              <td>02 Apr 2023</td>
                              <td className="productimgname">
                                <div className="view-product me-2">
                                  <a href="javascript:void(0);">
                                    <img
                                      src="images/expire-product-01.png"
                                      alt="product"
                                    />
                                  </a>
                                </div>
                                <a href="javascript:void(0);">
                                  Red Premium Handy
                                </a>
                              </td>
                              <td>$300</td>
                              <td>120</td>
                              <td>$300</td>
                              <td>$0.00</td>
                              <td>
                                <span className="badges status-badge">
                                  Received
                                </span>
                              </td>
                            </tr>
                            <tr className="even">
                              <td className="sorting_1">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks"></span>
                                </label>
                              </td>
                              <td>19 Apr 2023</td>
                              <td className="productimgname">
                                <div className="view-product me-2">
                                  <a href="javascript:void(0);">
                                    <img
                                      src="images/expire-product-02.png"
                                      alt="product"
                                    />
                                  </a>
                                </div>
                                <a href="javascript:void(0);">Iphone 14 Pro</a>
                              </td>
                              <td>$1800</td>
                              <td>40</td>
                              <td>$1800</td>
                              <td>$0.00</td>
                              <td>
                                <span className="badges status-badge">
                                  Received
                                </span>
                              </td>
                            </tr>
                            <tr className="odd">
                              <td className="sorting_1">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks"></span>
                                </label>
                              </td>
                              <td>11 May 2023</td>
                              <td className="productimgname">
                                <div className="view-product me-2">
                                  <a href="javascript:void(0);">
                                    <img
                                      src="images/expire-product-03.png"
                                      alt="product"
                                    />
                                  </a>
                                </div>
                                <a href="javascript:void(0);">Black Slim 200</a>
                              </td>
                              <td>$700</td>
                              <td>300</td>
                              <td>$700</td>
                              <td>$0.00</td>
                              <td>
                                <span className="badges status-badge">
                                  Received
                                </span>
                              </td>
                            </tr>
                            <tr className="even">
                              <td className="sorting_1">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks"></span>
                                </label>
                              </td>
                              <td>27 May 2023</td>
                              <td className="productimgname">
                                <div className="view-product me-2">
                                  <a href="javascript:void(0);">
                                    <img
                                      src="images/expire-product-04.png"
                                      alt="product"
                                    />
                                  </a>
                                </div>
                                <a href="javascript:void(0);">
                                  Woodcraft Sandal
                                </a>
                              </td>
                              <td>$600</td>
                              <td>200</td>
                              <td>$600</td>
                              <td>$0.00</td>
                              <td>
                                <span className="badges status-badge">
                                  Received
                                </span>
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
              <div
                className="tab-pane fade"
                id="payment-report"
                role="tabpanel"
                aria-labelledby="payment-report-tab"
              >
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
                            id="DataTables_Table_2_filter"
                            className="dataTables_filter"
                          >
                            <label>
                              {" "}
                              <input
                                type="search"
                                className="form-control form-control-sm"
                                placeholder="Search"
                                aria-controls="DataTables_Table_2"
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
                            <img src="assets/img/icons/closes.svg" alt="img" />
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
                          data-select2-id="select2-data-10-6iyk"
                          tabindex="-1"
                          aria-hidden="true"
                        >
                          <option data-select2-id="select2-data-12-vbj4">
                            Sort by Date
                          </option>
                          <option>22 09 23</option>
                          <option>18 09 23</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id="select2-data-11-t26g"
                          style={{width:"100%;"}}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabindex="0"
                              aria-disabled="false"
                              aria-labelledby="select2-n6ju-container"
                              aria-controls="select2-n6ju-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-n6ju-container"
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
                                className="feather feather-user info-img"
                              >
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                              </svg>
                              <select
                                className="select select2-hidden-accessible"
                                data-select2-id="select2-data-13-p03k"
                                tabindex="-1"
                                aria-hidden="true"
                              >
                                <option data-select2-id="select2-data-15-3l6y">
                                  Choose Supplier Name
                                </option>
                                <option>Apex Computers</option>
                                <option>Beats Headphones</option>
                              </select>
                              <span
                                className="select2 select2-container select2-container--default"
                                dir="ltr"
                                data-select2-id="select2-data-14-p480"
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
                                    aria-labelledby="select2-u4hj-container"
                                    aria-controls="select2-u4hj-container"
                                  >
                                    <span
                                      className="select2-selection__rendered"
                                      id="select2-u4hj-container"
                                      role="textbox"
                                      aria-readonly="true"
                                      title="Choose Supplier Name"
                                    >
                                      Choose Supplier Name
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
                                  placeholder="Choose Date"
                                />
                              </div>
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
                                className="feather feather-file-text info-img"
                              >
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                              </svg>
                              <input
                                type="text"
                                placeholder="Enter Reference"
                              />
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
                                style={{width: " 0px"}}
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
                                aria-label="Date: activate to sort column ascending"
                                style={{width: " 0px"}}
                              >
                                Date
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_1"
                                rowspan="1"
                                colspan="1"
                                aria-label="Purchase: activate to sort column ascending"
                                style={{width: " 0px"}}
                              >
                                Purchase
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_1"
                                rowspan="1"
                                colspan="1"
                                aria-label="Reference: activate to sort column ascending"
                                style={{width: " 0px"}}
                              >
                                Reference
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_1"
                                rowspan="1"
                                colspan="1"
                                aria-label="Supplier Name: activate to sort column ascending"
                                style={{width: " 0px"}}
                              >
                                Supplier Name
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_1"
                                rowspan="1"
                                colspan="1"
                                aria-label="Amount: activate to sort column ascending"
                                style={{width: " 0px"}}
                              >
                                Amount
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_1"
                                rowspan="1"
                                colspan="1"
                                aria-label="Paid: activate to sort column ascending"
                                style={{width: " 0px"}}
                              >
                                Paid
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_1"
                                rowspan="1"
                                colspan="1"
                                aria-label="Paid By: activate to sort column ascending"
                                style={{width: " 0px"}}
                              >
                                Paid By
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
                              <td>19 Jan 2023</td>
                              <td>PR_0001</td>
                              <td>INV/PR_0001</td>
                              <td>Apex Computers</td>
                              <td>$1800</td>
                              <td>$1800</td>
                              <td>Cash</td>
                            </tr>
                            <tr className="even">
                              <td className="sorting_1">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks"></span>
                                </label>
                              </td>
                              <td>24 Jan 2023</td>
                              <td>PR_0002</td>
                              <td>INV/PR_0002</td>
                              <td>Beats Headphones</td>
                              <td>$1100</td>
                              <td>$1100</td>
                              <td>Cash</td>
                            </tr>
                            <tr className="odd">
                              <td className="sorting_1">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks"></span>
                                </label>
                              </td>
                              <td>02 Feb 2023</td>
                              <td>PR_0003</td>
                              <td>INV/PR_0003</td>
                              <td>Dazzle Shoes</td>
                              <td>$2000</td>
                              <td>$2000</td>
                              <td>Cash</td>
                            </tr>
                            <tr className="even">
                              <td className="sorting_1">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks"></span>
                                </label>
                              </td>
                              <td>15 Feb 2023</td>
                              <td>PR_0004</td>
                              <td>INV/PR_0004</td>
                              <td>Best Accessories</td>
                              <td>$700</td>
                              <td>$700</td>
                              <td>Cash</td>
                            </tr>
                            <tr className="odd">
                              <td className="sorting_1">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks"></span>
                                </label>
                              </td>
                              <td>12 Mar 2023</td>
                              <td>PR_0005</td>
                              <td>INV/PR_0005</td>
                              <td>Aesthetic Bags</td>
                              <td>$500</td>
                              <td>$500</td>
                              <td>Cash</td>
                            </tr>
                            <tr className="even">
                              <td className="sorting_1">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks"></span>
                                </label>
                              </td>
                              <td>26 Mar 2023</td>
                              <td>PR_0006</td>
                              <td>INV/PR_0006</td>
                              <td>Hatimi Hardwares</td>
                              <td>$1600</td>
                              <td>$1600</td>
                              <td>Cash</td>
                            </tr>
                            <tr className="odd">
                              <td className="sorting_1">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks"></span>
                                </label>
                              </td>
                              <td>16 Apr 2023</td>
                              <td>PR_0007</td>
                              <td>INV/PR_0007</td>
                              <td>Shine Bags</td>
                              <td>$600</td>
                              <td>$600</td>
                              <td>Cash</td>
                            </tr>
                            <tr className="even">
                              <td className="sorting_1">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks"></span>
                                </label>
                              </td>
                              <td>24 Apr 2023</td>
                              <td>PR_0008</td>
                              <td>INV/PR_0008</td>
                              <td>Alpha Mobiles</td>
                              <td>$120</td>
                              <td>$120</td>
                              <td>Cash</td>
                            </tr>
                            <tr className="odd">
                              <td className="sorting_1">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks"></span>
                                </label>
                              </td>
                              <td>13 May 2023</td>
                              <td>PR_0009</td>
                              <td>INV/PR_0009</td>
                              <td>Sigma Chairs</td>
                              <td>$300</td>
                              <td>$300</td>
                              <td>Cash</td>
                            </tr>
                            <tr className="even">
                              <td className="sorting_1">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks"></span>
                                </label>
                              </td>
                              <td>29 May 2023</td>
                              <td>PR_0010</td>
                              <td>INV/PR_0011</td>
                              <td>Zenith Bags</td>
                              <td>$350</td>
                              <td>$350</td>
                              <td>Cash</td>
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
                          1 - 10 of 10 items
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="return-report"
                role="tabpanel"
                aria-labelledby="return-report-tab"
              >
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
                            id="DataTables_Table_2_filter"
                            className="dataTables_filter"
                          >
                            <label>
                              {" "}
                              <input
                                type="search"
                                className="form-control form-control-sm"
                                placeholder="Search"
                                aria-controls="DataTables_Table_2"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="search-path">
                        <a className="btn btn-filter" id="filter_search2">
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
                            <img src="assets/img/icons/closes.svg" alt="img" />
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
                          data-select2-id="select2-data-16-iddk"
                          tabindex="-1"
                          aria-hidden="true"
                        >
                          <option data-select2-id="select2-data-18-ph09">
                            Sort by Date
                          </option>
                          <option>24 09 23</option>
                          <option>30 09 23</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id="select2-data-17-aobf"
                          style={{width:"100%;"}}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabindex="0"
                              aria-disabled="false"
                              aria-labelledby="select2-zhbg-container"
                              aria-controls="select2-zhbg-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-zhbg-container"
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

                    <div className="card" id="filter_inputs2">
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
                                data-select2-id="select2-data-19-c97s"
                                tabindex="-1"
                                aria-hidden="true"
                              >
                                <option data-select2-id="select2-data-21-rb0y">
                                  Choose Name
                                </option>
                                <option>Apex Computers</option>
                                <option>Beats Headphones</option>
                              </select>
                              <span
                                className="select2 select2-container select2-container--default"
                                dir="ltr"
                                data-select2-id="select2-data-20-b6ou"
                                style={{width:"100%;"}}
                              >
                                <span className="selection">
                                  <span
                                    className="select2-selection select2-selection--single"
                                    role="combobox"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    tabindex="0"
                                    aria-disabled="false"
                                    aria-labelledby="select2-ogfc-container"
                                    aria-controls="select2-ogfc-container"
                                  >
                                    <span
                                      className="select2-selection__rendered"
                                      id="select2-ogfc-container"
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
                                data-select2-id="select2-data-22-jk6o"
                                tabindex="-1"
                                aria-hidden="true"
                              >
                                <option data-select2-id="select2-data-24-wqy9">
                                  Choose Status
                                </option>
                                <option>Completed</option>
                                <option>Incompleted</option>
                              </select>
                              <span
                                className="select2 select2-container select2-container--default"
                                dir="ltr"
                                data-select2-id="select2-data-23-pit6"
                                style={{width:"100%;"}}
                              >
                                <span className="selection">
                                  <span
                                    className="select2-selection select2-selection--single"
                                    role="combobox"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    tabindex="0"
                                    aria-disabled="false"
                                    aria-labelledby="select2-4dod-container"
                                    aria-controls="select2-4dod-container"
                                  >
                                    <span
                                      className="select2-selection__rendered"
                                      id="select2-4dod-container"
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
                              <img
                                src="images/payment-status.svg"
                                className="info-img status-icon"
                                alt="Icon"
                              />
                              <select
                                className="select select2-hidden-accessible"
                                data-select2-id="select2-data-25-180p"
                                tabindex="-1"
                                aria-hidden="true"
                              >
                                <option data-select2-id="select2-data-27-gid1">
                                  Choose Payment Status
                                </option>
                                <option>Paid</option>
                                <option>Unpaid</option>
                                <option>Overdue</option>
                              </select>
                              <span
                                className="select2 select2-container select2-container--default"
                                dir="ltr"
                                data-select2-id="select2-data-26-utml"
                                style={{width:"100%;"}}
                              >
                                <span className="selection">
                                  <span
                                    className="select2-selection select2-selection--single"
                                    role="combobox"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    tabindex="0"
                                    aria-disabled="false"
                                    aria-labelledby="select2-jz6s-container"
                                    aria-controls="select2-jz6s-container"
                                  >
                                    <span
                                      className="select2-selection__rendered"
                                      id="select2-jz6s-container"
                                      role="textbox"
                                      aria-readonly="true"
                                      title="Choose Payment Status"
                                    >
                                      Choose Payment Status
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
                        id="DataTables_Table_2_wrapper"
                        className="dataTables_wrapper dt-bootstrap5 no-footer table-responsive"
                      >
                        <table
                          className="table datanew dataTable no-footer"
                          id="DataTables_Table_2"
                          aria-describedby="DataTables_Table_2_info"
                        >
                          <thead>
                            <tr>
                              <th
                                className="no-sort sorting sorting_asc"
                                tabindex="0"
                                aria-controls="DataTables_Table_2"
                                rowspan="1"
                                colspan="1"
                                aria-sort="ascending"
                                aria-label="




: activate to sort column descending"
                                style={{width: " 0px"}}
                              >
                                <label className="checkboxs">
                                  <input type="checkbox" id="select-all3" />
                                  <span className="checkmarks"></span>
                                </label>
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_2"
                                rowspan="1"
                                colspan="1"
                                aria-label="Reference: activate to sort column ascending"
                                style={{width: " 0px"}}
                              >
                                Reference
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_2"
                                rowspan="1"
                                colspan="1"
                                aria-label="Supplier Name: activate to sort column ascending"
                                style={{width: " 0px"}}
                              >
                                Supplier Name
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_2"
                                rowspan="1"
                                colspan="1"
                                aria-label="Amount: activate to sort column ascending"
                                style={{width: " 0px"}}
                              >
                                Amount
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_2"
                                rowspan="1"
                                colspan="1"
                                aria-label="Paid: activate to sort column ascending"
                                style={{width: " 0px"}}
                              >
                                Paid
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_2"
                                rowspan="1"
                                colspan="1"
                                aria-label="Due Amount: activate to sort column ascending"
                                style={{width: " 0px"}}
                              >
                                Due Amount
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_2"
                                rowspan="1"
                                colspan="1"
                                aria-label="Status: activate to sort column ascending"
                                style={{width: " 0px"}}
                              >
                                Status
                              </th>
                              <th
                                className="sorting"
                                tabindex="0"
                                aria-controls="DataTables_Table_2"
                                rowspan="1"
                                colspan="1"
                                aria-label="Payment Status: activate to sort column ascending"
                                style={{width: " 0px"}}
                              >
                                Payment Status
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
                              <td>PR0001</td>
                              <td>Apex Computers</td>
                              <td>$1800</td>
                              <td>$1800</td>
                              <td>$0.00</td>
                              <td>
                                <span className="badges status-badge">
                                  Completed
                                </span>
                              </td>
                              <td>
                                <span className="badge-linesuccess">Paid</span>
                              </td>
                            </tr>
                            <tr className="even">
                              <td className="sorting_1">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks"></span>
                                </label>
                              </td>
                              <td>PR0002</td>
                              <td>Beats Headphones</td>
                              <td>$1200</td>
                              <td>$0.00</td>
                              <td>$1200</td>
                              <td>
                                <span className="badges status-badge">
                                  Completed
                                </span>
                              </td>
                              <td>
                                <span className="badge badge-linedanger">
                                  Unpaid
                                </span>
                              </td>
                            </tr>
                            <tr className="odd">
                              <td className="sorting_1">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks"></span>
                                </label>
                              </td>
                              <td>PR0003</td>
                              <td>Dazzle Shoes</td>
                              <td>$2000</td>
                              <td>$2000</td>
                              <td>$0.00</td>
                              <td>
                                <span className="badges status-badge">
                                  Completed
                                </span>
                              </td>
                              <td>
                                <span className="badge-linesuccess">Paid</span>
                              </td>
                            </tr>
                            <tr className="even">
                              <td className="sorting_1">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks"></span>
                                </label>
                              </td>
                              <td>PR0004</td>
                              <td>Best Accessories</td>
                              <td>$1300</td>
                              <td>$1300</td>
                              <td>$1300</td>
                              <td>
                                <span className="badges status-badge">
                                  Completed
                                </span>
                              </td>
                              <td>
                                <span className="badges-warning">Overdue</span>
                              </td>
                            </tr>
                            <tr className="odd">
                              <td className="sorting_1">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks"></span>
                                </label>
                              </td>
                              <td>PR0005</td>
                              <td>Aesthetic Bags</td>
                              <td>$400</td>
                              <td>$0.00</td>
                              <td>$400</td>
                              <td>
                                <span className="badges status-badge">
                                  Completed
                                </span>
                              </td>
                              <td>
                                <span className="badge badge-linedanger">
                                  Unpaid
                                </span>
                              </td>
                            </tr>
                            <tr className="even">
                              <td className="sorting_1">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks"></span>
                                </label>
                              </td>
                              <td>PR0006</td>
                              <td>Hatimi Hardwares</td>
                              <td>$700</td>
                              <td>$700</td>
                              <td>$700</td>
                              <td>
                                <span className="badges status-badge">
                                  Completed
                                </span>
                              </td>
                              <td>
                                <span className="badges-warning">Overdue</span>
                              </td>
                            </tr>
                            <tr className="odd">
                              <td className="sorting_1">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks"></span>
                                </label>
                              </td>
                              <td>PR0007</td>
                              <td>Shine Bags</td>
                              <td>$800</td>
                              <td>$800</td>
                              <td>$0.00</td>
                              <td>
                                <span className="badges status-badge">
                                  Completed
                                </span>
                              </td>
                              <td>
                                <span className="badge-linesuccess">Paid</span>
                              </td>
                            </tr>
                            <tr className="even">
                              <td className="sorting_1">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks"></span>
                                </label>
                              </td>
                              <td>PR0008</td>
                              <td>Alpha Mobiles</td>
                              <td>$300</td>
                              <td>$300</td>
                              <td>$0.00</td>
                              <td>
                                <span className="badges status-badge">
                                  Completed
                                </span>
                              </td>
                              <td>
                                <span className="badge-linesuccess">Paid</span>
                              </td>
                            </tr>
                            <tr className="odd">
                              <td className="sorting_1">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks"></span>
                                </label>
                              </td>
                              <td>PR0009</td>
                              <td>Sigma Chairs</td>
                              <td>$120</td>
                              <td>$120</td>
                              <td>$0.00</td>
                              <td>
                                <span className="badges status-badge">
                                  Completed
                                </span>
                              </td>
                              <td>
                                <span className="badge-linesuccess">Paid</span>
                              </td>
                            </tr>
                            <tr className="even">
                              <td className="sorting_1">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks"></span>
                                </label>
                              </td>
                              <td>PR0010</td>
                              <td>Zenith Bags</td>
                              <td>$600</td>
                              <td>$600</td>
                              <td>$0.00</td>
                              <td>
                                <span className="badges status-badge">
                                  Completed
                                </span>
                              </td>
                              <td>
                                <span className="badge-linesuccess">Paid</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div
                          className="dataTables_length"
                          id="DataTables_Table_2_length"
                        >
                          <label>
                            <select
                              name="DataTables_Table_2_length"
                              aria-controls="DataTables_Table_2"
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
                          id="DataTables_Table_2_paginate"
                        >
                          <ul className="pagination">
                            <li
                              className="paginate_button page-item previous disabled"
                              id="DataTables_Table_2_previous"
                            >
                              <a
                                aria-controls="DataTables_Table_2"
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
                                aria-controls="DataTables_Table_2"
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
                              id="DataTables_Table_2_next"
                            >
                              <a
                                aria-controls="DataTables_Table_2"
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
                          id="DataTables_Table_2_info"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default SupplierReport;
