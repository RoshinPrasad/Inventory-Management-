import React, { useState } from "react";

const AddSalesReturn = ({onClose}) => {
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
    <div class="modal-content"  style={{
          maxWidth: "1000px",
          margin: "auto",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "9999",
          borderRadius: "5px",
        }}
      >

        <div class="content p-0">
          <div class="modal-header border-0 custom-modal-header">
            <div class="page-title">
              <h4> Add Sales Return</h4>
            </div>
            <button
              type="button"
              class="close"
              onClick={handleClose}
              style={{
                position: "absolute",
                top: "20px",
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
          <div class="card">
            <div class="card-body">
              <form action="sales-returns.html">
                <div class="row">
                  <div class="col-lg-4 col-sm-6 col-12">
                    <div class="input-blocks">
                      <label class="form-label">Customer Name</label>
                      <div class="row">
                        <div class="col-lg-10 col-sm-10 col-10">
                          <select
                            class="select select2-hidden-accessible"
                            data-select2-id="select2-data-13-eyuh"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <option data-select2-id="select2-data-15-j859">
                              Choose Customer
                            </option>
                            <option>Thomas</option>
                            <option>Benjamin</option>
                            <option>Bruklin</option>
                          </select>
                          <span
                            class="select2 select2-container select2-container--default"
                            dir="ltr"
                            data-select2-id="select2-data-14-6010"
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
                                aria-labelledby="select2-kbfu-container"
                                aria-controls="select2-kbfu-container"
                              >
                                <span
                                  class="select2-selection__rendered"
                                  id="select2-kbfu-container"
                                  role="textbox"
                                  aria-readonly="true"
                                  title="Choose Customer"
                                >
                                  Choose Customer
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
                        <div class="col-lg-2 col-sm-2 col-2 ps-0">
                          <div class="add-icon">
                            <a href="#" class="choose-add">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-plus-circle plus"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="16"></line>
                                <line x1="8" y1="12" x2="16" y2="12"></line>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6 col-12">
                    <div class="input-blocks">
                      <label>Date</label>
                      <div class="input-groupicon calender-input">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-calendar info-img"
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
                        <input
                          type="text"
                          class="datetimepicker"
                          placeholder="Choose"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6 col-12">
                    <div class="input-blocks">
                      <label class="form-label">Reference No.</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-6 col-12">
                    <div class="input-blocks">
                      <label>Product Name</label>
                      <div class="input-groupicon select-code">
                        <input
                          type="text"
                          placeholder="Please type product code and select"
                        />
                        <div class="addonset">
                          <img
                            src="../../images/qrcode-scan.svg"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="table-responsive no-pagination">
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
                            aria-label="Product Name: activate to sort column descending"
                            style={{width: "0px;"}}
                          >
                            Product Name
                          </th>
                          <th
                            class="sorting"
                            tabindex="0"
                            aria-controls="DataTables_Table_1"
                            rowspan="1"
                            colspan="1"
                            aria-label="Net Unit Price($) : activate to sort column ascending"
                            style={{width: "0px;"}}
                          >
                            Net Unit Price($){" "}
                          </th>
                          <th
                            class="sorting"
                            tabindex="0"
                            aria-controls="DataTables_Table_1"
                            rowspan="1"
                            colspan="1"
                            aria-label="Stock: activate to sort column ascending"
                            style={{width: "0px;"}}
                          >
                            Stock
                          </th>
                          <th
                            class="sorting"
                            tabindex="0"
                            aria-controls="DataTables_Table_1"
                            rowspan="1"
                            colspan="1"
                            aria-label="QTY : activate to sort column ascending"
                            style={{width: "0px;"}}
                          >
                            QTY{" "}
                          </th>
                          <th
                            class="sorting"
                            tabindex="0"
                            aria-controls="DataTables_Table_1"
                            rowspan="1"
                            colspan="1"
                            aria-label="Discount($) : activate to sort column ascending"
                            style={{width: "0px;"}}
                          >
                            Discount($){" "}
                          </th>
                          <th
                            class="sorting"
                            tabindex="0"
                            aria-controls="DataTables_Table_1"
                            rowspan="1"
                            colspan="1"
                            aria-label="Tax %: activate to sort column ascending"
                            style={{width: "0px;"}}
                          >
                            Tax %
                          </th>
                          <th
                            class="sorting"
                            tabindex="0"
                            aria-controls="DataTables_Table_1"
                            rowspan="1"
                            colspan="1"
                            aria-label="Subtotal ($): activate to sort column ascending"
                            style={{width: "0px;"}}
                          >
                            Subtotal ($)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="odd">
                          <td class="sorting_1"></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
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
                <div class="row">
                  <div class="col-lg-6 ms-auto">
                    <div class="total-order w-100 max-widthauto m-auto mb-4">
                      <ul>
                        <li>
                          <h4>Order Tax</h4>
                          <h5>$ 0.00</h5>
                        </li>
                        <li>
                          <h4>Discount</h4>
                          <h5>$ 0.00</h5>
                        </li>
                        <li>
                          <h4>Shipping</h4>
                          <h5>$ 0.00</h5>
                        </li>
                        <li>
                          <h4>Grand Total</h4>
                          <h5>$ 0.00</h5>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-3 col-sm-6 col-12">
                    <div class="input-blocks">
                      <label>Order Tax</label>
                      <div class="input-groupicon select-code">
                        <input type="text" value="0" class="p-2" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-12">
                    <div class="input-blocks">
                      <label>Discount</label>
                      <div class="input-groupicon select-code">
                        <input type="text" value="0" class="p-2" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-12">
                    <div class="input-blocks">
                      <label>Shipping</label>
                      <div class="input-groupicon select-code">
                        <input type="text" value="0" class="p-2" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-12">
                    <div class="input-blocks mb-5">
                      <label>Status</label>
                      <select
                        class="select select2-hidden-accessible"
                        data-select2-id="select2-data-16-rue8"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option data-select2-id="select2-data-18-zq75">
                          Choose
                        </option>
                        <option>Pending</option>
                        <option>Received</option>
                      </select>
                      <span
                        class="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="select2-data-17-5svt"
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
                            aria-labelledby="select2-sny5-container"
                            aria-controls="select2-sny5-container"
                          >
                            <span
                              class="select2-selection__rendered"
                              id="select2-sny5-container"
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
                  <div class="col-lg-12 text-end">
                    <button
                      type="button"
                      class="btn btn-cancel add-cancel me-3"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="submit" class="btn btn-submit add-sale">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default AddSalesReturn;
