import React from "react";
import AdminP from "./AdminP";
import Navbar from "./Navbar";
import Center from "./Center";
import Agtable from "./Agtable";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 ">
            <AdminP />
          </div>
          <div className="col-md-10 ">
            <Navbar />
            <section id="center">
              <Center />

              <div className="row w-75 m-auto">
                <Agtable />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
