import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTachometerAlt,
  faGlobe,
  faUser,
  faFile,
  faAppleAlt,
  faQuestionCircle,
  faInbox,
  faDatabase,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const AdminP = () => {
  return (
    <>
      <div className="d-flex mx-3">
        
        <h4 className=" cn "> 💸 Artemis</h4>
      </div>
      <hr />
      <div>
        <p className="main">MAIN</p>
        <div className=" d-flex ml-lg-3">
          <FontAwesomeIcon
            className="mt-2 fs-5"
            icon={faTachometerAlt}
            style={{ color: "grey" }}
          />
          <select className="form-select">
            <option>Dasboard</option>
            <option>Dashboard 1</option>
            <option>Dashboard 2</option>
          </select>
        </div>
        <div className=" d-flex ml-lg-3">
          <FontAwesomeIcon
            className="mt-2 fs-5"
            icon={faGlobe}
            style={{ color: "grey" }}
          />
          <select className="form-select">
            <option>Discover</option>
            <option>Discover 1</option>
            <option>Discover 2</option>
          </select>
        </div>
        <div className=" d-flex ml-lg-3">
          <FontAwesomeIcon
            className="mt-2 fs-5"
            icon={faUser}
            style={{ color: "grey" }}
          />
          <select className="form-select">
            <option>Users</option>
            <option>Users 1</option>
            <option>Users 2</option>
          </select>
        </div>
        <div className=" d-flex ml-lg-3">
          <FontAwesomeIcon
            className="mt-2 fs-5"
            icon={faFile}
            style={{ color: "grey" }}
          />
          <select className="form-select">
            <option>Documents</option>
            <option>Documents 1</option>
            <option>Documents 2</option>
          </select>
        </div>
        <div className=" d-flex ml-lg-3">
          <FontAwesomeIcon
            className="mt-2 fs-5"
            icon={faAppleAlt}
            style={{ color: "grey" }}
          />
          <select className="form-select">
            <option>Applications</option>
            <option>Applications 1</option>
            <option>Applications 2</option>
          </select>
        </div>
        <div className=" d-flex ml-lg-3">
          <FontAwesomeIcon
            className="mt-2 fs-5"
            icon={faFile}
            style={{ color: "grey" }}
          />
          <select className="form-select">
            <option>Pages</option>
            <option>Pages 1</option>
            <option>Pages 2</option>
          </select>
        </div>

        <br />
        <p className="main"> SECONDARY</p>
        <div className="d-flex ml-3 mb-2">
          <FontAwesomeIcon
            className=" fs-5 sec"
            icon={faQuestionCircle}
            style={{ color: "grey" }}
          />

          <h6 className="mx-2 sec ">Support Center</h6>
        </div>
        <div className="d-flex mx-3 mb-2 ">
          <FontAwesomeIcon
            className=" fs-5 sec"
            icon={faInbox}
            style={{ color: "grey" }}
          />
          <h6 className="mx-2 sec ">Inbox</h6>
        </div>
        <div className="d-flex mx-3 mb-2 ">
          <FontAwesomeIcon
            className=" fs-5 sec"
            icon={faFile}
            style={{ color: "grey" }}
          />
          <h6 className="mx-2 sec">File Manager</h6>
        </div>
        <div className="d-flex mx-3 mb-2 ">
          <FontAwesomeIcon
            className=" fs-5 sec"
            icon={faDatabase}
            style={{ color: "grey" }}
          />
          <h6 className="mx-2 sec ">Data List</h6>
        </div>
        <br />
        <br />
        <div className="d-flex mx-3 mb-2 ">
          <FontAwesomeIcon
            className=" fs-5 sec"
            icon={faCog}
            style={{ color: "grey" }}
          />
          <h6 className="mx-2 sec ">Settings</h6>
        </div>
        <div className="d-flex mx-3 mb-2 ">
          <FontAwesomeIcon
            className=" fs-5 sec"
            icon={faSignOutAlt}
            style={{ color: "grey" }}
          />
          <h6 className="mx-2 sec ">Log Out</h6>
        </div>
      </div>
    </>
  );
};

export default AdminP;
