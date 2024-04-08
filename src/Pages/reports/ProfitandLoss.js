import React from "react";

const ProfitandLoss = () => {
  return (
    <div className="page-wrapper" style={{ minHeight: "764px" }}>
      <div className="content">
        <div className="page-header">
          <div className="add-item d-flex">
            <div className="page-title">
              <h4>Profit &amp; Loss</h4>
              <h6>Manage your Profit &amp; Loss</h6>
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
                <img src="../images/pdf.svg" alt="img" />
              </a>
            </li>
            <li>
              <a
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                aria-label="Excel"
                data-bs-original-title="Excel"
              >
                <img src="../images/excel.svg" alt="img" />
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
        <div className="card table-list-card border-0 mb-0">
          <div className="card-body mb-3">
            <div className="table-top mb-0 profit-table-top">
              <div className="search-path profit-head ">
                <div className="input-blocks mb-0">
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
                  <div className="input-groupicon">
                    <input
                      type="text"
                      className="datetimepicker"
                      placeholder="This Financial Year"
                    />
                  </div>
                </div>
              </div>
              <div className="position-relative daterange-wraper input-blocks mb-0">
                <input
                  type="text"
                  name="datetimes"
                  placeholder="From Month -  To Month "
                  className="form-control"
                />
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
                  className="feather feather-calendar feather-14 info-img"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div className="date-btn">
                <a
                  href="javascript:void(0);"
                  className="btn btn-secondary d-flex align-items-center"
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
                    className="feather feather-database feather-14 info-img me-2"
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg>
                  Display Date
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table profit-table">
            <thead className="profit-table-bg">
              <tr>
                <th className="no-sort"></th>
                <th>Jan 2023</th>
                <th>Feb 2023</th>
                <th>Mar 2023</th>
                <th>Apr 2023</th>
                <th>May 2023</th>
                <th>Jun 2023</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-heading">
                <td>Income</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Sales</td>
                <td>$4,02,124.00</td>
                <td>$3,05,178.00</td>
                <td>$5,61,639.00</td>
                <td>$2,46,123.00</td>
                <td>$2,16,836.00</td>
                <td>$3,40,472.00</td>
              </tr>
              <tr>
                <td>Service</td>
                <td>$2,12,464.00</td>
                <td>$1,04,627.00</td>
                <td>$3,47,273.00</td>
                <td>$3,51,749.00</td>
                <td>$2,62,743.00</td>
                <td>$2,71,837.00</td>
              </tr>
              <tr>
                <td>Purchase Return</td>
                <td>$3,06,386.00</td>
                <td>$2,61,738.00</td>
                <td>$2,82,463.00</td>
                <td>$2,45,280.00</td>
                <td>$2,16,383.00</td>
                <td>$2,73,843.00</td>
              </tr>
              <tr className="profit-table-bg">
                <td>Gross Profit</td>
                <td>$1,45,547.00</td>
                <td>$2,62,813.00</td>
                <td>$2,74,832.00</td>
                <td>$2,52,725.00</td>
                <td>$2,57,248.00</td>
                <td>$2,94,270.00</td>
              </tr>
              <tr className="table-heading">
                <td>Expenses</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Sales</td>
                <td>$4,02,124.00</td>
                <td>$3,05,178.00</td>
                <td>$5,61,639.00</td>
                <td>$2,46,123.00</td>
                <td>$2,16,836.00</td>
                <td>$3,40,472.00</td>
              </tr>
              <tr>
                <td>Purrchase</td>
                <td>$1,45,547.00</td>
                <td>$2,62,813.00</td>
                <td>$2,74,832.00</td>
                <td>$2,52,725.00</td>
                <td>$2,57,248.00</td>
                <td>$2,94,270.00</td>
              </tr>
              <tr className="profit-table-bg">
                <td>Sales Return</td>
                <td>$4,02,124.00</td>
                <td>$3,05,178.00</td>
                <td>$5,61,639.00</td>
                <td>$2,46,123.00</td>
                <td>$2,16,836.00</td>
                <td>$3,40,472.00</td>
              </tr>
              <tr className="profit-table-bg">
                <td>Total Expense</td>
                <td>$2,58,136.00</td>
                <td>$1,38,471.00</td>
                <td>$2,61,682.00</td>
                <td>$2,16,747.00</td>
                <td>$2,79,328.00</td>
                <td>$2,94,840.00</td>
              </tr>
              <tr className="profit-table-bg">
                <td>Net Profit</td>
                <td>$2,69,276.00</td>
                <td>$2,75,638.00</td>
                <td>$2,51,629.00</td>
                <td>$1,36,836.00</td>
                <td>$2,05,634.00</td>
                <td>$1,32,951.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProfitandLoss;
