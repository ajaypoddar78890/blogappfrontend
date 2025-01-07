import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./componants/Header";
import Hero from "./componants/Hero";
import LogoCarousel from "./componants/clientcarousel";
import Register from "./componants/regiter";
import Login from "./componants/Login";
import Blog from "./componants/blog";

import "./App.css";

function App() {
  return (
    <div className="App overflow-hidden">
      {/* /* Define routes for different pages */}
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <LogoCarousel />
            </>
          }
        />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
