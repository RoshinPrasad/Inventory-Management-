import React from "react";

const PurchaseReport = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Purchase Report</h4>
                <h6>Manage Your Purchase Report</h6>
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
                    <div className="col-lg-3">
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
                          data-select2-id="select2-data-4-8i0p"
                          tabindex="-1"
                          aria-hidden="true"
                        >
                          <option data-select2-id="select2-data-6-4nqt">
                            Choose Product
                          </option>
                          <option>Bold V3.2</option>
                          <option>Nike Jordan</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id="select2-data-5-mgoa"
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
                              aria-labelledby="select2-2s1u-container"
                              aria-controls="select2-2s1u-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-2s1u-container"
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
                    <div className="col-lg-9 col-sm-6 col-12">
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
                          style={{width: "69.4773px"}}
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
                          aria-label="Product Name: activate to sort column ascending"
                          style={{width: "294.091px"}}
                        >
                          Product Name
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Purchase Amount: activate to sort column ascending"
                          style={{width: "197.057px"}}
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
                          style={{width: "152.682px"}}
                        >
                          Purchase Qty
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Instock Qty: activate to sort column ascending"
                          style={{width: "131.966px"}}
                        >
                          Instock Qty
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
                        <td>$5000</td>
                        <td>500</td>
                        <td>100</td>
                      </tr>
                      <tr className="even">
                        <td className="sorting_1">
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks"></span>
                          </label>
                        </td>
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
                        <td>$1000</td>
                        <td>200</td>
                        <td>150</td>
                      </tr>
                      <tr className="odd">
                        <td className="sorting_1">
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks"></span>
                          </label>
                        </td>
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
                        <td>350</td>
                        <td>200</td>
                      </tr>
                      <tr className="even">
                        <td className="sorting_1">
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks"></span>
                          </label>
                        </td>
                        <td className="productimgname">
                          <div className="view-product me-2">
                            <a href="javascript:void(0);">
                              <img
                                src="images/stock-img-03.png"
                                alt="product"
                              />
                            </a>
                          </div>
                          <a href="javascript:void(0);">Apple Series 5 Watch</a>
                        </td>
                        <td>$500</td>
                        <td>120</td>
                        <td>50</td>
                      </tr>
                      <tr className="odd">
                        <td className="sorting_1">
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks"></span>
                          </label>
                        </td>
                        <td className="productimgname">
                          <div className="view-product me-2">
                            <a href="javascript:void(0);">
                              <img
                                src="images/stock-img-04.png"
                                alt="product"
                              />
                            </a>
                          </div>
                          <a href="javascript:void(0);">Amazon Echo Dot</a>
                        </td>
                        <td>$100</td>
                        <td>400</td>
                        <td>320</td>
                      </tr>
                      <tr className="even">
                        <td className="sorting_1">
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks"></span>
                          </label>
                        </td>
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
                        <td>$1500</td>
                        <td>170</td>
                        <td>80</td>
                      </tr>
                      <tr className="odd">
                        <td className="sorting_1">
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks"></span>
                          </label>
                        </td>
                        <td className="productimgname">
                          <div className="view-product me-2">
                            <a href="javascript:void(0);">
                              <img
                                src="images/expire-product-01.png"
                                alt="product"
                              />
                            </a>
                          </div>
                          <a href="javascript:void(0);">Red Premium Handy</a>
                        </td>
                        <td>$800</td>
                        <td>320</td>
                        <td>180</td>
                      </tr>
                      <tr className="even">
                        <td className="sorting_1">
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks"></span>
                          </label>
                        </td>
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
                        <td>$1200</td>
                        <td>270</td>
                        <td>120</td>
                      </tr>
                      <tr className="odd">
                        <td className="sorting_1">
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks"></span>
                          </label>
                        </td>
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
                        <td>$600</td>
                        <td>180</td>
                        <td>70</td>
                      </tr>
                      <tr className="even">
                        <td className="sorting_1">
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks"></span>
                          </label>
                        </td>
                        <td className="productimgname">
                          <div className="view-product me-2">
                            <a href="javascript:void(0);">
                              <img
                                src="images/expire-product-04.png"
                                alt="product"
                              />
                            </a>
                          </div>
                          <a href="javascript:void(0);">Woodcraft Sandal</a>
                        </td>
                        <td>$300</td>
                        <td>450</td>
                        <td>300</td>
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
    </>
  );
};

export default PurchaseReport;
