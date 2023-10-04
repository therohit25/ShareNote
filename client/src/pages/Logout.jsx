import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

import { useDispatch } from "react-redux";
import { logout } from "../features/LoginLogout/LoginLogout";

function Logout() {
  const navigateto = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3002/user/logout")
      .then((res) => {
        dispatch(logout());
        swal({
          timer: 5000,
          title: "Logging Out!.....",
        });
      })
      .then(() => navigateto("/"));
  }, []);
}

export default Logout;
