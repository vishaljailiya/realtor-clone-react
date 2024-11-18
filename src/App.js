import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import SingIn from "./pages/SingIn";
import SingUp from "./pages/SingUp";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import HeaderComponent from "./components/HeaderComponent";

const App = () => {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/sing-in" element={<SingIn />} />
        <Route path="/sing-up" element={<SingUp />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
