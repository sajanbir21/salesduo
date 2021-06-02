import React from "react";
import Barc from "./Barc";
import Areac from "./Areac";
import Agtable from "./Agtable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const Center = () => {
  return (
    <>
    <div className="container.md">
      <div className=" d-flex  flex-wrap justify-content-center">
        <div className="col-md-4 tbn mt-4">
          <div className="bc">
            <div className=" d-flex flex-wrap justify-content-between">
              <h6 className="ml-2 mt-3">Total Income</h6>
              <FontAwesomeIcon
                className="mt-3 mr-2 fs-5"
                icon={faEllipsisH}
                style={{ color: "grey" }}
              />
            </div>

            <div className="d-flex  flex-wrap mx-2 mt-2">
            <p className="fs-3 mt-2">$1240.00</p>
              <button className="m-auto pb">+6.5%</button>
            </div>
            <div className="progress mx-2 mt-2">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h6 className="ml-2 mt-2">Yearly Goal</h6>
          </div>
          <div className=" mt-4 bc  ">
            <div className=" d-flex flex-wrap justify-content-between">
              <h6 className="ml-2 mt-3">New Users</h6>
              <FontAwesomeIcon
                className="mt-3 mr-2 fs-5"
                icon={faEllipsisH}
                style={{ color: "grey" }}
              />
            </div>

            <div className=" d-flex justify-content-start mx-2 mt-2">
            <p className="fs-3 mt-2">95%</p>
              <button className="m-auto pb">+6.5%</button>
            </div>

            <Barc />
          </div>
        </div>

        <div className="bc col-md-4 tbn order-lg-0 mt-4 mx-4">
          <div className=" d-flex flex-wrap  justify-content-between">
            <div className="mt-3 mx-3">
              <h3>Balance</h3>
            </div>
            <div className="mt-3 mx-3">
              <select className="form-select form ">
                <option>Monthly</option>
                <option>Quarterly</option>
                <option>Yearly</option>
              </select>
            </div>
          </div>
          <hr />
          <div className=" d-flex  justify-content-between ">
            <div className="card m-3 m-lg-3 w-75">
              <div className="card-body w-75">
                Earnings
                <div className=" d-flex flex-wrap">
                <p className="fs-3 mt-2">40%</p>
                  <button className="m-auto pb">+6.5%</button>
                </div>
              </div>
            </div>
            <div className="card m-3 m-3 w-75">
              <div className="card-body">
                Sales Value
                <div className=" d-flex flex-wrap">
                  <p className="fs-3 mt-2">$95,00</p>
                  <button className="m-auto pb">+6.5%</button>
                </div>
              </div>
            </div>
          </div>
          <Areac />
        </div>
      </div>
      </div>
    </>
  );
};

export default Center;
