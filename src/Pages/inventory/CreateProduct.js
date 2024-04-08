import React from "react";

function CreateProduct() {
  return (
    <>
      <div className="page-wrapper" style={{ minHeight: "360px;" }}>
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>New Product</h4>
                <h6>Create new product</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <li>
                <div className="page-btn">
                  <a href="/products" className="btn btn-secondary">
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
                      className="feather feather-arrow-left me-2"
                    >
                      <line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Back to Product
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
                    className="feather feather-chevron-up"
                  >
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <form action="add-product.html">
            <div className="card">
              <div className="card-body add-product pb-0">
                <div
                  className="accordion-card-one accordion"
                  id="accordionExample"
                >
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingOne">
                      <div
                        className="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-controls="collapseOne"
                      >
                        <div className="addproduct-icon">
                          <h5>
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
                              className="feather feather-info add-info"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <line x1="12" y1="16" x2="12" y2="12"></line>
                              <line x1="12" y1="8" x2="12.01" y2="8"></line>
                            </svg>
                            <span>Product Information</span>
                          </h5>
                          <a href="javascript:void(0);">
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
                              className="feather feather-chevron-down chevron-down-add"
                            >
                              <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="row">
                          <div className="col-lg-4 col-sm-6 col-12">
                            <div className="mb-3 add-product">
                              <label className="form-label">Store</label>
                              <select
                                className="select select2-hidden-accessible"
                                data-select2-id="select2-data-1-wvdr"
                                tabindex="-1"
                                aria-hidden="true"
                              >
                                <option data-select2-id="select2-data-3-jql9">
                                  Choose
                                </option>
                                <option>Thomas</option>
                                <option>Rasmussen</option>
                                <option>Fred john</option>
                              </select>
                              <span
                                className="select2 select2-container select2-container--default"
                                dir="ltr"
                                data-select2-id="select2-data-2-lckm"
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
                                    aria-labelledby="select2-z1n5-container"
                                    aria-controls="select2-z1n5-container"
                                  >
                                    <span
                                      className="select2-selection__rendered"
                                      id="select2-z1n5-container"
                                      role="textbox"
                                      aria-readonly="true"
                                      title="Choose"
                                    >
                                      Choose
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
                          <div className="col-lg-4 col-sm-6 col-12">
                            <div className="mb-3 add-product">
                              <label className="form-label">Warehouse</label>
                              <select
                                className="select select2-hidden-accessible"
                                data-select2-id="select2-data-4-m0qi"
                                tabindex="-1"
                                aria-hidden="true"
                              >
                                <option data-select2-id="select2-data-6-p6g2">
                                  Choose
                                </option>
                                <option>Legendary</option>
                                <option>Determined</option>
                                <option>Sincere</option>
                              </select>
                              <span
                                className="select2 select2-container select2-container--default"
                                dir="ltr"
                                data-select2-id="select2-data-5-1kkt"
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
                                    aria-labelledby="select2-gpf2-container"
                                    aria-controls="select2-gpf2-container"
                                  >
                                    <span
                                      className="select2-selection__rendered"
                                      id="select2-gpf2-container"
                                      role="textbox"
                                      aria-readonly="true"
                                      title="Choose"
                                    >
                                      Choose
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
                        </div>
                        <div className="row">
                          <div className="col-lg-4 col-sm-6 col-12">
                            <div className="mb-3 add-product">
                              <label className="form-label">Product Name</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-4 col-sm-6 col-12">
                            <div className="mb-3 add-product">
                              <label className="form-label">Slug</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-4 col-sm-6 col-12">
                            <div className="input-blocks add-product list">
                              <label>SKU</label>
                              <input
                                type="text"
                                className="form-control list"
                                placeholder="Enter SKU"
                              />
                              <button
                                type="submit"
                                className="btn btn-primaryadd"
                              >
                                Generate Code
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="addservice-info">
                          <div className="row">
                            <div className="col-lg-4 col-sm-6 col-12">
                              <div className="mb-3 add-product">
                                <div className="add-newplus">
                                  <label className="form-label">Category</label>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="modal"
                                    data-bs-target="#add-units-category"
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
                                      className="feather feather-plus-circle plus-down-add"
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
                                    <span>Add New</span>
                                  </a>
                                </div>
                                <select
                                  className="select select2-hidden-accessible"
                                  data-select2-id="select2-data-7-vgqg"
                                  tabindex="-1"
                                  aria-hidden="true"
                                >
                                  <option data-select2-id="select2-data-9-va7q">
                                    Choose
                                  </option>
                                  <option>Lenovo</option>
                                  <option>Electronics</option>
                                </select>
                                <span
                                  className="select2 select2-container select2-container--default"
                                  dir="ltr"
                                  data-select2-id="select2-data-8-pbi3"
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
                                      aria-labelledby="select2-34it-container"
                                      aria-controls="select2-34it-container"
                                    >
                                      <span
                                        className="select2-selection__rendered"
                                        id="select2-34it-container"
                                        role="textbox"
                                        aria-readonly="true"
                                        title="Choose"
                                      >
                                        Choose
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
                            <div className="col-lg-4 col-sm-6 col-12">
                              <div className="mb-3 add-product">
                                <label className="form-label">
                                  Sub Category
                                </label>
                                <select
                                  className="select select2-hidden-accessible"
                                  data-select2-id="select2-data-10-xo2o"
                                  tabindex="-1"
                                  aria-hidden="true"
                                >
                                  <option data-select2-id="select2-data-12-q04m">
                                    Choose
                                  </option>
                                  <option>Lenovo</option>
                                  <option>Electronics</option>
                                </select>
                                <span
                                  className="select2 select2-container select2-container--default"
                                  dir="ltr"
                                  data-select2-id="select2-data-11-a3yx"
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
                                      aria-labelledby="select2-7xhc-container"
                                      aria-controls="select2-7xhc-container"
                                    >
                                      <span
                                        className="select2-selection__rendered"
                                        id="select2-7xhc-container"
                                        role="textbox"
                                        aria-readonly="true"
                                        title="Choose"
                                      >
                                        Choose
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
                            <div className="col-lg-4 col-sm-6 col-12">
                              <div className="mb-3 add-product">
                                <label className="form-label">
                                  Sub Sub Category
                                </label>
                                <select
                                  className="select select2-hidden-accessible"
                                  data-select2-id="select2-data-13-j1h5"
                                  tabindex="-1"
                                  aria-hidden="true"
                                >
                                  <option data-select2-id="select2-data-15-ac4t">
                                    Choose
                                  </option>
                                  <option>Fruits</option>
                                  <option>Computers</option>
                                  <option>Shoes</option>
                                </select>
                                <span
                                  className="select2 select2-container select2-container--default"
                                  dir="ltr"
                                  data-select2-id="select2-data-14-zy20"
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
                                      aria-labelledby="select2-lijk-container"
                                      aria-controls="select2-lijk-container"
                                    >
                                      <span
                                        className="select2-selection__rendered"
                                        id="select2-lijk-container"
                                        role="textbox"
                                        aria-readonly="true"
                                        title="Choose"
                                      >
                                        Choose
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
                          </div>
                        </div>
                        <div className="add-product-new">
                          <div className="row">
                            <div className="col-lg-4 col-sm-6 col-12">
                              <div className="mb-3 add-product">
                                <div className="add-newplus">
                                  <label className="form-label">Brand</label>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="modal"
                                    data-bs-target="#add-units-brand"
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
                                      className="feather feather-plus-circle plus-down-add"
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
                                    <span>Add New</span>
                                  </a>
                                </div>
                                <select
                                  className="select select2-hidden-accessible"
                                  data-select2-id="select2-data-16-wy2o"
                                  tabindex="-1"
                                  aria-hidden="true"
                                >
                                  <option data-select2-id="select2-data-18-fd4d">
                                    Choose
                                  </option>
                                  <option>Nike</option>
                                  <option>Bolt</option>
                                </select>
                                <span
                                  className="select2 select2-container select2-container--default"
                                  dir="ltr"
                                  data-select2-id="select2-data-17-p3un"
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
                                      aria-labelledby="select2-dk1i-container"
                                      aria-controls="select2-dk1i-container"
                                    >
                                      <span
                                        className="select2-selection__rendered"
                                        id="select2-dk1i-container"
                                        role="textbox"
                                        aria-readonly="true"
                                        title="Choose"
                                      >
                                        Choose
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
                            <div className="col-lg-4 col-sm-6 col-12">
                              <div className="mb-3 add-product">
                                <div className="add-newplus">
                                  <label className="form-label">Unit</label>
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="modal"
                                    data-bs-target="#add-unit"
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
                                      className="feather feather-plus-circle plus-down-add"
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
                                    <span>Add New</span>
                                  </a>
                                </div>
                                <select
                                  className="select select2-hidden-accessible"
                                  data-select2-id="select2-data-19-wt9n"
                                  tabindex="-1"
                                  aria-hidden="true"
                                >
                                  <option data-select2-id="select2-data-21-fltb">
                                    Choose
                                  </option>
                                  <option>Kg</option>
                                  <option>Pc</option>
                                </select>
                                <span
                                  className="select2 select2-container select2-container--default"
                                  dir="ltr"
                                  data-select2-id="select2-data-20-9bue"
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
                                      aria-labelledby="select2-97un-container"
                                      aria-controls="select2-97un-container"
                                    >
                                      <span
                                        className="select2-selection__rendered"
                                        id="select2-97un-container"
                                        role="textbox"
                                        aria-readonly="true"
                                        title="Choose"
                                      >
                                        Choose
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
                            <div className="col-lg-4 col-sm-6 col-12">
                              <div className="mb-3 add-product">
                                <label className="form-label">
                                  Selling Type
                                </label>
                                <select
                                  className="select select2-hidden-accessible"
                                  data-select2-id="select2-data-22-xexw"
                                  tabindex="-1"
                                  aria-hidden="true"
                                >
                                  <option data-select2-id="select2-data-24-c0ef">
                                    Choose
                                  </option>
                                  <option>Transactional selling</option>
                                  <option>Solution selling</option>
                                </select>
                                <span
                                  className="select2 select2-container select2-container--default"
                                  dir="ltr"
                                  data-select2-id="select2-data-23-bnl7"
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
                                      aria-labelledby="select2-n109-container"
                                      aria-controls="select2-n109-container"
                                    >
                                      <span
                                        className="select2-selection__rendered"
                                        id="select2-n109-container"
                                        role="textbox"
                                        aria-readonly="true"
                                        title="Choose"
                                      >
                                        Choose
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
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-sm-6 col-12">
                            <div className="mb-3 add-product">
                              <label className="form-label">
                                Barcode Symbology
                              </label>
                              <select
                                className="select select2-hidden-accessible"
                                data-select2-id="select2-data-25-qvx1"
                                tabindex="-1"
                                aria-hidden="true"
                              >
                                <option data-select2-id="select2-data-27-kuz6">
                                  Choose
                                </option>
                                <option>Code34</option>
                                <option>Code35</option>
                                <option>Code36</option>
                              </select>
                              <span
                                className="select2 select2-container select2-container--default"
                                dir="ltr"
                                data-select2-id="select2-data-26-k14t"
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
                                    aria-labelledby="select2-61lw-container"
                                    aria-controls="select2-61lw-container"
                                  >
                                    <span
                                      className="select2-selection__rendered"
                                      id="select2-61lw-container"
                                      role="textbox"
                                      aria-readonly="true"
                                      title="Choose"
                                    >
                                      Choose
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
                          <div className="col-lg-6 col-sm-6 col-12">
                            <div className="input-blocks add-product list">
                              <label>Item Code</label>
                              <input
                                type="text"
                                className="form-control list"
                                placeholder="Please Enter Item Code"
                              />
                              <button
                                type="submit"
                                className="btn btn-primaryadd"
                              >
                                Generate Code
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="input-blocks summer-description-box transfer mb-3">
                            <label>Description</label>
                            <textarea
                              className="form-control h-100"
                              rows="5"
                            ></textarea>
                            <p className="mt-1">Maximum 60 Characters</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-card-one accordion"
                  id="accordionExample2"
                >
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingTwo">
                      <div
                        className="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-controls="collapseTwo"
                      >
                        <div className="text-editor add-list">
                          <div className="addproduct-icon list icon">
                            <h5>
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
                                className="feather feather-life-buoy add-info"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <circle cx="12" cy="12" r="4"></circle>
                                <line
                                  x1="4.93"
                                  y1="4.93"
                                  x2="9.17"
                                  y2="9.17"
                                ></line>
                                <line
                                  x1="14.83"
                                  y1="14.83"
                                  x2="19.07"
                                  y2="19.07"
                                ></line>
                                <line
                                  x1="14.83"
                                  y1="9.17"
                                  x2="19.07"
                                  y2="4.93"
                                ></line>
                                <line
                                  x1="14.83"
                                  y1="9.17"
                                  x2="18.36"
                                  y2="5.64"
                                ></line>
                                <line
                                  x1="4.93"
                                  y1="19.07"
                                  x2="9.17"
                                  y2="14.83"
                                ></line>
                              </svg>
                              <span>Pricing &amp; Stocks</span>
                            </h5>
                            <a href="javascript:void(0);">
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
                                className="feather feather-chevron-down chevron-down-add"
                              >
                                <polyline points="6 9 12 15 18 9"></polyline>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body">
                        <div className="input-blocks add-products">
                          <label className="d-block">Product Type</label>
                          <div className="single-pill-product">
                            <ul
                              className="nav nav-pills"
                              id="pills-tab1"
                              role="tablist"
                            >
                              <li className="nav-item" role="presentation">
                                <span
                                  className="custom_radio me-4 mb-0 active"
                                  id="pills-home-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pills-home"
                                  role="tab"
                                  aria-controls="pills-home"
                                  aria-selected="true"
                                >
                                  <input
                                    type="radio"
                                    className="form-control"
                                    name="payment"
                                  />
                                  <span className="checkmark"></span> Single
                                  Product
                                </span>
                              </li>
                              <li className="nav-item" role="presentation">
                                <span
                                  className="custom_radio me-2 mb-0"
                                  id="pills-profile-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pills-profile"
                                  role="tab"
                                  aria-controls="pills-profile"
                                  aria-selected="false"
                                  tabindex="-1"
                                >
                                  <input
                                    type="radio"
                                    className="form-control"
                                    name="sign"
                                  />
                                  <span className="checkmark"></span> Variable
                                  Product
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="tab-content" id="pills-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="pills-home"
                            role="tabpanel"
                            aria-labelledby="pills-home-tab"
                          >
                            <div className="row">
                              <div className="col-lg-4 col-sm-6 col-12">
                                <div className="input-blocks add-product">
                                  <label>Quantity</label>
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-lg-4 col-sm-6 col-12">
                                <div className="input-blocks add-product">
                                  <label>Price</label>
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-lg-4 col-sm-6 col-12">
                                <div className="input-blocks add-product">
                                  <label>Tax Type</label>
                                  <select
                                    className="select select2-hidden-accessible"
                                    data-select2-id="select2-data-28-h1c2"
                                    tabindex="-1"
                                    aria-hidden="true"
                                  >
                                    <option data-select2-id="select2-data-30-60rd">
                                      Exclusive
                                    </option>
                                    <option>Sales Tax</option>
                                  </select>
                                  <span
                                    className="select2 select2-container select2-container--default"
                                    dir="ltr"
                                    data-select2-id="select2-data-29-pu39"
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
                                        aria-labelledby="select2-yiwl-container"
                                        aria-controls="select2-yiwl-container"
                                      >
                                        <span
                                          className="select2-selection__rendered"
                                          id="select2-yiwl-container"
                                          role="textbox"
                                          aria-readonly="true"
                                          title="Exclusive"
                                        >
                                          Exclusive
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
                            </div>
                            <div className="row">
                              <div className="col-lg-4 col-sm-6 col-12">
                                <div className="input-blocks add-product">
                                  <label>Discount Type</label>
                                  <select
                                    className="select select2-hidden-accessible"
                                    data-select2-id="select2-data-31-giez"
                                    tabindex="-1"
                                    aria-hidden="true"
                                  >
                                    <option data-select2-id="select2-data-33-5i8p">
                                      Choose
                                    </option>
                                    <option>Percentage</option>
                                    <option>Cash</option>
                                  </select>
                                  <span
                                    className="select2 select2-container select2-container--default"
                                    dir="ltr"
                                    data-select2-id="select2-data-32-6t9p"
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
                                        aria-labelledby="select2-joq9-container"
                                        aria-controls="select2-joq9-container"
                                      >
                                        <span
                                          className="select2-selection__rendered"
                                          id="select2-joq9-container"
                                          role="textbox"
                                          aria-readonly="true"
                                          title="Choose"
                                        >
                                          Choose
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
                              <div className="col-lg-4 col-sm-6 col-12">
                                <div className="input-blocks add-product">
                                  <label>Discount Value</label>
                                  <input type="text" placeholder="Choose" />
                                </div>
                              </div>
                              <div className="col-lg-4 col-sm-6 col-12">
                                <div className="input-blocks add-product">
                                  <label>Quantity Alert</label>
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                            </div>
                            <div
                              className="accordion-card-one accordion"
                              id="accordionExample3"
                            >
                              <div className="accordion-item">
                                <div
                                  className="accordion-header"
                                  id="headingThree"
                                >
                                  <div
                                    className="accordion-button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-controls="collapseThree"
                                  >
                                    <div className="addproduct-icon list">
                                      <h5>
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
                                          className="feather feather-image add-info"
                                        >
                                          <rect
                                            x="3"
                                            y="3"
                                            width="18"
                                            height="18"
                                            rx="2"
                                            ry="2"
                                          ></rect>
                                          <circle
                                            cx="8.5"
                                            cy="8.5"
                                            r="1.5"
                                          ></circle>
                                          <polyline points="21 15 16 10 5 21"></polyline>
                                        </svg>
                                        <span>Images</span>
                                      </h5>
                                      <a href="javascript:void(0);">
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
                                          className="feather feather-chevron-down chevron-down-add"
                                        >
                                          <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  id="collapseThree"
                                  className="accordion-collapse collapse show"
                                  aria-labelledby="headingThree"
                                  data-bs-parent="#accordionExample3"
                                >
                                  <div className="accordion-body">
                                    <div className="text-editor add-list add">
                                      <div className="col-lg-12">
                                        <div className="add-choosen">
                                          <div className="input-blocks">
                                            <div className="image-upload">
                                              <input type="file" />
                                              <div className="image-uploads">
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
                                                  className="feather feather-plus-circle plus-down-add me-0"
                                                >
                                                  <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                  ></circle>
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
                                                <h4>Add Images</h4>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="phone-img">
                                            <img
                                              src="../../images/phone-add-2.png"
                                              alt="image"
                                            />
                                            <a href="javascript:void(0);">
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
                                                className="feather feather-x x-square-add remove-product"
                                              >
                                                <line
                                                  x1="18"
                                                  y1="6"
                                                  x2="6"
                                                  y2="18"
                                                ></line>
                                                <line
                                                  x1="6"
                                                  y1="6"
                                                  x2="18"
                                                  y2="18"
                                                ></line>
                                              </svg>
                                            </a>
                                          </div>
                                          <div className="phone-img">
                                            <img
                                              src="../../images/phone-add-1.png"
                                              alt="image"
                                            />
                                            <a href="javascript:void(0);">
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
                                                className="feather feather-x x-square-add remove-product"
                                              >
                                                <line
                                                  x1="18"
                                                  y1="6"
                                                  x2="6"
                                                  y2="18"
                                                ></line>
                                                <line
                                                  x1="6"
                                                  y1="6"
                                                  x2="18"
                                                  y2="18"
                                                ></line>
                                              </svg>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-profile"
                            role="tabpanel"
                            aria-labelledby="pills-profile-tab"
                          >
                            <div className="row select-color-add">
                              <div className="col-lg-6 col-sm-6 col-12">
                                <div className="input-blocks add-product">
                                  <label>Variant Attribute</label>
                                  <div className="row">
                                    <div className="col-lg-10 col-sm-10 col-10">
                                      <select
                                        className="form-control variant-select select-option"
                                        id="colorSelect"
                                      >
                                        <option>Choose</option>
                                        <option>Color</option>
                                        <option value="red">Red</option>
                                        <option value="black">Black</option>
                                      </select>
                                    </div>
                                    <div className="col-lg-2 col-sm-2 col-2 ps-0">
                                      <div className="add-icon tab">
                                        <a
                                          className="btn btn-filter"
                                          data-bs-toggle="modal"
                                          data-bs-target="#add-units"
                                        >
                                          <i className="feather feather-plus-circle"></i>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="selected-hide-color"
                                  id="input-show"
                                >
                                  <div className="row align-items-center">
                                    <div className="col-sm-10">
                                      <div className="input-blocks">
                                        <div className="bootstrap-tagsinput">
                                          <span className="tag label label-info">
                                            red<span data-role="remove"></span>
                                          </span>{" "}
                                          <span className="tag label label-info">
                                            {" "}
                                            black
                                            <span data-role="remove"></span>
                                          </span>{" "}
                                          <input type="text" placeholder="" />
                                        </div>
                                        <input
                                          className="input-tags form-control"
                                          id="inputBox"
                                          type="text"
                                          data-role="tagsinput"
                                          name="specialist"
                                          value="red, black"
                                          style={{ display: "none;" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-2">
                                      <div className="input-blocks ">
                                        <a
                                          href="javascript:void(0);"
                                          className="remove-color"
                                        >
                                          <i className="far fa-trash-alt"></i>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="modal-body-table variant-table"
                              id="variant-table"
                            >
                              <div className="table-responsive">
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th>Variantion</th>
                                      <th>Variant Value</th>
                                      <th>SKU</th>
                                      <th>Quantity</th>
                                      <th>Price</th>
                                      <th className="no-sort">Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <div className="add-product">
                                          <input
                                            type="text"
                                            className="form-control"
                                            value="color"
                                          />
                                        </div>
                                      </td>
                                      <td>
                                        <div className="add-product">
                                          <input
                                            type="text"
                                            className="form-control"
                                            value="red"
                                          />
                                        </div>
                                      </td>
                                      <td>
                                        <div className="add-product">
                                          <input
                                            type="text"
                                            className="form-control"
                                            value="1234"
                                          />
                                        </div>
                                      </td>
                                      <td>
                                        <div className="product-quantity">
                                          <span className="quantity-btn">
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
                                              className="feather feather-minus-circle feather-search"
                                            >
                                              <circle
                                                cx="12"
                                                cy="12"
                                                r="10"
                                              ></circle>
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
                                            className="quntity-input"
                                            value="2"
                                          />
                                          <span className="quantity-btn">
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
                                              className="feather feather-plus-circle plus-circle"
                                            >
                                              <circle
                                                cx="12"
                                                cy="12"
                                                r="10"
                                              ></circle>
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
                                        <div className="add-product">
                                          <input
                                            type="text"
                                            className="form-control"
                                            value="50000"
                                          />
                                        </div>
                                      </td>
                                      <td className="action-table-data">
                                        <div className="edit-delete-action">
                                          <div className="input-block add-lists">
                                            <label className="checkboxs">
                                              <input
                                                type="checkbox"
                                                checked=""
                                              />
                                              <span className="checkmarks"></span>
                                            </label>
                                          </div>
                                          <a
                                            className="me-2 p-2"
                                            href="javascript:void(0);"
                                            data-bs-toggle="modal"
                                            data-bs-target="#add-variation"
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
                                              className="feather feather-plus feather-edit"
                                            >
                                              <line
                                                x1="12"
                                                y1="5"
                                                x2="12"
                                                y2="19"
                                              ></line>
                                              <line
                                                x1="5"
                                                y1="12"
                                                x2="19"
                                                y2="12"
                                              ></line>
                                            </svg>
                                          </a>
                                          <a
                                            className="confirm-text p-2"
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
                                              className="feather feather-trash-2"
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
                                    <tr>
                                      <td>
                                        <div className="add-product">
                                          <input
                                            type="text"
                                            className="form-control"
                                            value="color"
                                          />
                                        </div>
                                      </td>
                                      <td>
                                        <div className="add-product">
                                          <input
                                            type="text"
                                            className="form-control"
                                            value="black"
                                          />
                                        </div>
                                      </td>
                                      <td>
                                        <div className="add-product">
                                          <input
                                            type="text"
                                            className="form-control"
                                            value="2345"
                                          />
                                        </div>
                                      </td>
                                      <td>
                                        <div className="product-quantity">
                                          <span className="quantity-btn">
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
                                              className="feather feather-minus-circle feather-search"
                                            >
                                              <circle
                                                cx="12"
                                                cy="12"
                                                r="10"
                                              ></circle>
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
                                            className="quntity-input"
                                            value="3"
                                          />
                                          <span className="quantity-btn">
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
                                              className="feather feather-plus-circle plus-circle"
                                            >
                                              <circle
                                                cx="12"
                                                cy="12"
                                                r="10"
                                              ></circle>
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
                                        <div className="add-product">
                                          <input
                                            type="text"
                                            className="form-control"
                                            value="50000"
                                          />
                                        </div>
                                      </td>
                                      <td className="action-table-data">
                                        <div className="edit-delete-action">
                                          <div className="input-block add-lists">
                                            <label className="checkboxs">
                                              <input
                                                type="checkbox"
                                                checked=""
                                              />
                                              <span className="checkmarks"></span>
                                            </label>
                                          </div>
                                          <a
                                            className="me-2 p-2"
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
                                              className="feather feather-plus feather-edit"
                                            >
                                              <line
                                                x1="12"
                                                y1="5"
                                                x2="12"
                                                y2="19"
                                              ></line>
                                              <line
                                                x1="5"
                                                y1="12"
                                                x2="19"
                                                y2="12"
                                              ></line>
                                            </svg>
                                          </a>
                                          <a
                                            className="confirm-text p-2"
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
                                              className="feather feather-trash-2"
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
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-card-one accordion"
                  id="accordionExample4"
                >
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingFour">
                      <div
                        className="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-controls="collapseFour"
                      >
                        <div className="text-editor add-list">
                          <div className="addproduct-icon list">
                            <h5>
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
                                className="feather feather-list add-info"
                              >
                                <line x1="8" y1="6" x2="21" y2="6"></line>
                                <line x1="8" y1="12" x2="21" y2="12"></line>
                                <line x1="8" y1="18" x2="21" y2="18"></line>
                                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                                <line x1="3" y1="18" x2="3.01" y2="18"></line>
                              </svg>
                              <span>Custom Fields</span>
                            </h5>
                            <a href="javascript:void(0);">
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
                                className="feather feather-chevron-down chevron-down-add"
                              >
                                <polyline points="6 9 12 15 18 9"></polyline>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample4"
                    >
                      <div className="accordion-body">
                        <div className="text-editor add-list add">
                          <div className="custom-filed">
                            <div className="input-block add-lists">
                              <label className="checkboxs">
                                <input type="checkbox" />
                                <span className="checkmarks"></span>Warranties
                              </label>
                              <label className="checkboxs">
                                <input type="checkbox" />
                                <span className="checkmarks"></span>Manufacturer
                              </label>
                              <label className="checkboxs">
                                <input type="checkbox" />
                                <span className="checkmarks"></span>Expiry
                              </label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4 col-sm-6 col-12">
                              <div className="input-blocks add-product">
                                <label>Discount Type</label>
                                <select
                                  className="select select2-hidden-accessible"
                                  data-select2-id="select2-data-34-q1gu"
                                  tabindex="-1"
                                  aria-hidden="true"
                                >
                                  <option data-select2-id="select2-data-36-mck3">
                                    Choose
                                  </option>
                                  <option>Percentage</option>
                                  <option>Cash</option>
                                </select>
                                <span
                                  className="select2 select2-container select2-container--default"
                                  dir="ltr"
                                  data-select2-id="select2-data-35-xkav"
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
                                      aria-labelledby="select2-mk99-container"
                                      aria-controls="select2-mk99-container"
                                    >
                                      <span
                                        className="select2-selection__rendered"
                                        id="select2-mk99-container"
                                        role="textbox"
                                        aria-readonly="true"
                                        title="Choose"
                                      >
                                        Choose
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
                          </div>
                          <div className="row">
                            <div className="col-lg-4 col-sm-6 col-12">
                              <div className="input-blocks add-product">
                                <label>Quantity Alert</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12">
                              <div className="input-blocks">
                                <label>Manufactured Date</label>
                                <div className="input-groupicon calender-input">
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
                                  <input
                                    type="text"
                                    className="datetimepicker"
                                    placeholder="Choose Date"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12">
                              <div className="input-blocks">
                                <label>Expiry On</label>
                                <div className="input-groupicon calender-input">
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
                                  <input
                                    type="text"
                                    className="datetimepicker"
                                    placeholder="Choose Date"
                                  />
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
            </div>
            <div className="col-lg-12">
              <div className="btn-addproduct mb-4">
                <button type="button" className="btn btn-cancel me-2">
                  Cancel
                </button>
                <button type="submit" className="btn btn-submit">
                  Save Product
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateProduct;
