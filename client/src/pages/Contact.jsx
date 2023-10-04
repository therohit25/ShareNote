import React from "react";
import axios from "axios";
import swal from "sweetalert";
import { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [commment, setCommment] = useState("");
  const contact_sub = () => {
    let ip = { Email: email, Subject: subject, Commment: commment };
    console.log(ip);

    axios
      .post("http://localhost:3002/user/contactform", ip)
      .then((res) => {
        swal({
          text: "Thank You For your Valuable Feedback",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="container-fluid-lg">
        <div className="container-fluid-lg">
          <div className="row w-100 m-0">
            <div
              className="col-md-4 bg-dark d-flex justify-content-center align-items-center"
              style={{ opacity: "0.8" }}
            >
              <div className="contact-info text-light">
                <div className="d-flex justify-content-center align-items-center w-100">
                  <iframe
                    width="250"
                    title="Address"
                    height="250"
                    frameborder="0"
                    src="https://www.bing.com/maps/embed?h=250&w=250&cp=17.675427818339386~73.83499145507812&lvl=11&typ=s&sty=r&src=SHELL&FORM=MBEDV8"
                    scrolling="no"
                  ></iframe>
                </div>
                <h4 className="text-center semi-heading p-2">
                  We would love to hear from you !
                </h4>
              </div>
            </div>
            <div className="col-md-8">
              <form className="my-4">
                <div className="contact-form py-4 mx-4">
                  <div className="d-flex gap-2  align-items-center">
                    <i className="fas fa-envelope mr-3 fa-3x"></i>
                    <h2 className="semi-heading text-primary text-uppercase">
                      Contact Us
                    </h2>
                  </div>
                  <div className="form-group">
                    <label
                      className="control-label col-sm-2"
                      htmlFor="email"
                      name="email"
                    >
                      Email:
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        name="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label
                      className="control-label col-sm-2"
                      htmlFor="subject"
                      name="subject"
                    >
                      Subject:
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        id="lname"
                        placeholder="Enter Subject"
                        name="subject"
                        value={subject}
                        onChange={(e) => {
                          setSubject(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label
                      className="control-label col-sm-2"
                      htmlFor="comment"
                      name="comment"
                    >
                      Comment:
                    </label>
                    <div className="col-sm-10">
                      <textarea
                        className="form-control"
                        rows="5"
                        id="comment"
                        value={commment}
                        onChange={(e) => {
                          setCommment(e.target.value);
                        }}
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-group my-2">
                    <div className="col-sm-offset-2 col-sm-10">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={(e) => {
                          e.preventDefault();
                          contact_sub();
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
