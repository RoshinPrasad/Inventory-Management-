import React from "react";

const Payslip = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content mb-3">
          <div className="pay-slip-box" id="pay-slip">
            <div className="modal-dialog modal-dialog-centered stock-adjust-modal">
              <div className="modal-content">
                <div className="page-wrapper-new p-0">
                  <div className="contents">
                    <div className="modal-header border-0 custom-modal-header">
                      <div className="page-header mb-0 w-100">
                        <div className="add-item payslip-list d-flex justify-content-between">
                          <div className="page-title">
                            <h4>Payslip</h4>
                          </div>
                          <div className="page-btn d-flex align-items-center mt-3 mt-md-0">
                            <div className="d-block d-sm-flex align-items-center">
                              <a href="#" className="btn btn-added me-2">
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
                                  className="feather feather-mail me-2"
                                >
                                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                  <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>{" "}
                                Send Email
                              </a>
                              <a
                                href="#"
                                className="btn btn-added downloader mt-3 mb-3 m-sm-0"
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
                                  className="feather feather-download me-2"
                                >
                                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                  <polyline points="7 10 12 15 17 10"></polyline>
                                  <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>{" "}
                                Download
                              </a>
                              <a href="#" className="btn btn-added printer ms-2">
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
                                  className="feather feather-printer me-2"
                                >
                                  <polyline points="6 9 6 2 18 2 18 9"></polyline>
                                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                                  <rect
                                    x="6"
                                    y="14"
                                    width="12"
                                    height="8"
                                  ></rect>
                                </svg>{" "}
                                Print Barcode
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-body custom-modal-body">
                      <div className="card mb-0">
                        <div className="card-body border-0">
                          <div className="payslip-month d-flex">
                            <div className="slip-logo">
                              <img src="images/logo-small.png" alt="Logo" />
                            </div>
                            <div className="month-of-slip">
                              <h4>Payslip for the Month of Sep 2023</h4>
                            </div>
                          </div>
                          <div className="emp-details d-flex">
                            <div className="emp-name-id">
                              <h6>
                                Emp Name : <span>Herald james</span>
                              </h6>
                              <h6>
                                Emp Id : <span>POS1234</span>
                              </h6>
                            </div>
                            <div className="emp-location-info">
                              <h6>
                                Location : <span>USA</span>
                              </h6>
                              <h6>
                                Pay Period : <span>Sep 2023</span>
                              </h6>
                            </div>
                          </div>
                          <div className="row">
                            <div className="table-responsive">
                              <table className="w-100">
                                <thead>
                                  <tr className="paysilp-table-border">
                                    <th colspan="2">Earnings</th>
                                    <th colspan="2">Deduction</th>
                                  </tr>
                                </thead>
                                <thead>
                                  <tr className="paysilp-table-border">
                                    <th>Pay Type</th>
                                    <th>Amount</th>
                                    <th>Pay Type</th>
                                    <th>Amount</th>
                                  </tr>
                                </thead>

                                <tbody className="paysilp-table-borders">
                                  <tr>
                                    <td>Basic Salary</td>
                                    <td>$32,000</td>
                                    <td>PF</td>
                                    <td>0.00</td>
                                  </tr>
                                  <tr>
                                    <td>HRA Allowance</td>
                                    <td>0.00</td>
                                    <td>Professional Tax</td>
                                    <td>0.00</td>
                                  </tr>
                                  <tr>
                                    <td>Conveyance</td>
                                    <td>0.00</td>
                                    <td>TDS</td>
                                    <td>0.00</td>
                                  </tr>
                                  <tr>
                                    <td>Medical Allowance</td>
                                    <td>0.00</td>
                                    <td>Loans &amp; Others</td>
                                    <td>0.00</td>
                                  </tr>
                                  <tr>
                                    <td>Bonus</td>
                                    <td>0.00</td>
                                    <td>Bonus</td>
                                    <td>0.00</td>
                                  </tr>
                                  <tr className="payslip-border-bottom">
                                    <th>Total Earnings</th>
                                    <td>$32,000</td>
                                    <th>Total Earnings</th>
                                    <td>0.00</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="emp-details d-flex justify-content-start">
                              <div className="emp-name-id pay-slip-salery">
                                <h6>Net Salary</h6>
                                <span>Inwords</span>
                              </div>
                              <div className="emp-location-info pay-slip-salery">
                                <h6>$32,000</h6>
                                <span>Thirty Two Thousand Only</span>
                              </div>
                            </div>
                            <div className="product-name-slip text-center">
                              <h4>DreamsPOS</h4>
                              <p>
                                81, Randall Drive,Hornchurch <br />
                                RM126TA.
                              </p>
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
      </div>
    </>
  );
};

export default Payslip;
