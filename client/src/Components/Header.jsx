import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { useEffect } from "react";

function Navbar(props) {
  const userdetails = useSelector((state) => state.user.value);
  useEffect(() => {
    if (props.mode === "success") {
      document.getElementById("flexSwitchCheckChecked").checked = false;
    } else {
      document.getElementById("flexSwitchCheckChecked").checked = true;
    }
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-${props.mode} text-primary`}
      >
        <div className="container-fluid">
          <NavLink className={`navbar-brand text-light semi-heading`} to="/">
            ShareNotes <i class="fas fa-book-reader px-1"></i>
          </NavLink>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-lg-center gap-2 ">
              <li className="nav-item ">
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "text-info text-decoration-none"
                      : "text-white text-decoration-none"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Books"
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "text-info text-decoration-none"
                      : "text-white text-decoration-none"
                  }
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Books
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "text-info text-decoration-none"
                      : "text-white text-decoration-none"
                  }
                  to="/About"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "text-info text-decoration-none"
                      : "text-white text-decoration-none"
                  }
                  to="/Contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className={`form-check form-switch text-dark`}>
              <input
                className="form-check-input btn"
                type="checkbox"
                onClick={props.toggleMode}
                role="switch"
                id="flexSwitchCheckChecked"
              />
              <label
                className={`form-check-label" id="check" htmlhtmlFor="flexSwitchCheckChecked semi-heading text-${
                  props.mode === "success" ? "dark" : "success"
                } `}
              >
                Dark Mode
              </label>
            </div>
            <div className="d-flex m-2">
              <NavLink to={userdetails?.loggedIn === true ? "Logout" : "Login"}>
                <button
                  className="btn btn-primary text-uppercase"
                  type="submit"
                >
                  {userdetails?.loggedIn === true ? "Logout" : "Login"}
                  <i className="fas fa-tools px-2"></i>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
