import React from "react";
import userprofile from "../images/userprofile.png";

function About() {
  return (
    <div>
      <div className="aboutus-secktion paddingTB60 my-5">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6"
              style={{ borderRight: "2px solid rgba(168, 90, 221, 0.671)" }}
            >
              <h1 className="strong semi-heading text-uppercase text-primary">
                Who we are and
                <br />
                what we do
              </h1>
              <p className="lead">
                This is the world's leading portal for
                <br />
                easy exploration of Quality,unique notes.{" "}
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Here you can share any of your personal/handwritten or ebooks
                with needy ones, Download your favourite books for free, and
                give Reviews accordingly.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container team-sektion paddingTB60 my-5">
        <div className="row">
          <div className="site-heading text-center">
            <h3 className="semi-heading text-uppercase text-primary text-uppercase">
              Our Motto
            </h3>
            <p>
              We are here to capture your attention towards reading books with
              others in our Community <br /> Understanding, Makes Everything
              from can't to Can!..{" "}
            </p>

            <div className="border"></div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 team-box">
            <div className="team-img thumbnail text-center">
              <img
                alt="Img"
                src={userprofile}
                className="img-fluid my-5 w-50 "
              />

              <div className="team-content" align="center">
                <h3 className="semi-heading text-uppercase text-primary text-uppercase">
                  Rohit Ghadage
                </h3>
                <div className="border-team d-flex flex-column flex-wrap w-100 justify-content-center align-content-center">
                  <div className="w-100">Software Developer</div>
                  <div className="w-100 overflow-hidden">
                    React,Express,MongoDB,NodeJs,MySQL,PHP,etc
                  </div>
                </div>
                <div
                  align="center"
                  className="social-icons d-flex align-items-center justify-content-center gap-3 my-2 flex-wrap"
                >
                  <a href="https://in.linkedin.com/in/rohit-ghadage-6591161a4">
                    <i id="social-ln" className="fab fa-linkedin-in fa-2x"></i>
                  </a>

                  <a href="https://www.instagram.com/_the_rohit_25/">
                    <i id="social-tw" className="fab fa-instagram fa-2x"></i>
                  </a>
                  <a href="https://google.com/">
                    <i id="social-gp" className="fab fa-google fa-2x"></i>
                  </a>
                  <a href="mailto:rohitghadage40@gmail.com">
                    <i
                      id="social-em"
                      className="fa fa-envelope-square fa-2x social"
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
