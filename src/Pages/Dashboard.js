import { useState } from "react";
import DeletePopup from '../Component/DeletePopup';

const Dashboard=()=>{

    const [showpopup,setShowpopup] = useState();

    return <>{showpopup && <DeletePopup />}<div className="page-wrapper" style={{minHeight: "708px"}}>
    <div className="content">
      <div className="row">
        <div className="col-xl-3 col-sm-6 col-12 d-flex">
          <div className="dash-widget w-100">
            <div className="dash-widgetimg">
              <span>
                <img
                  src="../images/dash1.svg"
                  alt="img"
                />
              </span>
            </div>
            <div className="dash-widgetcontent">
              <h5>
                $
                <span className="counters" data-count="307144.00">
                  307144
                </span>
              </h5>
              <h6>Total Purchase Due</h6>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12 d-flex">
          <div className="dash-widget dash1 w-100">
            <div className="dash-widgetimg">
              <span>
                <img
                  src="../images/dash2.svg"
                  alt="img"
                />
              </span>
            </div>
            <div className="dash-widgetcontent">
              <h5>
                $
                <span className="counters" data-count="4385.00">
                  4385
                </span>
              </h5>
              <h6>Total Sales Due</h6>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12 d-flex">
          <div className="dash-widget dash2 w-100">
            <div className="dash-widgetimg">
              <span>
                <img
                  src="../images/dash3.svg"
                  alt="img"
                />
              </span>
            </div>
            <div className="dash-widgetcontent">
              <h5>
                $
                <span className="counters" data-count="385656.50">
                  385656.5
                </span>
              </h5>
              <h6>Total Sale Amount</h6>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12 d-flex">
          <div className="dash-widget dash3 w-100">
            <div className="dash-widgetimg">
              <span>
                <img
                  src="../images/dash4.svg"
                  alt="img"
                />
              </span>
            </div>
            <div className="dash-widgetcontent">
              <h5>
                $
                <span className="counters" data-count="40000.00">
                  40000
                </span>
              </h5>
              <h6>Total Expense Amount</h6>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12 d-flex">
          <div className="dash-count">
            <div className="dash-counts">
              <h4>100</h4>
              <h5>Customers</h5>
            </div>
            <div className="dash-imgs">
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
                className="feather feather-user"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12 d-flex">
          <div className="dash-count das1">
            <div className="dash-counts">
              <h4>110</h4>
              <h5>Suppliers</h5>
            </div>
            <div className="dash-imgs">
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
                className="feather feather-user-check"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <polyline points="17 11 19 13 23 9"></polyline>
              </svg>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12 d-flex">
          <div className="dash-count das2">
            <div className="dash-counts">
              <h4>150</h4>
              <h5>Purchase Invoice</h5>
            </div>
            <div className="dash-imgs">
              <img
                src="../images/file-text-icon-01.svg"
                className="img-fluid"
                alt="icon"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12 d-flex">
          <div className="dash-count das3">
            <div className="dash-counts">
              <h4>170</h4>
              <h5>Sales Invoice</h5>
            </div>
            <div className="dash-imgs">
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
                className="feather feather-file"
              >
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                <polyline points="13 2 13 9 20 9"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-7 col-sm-12 col-12 d-flex">
          <div className="card flex-fill">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Purchase &amp; Sales</h5>
              <div className="graph-sets">
                <ul className="mb-0">
                  <li>
                    <span>Sales</span>
                  </li>
                  <li>
                    <span>Purchase</span>
                  </li>
                </ul>
                <div className="dropdown dropdown-wraper">
                  <button
                    className="btn btn-light btn-sm dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    2023
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li>
                      <a href="javascript:void(0);" className="dropdown-item">
                        2023
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="dropdown-item">
                        2022
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="dropdown-item">
                        2021
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div id="sales_charts" style={{minHeight: "335px"}}>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-5 col-sm-12 col-12 d-flex">
          <div className="card flex-fill default-cover mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h4 className="card-title mb-0">Recent Products</h4>
              <div className="view-all-link">
                <a
                  href="javascript:void(0);"
                  className="view-all d-flex align-items-center"
                >
                  View All
                  <span className="ps-2 d-flex align-items-center">
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
                      className="feather feather-arrow-right feather-16"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive dataview">
                <table className="table dashboard-recent-products">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Products</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td className="productimgname">
                        <a
                          href="https://dreamspos.dreamstechnologies.com/html/template/product-list.html"
                          className="product-img"
                        >
                          <img
                            src="../images/stock-img-01.png"
                            alt="product"
                          />
                        </a>
                        <a href="https://dreamspos.dreamstechnologies.com/html/template/product-list.html">
                          Lenevo 3rd Generation
                        </a>
                      </td>
                      <td>$12500</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td className="productimgname">
                        <a
                          href="https://dreamspos.dreamstechnologies.com/html/template/product-list.html"
                          className="product-img"
                        >
                          <img
                            src="../images/stock-img-06.png"
                            alt="product"
                          />
                        </a>
                        <a href="https://dreamspos.dreamstechnologies.com/html/template/product-list.html">
                          Bold V3.2
                        </a>
                      </td>
                      <td>$1600</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td className="productimgname">
                        <a
                          href="https://dreamspos.dreamstechnologies.com/html/template/product-list.html"
                          className="product-img"
                        >
                          <img
                            src="../images/stock-img-02.png"
                            alt="product"
                          />
                        </a>
                        <a href="https://dreamspos.dreamstechnologies.com/html/template/product-list.html">
                          Nike Jordan
                        </a>
                      </td>
                      <td>$2000</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td className="productimgname">
                        <a
                          href="https://dreamspos.dreamstechnologies.com/html/template/product-list.html"
                          className="product-img"
                        >
                          <img
                            src="../images/stock-img-03.png"
                            alt="product"
                          />
                        </a>
                        <a href="https://dreamspos.dreamstechnologies.com/html/template/product-list.html">
                          Apple Series 5 Watch
                        </a>
                      </td>
                      <td>$800</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Expired Products</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive dataview">
            <table className="table dashboard-expired-products">
              <thead>
                <tr>
                  <th className="no-sort">
                    <label className="checkboxs">
                      <input type="checkbox" id="select-all" />
                      <span className="checkmarks"></span>
                    </label>
                  </th>
                  <th>Product</th>
                  <th>SKU</th>
                  <th>Manufactured Date</th>
                  <th>Expired Date</th>
                  <th className="no-sort">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <label className="checkboxs">
                      <input type="checkbox" />
                      <span className="checkmarks"></span>
                    </label>
                  </td>
                  <td>
                    <div className="productimgname">
                      <a
                        href="javascript:void(0);"
                        className="product-img stock-img"
                      >
                        <img
                          src="../images/expire-product-01.png"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">Red Premium Handy </a>
                    </div>
                  </td>
                  <td>
                    <a href="javascript:void(0);">PT006</a>
                  </td>
                  <td>17 Jan 2023</td>
                  <td>29 Mar 2023</td>
                  <td className="action-table-data">
                    <div className="edit-delete-action">
                      <a
                        className="me-2 p-2"
                        href="#"
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
                          className="feather feather-edit"
                        >
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                      </a>
                      <a
                        className=" confirm-text p-2"
                        href="#"
                        onClick={()=>setShowpopup(true)}
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
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="checkboxs">
                      <input type="checkbox" />
                      <span className="checkmarks"></span>
                    </label>
                  </td>
                  <td>
                    <div className="productimgname">
                      <a
                        href="javascript:void(0);"
                        className="product-img stock-img"
                      >
                        <img
                          src="../images/expire-product-02.png"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">Iphone 14 Pro</a>
                    </div>
                  </td>
                  <td>
                    <a href="javascript:void(0);">PT007</a>
                  </td>
                  <td>22 Feb 2023</td>
                  <td>04 Apr 2023</td>
                  <td className="action-table-data">
                    <div className="edit-delete-action">
                      <a
                        className="me-2 p-2"
                        href="#"
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
                          className="feather feather-edit"
                        >
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                      </a>
                      <a
                        className="confirm-text p-2"
                        href="#"
                        onClick={()=>setShowpopup(true)}
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
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="checkboxs">
                      <input type="checkbox" />
                      <span className="checkmarks"></span>
                    </label>
                  </td>
                  <td>
                    <div className="productimgname">
                      <a
                        href="javascript:void(0);"
                        className="product-img stock-img"
                      >
                        <img
                          src="../images/expire-product-03.png"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">Black Slim 200 </a>
                    </div>
                  </td>
                  <td>
                    <a href="javascript:void(0);">PT008</a>
                  </td>
                  <td>18 Mar 2023</td>
                  <td>13 May 2023</td>
                  <td className="action-table-data">
                    <div className="edit-delete-action">
                      <a
                        className="me-2 p-2"
                        href="#"
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
                          className="feather feather-edit"
                        >
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                      </a>
                      <a
                        className=" confirm-text p-2"
                        href="#"
                        onClick={()=>setShowpopup(true)}
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
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="checkboxs">
                      <input type="checkbox" />
                      <span className="checkmarks"></span>
                    </label>
                  </td>
                  <td>
                    <div className="productimgname">
                      <a
                        href="javascript:void(0);"
                        className="product-img stock-img"
                      >
                        <img
                          src="../images/expire-product-04.png"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">Woodcraft Sandal</a>
                    </div>
                  </td>
                  <td>
                    <a href="javascript:void(0);">PT009</a>
                  </td>
                  <td>29 Mar 2023</td>
                  <td>27 May 2023</td>
                  <td className="action-table-data">
                    <div className="edit-delete-action">
                      <a
                        className="me-2 p-2"
                        href="#"
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
                          className="feather feather-edit"
                        >
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                      </a>
                      <a
                        className=" confirm-text p-2"
                        href="javascript:void(0);"
                        onClick={()=>setShowpopup(true)}
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
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="checkboxs">
                      <input type="checkbox" />
                      <span className="checkmarks"></span>
                    </label>
                  </td>
                  <td>
                    <div className="productimgname">
                      <a
                        href="javascript:void(0);"
                        className="product-img stock-img"
                      >
                        <img
                          src="../images/stock-img-03.png"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">
                        Apple Series 5 Watch{" "}
                      </a>
                    </div>
                  </td>
                  <td>
                    <a href="javascript:void(0);">PT010</a>
                  </td>
                  <td>24 Mar 2023</td>
                  <td>26 May 2023</td>
                  <td className="action-table-data">
                    <div className="edit-delete-action">
                      <a
                        className="me-2 p-2"
                        href="#"
                       
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
                          className="feather feather-edit"
                        >
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                      </a>
                      <a
                        className=" confirm-text p-2"
                        href="#"
                        onClick={()=>setShowpopup(true)}
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
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
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
  </div></>
}

export default Dashboard;