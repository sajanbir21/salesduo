import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpload,
  faSearch,
  faCog,
  faComment,
  faBell,
  faBars,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.jpg";

const Navbar = () => {
  return (
    <>
      <section id="navbar">
        <nav className="navbar  navbar-expand-lg  navbar-light ">
          <div className="container-fluid">
            <div className="type mx-lg-5">
              <form className="d-flex">
                <FontAwesomeIcon
                  className="mt-2  fs-5"
                  icon={faSearch}
                  style={{ color: "grey" }}
                />
                <input
                  className="form-control if "
                  type="search"
                  placeholder="Type to search..."
                />
              </form>
            </div>

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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item px-lg-2">
                  <FontAwesomeIcon
                    className="mx-md-2 my-md-3 fs-5"
                    icon={faCog}
                    style={{ color: "grey" }}
                  />
                </li>
                <li className="nav-item px-md-2">
                  <FontAwesomeIcon
                    className="mx-md-2 my-md-3 fs-5"
                    icon={faComment}
                    style={{ color: "grey" }}
                  />
                </li>
                <li className="nav-item px-2">
                  <FontAwesomeIcon
                    className="mx-md-2 my-md-3 fs-5"
                    icon={faBell}
                    style={{ color: "grey" }}
                  />
                </li>
                <li className="nav-item dropdown my-md-2">
                  <a
                    className="nav-link dropdown-toggle name"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sajanbir Singh
                    <img src={logo} className="logo" />
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item">Add account</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <hr />
      </section>
    </>
  );
};

export default Navbar;
