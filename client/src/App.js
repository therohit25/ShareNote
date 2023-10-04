import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Books from './pages/Books';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Reviews from './pages/Reviews';
import Login from './pages/Login';
import Register from './pages/Register';
import React, { useEffect, useState } from 'react';
import './css/font.css'
import axios from 'axios';
import Preview from './pages/Preview';
import Logout from './pages/Logout';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import { useSelector, useDispatch } from 'react-redux';
import { login } from './features/LoginLogout/LoginLogout';




function App() {
  const dispatch = useDispatch();

  let colour = "";

  axios.defaults.withCredentials = true;
  const userdetails = useSelector((state) => state.user.value)


  if (!localStorage.getItem("Mode")) {
    localStorage.setItem("Mode", "success")
  }
  colour = localStorage.getItem("Mode");
  const [mode, setMode] = useState(colour);

  const toggleMode = () => {

    if (mode === "success") {
      localStorage.setItem("Mode", "dark")
      setMode("dark")
    }
    else {
      localStorage.setItem("Mode", "success")
      setMode("success");
    }
  }

  useEffect(() => {

    axios.get("http://localhost:3002/user/sendUserDetails")
      .then((res) => {

        if (res) {
          dispatch(login({
            userid: res.data[0]._id,
            username: res.data[0].Fullname,
            loggedIn: true,
          }));

        }
      }).catch((err) => console.log(err));
  }, [])


  return (
    <>

      <BrowserRouter>

        <Header toggleMode={toggleMode} mode={mode} />
        {/* <Navbar toggleMode={toggleMode} mode={mode} /> */}
        <div className="container-fluid-lg">
          <Routes>


            <Route exact path='/' element={<Home />}>
            </Route>

            <Route exact path='/about' element={<About />}>
            </Route>

            <Route exact path='/contact' element={<Contact />}>
            </Route>

            <Route element={<ProtectedRoute isAuthenticated={userdetails?.loggedIn} />}>

              <Route exact path='/books' element={<Books />} />
              <Route exact path='/Reviews/:BookId' element={<Reviews />} />
              <Route exact path='/Preview/:PdfUrl' element={<Preview />} />

            </Route>
            {/* <Route exact path='/books' element={userdetails?.loggedIn === true ? <Books /> : <Login />} >
            </Route>

            <Route exact path='/Reviews/:BookId' element={userdetails?.loggedIn === true ? <Reviews /> : <Login />}>

            </Route>
            <Route exact path='/Preview/:PdfUrl' element={userdetails?.loggedIn === true ? <Preview /> : <Login />}>

            </Route> */}

            <Route exact path='/Login' element={<Login />}>

            </Route>
            <Route exact path='/Logout' element={<Logout />}>

            </Route>
            <Route exact path='/Register' element={<Register />}>

            </Route>

          </Routes>

        </div>
        <Footer mode={mode} />
      </BrowserRouter >

    </>
  );
}

export default App;
