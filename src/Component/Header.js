const Header = () => {
  return (
    <div className="header">
      <div className="header-left active">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M9.75 2H13.748C13.938 2.00006 14.1209 2.07224 14.2598 2.20197C14.3986 2.3317 14.4831 2.5093 14.496 2.69888C14.509 2.88846 14.4495 3.07589 14.3296 3.2233C14.2097 3.37071 14.0382 3.4671 13.85 3.493L13.748 3.5H12.5V20.5H13.745C13.9262 20.5 14.1013 20.5656 14.2379 20.6848C14.3745 20.8039 14.4634 20.9684 14.488 21.148L14.495 21.25C14.495 21.4312 14.4294 21.6063 14.3102 21.7429C14.1911 21.8795 14.0266 21.9684 13.847 21.993L13.745 22H9.75C9.55998 21.9999 9.37706 21.9278 9.23821 21.798C9.09936 21.6683 9.01493 21.4907 9.00197 21.3011C8.98902 21.1115 9.04851 20.9241 9.16843 20.7767C9.28835 20.6293 9.45975 20.5329 9.648 20.507L9.75 20.5H11V3.5H9.75C9.56876 3.49999 9.39366 3.43436 9.25707 3.31523C9.12048 3.19611 9.03165 3.03155 9.007 2.852L9 2.75C9.00001 2.56876 9.06564 2.39366 9.18477 2.25707C9.30389 2.12048 9.46845 2.03165 9.648 2.007L9.75 2ZM18.246 4.997C19.1077 4.99779 19.9339 5.34046 20.5432 5.94978C21.1525 6.5591 21.4952 7.38529 21.496 8.247L21.5 15.751C21.5006 16.5811 21.1834 17.3799 20.6137 17.9835C20.0439 18.5871 19.2647 18.9497 18.436 18.997L18.25 19.002H13.505V17.502H18.308C18.7623 17.4872 19.1929 17.2961 19.5087 16.9693C19.8246 16.6424 20.0008 16.2055 20 15.751L19.997 8.246C19.9962 7.78177 19.8113 7.33681 19.4829 7.00873C19.1544 6.68066 18.7092 6.49626 18.245 6.496H13.505V4.996L18.246 4.997ZM10 4.997V6.497H5.25C4.78587 6.497 4.34075 6.68137 4.01256 7.00956C3.68437 7.33775 3.5 7.78287 3.5 8.247V15.751C3.5 16.718 4.284 17.501 5.25 17.501H9.995V19.001H5.25C4.38805 19.001 3.5614 18.6586 2.9519 18.0491C2.34241 17.4396 2 16.613 2 15.751V8.247C2 7.38505 2.34241 6.5584 2.9519 5.9489C3.5614 5.33941 4.38805 4.997 5.25 4.997H10Z" fill="black"/>
</svg>
        <h1>ERP</h1>
        <a id="toggle_btn" href="javascript:void(0);">
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
            className="feather feather-chevrons-left feather-16"
          >
            <polyline points="11 17 6 12 11 7"></polyline>
            <polyline points="18 17 13 12 18 7"></polyline>
          </svg>
        </a>
      </div>

      <a id="mobile_btn" className="mobile_btn" href="##sidebar">
        <span className="bar-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </a>

      <ul className="nav user-menu">
        <li className="nav-item nav-searchinputs">
          <div className="top-nav-search">
            <a href="javascript:void(0);" className="responsive-search">
              <i className="fa fa-search"></i>
            </a>
            <form action="##" className="dropdown">
              <div
                className="searchinputs dropdown-toggle"
                id="dropdownMenuClickable"
                data-bs-toggle="dropdown"
                data-bs-auto-close="false"
              >
                <input type="text" placeholder="Search" />
                <div className="search-addon">
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
                      className="feather feather-x-circle feather-14"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </span>
                </div>
              </div>
              <div
                className="dropdown-menu search-dropdown"
                aria-labelledby="dropdownMenuClickable"
              >
                <div className="search-info">
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
                        className="feather feather-search feather-16"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </span>
                    Recent Searches
                  </h6>
                  <ul className="search-tags">
                    <li>
                      <a href="javascript:void(0);">Products</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Sales</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Applications</a>
                    </li>
                  </ul>
                </div>
                <div className="search-info">
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
                        className="feather feather-help-circle feather-16"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                      </svg>
                    </span>
                    Help
                  </h6>
                  <p>
                    How to Change Product Volume from 0 to 200 on Inventory
                    management
                  </p>
                  <p>Change Product Name</p>
                </div>
                <div className="search-info">
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
                        className="feather feather-user feather-16"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </span>
                    Customers
                  </h6>
                  <ul className="customers">
                    <li>
                      <a href="javascript:void(0);">
                        Aron Varu
                        <img
                          src="../images/avator1.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        Jonita
                        <img
                          src="../images/avatar-01.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        Aaron
                        <img
                          src="../images/avatar-10.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </li>

        <li className="nav-item dropdown has-arrow main-drop select-store-dropdown">
          <a
            href="javascript:void(0);"
            className="dropdown-toggle nav-link select-store"
            data-bs-toggle="dropdown"
          >
            <span className="user-info">
              <span className="user-letter">
                <img
                  src="../images/store-01.png"
                  alt="Store Logo"
                  className="img-fluid"
                />
              </span>
              <span className="user-detail">
                <span className="user-name">Select Store</span>
              </span>
            </span>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a href="javascript:void(0);" className="dropdown-item">
              <img
                src="../images/store-01.png"
                alt="Store Logo"
                className="img-fluid"
              />{" "}
              Grocery Alpha
            </a>
            <a href="javascript:void(0);" className="dropdown-item">
              <img
                src="../images/store-02.png"
                alt="Store Logo"
                className="img-fluid"
              />{" "}
              Grocery Apex
            </a>
            <a href="javascript:void(0);" className="dropdown-item">
              <img
                src="../images/store-03.png"
                alt="Store Logo"
                className="img-fluid"
              />{" "}
              Grocery Bevy
            </a>
            <a href="javascript:void(0);" className="dropdown-item">
              <img
                src="../images/store-04.png"
                alt="Store Logo"
                className="img-fluid"
              />{" "}
              Grocery Eden
            </a>
          </div>
        </li>

        <li className="nav-item dropdown has-arrow flag-nav nav-item-box">
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="javascript:void(0);"
            role="button"
          >
            <img src="../images/us.png" alt="Language" className="img-fluid" />
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a href="javascript:void(0);" className="dropdown-item active">
              <img src="../images/us.png" alt="" height="16" /> English
            </a>
            <a href="javascript:void(0);" className="dropdown-item">
              <img src="../images/fr.png" alt="" height="16" /> French
            </a>
            <a href="javascript:void(0);" className="dropdown-item">
              <img src="../images/es.png" alt="" height="16" /> Spanish
            </a>
            <a href="javascript:void(0);" className="dropdown-item">
              <img src="../images/de.png" alt="" height="16" /> German
            </a>
          </div>
        </li>

        <li className="nav-item nav-item-box">
          <a href="javascript:void(0);" id="btnFullscreen">
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
              className="feather feather-maximize"
            >
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
            </svg>
          </a>
        </li>
        <li className="nav-item nav-item-box">
          <a href="https://dreamspos.dreamstechnologies.com/html/template/email.html">
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
              className="feather feather-mail"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span className="badge rounded-pill">1</span>
          </a>
        </li>

        <li className="nav-item dropdown nav-item-box">
          <a
            href="javascript:void(0);"
            className="dropdown-toggle nav-link"
            data-bs-toggle="dropdown"
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
              className="feather feather-bell"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span className="badge rounded-pill">2</span>
          </a>
          <div className="dropdown-menu notifications">
            <div className="topnav-dropdown-header">
              <span className="notification-title">Notifications</span>
              <a href="javascript:void(0)" className="clear-noti">
                {" "}
                Clear All{" "}
              </a>
            </div>
            <div className="noti-content">
              <ul className="notification-list">
                <li className="notification-message">
                  <a href="https://dreamspos.dreamstechnologies.com/html/template/activities.html">
                    <div className="media d-flex">
                      <span className="avatar flex-shrink-0">
                        <img alt="" src="../images/avatar-02.jpg" />
                      </span>
                      <div className="media-body flex-grow-1">
                        <p className="noti-details">
                          <span className="noti-title">John Doe</span> added new
                          task{" "}
                          <span className="noti-title">
                            Patient appointment booking
                          </span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">4 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="https://dreamspos.dreamstechnologies.com/html/template/activities.html">
                    <div className="media d-flex">
                      <span className="avatar flex-shrink-0">
                        <img alt="" src="../images/avatar-03.jpg" />
                      </span>
                      <div className="media-body flex-grow-1">
                        <p className="noti-details">
                          <span className="noti-title">Tarah Shropshire</span>
                          changed the task name{" "}
                          <span className="noti-title">
                            Appointment booking with payment gateway
                          </span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">6 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="https://dreamspos.dreamstechnologies.com/html/template/activities.html">
                    <div className="media d-flex">
                      <span className="avatar flex-shrink-0">
                        <img alt="" src="../images/avatar-06.jpg" />
                      </span>
                      <div className="media-body flex-grow-1">
                        <p className="noti-details">
                          <span className="noti-title">Misty Tison</span>
                          added{" "}
                          <span className="noti-title">
                            Domenic Houston
                          </span>{" "}
                          and <span className="noti-title">Claire Mapes</span>{" "}
                          to project{" "}
                          <span className="noti-title">
                            Doctor available module
                          </span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">8 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="https://dreamspos.dreamstechnologies.com/html/template/activities.html">
                    <div className="media d-flex">
                      <span className="avatar flex-shrink-0">
                        <img alt="" src="../images/avatar-17.jpg" />
                      </span>
                      <div className="media-body flex-grow-1">
                        <p className="noti-details">
                          <span className="noti-title">Rolland Webber</span>
                          completed task{" "}
                          <span className="noti-title">
                            Patient and Doctor video conferencing
                          </span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">12 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="https://dreamspos.dreamstechnologies.com/html/template/activities.html">
                    <div className="media d-flex">
                      <span className="avatar flex-shrink-0">
                        <img alt="" src="../images/avatar-13.jpg" />
                      </span>
                      <div className="media-body flex-grow-1">
                        <p className="noti-details">
                          <span className="noti-title">Bernardo Galaviz</span>
                          added new task{" "}
                          <span className="noti-title">
                            Private chat module
                          </span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">2 days ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <a href="https://dreamspos.dreamstechnologies.com/html/template/activities.html">
                View all Notifications
              </a>
            </div>
          </div>
        </li>

        <li className="nav-item nav-item-box">
          <a href="https://dreamspos.dreamstechnologies.com/html/template/general-settings.html">
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
              className="feather feather-settings"
            >
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
          </a>
        </li>
        <li className="nav-item dropdown has-arrow main-drop">
          <a
            href="javascript:void(0);"
            className="dropdown-toggle nav-link userset"
            data-bs-toggle="dropdown"
          >
            <span className="user-info">
              <span className="user-letter">
                <img src="../images/avator1.jpg" alt="" className="img-fluid" />
              </span>
              <span className="user-detail">
                <span className="user-name">John Smilga</span>
                <span className="user-role">Super Admin</span>
              </span>
            </span>
          </a>
          <div className="dropdown-menu menu-drop-user">
            <div className="profilename">
              <div className="profileset">
                <span className="user-img">
                  <img src="../images/avator1.jpg" alt="" />
                  <span className="status online"></span>
                </span>
                <div className="profilesets">
                  <h6>John Smilga</h6>
                  <h5>Super Admin</h5>
                </div>
              </div>
              <hr className="m-0" />
              <a
                className="dropdown-item"
                href="https://dreamspos.dreamstechnologies.com/html/template/profile.html"
              >
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
                  className="feather feather-user me-2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>{" "}
                My Profile
              </a>
              <a
                className="dropdown-item"
                href="https://dreamspos.dreamstechnologies.com/html/template/general-settings.html"
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
                  className="feather feather-settings me-2"
                >
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
                Settings
              </a>
              <hr className="m-0" />
              <a
                className="dropdown-item logout pb-0"
                href="https://dreamspos.dreamstechnologies.com/html/template/signin.html"
              >
                <img src="../images/log-out.svg" className="me-2" alt="img" />
                Logout
              </a>
            </div>
          </div>
        </li>
      </ul>

      <div className="dropdown mobile-user-menu">
        <a
          href="javascript:void(0);"
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fa fa-ellipsis-v"></i>
        </a>
        <div className="dropdown-menu dropdown-menu-right">
          <a
            className="dropdown-item"
            href="https://dreamspos.dreamstechnologies.com/html/template/profile.html"
          >
            My Profile
          </a>
          <a
            className="dropdown-item"
            href="https://dreamspos.dreamstechnologies.com/html/template/general-settings.html"
          >
            Settings
          </a>
          <a
            className="dropdown-item"
            href="https://dreamspos.dreamstechnologies.com/html/template/signin.html"
          >
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
