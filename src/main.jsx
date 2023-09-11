import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import BeatYourBestPage from "./components/BeatYourBestPage.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <div className=" bg-primary ">
      <div className=" bg-cover bg-no-repeat bg-center">
        <div className="relative z-0">
          <Routes>
       
            <Route path="/beatyourbest" element={<BeatYourBestPage />} />
            <Route path="/" element={<App />} />
          </Routes>
        </div>
      </div>
    </div>
  </BrowserRouter>
);
