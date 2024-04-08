import React, { useState } from "react";

const AddQuotation = ({onClose}) => {
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
          maxWidth: "90%",
          margin: "auto",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "9999",
          borderRadius: "5px",
        }}>
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Add Quotation</h4>
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
              <form action="quotationList.html">
                <div class="row">
                  <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="input-blocks add-product">
                      <label>Customer Name</label>
                      <div class="row">
                        <div class="col-lg-10 col-sm-10 col-10">
                          <select
                            class="select select2-hidden-accessible"
                            data-select2-id="select2-data-13-y2ra"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <option data-select2-id="select2-data-15-x9xr">
                              Choose
                            </option>
                            <option>Benjamin</option>
                            <option>Nydia Fitzgerald</option>
                          </select>
                          <span
                            class="select2 select2-container select2-container--default"
                            dir="ltr"
                            data-select2-id="select2-data-14-jkiy"
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
                                aria-labelledby="select2-bpcu-container"
                                aria-controls="select2-bpcu-container"
                              >
                                <span
                                  class="select2-selection__rendered"
                                  id="select2-bpcu-container"
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
                        <div class="col-lg-2 col-sm-2 col-2 p-0">
                          <div class="add-icon tab">
                            <a
                              class="btn btn-filter"
                              data-bs-toggle="modal"
                              data-bs-target="#add-units"
                            >
                              <img src="../../images/plus1.svg" alt="img" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-12">
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
                  <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="input-blocks">
                      <label>Reference Number</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
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
                                  aria-label="Purchase Price($): activate to sort column ascending"
                                  style={{width: "0px;"}}
                                >
                                  Purchase Price($)
                                </th>
                                <th
                                  class="sorting"
                                  tabindex="0"
                                  aria-controls="DataTables_Table_1"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Discount($): activate to sort column ascending"
                                  style={{width: "0px;"}}
                                >
                                  Discount($)
                                </th>
                                <th
                                  class="sorting"
                                  tabindex="0"
                                  aria-controls="DataTables_Table_1"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Tax(%): activate to sort column ascending"
                                  style={{width: "0px;"}}
                                >
                                  Tax(%)
                                </th>
                                <th
                                  class="sorting"
                                  tabindex="0"
                                  aria-controls="DataTables_Table_1"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Tax Amount($): activate to sort column ascending"
                                  style={{width: "0px;"}}
                                >
                                  Tax Amount($)
                                </th>
                                <th
                                  class="sorting"
                                  tabindex="0"
                                  aria-controls="DataTables_Table_1"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Unit Cost($): activate to sort column ascending"
                                  style={{width: "0px;"}}
                                >
                                  Unit Cost($)
                                </th>
                                <th
                                  class="sorting"
                                  tabindex="0"
                                  aria-controls="DataTables_Table_1"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Total Cost(%): activate to sort column ascending"
                                  style={{width: "0px;"}}
                                >
                                  Total Cost(%)
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr style={{background: "#ffffff;"}} class="odd">
                                <td class="p-5 sorting_1"></td>
                                <td class="p-5"></td>
                                <td class="p-5"></td>
                                <td class="p-5"></td>
                                <td class="p-5"></td>
                                <td class="p-5"></td>
                                <td class="p-5"></td>
                                <td class="p-5"></td>
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
                  <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <div class="input-blocks mb-3">
                        <label>Order Tax</label>
                        <input type="text" value="0" />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <div class="input-blocks mb-3">
                        <label>Discount</label>
                        <input type="text" value="0" />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <div class="input-blocks mb-3">
                        <label>Shipping</label>
                        <input type="text" value="0" />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                      <div class="input-blocks mb-3">
                        <label>Status</label>
                        <select
                          class="select select2-hidden-accessible"
                          data-select2-id="select2-data-16-3vyb"
                          tabindex="-1"
                          aria-hidden="true"
                        >
                          <option data-select2-id="select2-data-18-2h53">
                            Choose
                          </option>
                        </select>
                        <span
                          class="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id="select2-data-17-h3mx"
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
                              aria-labelledby="select2-m4zb-container"
                              aria-controls="select2-m4zb-container"
                            >
                              <span
                                class="select2-selection__rendered"
                                id="select2-m4zb-container"
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
                </div>
                <div class="col-lg-12">
                  <div class="input-blocks summer-description-box">
                    <label>Description</label>
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
                    Submit
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

export default AddQuotation;
