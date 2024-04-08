import React from 'react';

function Customers() {
    return (
        <>
            <div className="page-wrapper" style={{minHeight: "239px;"}}>
                <div className="content">
                    <div className="page-header">
                        <div className="add-item d-flex">
                            <div className="page-title">
                                <h4>Customer List</h4>
                                <h6>Manage your warehouse</h6>
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
                        <div className="page-btn">
                            <a href="#" className="btn btn-added" data-bs-toggle="modal" data-bs-target="#add-units"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus-circle me-2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>Add New Customer</a>
                        </div>
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
                                                <select className="select select2-hidden-accessible" data-select2-id="select2-data-4-vbio" tabindex="-1" aria-hidden="true">
                                                    <option data-select2-id="select2-data-6-lzwq">Choose Customer Name</option>
                                                    <option>Benjamin</option>
                                                    <option>Ellen</option>
                                                    <option>Freda</option>
                                                    <option>Kaitlin</option>
                                                </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-5-w00a" style={{width: "100%;"}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-ir5y-container" aria-controls="select2-ir5y-container"><span className="select2-selection__rendered" id="select2-ir5y-container" role="textbox" aria-readonly="true" title="Choose Customer Name">Choose Customer Name</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 col-12">
                                            <div className="input-blocks">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-globe info-img"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                                <select className="select select2-hidden-accessible" data-select2-id="select2-data-7-djk1" tabindex="-1" aria-hidden="true">
                                                    <option data-select2-id="select2-data-9-q75j">Choose Country</option>
                                                    <option>India</option>
                                                    <option>USA</option>
                                                </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-8-nhh7" style={{width: "100%;"}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-qz9a-container" aria-controls="select2-qz9a-container"><span className="select2-selection__rendered" id="select2-qz9a-container" role="textbox" aria-readonly="true" title="Choose Country">Choose Country</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6 col-12 ms-auto">
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




: activate to sort column descending" style={{width: "35px;"}}>
                                            <label className="checkboxs">
                                                <input type="checkbox" id="select-all"/>
                                                    <span className="checkmarks"></span>
                                            </label>
                                        </th><th className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Customer Name: activate to sort column ascending" style={{width: "142.688px;"}}>Customer Name</th><th className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Code: activate to sort column ascending" style={{width: "35.0104px;"}}>Code</th><th className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Customer: activate to sort column ascending" style={{width: "102.688px;"}}>Customer</th><th className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Email: activate to sort column ascending" style={{width: "149.51px;"}}>Email</th><th className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Phone: activate to sort column ascending" style={{width: "86.8021px;"}}>Phone</th><th className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Country: activate to sort column ascending" style={{width: "54.5938px;"}}>Country</th><th className="no-sort sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Action: activate to sort column ascending" style={{width: "96px;"}}>Action</th></tr>
                                    </thead>
                                    <tbody>










                                        <tr className="odd">
                                            <td className="sorting_1">
                                                <label className="checkboxs">
                                                    <input type="checkbox"/>
                                                        <span className="checkmarks"></span>
                                                </label>
                                            </td>
                                            <td>
                                                <div className="userimgname cust-imgname">
                                                    <a href="#" className="product-img">
                                                        <img src="../../images/user-23.jpg" alt="product"/>
                                                    </a>
                                                    <a href="#">Thomas</a>
                                                </div>
                                            </td>
                                            <td>
                                                201
                                            </td>
                                            <td>Thomas</td>
                                            <td>
                                                thomas@exmple.com
                                            </td>
                                            <td>+12163547758 </td>
                                            <td>Germany</td>
                                            <td className="action-table-data">
                                                <div className="edit-delete-action">
                                                    <a className="me-2 p-2" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                                    </a>
                                                    <a className="me-2 p-2" href="#" data-bs-toggle="modal" data-bs-target="#edit-units">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                                    </a>
                                                    <a className="confirm-text p-2" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr><tr className="even">
                                            <td className="sorting_1">
                                                <label className="checkboxs">
                                                    <input type="checkbox"/>
                                                        <span className="checkmarks"></span>
                                                </label>
                                            </td>
                                            <td>
                                                <div className="userimgname cust-imgname">
                                                    <a href="#" className="product-img">
                                                        <img src="../../images/user-15.jpg" alt="product"/>
                                                    </a>
                                                    <a href="#">Rose</a>
                                                </div>
                                            </td>
                                            <td>
                                                201
                                            </td>
                                            <td>Rose</td>
                                            <td>
                                                rose@exmple.com
                                            </td>
                                            <td>+11367529510 </td>
                                            <td>USA</td>
                                            <td className="action-table-data">
                                                <div className="edit-delete-action">
                                                    <a className="me-2 p-2" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                                    </a>
                                                    <a className="me-2 p-2" href="#" data-bs-toggle="modal" data-bs-target="#edit-units">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                                    </a>
                                                    <a className="confirm-text p-2" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr><tr className="odd">
                                            <td className="sorting_1">
                                                <label className="checkboxs">
                                                    <input type="checkbox"/>
                                                        <span className="checkmarks"></span>
                                                </label>
                                            </td>
                                            <td>
                                                <div className="userimgname cust-imgname">
                                                    <a href="#" className="product-img">
                                                        <img src="../../images/user-16.jpg" alt="product"/>
                                                    </a>
                                                    <a href="#">Benjamin</a>
                                                </div>
                                            </td>
                                            <td>
                                                203
                                            </td>
                                            <td>Benjamin</td>
                                            <td>
                                                benjamin@exmple.com
                                            </td>
                                            <td>+15362789414 </td>
                                            <td>Japan</td>
                                            <td className="action-table-data">
                                                <div className="edit-delete-action">
                                                    <a className="me-2 p-2" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                                    </a>
                                                    <a className="me-2 p-2" href="#" data-bs-toggle="modal" data-bs-target="#edit-units">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                                    </a>
                                                    <a className="confirm-text p-2" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr><tr className="even">
                                            <td className="sorting_1">
                                                <label className="checkboxs">
                                                    <input type="checkbox"/>
                                                        <span className="checkmarks"></span>
                                                </label>
                                            </td>
                                            <td>
                                                <div className="userimgname cust-imgname">
                                                    <a href="#" className="product-img">
                                                        <img src="../../images/user-17.jpg" alt="product"/>
                                                    </a>
                                                    <a href="#">Kaitlin</a>
                                                </div>
                                            </td>
                                            <td>
                                                204
                                            </td>
                                            <td>Kaitlin</td>
                                            <td>
                                                kaitlin@exmple.com
                                            </td>
                                            <td>+18513094627 </td>
                                            <td>Austria</td>
                                            <td className="action-table-data">
                                                <div className="edit-delete-action">
                                                    <a className="me-2 p-2" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                                    </a>
                                                    <a className="me-2 p-2" href="#" data-bs-toggle="modal" data-bs-target="#edit-units">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                                    </a>
                                                    <a className="confirm-text p-2" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr><tr className="odd">
                                            <td className="sorting_1">
                                                <label className="checkboxs">
                                                    <input type="checkbox"/>
                                                        <span className="checkmarks"></span>
                                                </label>
                                            </td>
                                            <td>
                                                <div className="userimgname cust-imgname">
                                                    <a href="#" className="product-img">
                                                        <img src="../../images/user-18.jpg" alt="product"/>
                                                    </a>
                                                    <a href="#">Lilly</a>
                                                </div>
                                            </td>
                                            <td>
                                                205
                                            </td>
                                            <td>Lilly</td>
                                            <td>
                                                lilly@exmple.com
                                            </td>
                                            <td>+14678219025 </td>
                                            <td>India</td>
                                            <td className="action-table-data">
                                                <div className="edit-delete-action">
                                                    <a className="me-2 p-2" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                                    </a>
                                                    <a className="me-2 p-2" href="#" data-bs-toggle="modal" data-bs-target="#edit-units">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                                    </a>
                                                    <a className="confirm-text p-2" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr><tr className="even">
                                            <td className="sorting_1">
                                                <label className="checkboxs">
                                                    <input type="checkbox"/>
                                                        <span className="checkmarks"></span>
                                                </label>
                                            </td>
                                            <td>
                                                <div className="userimgname cust-imgname">
                                                    <a href="#" className="product-img">
                                                        <img src="../../images/user-19.jpg" alt="product"/>
                                                    </a>
                                                    <a href="#">Freda</a>
                                                </div>
                                            </td>
                                            <td>
                                                206
                                            </td>
                                            <td>Freda</td>
                                            <td>
                                                freda@exmple.com
                                            </td>
                                            <td>+10913278319 </td>
                                            <td>France</td>
                                            <td className="action-table-data">
                                                <div className="edit-delete-action">
                                                    <a className="me-2 p-2" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                                    </a>
                                                    <a className="me-2 p-2" href="#" data-bs-toggle="modal" data-bs-target="#edit-units">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                                    </a>
                                                    <a className="confirm-text p-2" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr><tr className="odd">
                                            <td className="sorting_1">
                                                <label className="checkboxs">
                                                    <input type="checkbox"/>
                                                        <span className="checkmarks"></span>
                                                </label>
                                            </td>
                                            <td>
                                                <div className="userimgname cust-imgname">
                                                    <a href="#" className="product-img">
                                                        <img src="../../images/user-19.jpg" className="people-customer-walk" alt="product"/>
                                                    </a>
                                                    <a href="#">Walk-in-Customer</a>
                                                </div>
                                            </td>
                                            <td>
                                                01
                                            </td>
                                            <td>Walk-in-Customer</td>
                                            <td>
                                                customer01@exmple.com
                                            </td>
                                            <td>+19125852947 </td>
                                            <td>Belgium</td>
                                            <td className="action-table-data">
                                                <div className="edit-delete-action">
                                                    <a className="me-2 p-2" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                                    </a>
                                                    <a className="me-2 p-2" href="#" data-bs-toggle="modal" data-bs-target="#edit-units">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                                    </a>
                                                    <a className="confirm-text p-2" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr><tr className="even">
                                            <td className="sorting_1">
                                                <label className="checkboxs">
                                                    <input type="checkbox"/>
                                                        <span className="checkmarks"></span>
                                                </label>
                                            </td>
                                            <td>
                                                <div className="userimgname cust-imgname">
                                                    <a href="#" className="product-img">
                                                        <img src="../../images/user-06.jpg" alt="product"/>
                                                    </a>
                                                    <a href="#">Maybelle</a>
                                                </div>
                                            </td>
                                            <td>
                                                207
                                            </td>
                                            <td>Maybelle</td>
                                            <td>
                                                maybelle@exmple.com
                                            </td>
                                            <td>+19125852947 </td>
                                            <td>Italy</td>
                                            <td className="action-table-data">
                                                <div className="edit-delete-action">
                                                    <a className="me-2 p-2" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                                    </a>
                                                    <a className="me-2 p-2" href="#" data-bs-toggle="modal" data-bs-target="#edit-units">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                                    </a>
                                                    <a className="confirm-text p-2" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr><tr className="odd">
                                            <td className="sorting_1">
                                                <label className="checkboxs">
                                                    <input type="checkbox"/>
                                                        <span className="checkmarks"></span>
                                                </label>
                                            </td>
                                            <td>
                                                <div className="userimgname cust-imgname">
                                                    <a href="#" className="product-img">
                                                        <img src="../../images/user-10.jpg" alt="product"/>
                                                    </a>
                                                    <a href="#">Ellen</a>
                                                </div>
                                            </td>
                                            <td>
                                                208
                                            </td>
                                            <td>Ellen</td>
                                            <td>
                                                ellen@exmple.com
                                            </td>
                                            <td>+19756194733 </td>
                                            <td>Canada</td>
                                            <td className="action-table-data">
                                                <div className="edit-delete-action">
                                                    <a className="me-2 p-2" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                                    </a>
                                                    <a className="me-2 p-2" href="#" data-bs-toggle="modal" data-bs-target="#edit-units">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                                    </a>
                                                    <a className="confirm-text p-2" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr><tr className="even">
                                            <td className="sorting_1">
                                                <label className="checkboxs">
                                                    <input type="checkbox"/>
                                                        <span className="checkmarks"></span>
                                                </label>
                                            </td>
                                            <td>
                                                <div className="userimgname cust-imgname">
                                                    <a href="#" className="product-img">
                                                        <img src="../../images/user-06.jpg" className="people-customer-walk" alt="product"/>
                                                    </a>
                                                    <a href="#">Walk-in-Customer</a>
                                                </div>
                                            </td>
                                            <td>
                                                02
                                            </td>
                                            <td>Walk-in-Customer</td>
                                            <td>
                                                customer02@exmple.com
                                            </td>
                                            <td>+19167850925 </td>
                                            <td>Greece</td>
                                            <td className="action-table-data">
                                                <div className="edit-delete-action">
                                                    <a className="me-2 p-2" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                                    </a>
                                                    <a className="me-2 p-2" href="#" data-bs-toggle="modal" data-bs-target="#edit-units">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                                    </a>
                                                    <a className="confirm-text p-2" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                    </a>
                                                </div>
                                            </td>
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

export default Customers;