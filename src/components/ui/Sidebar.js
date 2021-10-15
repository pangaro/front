import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Sidebar = () => {


  const { username } = useSelector(state => state.auth)

    return (
        <nav id="sidebar" className="sidebar js-sidebar">
          <div className="sidebar-content js-simplebar" data-simplebar="init">
            <div className="simplebar-wrapper" style={{ margin: "0px" }}>
              <div className="simplebar-height-auto-observer-wrapper">
                <div className="simplebar-height-auto-observer"></div>
              </div>
              <div className="simplebar-mask">
                <div
                  className="simplebar-offset"
                  style={{ right: "0px", bottom: "0px" }}
                >
                  <div
                    className="simplebar-content-wrapper"
                    style={{ height: "100%", overflow: "hidden scroll" }}
                  >
                    <div
                      className="simplebar-content"
                      style={{ padding: "0px" }}
                    >
                      <Link className="sidebar-brand" to="/">
                        <span className="sidebar-brand-text align-middle">
                          SIweb
                          <sup>
                            <small className="badge bg-primary text-uppercase">
                              v2
                            </small>
                          </sup>
                        </span>
                        <svg
                          className="sidebar-brand-icon align-middle"
                          width="32px"
                          height="32px"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FFFFFF"
                          strokeWidth="1.5"
                          strokeLinecap="square"
                          strokeLinejoin="miter"
                          color="#FFFFFF"
                          style={{ marginLeft: "-3px" }}
                        >
                          <path d="M12 4L20 8.00004L12 12L4 8.00004L12 4Z"></path>
                          <path d="M20 12L12 16L4 12"></path>
                          <path d="M20 16L12 20L4 16"></path>
                        </svg>
                      </Link>

                      <div className="sidebar-user">
                        <div className="d-flex justify-content-center">
                          <div className="sidebar-user-title h3 flex-grow-1 ps-2">
                            <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-user align-middle me-1"
                            >
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </svg>{" "} {username.toUpperCase()}<span style={{fontSize:'0.6em'}}> (logueado)</span>

                            <div className="sidebar-user-subtitle">
                              &nbsp;
                            </div>
                          </div>
                        </div>
                      </div>

                      <ul className="sidebar-nav">
                        <li className="sidebar-header">Pages</li>
                        <li className="sidebar-item">
                          <a
                            data-bs-target="#dashboards"
                            data-bs-toggle="collapse"
                            className="sidebar-link collapsed"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-sliders align-middle"
                            >
                              <line x1="4" y1="21" x2="4" y2="14"></line>
                              <line x1="4" y1="10" x2="4" y2="3"></line>
                              <line x1="12" y1="21" x2="12" y2="12"></line>
                              <line x1="12" y1="8" x2="12" y2="3"></line>
                              <line x1="20" y1="21" x2="20" y2="16"></line>
                              <line x1="20" y1="12" x2="20" y2="3"></line>
                              <line x1="1" y1="14" x2="7" y2="14"></line>
                              <line x1="9" y1="8" x2="15" y2="8"></line>
                              <line x1="17" y1="16" x2="23" y2="16"></line>
                            </svg>{" "}
                            <span className="align-middle">Gestión Categoria</span>
                          </a>
                          <ul
                            id="dashboards"
                            className="sidebar-dropdown list-unstyled collapse "
                            data-bs-parent="#sidebar"
                          >
                            <li className="sidebar-item">
                              <Link className="sidebar-link" to="/category">
                                Categoria
                              </Link>
                            </li>
                            <li className="sidebar-item">
                              <Link className="sidebar-link" to="/amount">
                                Montos
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="sidebar-item">
                          <a
                            data-bs-target="#pages"
                            data-bs-toggle="collapse"
                            className="sidebar-link collapsed"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-layout align-middle"
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
                            </svg>{" "}
                            <span className="align-middle">Pages</span>
                          </a>
                          <ul
                            id="pages"
                            className="sidebar-dropdown list-unstyled collapse "
                            data-bs-parent="#sidebar"
                          >
                            <li className="sidebar-item">
                              <a
                                className="sidebar-link"
                                href="pages-settings.html"
                              >
                                Settings
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
    )
}
