import React from "react";
import { useDispatch } from 'react-redux';
import { startLogout } from "../../actions/auth";

export const Header = () => {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch( startLogout() );
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
      <span className="btn btn-lg btn-danger fw-bold" onClick={handleLogout}>
        Salir
      </span>
    </nav>
  );
};
