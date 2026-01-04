import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Aboutme from "./components/Aboutme";
import Footer from "./components/Footer";
import bg from "./assets/img/bg.png";
function App() {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${bg})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
  }, []);

  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/aboutme" element={<Aboutme />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
