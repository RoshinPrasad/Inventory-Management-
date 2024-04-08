import React, { useState } from "react";

const AddShift = ({ onClose }) => {
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
          maxWidth: "500px",
          margin: "auto",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "9999",
          borderRadius: "5px",
        }}
      >
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header border-0 custom-modal-header">
              <div class="page-title">
                <h4>Add New Shift</h4>
              </div>
              <button
                type="button"
                class="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body custom-modal-body">
              <form action="shift.html">
                <ul
                  class="nav nav-pills modal-table-tab"
                  id="pills-tab"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="pills-add-shift-info-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-add-shift-info"
                      type="button"
                      role="tab"
                      aria-controls="pills-add-shift-info"
                      aria-selected="true"
                    >
                      Shift Info
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-add-break-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-add-break"
                      type="button"
                      role="tab"
                      aria-controls="pills-add-break"
                      aria-selected="false"
                      tabindex="-1"
                    >
                      Break Timings
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="pills-add-shift-info"
                    role="tabpanel"
                    aria-labelledby="pills-add-shift-info-tab"
                  >
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="input-blocks">
                          <label>Shift Name</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="input-blocks">
                          <label>From</label>
                          <div class="form-icon">
                            <input
                              type="text"
                              class="form-control timepicker"
                              placeholder="Select Time"
                            />
                            <span class="cus-icon">
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
                                class="feather feather-clock"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="input-blocks">
                          <label>To</label>
                          <div class="form-icon">
                            <input
                              type="text"
                              class="form-control timepicker"
                              placeholder="Select Time"
                            />
                            <span class="cus-icon">
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
                                class="feather feather-clock"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="input-blocks">
                          <label>Weekoff</label>
                          <select
                            class="select select2-hidden-accessible"
                            data-select2-id="select2-data-10-84b8"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <option data-select2-id="select2-data-12-j15q">
                              Choose
                            </option>
                            <option>Sunday, Monday</option>
                            <option>Saturday, Sunday</option>
                            <option>Tuesday, Saturday</option>
                          </select>
                          <span
                            class="select2 select2-container select2-container--default"
                            dir="ltr"
                            data-select2-id="select2-data-11-2hvb"
                            style="width: 100%;"
                          >
                            <span class="selection">
                              <span
                                class="select2-selection select2-selection--single"
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabindex="0"
                                aria-disabled="false"
                                aria-labelledby="select2-5v3o-container"
                                aria-controls="select2-5v3o-container"
                              >
                                <span
                                  class="select2-selection__rendered"
                                  id="select2-5v3o-container"
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
                      <div class="col-lg-12">
                        <div class="modal-table-item">
                          <h4>Weekdays Defeniton</h4>
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
                                      aria-label="Days: activate to sort column descending"
                                      style="width: 0px;"
                                    >
                                      Days
                                    </th>
                                    <th
                                      class="text-center sorting"
                                      tabindex="0"
                                      aria-controls="DataTables_Table_1"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Weeks: activate to sort column ascending"
                                      style="width: 0px;"
                                    >
                                      Weeks
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr class="odd">
                                    <td class="sorting_1">
                                      <div class="status-toggle modal-status d-flex align-items-center">
                                        <input
                                          type="checkbox"
                                          id="day5"
                                          class="check"
                                        />
                                        <label
                                          for="day5"
                                          class="checktoggle"
                                        ></label>
                                        <span class="status-label ms-2">
                                          Friday
                                        </span>
                                      </div>
                                    </td>
                                    <td>
                                      <div class="text-end">
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          All
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          1st
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          2nd
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          3rd
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          4th
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          5th
                                        </label>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr class="even">
                                    <td class="sorting_1">
                                      <div class="status-toggle modal-status d-flex align-items-center">
                                        <input
                                          type="checkbox"
                                          id="day1"
                                          class="check"
                                        />
                                        <label
                                          for="day1"
                                          class="checktoggle"
                                        ></label>
                                        <span class="status-label ms-2">
                                          Monday
                                        </span>
                                      </div>
                                    </td>
                                    <td>
                                      <div class="text-end">
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          All
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          1st
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          2nd
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          3rd
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          4th
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          5th
                                        </label>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr class="odd">
                                    <td class="sorting_1">
                                      <div class="status-toggle modal-status d-flex align-items-center">
                                        <input
                                          type="checkbox"
                                          id="day6"
                                          class="check"
                                        />
                                        <label
                                          for="day6"
                                          class="checktoggle"
                                        ></label>
                                        <span class="status-label ms-2">
                                          Saturday
                                        </span>
                                      </div>
                                    </td>
                                    <td>
                                      <div class="text-end">
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          All
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          1st
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          2nd
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          3rd
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          4th
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          5th
                                        </label>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr class="even">
                                    <td class="sorting_1">
                                      <div class="status-toggle modal-status d-flex align-items-center">
                                        <input
                                          type="checkbox"
                                          id="day7"
                                          class="check"
                                        />
                                        <label
                                          for="day7"
                                          class="checktoggle"
                                        ></label>
                                        <span class="status-label ms-2">
                                          Sunday
                                        </span>
                                      </div>
                                    </td>
                                    <td>
                                      <div class="text-end">
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          All
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          1st
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          2nd
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          3rd
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          4th
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          5th
                                        </label>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr class="odd">
                                    <td class="sorting_1">
                                      <div class="status-toggle modal-status d-flex align-items-center">
                                        <input
                                          type="checkbox"
                                          id="day4"
                                          class="check"
                                        />
                                        <label
                                          for="day4"
                                          class="checktoggle"
                                        ></label>
                                        <span class="status-label ms-2">
                                          Thursday
                                        </span>
                                      </div>
                                    </td>
                                    <td>
                                      <div class="text-end">
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          All
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          1st
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          2nd
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          3rd
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          4th
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          5th
                                        </label>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr class="even">
                                    <td class="sorting_1">
                                      <div class="status-toggle modal-status d-flex align-items-center">
                                        <input
                                          type="checkbox"
                                          id="day2"
                                          class="check"
                                        />
                                        <label
                                          for="day2"
                                          class="checktoggle"
                                        ></label>
                                        <span class="status-label ms-2">
                                          Tuesday
                                        </span>
                                      </div>
                                    </td>
                                    <td>
                                      <div class="text-end">
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          All
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          1st
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          2nd
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          3rd
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          4th
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          5th
                                        </label>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr class="odd">
                                    <td class="sorting_1">
                                      <div class="status-toggle modal-status d-flex align-items-center">
                                        <input
                                          type="checkbox"
                                          id="day3"
                                          class="check"
                                        />
                                        <label
                                          for="day3"
                                          class="checktoggle"
                                        ></label>
                                        <span class="status-label ms-2">
                                          Wednesday
                                        </span>
                                      </div>
                                    </td>
                                    <td>
                                      <div class="text-end">
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          All
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          1st
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          2nd
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          3rd
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          4th
                                        </label>
                                        <label class="checkboxs modal-table-check">
                                          <input type="checkbox" />
                                          <span class="checkmarks"></span>
                                          5th
                                        </label>
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
                                1 - 7 of 7 items
                              </div>
                            </div>
                          </div>
                          <div class="input-blocks custom-form-check">
                            <label class="checkboxs modal-table-check">
                              <input type="checkbox" />
                              <span class="checkmarks"></span>
                              Recurring Shift
                            </label>
                          </div>
                          <div class="input-blocks m-0">
                            <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                              <span class="status-label">Status</span>
                              <input
                                type="checkbox"
                                id="user6"
                                class="check"
                                checked=""
                              />
                              <label
                                for="user6"
                                class="checktoggle mb-0"
                              ></label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-add-break"
                    role="tabpanel"
                    aria-labelledby="pills-add-break-tab"
                  >
                    <div class="break-title">
                      <h4>Morning Break</h4>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="input-blocks">
                          <label>From</label>
                          <div class="form-icon">
                            <input
                              type="text"
                              class="form-control timepicker"
                              placeholder="Select Time"
                            />
                            <span class="cus-icon">
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
                                class="feather feather-clock"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="input-blocks">
                          <label>To</label>
                          <div class="form-icon">
                            <input
                              type="text"
                              class="form-control timepicker"
                              placeholder="Select Time"
                            />
                            <span class="cus-icon">
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
                                class="feather feather-clock"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="break-title">
                      <h4>Lunch</h4>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="input-blocks">
                          <label>From</label>
                          <div class="form-icon">
                            <input
                              type="text"
                              class="form-control timepicker"
                              placeholder="Select Time"
                            />
                            <span class="cus-icon">
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
                                class="feather feather-clock"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="input-blocks">
                          <label>To</label>
                          <div class="form-icon">
                            <input
                              type="text"
                              class="form-control timepicker"
                              placeholder="Select Time"
                            />
                            <span class="cus-icon">
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
                                class="feather feather-clock"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="break-title">
                      <h4>Evening Break</h4>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="input-blocks">
                          <label>From</label>
                          <div class="form-icon">
                            <input
                              type="text"
                              class="form-control timepicker"
                              placeholder="Select Time"
                            />
                            <span class="cus-icon">
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
                                class="feather feather-clock"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="input-blocks">
                          <label>To</label>
                          <div class="form-icon">
                            <input
                              type="text"
                              class="form-control timepicker"
                              placeholder="Select Time"
                            />
                            <span class="cus-icon">
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
                                class="feather feather-clock"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="input-blocks summer-description-box">
                      <label>Description</label>
                    </div>
                  </div>
                </div>
                <div class="modal-footer-btn">
                  <button
                    type="button"
                    class="btn btn-cancel me-2"
                    data-bs-dismiss="modal"
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

export default AddShift;
