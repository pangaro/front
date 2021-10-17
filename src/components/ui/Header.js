import React from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";

export const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const handleMenu = () => {
    const sidebar = document.querySelector("#sidebar");

    sidebar.classList.toggle("collapsed");
  };

  return (
    <nav className="navbar navbar-expand navbar-light navbar-bg d-flex justify-content-between">
      <span className="sidebar-toggle js-sidebar-toggle" onClick={handleMenu}>
        <i className="hamburger align-self-center"></i>
      </span>
      <span
        className="btn btn-lg btn-danger fw-bold"
        onClick={handleLogout}
        data-toggle="tooltip"
        data-placement="bottom"
        title="salir"
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
          className="align-middle me-1"
        >
          <path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9" />
        </svg>
      </span>
    </nav>
  );
};
