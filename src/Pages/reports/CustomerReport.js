import React from "react";

const CustomerReport = () => {
  return (
    <div className="page-wrapper" style={{ minHeight: "763px" }}>
      <div className="content">
        <div className="page-header">
          <div className="add-item d-flex">
            <div className="page-title">
              <h4>Customer Report</h4>
              <h6>Manage Your Customer Report</h6>
            </div>
          </div>
          <ul className="table-top-head">
            <li>
              <a
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                aria-label="pdf"
                data-bs-original-title="pdf"
              >
                <img src="../images/pdf.svg" alt="img" />
              </a>
            </li>
            <li>
              <a
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                aria-label="excel"
                data-bs-original-title="excel"
              >
                <img src="../images/excel.svg" alt="img" />
              </a>
            </li>
            <li>
              <a
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                aria-label="print"
                data-bs-original-title="print"
              >
                <img src="../images/printer.svg" alt="img" />
              </a>
            </li>
            <li>
              <a
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                aria-label="rotate"
                data-bs-original-title="rotate"
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
                aria-label="up"
                data-bs-original-title="up"
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
                      <img src="assets/img/icons/closes.svg" alt="img" />
                    </span>
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
                        className="feather feather-user info-img"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <select
                        className="select select2-hidden-accessible"
                        data-select2-id="select2-data-4-d4rp"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option data-select2-id="select2-data-6-m294">
                          Choose Name
                        </option>
                        <option>Rose</option>
                        <option>Kaitlin</option>
                      </select>
                      <span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="select2-data-5-4d1o"
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
                            aria-labelledby="select2-c3ya-container"
                            aria-controls="select2-c3ya-container"
                          >
                            <span
                              className="select2-selection__rendered"
                              id="select2-c3ya-container"
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
                        data-select2-id="select2-data-7-5fol"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option data-select2-id="select2-data-9-1g0c">
                          Choose ID
                        </option>
                        <option>CT_0003</option>
                        <option>CT_0004</option>
                        <option>CT_0005</option>
                      </select>
                      <span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="select2-data-8-2a0m"
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
                            aria-labelledby="select2-m6nq-container"
                            aria-controls="select2-m6nq-container"
                          >
                            <span
                              className="select2-selection__rendered"
                              id="select2-m6nq-container"
                              role="textbox"
                              aria-readonly="true"
                              title="Choose ID"
                            >
                              Choose ID
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
                        data-select2-id="select2-data-10-2ixk"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option data-select2-id="select2-data-12-zzvx">
                          Choose Status
                        </option>
                        <option>Completed</option>
                        <option>Incompleted</option>
                      </select>
                      <span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="select2-data-11-gunh"
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
                            aria-labelledby="select2-x95o-container"
                            aria-controls="select2-x95o-container"
                          >
                            <span
                              className="select2-selection__rendered"
                              id="select2-x95o-container"
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
                        src="assets/img/icons/payment-status.svg"
                        className="info-img status-icon"
                        alt="Icon"
                      />
                      <select
                        className="select select2-hidden-accessible"
                        data-select2-id="select2-data-13-uq47"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option data-select2-id="select2-data-15-8nop">
                          Choose Payment Status
                        </option>
                        <option>Paid</option>
                        <option>Unpaid</option>
                        <option>Overdue</option>
                      </select>
                      <span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="select2-data-14-ss42"
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
                            aria-labelledby="select2-fnbc-container"
                            aria-controls="select2-fnbc-container"
                          >
                            <span
                              className="select2-selection__rendered"
                              id="select2-fnbc-container"
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
                        aria-label=": activate to sort column descending"
                        style={{ width: "54.275px" }}
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
                        aria-label="Customer ID: activate to sort column ascending"
                        style={{ width: "118.05px" }}
                      >
                        Customer ID
                      </th>
                      <th
                        className="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-label="Customer Name: activate to sort column ascending"
                        style={{ width: "149.587px" }}
                      >
                        Customer Name
                      </th>
                      <th
                        className="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-label="Amount: activate to sort column ascending"
                        style={{ width: "79.7625px" }}
                      >
                        Amount
                      </th>
                      <th
                        className="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-label="Paid: activate to sort column ascending"
                        style={{ width: "47.7625px" }}
                      >
                        Paid
                      </th>
                      <th
                        className="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-label="Due Amount: activate to sort column ascending"
                        style={{ width: "119.975px" }}
                      >
                        Due Amount
                      </th>
                      <th
                        className="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-label="Status: activate to sort column ascending"
                        style={{ width: "105.25px" }}
                      >
                        Status
                      </th>
                      <th
                        className="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-label="Payment Status: activate to sort column ascending"
                        style={{ width: "146.938px" }}
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
                      <td>CT_0001</td>
                      <td>Thomas</td>
                      <td>$1800</td>
                      <td>$1800</td>
                      <td>$0.00</td>
                      <td>
                        <span className="badges status-badge">Completed</span>
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
                      <td>CT_0002</td>
                      <td>Rose</td>
                      <td>$120</td>
                      <td>$0.00</td>
                      <td>$120</td>
                      <td>
                        <span className="badges status-badge">Completed</span>
                      </td>
                      <td>
                        <span className="badge badge-linedanger">Unpaid</span>
                      </td>
                    </tr>
                    <tr className="odd">
                      <td className="sorting_1">
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks"></span>
                        </label>
                      </td>
                      <td>CT_0003</td>
                      <td>Benjamin</td>
                      <td>$2000</td>
                      <td>$2000</td>
                      <td>$0.00</td>
                      <td>
                        <span className="badges status-badge">Completed</span>
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
                      <td>CT_0004</td>
                      <td>Kaitlin</td>
                      <td>$1300</td>
                      <td>$1300</td>
                      <td>$1300</td>
                      <td>
                        <span className="badges status-badge">Completed</span>
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
                      <td>CT_0005</td>
                      <td>Lilly</td>
                      <td>$400</td>
                      <td>$0.00</td>
                      <td>$400</td>
                      <td>
                        <span className="badges status-badge">Completed</span>
                      </td>
                      <td>
                        <span className="badge badge-linedanger">Unpaid</span>
                      </td>
                    </tr>
                    <tr className="even">
                      <td className="sorting_1">
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks"></span>
                        </label>
                      </td>
                      <td>CT_0006</td>
                      <td>Freda</td>
                      <td>$700</td>
                      <td>$700</td>
                      <td>$700</td>
                      <td>
                        <span className="badges status-badge">Completed</span>
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
                      <td>CT_0007</td>
                      <td>Alwin</td>
                      <td>$800</td>
                      <td>$800</td>
                      <td>$0.00</td>
                      <td>
                        <span className="badges status-badge">Completed</span>
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
                      <td>CT_0008</td>
                      <td>Maybelle</td>
                      <td>$300</td>
                      <td>$300</td>
                      <td>$0.00</td>
                      <td>
                        <span className="badges status-badge">Completed</span>
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
                      <td>CT_0009</td>
                      <td>Ellen</td>
                      <td>$120</td>
                      <td>$120</td>
                      <td>$0.00</td>
                      <td>
                        <span className="badges status-badge">Completed</span>
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
                      <td>CT_0010</td>
                      <td>Grace</td>
                      <td>$600</td>
                      <td>$600</td>
                      <td>$0.00</td>
                      <td>
                        <span className="badges status-badge">Completed</span>
                      </td>
                      <td>
                        <span className="badge-linesuccess">Paid</span>
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

export default CustomerReport;
