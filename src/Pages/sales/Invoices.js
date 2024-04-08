import React from 'react';

function Invoices() {
    return (
        <>
            <div className="page-wrapper" style={{minHeight: "239px;"}}>
                <div className="content">
                    <div className="page-header">
                        <div className="add-item d-flex">
                            <div className="page-title">
                                <h4>Invoice Report </h4>
                                <h6>Manage Your Invoice Report</h6>
                            </div>
                        </div>
                        <ul className="table-top-head">
                            <li>
                                <a data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Pdf" data-bs-original-title="Pdf"><img src="../../images/pdf.svg" alt="img"/></a>
                            </li>
                            <li>
                                <a data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Excel" data-bs-original-title="Excel"><img src="../../images/excel.svg" alt="img"/></a>
                            </li>
                            <li>
                                <a data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Print" data-bs-original-title="Print"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-printer feather-rotate-ccw"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg></a>
                            </li>
                            <li>
                                <a data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh" data-bs-original-title="Refresh"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-rotate-ccw"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg></a>
                            </li>
                            <li>
                                <a data-bs-toggle="tooltip" data-bs-placement="top" id="collapse-header" aria-label="Collapse" data-bs-original-title="Collapse"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg></a>
                            </li>
                        </ul>
                    </div>

                    <div className="card table-list-card">
                        <div className="card-body">
                            <div className="table-top">
                                <div className="search-set">
                                    <div className="search-input">
                                        <a href="#" className="btn btn-searchset"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></a>
                                        <div id="DataTables_Table_0_filter" className="dataTables_filter"><label> <input type="search" className="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_0"/></label></div></div>
                                </div>
                                <div className="search-path">
                                    <div className="d-flex align-items-center">
                                        <a className="btn btn-filter" id="filter_search">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-filter filter-icon"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                                            <span><img src="../../images/closes.svg" alt="img"/></span>
                                        </a>
                                    </div>
                                </div>
                                <div className="form-sort">
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <select
                      className="select"
                      style={{
                        padding: "8px",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 18 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='feather feather-sliders info-img'%3E%3Cline x1='4' y1='21' x2='4' y2='14'/%3E%3Cline x1='4' y1='10' x2='4' y2='3'/%3E%3Cline x1='12' y1='21' x2='12' y2='12'/%3E%3Cline x1='12' y1='8' x2='12' y2='3'/%3E%3Cline x1='20' y1='21' x2='20' y2='16'/%3E%3Cline x1='20' y1='12' x2='20' y2='3'/%3E%3Cline x1='1' y1='14' x2='7' y2='14'/%3E%3Cline x1='9' y1='8' x2='15' y2='8'/%3E%3Cline x1='17' y1='16' x2='23' y2='16'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        border: "1px solid gray",
                        backgroundPosition: "5px center",
                        paddingLeft: "20px",
                        width: "105%",
                        borderRadius: "3px",
                      }}
                    >
                      <option
                        value=""
                        disabled
                        selected
                        style={{ backgroundColor: "transparent" }}
                      >
                        Sort by Date
                      </option>
                      <option
                        value="newest"
                        style={{
                          backgroundColor: "transparent",
                          padding: "8px 16px",
                          borderRadius: "0",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "orange")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor = "transparent")
                        }
                      >
                        Newest
                      </option>
                      <option
                        value="oldest"
                        style={{
                          backgroundColor: "transparent",
                          padding: "8px 16px",
                          borderRadius: "0",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "orange")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor = "transparent")
                        }
                      >
                        Oldest
                      </option>
                    </select>
                  </div>
                </div>
                            </div>

                            <div className="card" id="filter_inputs">
                                <div className="card-body pb-0">
                                    <div className="row">
                                        <div className="col-lg-3 col-sm-6 col-12">
                                            <div className="input-blocks">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user info-img"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                                <select className="select select2-hidden-accessible" data-select2-id="select2-data-4-aba6" tabindex="-1" aria-hidden="true">
                                                    <option data-select2-id="select2-data-6-abv6">Choose Name</option>
                                                    <option>Rose</option>
                                                    <option>Kaitlin</option>
                                                </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-5-23lb" style={{width: "100%;"}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-borh-container" aria-controls="select2-borh-container"><span className="select2-selection__rendered" id="select2-borh-container" role="textbox" aria-readonly="true" title="Choose Name">Choose Name</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 col-12">
                                            <div className="input-blocks">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-stop-circle info-img"><circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect></svg>
                                                <select className="select select2-hidden-accessible" data-select2-id="select2-data-7-1i1m" tabindex="-1" aria-hidden="true">
                                                    <option data-select2-id="select2-data-9-dbp9">Choose Status</option>
                                                    <option>Paid</option>
                                                    <option>Unpaid</option>
                                                    <option>Overdue</option>
                                                </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-8-j285" style={{width: "100%;"}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-r2h1-container" aria-controls="select2-r2h1-container"><span className="select2-selection__rendered" id="select2-r2h1-container" role="textbox" aria-readonly="true" title="Choose Status">Choose Status</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 col-12">
                                            <div className="input-blocks">
                                                <div className="position-relative daterange-wraper">
                                                    <input type="text" className="form-control" name="datetimes" placeholder="From Date - To Date"/>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-calendar feather-14 info-img"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 col-12">
                                            <div className="input-blocks">
                                                <a className="btn btn-filters ms-auto"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> Search </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="table-responsive">
                                <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer table-responsive"><table className="table datanew dataTable no-footer" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info">
                                    <thead>
                                        <tr><th className="no-sort sorting sorting_asc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-sort="ascending" aria-label="




