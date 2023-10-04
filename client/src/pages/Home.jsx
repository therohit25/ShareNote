import React from "react";

import { Link } from "react-router-dom";
import Hacking from "../images/Hacking.jpg";

import Ds from "../images/ds.jpg";

function Home() {
  return (
    <div className="container-fluid-lg">
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2069&q=80"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block p-5">
              <h5 className="semi-heading">HACKING </h5>
              <p>Learn Ethical Hacking for being superior in Internet WorlD.</p>
              <Link to="/Register">
                {" "}
                <button
                  type="button"
                  className="btn btn-outline-primary me-md-2 text-uppercase"
                  data-bs-toggle="modal"
                  data-bs-target="#SignUpModal"
                >
                  Join us
                </button>{" "}
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Hacking} className="d-block w-100" alt="..." />

            <div className="carousel-caption d-none d-md-block p-5">
              <h5 className="semi-heading">CODING</h5>
              <p>
                Learn Coding is and express the your views for betterment of
                WorlD.
              </p>
              <div className="container">
                <Link to="/Register">
                  {" "}
                  <button
                    type="button"
                    className="btn btn-outline-primary me-md-2 text-uppercase"
                    data-bs-toggle="modal"
                    data-bs-target="#SignUpModal"
                  >
                    Join us
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Ds} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block p-5">
              <h5 className="semi-heading">DATA SCIENCE </h5>
              <p>
                Learn about of Latest Algorithms for implementing optimized
                Solution !..
              </p>
              <div className="container">
                <Link to="/Register">
                  {" "}
                  <button
                    type="button"
                    className="btn btn-outline-primary me-md-2 text-uppercase"
                    data-bs-toggle="modal"
                    data-bs-target="#SignUpModal"
                  >
                    Join us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
