import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import DefaultLayout from "../components/Layouts/Default";
import Feeds from "../pages/Feeds";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="home" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="feeds" element={<Feeds />} />
      </Route>
    </Routes>
  );
};

export default MainRoute;
