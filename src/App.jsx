import React from "react";
import Login from "./user/Login";
import SignUp from "./user/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./user/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const routes = (
  <Router>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
    </Routes>
  </Router>
);

const App = () => {
  return <div>{routes}</div>;
};

export default App;
