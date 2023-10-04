import React from "react";
import axios from "axios";
import swal from "sweetalert";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  let regname = /^[a-zA-Z]+ [a-zA-Z]+$/;
  let regemail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  var regpass =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [nameerror, setNameerror] = useState("");
  const [emailerror, setEmailerror] = useState("");
  const [passerror, setPasserror] = useState("");
  const [cpasserror, setCpasserror] = useState("");

  const SignUpSub = () => {
    if (!nameerror && !emailerror && !passerror && !cpasserror) {
      console.log(fullName);
      console.log(email);
      let ip = {
        Fullname: fullName,
        Email: email,
        Password: password,
        // CPassword: cpassword,
      };
      console.log(ip);

      axios
        .post("http://localhost:3002/user/signupform", ip)
        .then((res) => {
          if (res) {
            swal({
              text: "Successfully Registered",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center h-100 p-3 bg-dark bg-opacity-10">
      <form className="w-25">
        <p className="fw-bold fs-3 text-primary text-center py-3 semi-heading text-uppercase">
          Register<i className="fas fa-user-plus px-2"></i>
        </p>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              if (fullName.match(regname)) {
                setNameerror("");
              } else {
                setNameerror("Please Enter Your Full Name!..");
              }
            }}
            placeholder="Your Name"
          />
          {nameerror && <small className="form-text">{nameerror}</small>}
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (email.match(regemail)) {
                setEmailerror("");
              } else {
                setEmailerror("Please Enter Valid Email!..");
              }
            }}
            placeholder="Your Email"
          />
          {emailerror && <small className="form-text">{emailerror}</small>}
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="passwd"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (password.match(regpass)) {
                setPasserror("");
              } else {
                setPasserror("Please Enter a strong password..!");
              }
            }}
            placeholder="Enter 8-10 Characters Password"
          />
          {passerror && <small className="form-text">{passerror}</small>}
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="cpasswd"
            value={cpassword}
            onChange={(e) => {
              setCpassword(e.target.value);

              if (cpassword === password) {
                setCpasserror("");
              } else {
                setCpasserror("Password do not match!..");
              }
            }}
            placeholder="Re-enter Password"
          />
          {cpasserror && <small className="form-text">{cpasserror}</small>}
        </div>
        <button
          type="button"
          className="btn btn-primary w-100 my-3"
          onClick={SignUpSub}
        >
          Submit
        </button>
        <Link
          to="/Login"
          className="fs-6 text-decoration-underline my-2 btn text-primary"
        >
          Already Have Account?
        </Link>
      </form>
    </div>
  );
}

export default Register;
