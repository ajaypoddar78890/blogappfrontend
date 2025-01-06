import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./componants/Header";
import Hero from "./componants/Hero";
import LogoCarousel from "./componants/clientcarousel";
import Register from "./componants/regiter";
import Login from "./componants/Login";

import "./App.css";

function App() {
  return (
    <div className="App overflow-hidden">
      {/* /* Define routes for different pages */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <LogoCarousel />
            </>
          }
        />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
