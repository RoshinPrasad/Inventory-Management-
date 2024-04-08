import React from "react";

const AddNewEmployee = () => {
  return (
    <div class="page-wrapper" style={{minHeight: "764px"}}>
      <div class="content">
        <div class="page-header">
          <div class="add-item d-flex">
            <div class="page-title">
              <h4>New Employee</h4>
              <h6>Create new Employee</h6>
            </div>
          </div>
          <ul class="table-top-head">
            <li>
              <div class="page-btn">
                <a href="/employees" class="btn btn-secondary">
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
                    class="feather feather-arrow-left me-2"
                  >
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                  Back to Employee List
                </a>
              </div>
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

        <form action="add-employee.html">
          <div class="card">
            <div class="card-body">
              <div class="new-employee-field">
                <div class="card-title-head">
                  <h6>
                    <span>
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
                        class="feather feather-info feather-edit"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                      </svg>
                    </span>
                    Employee Information
                  </h6>
                </div>
                <div class="profile-pic-upload">
                  <div class="profile-pic">
                    <span>
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
                        class="feather feather-plus-circle plus-down-add"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="16"></line>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                      </svg>{" "}
                      Profile Photo
                    </span>
                  </div>
                  <div class="input-blocks mb-0">
                    <div class="image-upload mb-0">
                      <input type="file" />
                      <div class="image-uploads">
                        <h4>Change Image</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">First Name</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Last Name</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Email</label>
                      <input type="email" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Contact Number</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Emp Code</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="input-blocks">
                      <label>Date of Birth</label>
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
                          class="datetimepicker form-control"
                          placeholder="Select Date"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Gender</label>
                      <select
                        class="select select2-hidden-accessible"
                        data-select2-id="select2-data-1-g77k"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option data-select2-id="select2-data-3-gn9e">
                          Choose
                        </option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                      <span
                        class="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="select2-data-2-jf40"
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
                            aria-labelledby="select2-vba0-container"
                            aria-controls="select2-vba0-container"
                          >
                            <span
                              class="select2-selection__rendered"
                              id="select2-vba0-container"
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
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Nationality</label>
                      <select
                        class="select select2-hidden-accessible"
                        data-select2-id="select2-data-4-evgc"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option data-select2-id="select2-data-6-4j0b">
                          Choose
                        </option>
                        <option>United Kingdom</option>
                        <option>India</option>
                      </select>
                      <span
                        class="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="select2-data-5-ixr2"
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
                            aria-labelledby="select2-rfl4-container"
                            aria-controls="select2-rfl4-container"
                          >
                            <span
                              class="select2-selection__rendered"
                              id="select2-rfl4-container"
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
                  <div class="col-lg-4 col-md-6">
                    <div class="input-blocks">
                      <label>Joining Date</label>
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
                          class="datetimepicker form-control"
                          placeholder="Select Date"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <div class="add-newplus">
                        <label class="form-label">Shift</label>
                        <a href="#">
                          <span>
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
                              class="feather feather-plus-circle plus-down-add"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <line x1="12" y1="8" x2="12" y2="16"></line>
                              <line x1="8" y1="12" x2="16" y2="12"></line>
                            </svg>
                            Add new
                          </span>
                        </a>
                      </div>
                      <select
                        class="select select2-hidden-accessible"
                        data-select2-id="select2-data-7-s1zf"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option data-select2-id="select2-data-9-4ke7">
                          Choose
                        </option>
                        <option>Regular</option>
                      </select>
                      <span
                        class="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="select2-data-8-kgg3"
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
                            aria-labelledby="select2-a3i4-container"
                            aria-controls="select2-a3i4-container"
                          >
                            <span
                              class="select2-selection__rendered"
                              id="select2-a3i4-container"
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
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Department</label>
                      <select
                        class="select select2-hidden-accessible"
                        data-select2-id="select2-data-10-4zlb"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option data-select2-id="select2-data-12-j4ws">
                          Choose
                        </option>
                        <option>UI/UX</option>
                        <option>Support</option>
                        <option>HR</option>
                        <option>Engineering</option>
                      </select>
                      <span
                        class="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="select2-data-11-wbsh"
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
                            aria-labelledby="select2-0r6q-container"
                            aria-controls="select2-0r6q-container"
                          >
                            <span
                              class="select2-selection__rendered"
                              id="select2-0r6q-container"
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
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Designation</label>
                      <select
                        class="select select2-hidden-accessible"
                        data-select2-id="select2-data-13-f6js"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option data-select2-id="select2-data-15-hj9k">
                          Choose
                        </option>
                        <option>Designer</option>
                        <option>Developer</option>
                        <option>Tester</option>
                      </select>
                      <span
                        class="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="select2-data-14-d8pe"
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
                            aria-labelledby="select2-hxi0-container"
                            aria-controls="select2-hxi0-container"
                          >
                            <span
                              class="select2-selection__rendered"
                              id="select2-hxi0-container"
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
                  <div class="col-lg-4 col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Blood Group</label>
                      <select
                        class="select select2-hidden-accessible"
                        data-select2-id="select2-data-16-ogb4"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option data-select2-id="select2-data-18-rroi">
                          Choose
                        </option>
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>O+</option>
                        <option>O-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                      </select>
                      <span
                        class="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="select2-data-17-6w9d"
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
                            aria-labelledby="select2-8174-container"
                            aria-controls="select2-8174-container"
                          >
                            <span
                              class="select2-selection__rendered"
                              id="select2-8174-container"
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
                <div class="other-info">
                  <div class="card-title-head">
                    <h6>
                      <span>
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
                          class="feather feather-info feather-edit"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="16" x2="12" y2="12"></line>
                          <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                      </span>
                      Other Information
                    </h6>
                  </div>
                  <div class="row">
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Emergency No 1</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Emergency No 2</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6"></div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Address</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Country</label>
                        <select
                          class="select select2-hidden-accessible"
                          data-select2-id="select2-data-19-pac4"
                          tabindex="-1"
                          aria-hidden="true"
                        >
                          <option data-select2-id="select2-data-21-i5cc">
                            Choose
                          </option>
                          <option>United Kingdom</option>
                          <option>USA</option>
                        </select>
                        <span
                          class="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id="select2-data-20-m5zc"
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
                              aria-labelledby="select2-5my1-container"
                              aria-controls="select2-5my1-container"
                            >
                              <span
                                class="select2-selection__rendered"
                                id="select2-5my1-container"
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
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">State</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">City</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="form-label">Zipcode</label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pass-info">
                  <div class="card-title-head">
                    <h6>
                      <span>
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
                          class="feather feather-info feather-edit"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="16" x2="12" y2="12"></line>
                          <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                      </span>
                      Password
                    </h6>
                  </div>
                  <div class="row">
                    <div class="col-lg-4 col-md-6">
                      <div class="input-blocks mb-md-0 mb-sm-3">
                        <label>Password</label>
                        <div class="pass-group">
                          <input type="password" class="pass-input" />
                          <span class="fas toggle-password fa-eye-slash"></span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="input-blocks mb-0">
                        <label>Confirm Password</label>
                        <div class="pass-group">
                          <input type="password" class="pass-inputa" />
                          <span class="fas toggle-passworda fa-eye-slash"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="text-end mb-3">
            <button type="button" class="btn btn-cancel me-2">
              Cancel
            </button>
            <button type="submit" class="btn btn-submit">
              Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewEmployee;
