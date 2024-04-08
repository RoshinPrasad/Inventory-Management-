import React from "react";

const TaxReports = () => {
  return (
    <div className="page-wrapper" style={{ minHeight: "764px" }}>
      <div className="content">
        <div className="page-header justify-content-between">
          <div className="page-title">
            <h4>Tax Reports</h4>
            <h6>Manage your Tax Reports</h6>
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
        </div>

        <div className="card table-list-card">
          <div className="card-body">
            <div className="tabs-set">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="purchase-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#purchase2"
                    type="button"
                    role="tab"
                    aria-controls="purchase2"
                    aria-selected="true"
                  >
                    Purchase Tax Report
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="sales-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#sales2"
                    type="button"
                    role="tab"
                    aria-controls="sales2"
                    aria-selected="false"
                    tabindex="-1"
                  >
                    Sales Tax Report
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="purchase2"
                  role="tabpanel"
                  aria-labelledby="purchase-tab"
                >
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
                        <a href="" className="me-3 layout-box">
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
                      </div>
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
                              className="feather feather-zap info-img"
                            >
                              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                            </svg>
                            <select
                              className="select select2-hidden-accessible"
                              data-select2-id="select2-data-4-wfir"
                              tabindex="-1"
                              aria-hidden="true"
                            >
                              <option data-select2-id="select2-data-6-366q">
                                Choose Category
                              </option>
                              <option>Computers</option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--default"
                              dir="ltr"
                              data-select2-id="select2-data-5-awx6"
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
                                  aria-labelledby="select2-ea59-container"
                                  aria-controls="select2-ea59-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-ea59-container"
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
                              className="feather feather-credit-card info-img"
                            >
                              <rect
                                x="1"
                                y="4"
                                width="22"
                                height="16"
                                rx="2"
                                ry="2"
                              ></rect>
                              <line x1="1" y1="10" x2="23" y2="10"></line>
                            </svg>
                            <select
                              className="select select2-hidden-accessible"
                              data-select2-id="select2-data-7-v86b"
                              tabindex="-1"
                              aria-hidden="true"
                            >
                              <option data-select2-id="select2-data-9-owgx">
                                Payment Method
                              </option>
                              <option>Complete</option>
                              <option>Inprogress</option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--default"
                              dir="ltr"
                              data-select2-id="select2-data-8-a8qp"
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
                                  aria-labelledby="select2-80o7-container"
                                  aria-controls="select2-80o7-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-80o7-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Payment Method"
                                  >
                                    Payment Method
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
                              className="sorting sorting_asc"
                              tabindex="0"
                              aria-controls="DataTables_Table_0"
                              rowspan="1"
                              colspan="1"
                              aria-sort="ascending"
                              aria-label="
    
    
    
    
    : activate to sort column descending"
                              style={{ width: "56.0875px" }}
                            >
                              <label className="checkboxs">
                                <input type="checkbox" />
                                <span className="checkmarks"></span>
                              </label>
                            </th>
                            <th
                              className="sorting"
                              tabindex="0"
                              aria-controls="DataTables_Table_0"
                              rowspan="1"
                              colspan="1"
                              aria-label="Supplier: activate to sort column ascending"
                              style={{ width: "85.0625px" }}
                            >
                              Supplier
                            </th>
                            <th
                              className="sorting"
                              tabindex="0"
                              aria-controls="DataTables_Table_0"
                              rowspan="1"
                              colspan="1"
                              aria-label="Date: activate to sort column ascending"
                              style={{ width: "101.062px" }}
                            >
                              Date
                            </th>
                            <th
                              className="sorting"
                              tabindex="0"
                              aria-controls="DataTables_Table_0"
                              rowspan="1"
                              colspan="1"
                              aria-label="Ref No: activate to sort column ascending"
                              style={{ width: "79.5375px" }}
                            >
                              Ref No
                            </th>
                            <th
                              className="sorting"
                              tabindex="0"
                              aria-controls="DataTables_Table_0"
                              rowspan="1"
                              colspan="1"
                              aria-label="Total Amount: activate to sort column ascending"
                              style={{ width: "131.675px" }}
                            >
                              Total Amount
                            </th>
                            <th
                              className="sorting"
                              tabindex="0"
                              aria-controls="DataTables_Table_0"
                              rowspan="1"
                              colspan="1"
                              aria-label="Payment Method: activate to sort column ascending"
                              style={{ width: "161.413px" }}
                            >
                              Payment Method
                            </th>
                            <th
                              className="sorting"
                              tabindex="0"
                              aria-controls="DataTables_Table_0"
                              rowspan="1"
                              colspan="1"
                              aria-label="Discount: activate to sort column ascending"
                              style={{ width: "88.5px" }}
                            >
                              Discount
                            </th>
                            <th
                              className="sorting"
                              tabindex="0"
                              aria-controls="DataTables_Table_0"
                              rowspan="1"
                              colspan="1"
                              aria-label="Tax Amount: activate to sort column ascending"
                              style={{ width: "118.262px" }}
                            >
                              Tax Amount
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
                            <td>Lavi</td>
                            <td>12 Jul 2023</td>
                            <td className="ref-number">#4237300</td>
                            <td>$30,000</td>
                            <td className="payment-info">
                              <a href="javascript:void(0);">
                                {" "}
                                <img src="../images/pay.svg" alt="Pay" />{" "}
                              </a>
                            </td>
                            <td>10</td>
                            <td>$457</td>
                          </tr>
                          <tr className="even">
                            <td className="sorting_1">
                              <label className="checkboxs">
                                <input type="checkbox" />
                                <span className="checkmarks"></span>
                              </label>
                            </td>
                            <td>Anthony</td>
                            <td>18 Aug 2023</td>
                            <td className="ref-number">#5628954</td>
                            <td>$45,000</td>
                            <td className="payment-info">
                              <a href="javascript:void(0);">
                                {" "}
                                <img
                                  src="../images/stripe.svg"
                                  alt="Pay"
                                />{" "}
                              </a>
                            </td>
                            <td>12</td>
                            <td>$265</td>
                          </tr>
                          <tr className="odd">
                            <td className="sorting_1">
                              <label className="checkboxs">
                                <input type="checkbox" />
                                <span className="checkmarks"></span>
                              </label>
                            </td>
                            <td>Colleen</td>
                            <td>27 Aug 2023</td>
                            <td className="ref-number">#8745239</td>
                            <td>$26,000</td>
                            <td className="payment-info">
                              <a href="javascript:void(0);">
                                {" "}
                                <img
                                  src="../images/razorpay.svg"
                                  alt="Pay"
                                />{" "}
                              </a>
                            </td>
                            <td>08</td>
                            <td>$980</td>
                          </tr>
                          <tr className="even">
                            <td className="sorting_1">
                              <label className="checkboxs">
                                <input type="checkbox" />
                                <span className="checkmarks"></span>
                              </label>
                            </td>
                            <td>Victor</td>
                            <td>05 Sep 2023</td>
                            <td className="ref-number">#9814586</td>
                            <td>$18,000</td>
                            <td className="payment-info">
                              <a href="javascript:void(0);">
                                {" "}
                                <img src="../images/pay.svg" alt="Pay" />{" "}
                              </a>
                            </td>
                            <td>15</td>
                            <td>$561</td>
                          </tr>
                          <tr className="odd">
                            <td className="sorting_1">
                              <label className="checkboxs">
                                <input type="checkbox" />
                                <span className="checkmarks"></span>
                              </label>
                            </td>
                            <td>Tracy</td>
                            <td>23 Sep 2023</td>
                            <td className="ref-number">#7590325</td>
                            <td>$52,000</td>
                            <td className="payment-info">
                              <a href="javascript:void(0);">
                                {" "}
                                <img src="../images/pay.svg" alt="Pay" />{" "}
                              </a>
                            </td>
                            <td>20</td>
                            <td>$382</td>
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
                <div
                  className="tab-pane fade"
                  id="sales2"
                  role="tabpanel"
                  aria-labelledby="sales-tab"
                >
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
                          <img src="../images/closes.svg" alt="img" />
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
                        data-select2-id="select2-data-10-ir8r"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option data-select2-id="select2-data-12-4x0o">
                          Sort by Date
                        </option>
                        <option>Newest</option>
                        <option>Oldest</option>
                      </select>
                      <span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="select2-data-11-bwg1"
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
                            aria-labelledby="select2-xk5r-container"
                            aria-controls="select2-xk5r-container"
                          >
                            <span
                              className="select2-selection__rendered"
                              id="select2-xk5r-container"
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
                              className="feather feather-zap info-img"
                            >
                              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                            </svg>
                            <select
                              className="select select2-hidden-accessible"
                              data-select2-id="select2-data-13-twux"
                              tabindex="-1"
                              aria-hidden="true"
                            >
                              <option data-select2-id="select2-data-15-2x0b">
                                Choose Category
                              </option>
                              <option>Computers</option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--default"
                              dir="ltr"
                              data-select2-id="select2-data-14-jv6b"
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
                                  aria-labelledby="select2-ah1c-container"
                                  aria-controls="select2-ah1c-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-ah1c-container"
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
                              className="feather feather-credit-card info-img"
                            >
                              <rect
                                x="1"
                                y="4"
                                width="22"
                                height="16"
                                rx="2"
                                ry="2"
                              ></rect>
                              <line x1="1" y1="10" x2="23" y2="10"></line>
                            </svg>
                            <select
                              className="select select2-hidden-accessible"
                              data-select2-id="select2-data-16-nsag"
                              tabindex="-1"
                              aria-hidden="true"
                            >
                              <option data-select2-id="select2-data-18-juk4">
                                Payment Method
                              </option>
                              <option>Complete</option>
                              <option>Inprogress</option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--default"
                              dir="ltr"
                              data-select2-id="select2-data-17-eafr"
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
                                  aria-labelledby="select2-v2mp-container"
                                  aria-controls="select2-v2mp-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-v2mp-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Payment Method"
                                  >
                                    Payment Method
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
                                placeholder="From Date - To Date"
                              />
                            </div>
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
                              className="sorting sorting_asc"
                              tabindex="0"
                              aria-controls="DataTables_Table_1"
                              rowspan="1"
                              colspan="1"
                              aria-sort="ascending"
                              aria-label="
    
    
    
    
    : activate to sort column descending"
                              style={{ width: "0px" }}
                            >
                              <label className="checkboxs">
                                <input type="checkbox" />
                                <span className="checkmarks"></span>
                              </label>
                            </th>
                            <th
                              className="sorting"
                              tabindex="0"
                              aria-controls="DataTables_Table_1"
                              rowspan="1"
                              colspan="1"
                              aria-label="Customer: activate to sort column ascending"
                              style={{ width: "0px" }}
                            >
                              Customer
                            </th>
                            <th
                              className="sorting"
                              tabindex="0"
                              aria-controls="DataTables_Table_1"
                              rowspan="1"
                              colspan="1"
                              aria-label="Date: activate to sort column ascending"
                              style={{ width: "0px" }}
                            >
                              Date
                            </th>
                            <th
                              className="sorting"
                              tabindex="0"
                              aria-controls="DataTables_Table_1"
                              rowspan="1"
                              colspan="1"
                              aria-label="Invoice Number: activate to sort column ascending"
                              style={{ width: "0px" }}
                            >
                              Invoice Number
                            </th>
                            <th
                              className="sorting"
                              tabindex="0"
                              aria-controls="DataTables_Table_1"
                              rowspan="1"
                              colspan="1"
                              aria-label="Total Amount: activate to sort column ascending"
                              style={{ width: "0px" }}
                            >
                              Total Amount
                            </th>
                            <th
                              className="sorting"
                              tabindex="0"
                              aria-controls="DataTables_Table_1"
                              rowspan="1"
                              colspan="1"
                              aria-label="Payment Method: activate to sort column ascending"
                              style={{ width: "0px" }}
                            >
                              Payment Method
                            </th>
                            <th
                              className="sorting"
                              tabindex="0"
                              aria-controls="DataTables_Table_1"
                              rowspan="1"
                              colspan="1"
                              aria-label="Discount: activate to sort column ascending"
                              style={{ width: "0px" }}
                            >
                              Discount
                            </th>
                            <th
                              className="sorting"
                              tabindex="0"
                              aria-controls="DataTables_Table_1"
                              rowspan="1"
                              colspan="1"
                              aria-label="Tax Amount: activate to sort column ascending"
                              style={{ width: "0px" }}
                            >
                              Tax Amount
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
                            <td className="userimgname">
                              <a href="javascript:void(0);" className="product-img">
                                <img
                                  src="../images/user-01.jpg"
                                  alt="product"
                                />
                              </a>
                              <a href="javascript:void(0);">Mitchum Daniel</a>
                            </td>
                            <td>12 Jul 2023</td>
                            <td className="ref-number">INV4237300</td>
                            <td>$30,000</td>
                            <td className="payment-info">
                              <a href="javascript:void(0);">
                                {" "}
                                <img src="../images/pay.svg" alt="Pay" />{" "}
                              </a>
                            </td>
                            <td>10</td>
                            <td>$457</td>
                          </tr>
                          <tr className="even">
                            <td className="sorting_1">
                              <label className="checkboxs">
                                <input type="checkbox" />
                                <span className="checkmarks"></span>
                              </label>
                            </td>
                            <td className="userimgname">
                              <a href="javascript:void(0);" className="product-img">
                                <img
                                  src="../images/user-02.jpg"
                                  alt="product"
                                />
                              </a>
                              <a href="javascript:void(0);">Susan Lopez</a>
                            </td>
                            <td>04 Aug 2023</td>
                            <td className="ref-number">INV5385083</td>
                            <td>$27,000</td>
                            <td className="payment-info">
                              <a href="javascript:void(0);">
                                {" "}
                                <img
                                  src="../images/stripe.svg"
                                  alt="Pay"
                                />{" "}
                              </a>
                            </td>
                            <td>08</td>
                            <td>$382</td>
                          </tr>
                          <tr className="odd">
                            <td className="sorting_1">
                              <label className="checkboxs">
                                <input type="checkbox" />
                                <span className="checkmarks"></span>
                              </label>
                            </td>
                            <td className="userimgname">
                              <a href="javascript:void(0);" className="product-img">
                                <img
                                  src="../images/user-03.jpg"
                                  alt="product"
                                />
                              </a>
                              <a href="javascript:void(0);">Robert</a>
                            </td>
                            <td>25 Aug 2023</td>
                            <td className="ref-number">INV7609368</td>
                            <td>$45,000</td>
                            <td className="payment-info">
                              <a href="javascript:void(0);">
                                {" "}
                                <img
                                  src="../images/razorpay.svg"
                                  alt="Pay"
                                />{" "}
                              </a>
                            </td>
                            <td>15</td>
                            <td>$649</td>
                          </tr>
                          <tr className="even">
                            <td className="sorting_1">
                              <label className="checkboxs">
                                <input type="checkbox" />
                                <span className="checkmarks"></span>
                              </label>
                            </td>
                            <td className="userimgname">
                              <a href="javascript:void(0);" className="product-img">
                                <img
                                  src="../images/user-04.jpg"
                                  alt="product"
                                />
                              </a>
                              <a href="javascript:void(0);">Russell Belle</a>
                            </td>
                            <td>16 Sep 2023</td>
                            <td className="ref-number">INV2750916</td>
                            <td>$18,000</td>
                            <td className="payment-info">
                              <a href="javascript:void(0);">
                                {" "}
                                <img src="../images/pay.svg" alt="Pay" />{" "}
                              </a>
                            </td>
                            <td>12</td>
                            <td>$104</td>
                          </tr>
                          <tr className="odd">
                            <td className="sorting_1">
                              <label className="checkboxs">
                                <input type="checkbox" />
                                <span className="checkmarks"></span>
                              </label>
                            </td>
                            <td className="userimgname">
                              <a href="javascript:void(0);" className="product-img">
                                <img
                                  src="../images/user-05.jpg"
                                  alt="product"
                                />
                              </a>
                              <a href="javascript:void(0);">Edward Muniz</a>
                            </td>
                            <td>28 Oct 2023</td>
                            <td className="ref-number">INV3478305</td>
                            <td>$22,000</td>
                            <td className="payment-info">
                              <a href="javascript:void(0);">
                                {" "}
                                <img src="../images/pay.svg" alt="Pay" />{" "}
                              </a>
                            </td>
                            <td>20</td>
                            <td>$290</td>
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
  );
};

export default TaxReports;
