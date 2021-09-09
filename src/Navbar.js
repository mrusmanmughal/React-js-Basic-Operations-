import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
        <div className="container-fluid">
          <Link to="/" exact className="navbar-brand">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link exact to="/simpletodo" className="nav-link  ">
                  Simple Todo
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Form" exact className="nav-link">
                  Form
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Table" exact className="nav-link">
                  Table
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/crudTable" exact className="nav-link">
                  Crud Table
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/todoredux" exact className="nav-link">
                  Todo Redux
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ReduxTable" exact className="nav-link">
                  Redux Table
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
