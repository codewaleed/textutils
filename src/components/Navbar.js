import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} `}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.name}
          </a>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul
              className={`navbar-nav text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <li className="nav-item">
                <Link to="/" className={`nav-link active `} aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className={`nav-link `}
                  to="/About"
                >
                  About
                </Link>
              </li>

              <li className="nav-item my-2 mx-4">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    onClick={props.toggleMode}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    Enable Dark Mode
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  name: PropTypes.string,
};
