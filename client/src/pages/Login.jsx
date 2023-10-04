import React from "react";
import axios from "axios";
import swal from "sweetalert";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/LoginLogout/LoginLogout";

function Login() {
  const dispatch = useDispatch();

  const [lemail, setLemail] = useState("");

  const [lpassword, setLpassword] = useState("");

  const SignInSub = () => {
    let ip = { lEmail: lemail, lPassword: lpassword };

    axios.defaults.withCredentials = true;
    axios
      .post("http://localhost:3002/user/signinform", ip)
      .then((res) => {
        if (
          res.data.msg == "Wrong Credentials!.." ||
          res.data.msg == "User doesn't Exists"
        ) {
          swal({
            text: res.data.msg,
          });
        } else {
          swal({
            text: "Successfully Logged In",
          });
          dispatch(
            login({
              userid: res.data[0]._id,
              username: res.data[0].Fullname,
              loggedIn: true,
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center h-100 p-4 bg-dark bg-opacity-10">
      <form className="w-25 my-3">
        <p className="fw-bold fs-3 text-primary text-center semi-heading text-uppercase">
          Login <i className="fas fa-tools px-1"></i>
        </p>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={lemail}
            onChange={(e) => {
              setLemail(e.target.value);
            }}
            placeholder="john02@xyz.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={lpassword}
            onChange={(e) => {
              setLpassword(e.target.value);
            }}
            placeholder="8-10 characters"
          />
        </div>

        <button
          type="button"
          className="btn btn-primary w-100 my-3"
          onClick={SignInSub}
        >
          Submit
        </button>
        <Link
          to="/Register"
          className="fs-6 text-decoration-underline my-2 btn text-primary"
        >
          Create New Account
        </Link>
      </form>
    </div>
  );
}

export default Login;
