import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer className={`text-center text-lg-start text-white bg-${props.mode}`}>
      <div className=" container p-4 pb-0">
        <section>
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold semi-heading">
                ShareNotes <i class="fas fa-book-reader px-1"></i>
              </h6>
              <p>
                Here you can share any of your personal/handwritten or ebooks
                with needy ones, Download your favourite books for free, and
                give Reviews accordingly.
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold semi-heading">
                Quick Links
              </h6>
              <p>
                <Link className="nav-link text-decoration-underline" to="/">
                  Home
                </Link>
              </p>
              <p>
                <Link
                  className="nav-link text-decoration-underline"
                  to="/Books"
                >
                  Books
                </Link>
              </p>
              <p>
                <Link
                  className="nav-link text-decoration-underline"
                  to="/About"
                >
                  About
                </Link>
              </p>
              <p>
                <Link
                  className="nav-link text-decoration-underline"
                  to="/Contact"
                >
                  Contact
                </Link>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold semi-heading">
                Meet Us
              </h6>
              <p>
                <i className="fas fa-home mr-3"></i> New York, NY 10012, US
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> info@gmail.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print mr-3"></i> + 01 234 567 89
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold semi-heading">
                Follow us
              </h6>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#3b5998" }}
                href="/"
                role="button"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#55acee" }}
                href="/"
                role="button"
              >
                <i className="fab fa-twitter"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#dd4b39" }}
                href="/"
                role="button"
              >
                <i className="fab fa-google"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#ac2bac" }}
                href="/"
                role="button"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#0082ca" }}
                href="/"
                role="button"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#333333" }}
                href="/"
                role="button"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </section>
      </div>

      <div
        className="text-center semi-heading p-3"
        style={{ backgroundColor: " rgba(0, 0, 0, 0.2)" }}
      >
        &copy; Reserved Rohit
        <a className="text-white nav-link semi-heading d-inline" href="/">
          ShareNotes <i class="fas fa-book-reader px-1"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
