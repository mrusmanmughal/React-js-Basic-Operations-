import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
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
                <Link to="/simpletodo" className="nav-link  ">
                  Simple Todo
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Form" className="nav-link">
                  Form
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Table" className="nav-link">
                  Table
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/todoredux" className="nav-link">
                  Todo Redux
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