: activate to sort column descending" style={{width: "42.9792px;"}}>
                                            <label className="checkboxs">
                                                <input type="checkbox" id="select-all"/>
                                                    <span className="checkmarks"></span>
                                            </label>
                                        </th><th className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Invoice No: activate to sort column ascending" style={{width: "82.7812px;"}}>Invoice No</th><th className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Customer: activate to sort column ascending" style={{width: "77.5938px;"}}>Customer</th><th className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Due Date: activate to sort column ascending" style={{width: "81.9688px;"}}>Due Date</th><th className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Amount: activate to sort column ascending" style={{width: "65.3438px;"}}>Amount</th><th className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Paid: activate to sort column ascending" style={{width: "37.2604px;"}}>Paid</th><th className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Amount Due: activate to sort column ascending" style={{width: "100.646px;"}}>Amount Due</th><th className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style={{width: "77.4271px;"}}>Status</th></tr>
                                    </thead>
                                    <tbody>










                                        <tr className="odd">
                                            <td className="sorting_1">
                                                <label className="checkboxs">
                                                    <input type="checkbox"/>
                                                        <span className="checkmarks"></span>
                                                </label>
                                            </td>
                                            <td>INV001</td>
                                            <td>Thomas</td>
                                            <td>19 Jan 2023</td>
                                            <td>$1000</td>
                                            <td>$1000</td>
                                            <td>$0.00</td>
                                            <td><span className="badge badge-linesuccess">Paid</span></td>
                                        </tr><tr className="even">
                                            <td className="sorting_1">
                                                <label className="checkboxs">
                                                    <input type="checkbox"/>
                                                        <span className="checkmarks"></span>
                                                </label>
                                            </td>
                                            <td>INV002</td>
                                            <td>Rose</td>
                                            <td>25 Jan 2023</td>
                                            <td>$1500</td>
                                            <td>$0.00</td>
                                            <td>$1500</td>
                                            <td><span className="badge badge-linedanger">Unpaid</span></td>
                                        </tr><tr className="odd">
                                            <td className="sorting_1">
                                                <label className="checkboxs">
                                                    <input type="checkbox"/>
                                                        <span className="checkmarks"></span>
                                                </label>
                                            </td>
                                            <td>INV003</td>
                                            <td>Benjamin</td>
                                            <td>05 Feb 2023</td>
                                            <td>$1800</td>
                                            <td>$1800</td>
                                            <td>$0.00</td>
                                            <td><span className="badge badge-linesuccess">Paid</span></td>
                                        </tr><tr className="even">
                                            <td className="sorting_1">
                                                <label className="checkboxs">
                                                    <input type="checkbox"/>
                                                        <span className="checkmarks"></span>
                                                </label>
                                            </td>
                                            <td>INV004</td>
                                            <td>Kaitlin</td>
                                            <td>15 Feb 2023</td>
                                            <td>$2000</td>
                                            <td>$1000</td>
                                            <td>$1000</td>
                                            <td><span className="badge badges-warning">Overdue</span></td>
                                        </tr><tr className="odd">
                                            <td className="sorting_1">
                                                <label className="checkboxs">
                                                    <input type="checkbox"/>
                                                        <span className="checkmarks"></span>
                                                </label>
                                            </td>
                                            <td>INV005</td>
                                            <td>Lilly</td>
                                            <td>18 Mar 2023</td>
                                            <td>$800</td>
                                            <td>$800</td>
                                            <td>$0.00</td>
                                            <td><span className="badge badge-linesuccess">Paid</span></td>
                                        </tr><tr className="even">
                                            <td className="sorting_1">
                                                <label className="checkboxs">
                                                    <input type="checkbox"/>
                                                        <span className="checkmarks"></span>
                                                </label>
                                            </td>
                                            <td>INV006</td>
                                            <td>Freda</td>
                                            <td>24 Mar 2023</td>
                                            <td>$750</td>
                                            <td>$0.00</td>
                                            <td>$750</td>
                                            <td><span className="badge badge-linedanger">Unpaid</span></td>
                                        </tr><tr className="odd">
                                            <td className="sorting_1">
                                                <label className="checkboxs">
                                                    <input type="checkbox"/>
                                                        <span className="checkmarks"></span>
                                                </label>
                                            </td>
                                            <td>INV007</td>
                                            <td>Alwin</td>
                                            <td>12 Apr 2023</td>
                                            <td>$1300</td>
                                            <td>$1300</td>
                                            <td>$0.00</td>
                                            <td><span className="badge badge-linesuccess">Paid</span></td>
                                        </tr><tr className="even">
                                            <td className="sorting_1">
                                                <label className="checkboxs">
                                                    <input type="checkbox"/>
                                                        <span className="checkmarks"></span>
                                                </label>
                                            </td>
                                            <td>INV008</td>
                                            <td>Maybelle</td>
                                            <td>24 Apr 2023</td>
                                            <td>$1100</td>
                                            <td>$1100</td>
                                            <td>$0.00</td>
                                            <td><span className="badge badge-linesuccess">Paid</span></td>
                                        </tr><tr className="odd">
                                            <td className="sorting_1">
                                                <label className="checkboxs">
                                                    <input type="checkbox"/>
                                                        <span className="checkmarks"></span>
                                                </label>
                                            </td>
                                            <td>INV009</td>
                                            <td>Ellen</td>
                                            <td>03 May 2023</td>
                                            <td>$2300</td>
                                            <td>$2300</td>
                                            <td>$0.00</td>
                                            <td><span className="badge badge-linesuccess">Paid</span></td>
                                        </tr><tr className="even">
                                            <td className="sorting_1">
                                                <label className="checkboxs">
                                                    <input type="checkbox"/>
                                                        <span className="checkmarks"></span>
                                                </label>
                                            </td>
                                            <td>INV010</td>
                                            <td>Grace</td>
                                            <td>29 May 2023</td>
                                            <td>$1700</td>
                                            <td>$1700</td>
                                            <td>$0.00</td>
                                            <td><span className="badge badge-linesuccess">Paid</span></td>
                                        </tr></tbody>
                                </table><div className="dataTables_length" id="DataTables_Table_0_length"><label><select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" className="form-select form-select-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select></label></div><div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="DataTables_Table_0_previous"><a aria-controls="DataTables_Table_0" aria-disabled="true" role="link" data-dt-idx="previous" tabindex="-1" className="page-link"><i className="fa fa-angle-left"></i> </a></li><li className="paginate_button page-item active"><a href="#" aria-controls="DataTables_Table_0" role="link" aria-current="page" data-dt-idx="0" tabindex="0" className="page-link">1</a></li><li className="paginate_button page-item next disabled" id="DataTables_Table_0_next"><a aria-controls="DataTables_Table_0" aria-disabled="true" role="link" data-dt-idx="next" tabindex="-1" className="page-link"> <i className=" fa fa-angle-right"></i></a></li></ul></div><div className="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">1 - 10 of 10 items</div></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Invoices;