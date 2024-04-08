import { useEffect, useState } from "react";

const EmployeeAttendance = () => {
    const[timeNow,setTimeNow] = useState();
    const[date, setDate] = useState();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    useEffect(()=>{
        var date = new Date();
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' }); // Get the short month name
        const year = date.getFullYear();
        const formattedDate = `${day} ${month} ${year}`;
        setDate(formattedDate);

        setInterval(function(){
            var date = new Date();
            var displayTime = date.toLocaleTimeString();
            setTimeNow(displayTime);
        }, 1000);
    },[])

  return (
    <div class="page-wrapper">
      <div class="content">
        <div class="attendance-header">
          <div class="attendance-content">
            <img src="../images/product1.jpg" class="hand-img" alt="img" />
            <h3>
              Good Morning, <span>John Smilga</span>
            </h3>
          </div>
          <div>
            <ul class="table-top-head employe">
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
                    class="feather feather-rotate-ccw"
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
                    class="feather feather-chevron-up"
                  >
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="attendance-widget">
          <div class="row">
            <div class="col-xl-4 col-lg-12 col-md-4 d-flex">
              <div class="card w-100">
                <div class="card-body">
                  <h5>
                    Attendance<span>{date}</span>
                  </h5>
                  <div class="card attendance">
                    <div>
                      <img src="../images/time-big.svg" alt="time-img" />
                    </div>
                    <div>
                      <h2>{timeNow}</h2>
                      <p>Current Time</p>
                    </div>
                  </div>
                  <div class="modal-attendance-btn flex-column flex-lg-row">
                    <a href="javascript:void(0);" class="btn btn-submit w-100">
                      Clock Out
                    </a>
                    <a
                      href="javascript:void(0);"
                      class="btn btn-cancel me-2 w-100"
                      data-bs-dismiss="modal"
                    >
                      Break
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-8 col-lg-12 col-md-8 d-flex">
              <div class="card w-100">
                <div class="card-body">
                  <h5>Days Overview This Month</h5>
                  <ul class="widget-attend">
                    <li class="box-attend">
                      <div class="warming-card">
                        <h4>31</h4>
                        <h6>Total Working Days</h6>
                      </div>
                    </li>
                    <li class="box-attend">
                      <div class="danger-card">
                        <h4>05</h4>
                        <h6>Abesent Days</h6>
                      </div>
                    </li>
                    <li class="box-attend">
                      <div class="light-card">
                        <h4>28</h4>
                        <h6>Present Days</h6>
                      </div>
                    </li>
                    <li class="box-attend">
                      <div class="warming-card">
                        <h4>02</h4>
                        <h6>Half Days</h6>
                      </div>
                    </li>
                    <li class="box-attend">
                      <div class="warming-card">
                        <h4>01</h4>
                        <h6>Late Days</h6>
                      </div>
                    </li>
                    <li class="box-attend">
                      <div class="success-card">
                        <h4>02</h4>
                        <h6>Holidays</h6>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="page-header">
          <div class="add-item d-flex">
            <div class="page-title">
              <h4>Attendance</h4>
            </div>
          </div>
          <ul class="table-top-head">
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
                  class="feather feather-printer feather-rotate-ccw"
                >
                  <polyline points="6 9 6 2 18 2 18 9"></polyline>
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                  <rect x="6" y="14" width="12" height="8"></rect>
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div class="card table-list-card">
          <div class="card-body pb-0">
            <div class="table-top">
              <div class="input-blocks search-set mb-0">
                <div class="search-input">
                  <a href="" class="btn btn-searchset">
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
                  </a>
                  <div id="DataTables_Table_0_filter" class="dataTables_filter">
                    <label>
                      {" "}
                      <input
                        type="search"
                        class="form-control form-control-sm"
                        placeholder="Search"
                        aria-controls="DataTables_Table_0"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div class="search-path">
                <div class="d-flex align-items-center">
                  <a class="btn btn-filter" id="filter_search">
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
                      class="feather feather-filter filter-icon"
                    >
                      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                    </svg>
                    <span>
                      <img src="assets/img/icons/closes.svg" alt="img" />
                    </span>
                  </a>
                  <div class="layout-hide-box">
                    <a href="javascript:void(0);" class="me-3 layout-box">
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
                        class="feather feather-layout feather-search"
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
                    <div class="layout-drop-item card">
                      <div class="drop-item-head">
                        <h5>Want to manage datatable?</h5>
                        <p>
                          Please drag and drop your column to reorder your table
                          and enable see option as you want.
                        </p>
                      </div>
                      <ul>
                        <li>
                          <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <span class="status-label">
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
                                class="feather feather-menu"
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
                              class="check"
                              checked=""
                            />
                            <label for="option1" class="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </li>
                        <li>
                          <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <span class="status-label">
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
                                class="feather feather-menu"
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
                              class="check"
                              checked=""
                            />
                            <label for="option2" class="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </li>
                        <li>
                          <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <span class="status-label">
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
                                class="feather feather-menu"
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
                              class="check"
                              checked=""
                            />
                            <label for="option3" class="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </li>
                        <li>
                          <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <span class="status-label">
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
                                class="feather feather-menu"
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
                              class="check"
                              checked=""
                            />
                            <label for="option4" class="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </li>
                        <li>
                          <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <span class="status-label">
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
                                class="feather feather-menu"
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
                              class="check"
                              checked=""
                            />
                            <label for="option5" class="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </li>
                        <li>
                          <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <span class="status-label">
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
                                class="feather feather-menu"
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
                              class="check"
                              checked=""
                            />
                            <label for="option6" class="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </li>
                        <li>
                          <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <span class="status-label">
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
                                class="feather feather-menu"
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
                              class="check"
                              checked=""
                            />
                            <label for="option7" class="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </li>
                        <li>
                          <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                            <span class="status-label">
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
                                class="feather feather-menu"
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
                              class="check"
                              checked=""
                            />
                            <label for="option8" class="checktoggle">
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

            <div class="card" id="filter_inputs">
              <div class="card-body pb-0">
                <div class="row">
                  <div class="col-lg-4 col-sm-6 col-12">
                    <div class="input-blocks">
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
                      <div class="input-groupicon">
                        <input
                          type="text"
                          class="datetimepicker"
                          placeholder="Choose Date"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6 col-12">
                    <div class="input-blocks">
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
                        class="feather feather-stop-circle info-img"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <rect x="9" y="9" width="6" height="6"></rect>
                      </svg>
                      <select
                        class="select select2-hidden-accessible"
                        data-select2-id="select2-data-4-9g3l"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option data-select2-id="select2-data-6-74q8">
                          Choose Status
                        </option>
                        <option>Present</option>
                        <option>Absent</option>
                        <option>Holiday </option>
                      </select>
                      <span
                        class="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="select2-data-5-wjgg"
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
                            aria-labelledby="select2-plhy-container"
                            aria-controls="select2-plhy-container"
                          >
                            <span
                              class="select2-selection__rendered"
                              id="select2-plhy-container"
                              role="textbox"
                              aria-readonly="true"
                              title="Choose Status"
                            >
                              Choose Status
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
                  <div class="col-lg-4 col-sm-6 col-12 ms-auto">
                    <div class="input-blocks">
                      <a class="btn btn-filters ms-auto">
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
                          class="feather feather-search"
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

            <div class="table-responsive">
              <div
                id="DataTables_Table_0_wrapper"
                class="dataTables_wrapper dt-bootstrap5 no-footer table-responsive"
              >
                <table
                  class="table datanew dataTable no-footer"
                  id="DataTables_Table_0"
                  aria-describedby="DataTables_Table_0_info"
                >
                  <thead>
                    <tr>
                      <th
                        class="no-sort sorting sorting_asc"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-sort="ascending"
                        aria-label=": activate to sort column descending"
                        style={{width: "44.7875px;"}}
                      >
                        <label class="checkboxs">
                          <input type="checkbox" id="select-all" />
                          <span class="checkmarks"></span>
                        </label>
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-label="Date: activate to sort column ascending"
                        style={{width: "77.15px;"}}
                      >
                        Date
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-label="Clock In: activate to sort column ascending"
                        style={{width: "66.9px;"}}
                      >
                        Clock In
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-label="Clock Out: activate to sort column ascending"
                        style={{width: "81.625px;"}}
                      >
                        Clock Out
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-label="Production: activate to sort column ascending"
                        style={{width: "89.3px;"}}
                      >
                        Production
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-label="Break: activate to sort column ascending"
                        style={{width: "49.975px;"}}
                      >
                        Break
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-label="Overtime: activate to sort column ascending"
                        style={{width: "77.3px;"}}
                      >
                        Overtime
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-label="Progress: activate to sort column ascending"
                        style={{width: "133.25px;"}}
                      >
                        Progress
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-label="Status: activate to sort column ascending"
                        style={{width: "69.6625px;"}}
                      >
                        Status
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-label="Total Hours: activate to sort column ascending"
                        style={{width: "95.65px;"}}
                      >
                        Total Hours
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="odd">
                      <td class="sorting_1">
                        <label class="checkboxs">
                          <input type="checkbox" />
                          <span class="checkmarks"></span>
                        </label>
                      </td>
                      <td>01 Jan 2023</td>
                      <td>09:15 AM</td>
                      <td>08:55 PM</td>
                      <td>9h 00m</td>
                      <td>1h 13m</td>
                      <td>00h 50m</td>
                      <td>
                        <div class="progress attendance">
                          <div
                            class="progress-bar progress-bar-success"
                            role="progressbar"
                            style={{width:"78%"}}
                          ></div>
                          <div
                            class="progress-bar progress-bar-warning"
                            role="progressbar"
                            style={{width:"55%"}}
                          ></div>
                          <div
                            class="progress-bar progress-bar-danger"
                            role="progressbar"
                            style={{width:"15%"}}
                          ></div>
                        </div>
                      </td>
                      <td>
                        <span class="badge-linesuccess">Present</span>
                      </td>
                      <td>09h 50m</td>
                    </tr>
                    <tr class="even">
                      <td class="sorting_1">
                        <label class="checkboxs">
                          <input type="checkbox" />
                          <span class="checkmarks"></span>
                        </label>
                      </td>
                      <td>02 Jan 2023</td>
                      <td>09:07 AM</td>
                      <td>08:40 PM</td>
                      <td>9h 10m</td>
                      <td>1h 07m</td>
                      <td>01h 13m</td>
                      <td>
                        <div class="progress attendance">
                          <div
                            class="progress-bar progress-bar-success"
                            role="progressbar"
                            style={{width:"124%"}}
                          ></div>
                        </div>
                      </td>
                      <td>
                        <span class="badge-linesuccess">Present</span>
                      </td>
                      <td>10h 23m</td>
                    </tr>
                    <tr class="odd">
                      <td class="sorting_1">
                        <label class="checkboxs">
                          <input type="checkbox" />
                          <span class="checkmarks"></span>
                        </label>
                      </td>
                      <td>03 Jan 2023</td>
                      <td>09:04 AM</td>
                      <td>08:52 PM</td>
                      <td>8h 47m</td>
                      <td>1h 04m</td>
                      <td>01h 07m</td>
                      <td>
                        <div class="progress attendance">
                          <div
                            class="progress-bar progress-bar-success"
                            role="progressbar"
                            style={{width:"124%"}}
                          ></div>
                          <div
                            class="progress-bar progress-bar-danger"
                            role="progressbar"
                            style={{width:"15%"}}
                          ></div>
                        </div>
                      </td>
                      <td>
                        <span class="badge-linesuccess">Present</span>
                      </td>
                      <td>10h 04m</td>
                    </tr>
                    <tr class="even">
                      <td class="sorting_1">
                        <label class="checkboxs">
                          <input type="checkbox" />
                          <span class="checkmarks"></span>
                        </label>
                      </td>
                      <td>04 Jan 2023</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>
                        <div class="progress attendance">
                          <div
                            class="progress-bar progress-bar-success"
                            role="progressbar"
                            style={{width:"78%"}}
                          ></div>
                          <div
                            class="progress-bar progress-bar-warning"
                            role="progressbar"
                            style={{width:"55%"}}
                          ></div>
                          <div
                            class="progress-bar progress-bar-danger"
                            role="progressbar"
                            style={{width:"15%"}}
                          ></div>
                        </div>
                      </td>
                      <td>
                        <span class="badges-inactive">Absent</span>
                      </td>
                      <td>-</td>
                    </tr>
                    <tr class="odd">
                      <td class="sorting_1">
                        <label class="checkboxs">
                          <input type="checkbox" />
                          <span class="checkmarks"></span>
                        </label>
                      </td>
                      <td>06 Jan 2023</td>
                      <td>09:10 AM</td>
                      <td>08:48 PM</td>
                      <td>8h 38m</td>
                      <td>0h 58m</td>
                      <td>01h 08m</td>
                      <td>
                        <div class="progress attendance">
                          <div
                            class="progress-bar progress-bar-success"
                            role="progressbar"
                            style={{width:"78%"}}
                          ></div>
                          <div
                            class="progress-bar progress-bar-warning"
                            role="progressbar"
                            style={{width:"55%"}}
                          ></div>
                          <div
                            class="progress-bar progress-bar-danger"
                            role="progressbar"
                            style={{width:"15%"}}
                          ></div>
                        </div>
                      </td>
                      <td>
                        <span class="badge-linesuccess">Present</span>
                      </td>
                      <td>09h 46m</td>
                    </tr>
                    <tr class="even">
                      <td class="sorting_1">
                        <label class="checkboxs">
                          <input type="checkbox" />
                          <span class="checkmarks"></span>
                        </label>
                      </td>
                      <td>07 Jan 2023</td>
                      <td>09:03 AM</td>
                      <td>08:57 PM</td>
                      <td>8h 50m</td>
                      <td>1h 26m</td>
                      <td>0h 43m</td>
                      <td>
                        <div class="progress attendance">
                          <div
                            class="progress-bar progress-bar-success"
                            role="progressbar"
                            style={{width:"78%"}}
                          ></div>
                          <div
                            class="progress-bar progress-bar-warning"
                            role="progressbar"
                            style={{width:"55%"}}
                          ></div>
                          <div
                            class="progress-bar progress-bar-danger"
                            role="progressbar"
                            style={{width:"15%"}}
                          ></div>
                        </div>
                      </td>
                      <td>
                        <span class="badge-linesuccess">Present</span>
                      </td>
                      <td>08h 33m</td>
                    </tr>
                    <tr class="odd">
                      <td class="sorting_1">
                        <label class="checkboxs">
                          <input type="checkbox" />
                          <span class="checkmarks"></span>
                        </label>
                      </td>
                      <td>04 Jan 2023</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>
                        <div class="progress attendance">
                          <div
                            class="progress-bar progress-bar-success"
                            role="progressbar"
                            style={{width:"78%"}}
                          ></div>
                          <div
                            class="progress-bar progress-bar-warning"
                            role="progressbar"
                            style={{width:"55%"}}
                          ></div>
                          <div
                            class="progress-bar progress-bar-danger"
                            role="progressbar"
                            style={{width:"15%"}}
                          ></div>
                        </div>
                      </td>
                      <td>
                        <span class="badges-inactive Holiday">Holiday </span>
                      </td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
                <div class="dataTables_length" id="DataTables_Table_0_length">
                  <label>
                    <select
                      name="DataTables_Table_0_length"
                      aria-controls="DataTables_Table_0"
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
                  id="DataTables_Table_0_paginate"
                >
                  <ul class="pagination">
                    <li
                      class="paginate_button page-item previous disabled"
                      id="DataTables_Table_0_previous"
                    >
                      <a
                        aria-controls="DataTables_Table_0"
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
                        aria-controls="DataTables_Table_0"
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
                      id="DataTables_Table_0_next"
                    >
                      <a
                        aria-controls="DataTables_Table_0"
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
                  id="DataTables_Table_0_info"
                  role="status"
                  aria-live="polite"
                >
                  1 - 7 of 7 items
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAttendance;
