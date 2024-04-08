import React, { useState } from "react";

const AddStockAdjustment = ({ onClose }) => {
  const [status, setStatus] = useState(false);

  const toggleStatus = () => {
    setStatus(!status);
  };

  const handleClose = () => {
    onClose();
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
      }}
    >
      <div
        class="modal-content"
        style={{
          maxWidth: "900px",
          height:'99vh',
          margin: "auto",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "9999",
          borderRadius: "5px",
          overflowY: 'scroll',
          overflowX: "hidden"
        }}
      >
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Add Adjustment</h4>
              </div>
              <button
                type="button"
                class="close"
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: "40px",
                  right: "30px",
                  color: "red",
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  border: "none",
                  padding: "0",
                  fontSize: "1.5rem",
                }}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body custom-modal-body">
              <form action="stock-adjustment.html">
                <div class="input-blocks search-form">
                  <label>Product</label>
                  <input type="text" class="form-control" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-search"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="input-blocks">
                      <label>Warehouse</label>
                      <select
                        class="select select2-hidden-accessible"
                        data-select2-id="select2-data-13-zsho"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option data-select2-id="select2-data-15-xj1y">
                          Choose
                        </option>
                        <option>Lobar Handy</option>
                        <option>Quaint Warehouse</option>
                      </select>
                      <span
                        class="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="select2-data-14-boey"
                        style={{width: "100%;"}}
                      >
                        <span class="selection">
                          <span
                            class="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="0"
                            aria-disabled="false"
                            aria-labelledby="select2-j95v-container"
                            aria-controls="select2-j95v-container"
                          >
                            <span
                              class="select2-selection__rendered"
                              id="select2-j95v-container"
                              role="textbox"
                              aria-readonly="true"
                              title="Choose"
                            >
                              Choose
                            </span>
                            <span
                              class="select2-selection__arrow"
                              role="presentation"
                            >
                              <b role="presentation"></b>
                            </span>
                          </span>
                        </span>
                        <span
                          class="dropdown-wrapper"
                          aria-hidden="true"
                        ></span>
                      </span>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-blocks">
                      <label>Reference Number</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="modal-body-table">
                      <div class="table-responsive">
                        <div
                          id="DataTables_Table_1_wrapper"
                          class="dataTables_wrapper dt-bootstrap5 no-footer table-responsive"
                        >
                          <table
                            class="table datanew dataTable no-footer"
                            id="DataTables_Table_1"
                            aria-describedby="DataTables_Table_1_info"
                          >
                            <thead>
                              <tr>
                                <th
                                  class="sorting sorting_asc"
                                  tabindex="0"
                                  aria-controls="DataTables_Table_1"
                                  rowspan="1"
                                  colspan="1"
                                  aria-sort="ascending"
                                  aria-label="Product: activate to sort column descending"
                                  style={{width: "0px;"}}
                                >
                                  Product
                                </th>
                                <th
                                  class="sorting"
                                  tabindex="0"
                                  aria-controls="DataTables_Table_1"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="SKU: activate to sort column ascending"
                                  style={{width: "0px;"}}
                                >
                                  SKU
                                </th>
                                <th
                                  class="sorting"
                                  tabindex="0"
                                  aria-controls="DataTables_Table_1"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Category: activate to sort column ascending"
                                  style={{width: "0px;"}}
                                >
                                  Category
                                </th>
                                <th
                                  class="sorting"
                                  tabindex="0"
                                  aria-controls="DataTables_Table_1"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Qty: activate to sort column ascending"
                                  style={{width: "0px;"}}
                                >
                                  Qty
                                </th>
                                <th
                                  class="sorting"
                                  tabindex="0"
                                  aria-controls="DataTables_Table_1"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Type: activate to sort column ascending"
                                  style={{width: "0px;"}}
                                >
                                  Type
                                </th>
                                <th
                                  class="no-sort sorting"
                                  tabindex="0"
                                  aria-controls="DataTables_Table_1"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Action: activate to sort column ascending"
                                  style={{width: "0px;"}}
                                >
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="odd">
                                <td class="sorting_1">
                                  <div class="productimgname">
                                    <a
                                      href="javascript:void(0);"
                                      class="product-img stock-img"
                                    >
                                      <img
                                        src="../images/stock-img-02.png"
                                        alt="product"
                                      />
                                    </a>
                                    <a href="javascript:void(0);">
                                      Nike Jordan
                                    </a>
                                  </div>
                                </td>
                                <td>PT002</td>
                                <td>Nike</td>
                                <td>
                                  <div class="product-quantity">
                                    <span class="quantity-btn">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-minus-circle feather-search"
                                      >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line
                                          x1="8"
                                          y1="12"
                                          x2="16"
                                          y2="12"
                                        ></line>
                                      </svg>
                                    </span>
                                    <input
                                      type="text"
                                      class="quntity-input"
                                      value="2"
                                    />
                                    <span class="quantity-btn">
                                      +
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-plus-circle plus-circle"
                                      >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line
                                          x1="12"
                                          y1="8"
                                          x2="12"
                                          y2="16"
                                        ></line>
                                        <line
                                          x1="8"
                                          y1="12"
                                          x2="16"
                                          y2="12"
                                        ></line>
                                      </svg>
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <select
                                    class="select select2-hidden-accessible"
                                    data-select2-id="select2-data-16-yp9b"
                                    tabindex="-1"
                                    aria-hidden="true"
                                  >
                                    <option data-select2-id="select2-data-18-p823">
                                      Addition
                                    </option>
                                    <option>Addition</option>
                                    <option>Addition</option>
                                  </select>
                                  <span
                                    class="select2 select2-container select2-container--default"
                                    dir="ltr"
                                    data-select2-id="select2-data-17-5zm6"
                                    style={{width: "100%;"}}
                                  >
                                    <span class="selection">
                                      <span
                                        class="select2-selection select2-selection--single"
                                        role="combobox"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        tabindex="0"
                                        aria-disabled="false"
                                        aria-labelledby="select2-d5v2-container"
                                        aria-controls="select2-d5v2-container"
                                      >
                                        <span
                                          class="select2-selection__rendered"
                                          id="select2-d5v2-container"
                                          role="textbox"
                                          aria-readonly="true"
                                          title="Addition"
                                        >
                                          Addition
                                        </span>
                                        <span
                                          class="select2-selection__arrow"
                                          role="presentation"
                                        >
                                          <b role="presentation"></b>
                                        </span>
                                      </span>
                                    </span>
                                    <span
                                      class="dropdown-wrapper"
                                      aria-hidden="true"
                                    ></span>
                                  </span>
                                </td>
                                <td class="action-table-data">
                                  <div class="edit-delete-action">
                                    <a
                                      class="me-2 p-2"
                                      href="#"
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
                                        class="feather feather-edit"
                                      >
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                      </svg>
                                    </a>
                                    <a
                                      class="confirm-text p-2"
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
                                        class="feather feather-trash-2"
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
                            class="dataTables_length"
                            id="DataTables_Table_1_length"
                          >
                            <label>
                              <select
                                name="DataTables_Table_1_length"
                                aria-controls="DataTables_Table_1"
                                class="form-select form-select-sm"
                              >
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                              </select>
                            </label>
                          </div>
                          <div
                            class="dataTables_paginate paging_simple_numbers"
                            id="DataTables_Table_1_paginate"
                          >
                            <ul class="pagination">
                              <li
                                class="paginate_button page-item previous disabled"
                                id="DataTables_Table_1_previous"
                              >
                                <a
                                  aria-controls="DataTables_Table_1"
                                  aria-disabled="true"
                                  role="link"
                                  data-dt-idx="previous"
                                  tabindex="-1"
                                  class="page-link"
                                >
                                  <i class="fa fa-angle-left"></i>{" "}
                                </a>
                              </li>
                              <li class="paginate_button page-item active">
                                <a
                                  href="#"
                                  aria-controls="DataTables_Table_1"
                                  role="link"
                                  aria-current="page"
                                  data-dt-idx="0"
                                  tabindex="0"
                                  class="page-link"
                                >
                                  1
                                </a>
                              </li>
                              <li
                                class="paginate_button page-item next disabled"
                                id="DataTables_Table_1_next"
                              >
                                <a
                                  aria-controls="DataTables_Table_1"
                                  aria-disabled="true"
                                  role="link"
                                  data-dt-idx="next"
                                  tabindex="-1"
                                  class="page-link"
                                >
                                  {" "}
                                  <i class=" fa fa-angle-right"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            class="dataTables_info"
                            id="DataTables_Table_1_info"
                            role="status"
                            aria-live="polite"
                          >
                            1 - 1 of 1 items
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="input-blocks">
                      <label>Responsible Person</label>
                      <select
                        class="select select2-hidden-accessible"
                        data-select2-id="select2-data-19-m7jd"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option data-select2-id="select2-data-21-ztk9">
                          Choose
                        </option>
                        <option>Steven</option>
                        <option>Gravely</option>
                      </select>
                      <span
                        class="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="select2-data-20-2d9h"
                        style={{width: "100%;"}}
                      >
                        <span class="selection">
                          <span
                            class="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="0"
                            aria-disabled="false"
                            aria-labelledby="select2-6i81-container"
                            aria-controls="select2-6i81-container"
                          >
                            <span
                              class="select2-selection__rendered"
                              id="select2-6i81-container"
                              role="textbox"
                              aria-readonly="true"
                              title="Choose"
                            >
                              Choose
                            </span>
                            <span
                              class="select2-selection__arrow"
                              role="presentation"
                            >
                              <b role="presentation"></b>
                            </span>
                          </span>
                        </span>
                        <span
                          class="dropdown-wrapper"
                          aria-hidden="true"
                        ></span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="input-blocks summer-description-box">
                    <label>Notes</label>
                    <textarea class="form-control"></textarea>
                  </div>
                </div>
                <div class="modal-footer-btn">
                  <button
                    type="button"
                    class="btn btn-cancel me-2"
                    onClick={handleClose}
                  >
                    Cancel
                  </button>
                  <button type="submit" class="btn btn-submit">
                    Create Adjustment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStockAdjustment;
