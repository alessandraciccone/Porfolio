import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Aboutme from "./components/Aboutme";
import Footer from "./components/Footer";
import CorgiConnection from "./components/CorgiConnection";
import Contatti from "./components/Contatti";
import GDrop from "./components/GDrop";
import MovieRandom from "./components/MovieRandom";
import HappyMeteo from "./components/HappyMeteo";
import Netflix from "./components/Netflix";
import DermaCode from "./components/DermaCode";
import RapportoPro from "./components/RapportoPro";
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
          <Route path="/projects/corgi" element={<CorgiConnection />} />
          <Route path="/projects/gamedrop" element={<GDrop />} />
          <Route path="/projects/movierandom" element={<MovieRandom />} />
          <Route path="/projects/happymeteo" element={<HappyMeteo />} />
          <Route path="/projects/happymeteo" element={<HappyMeteo />} />

          <Route path="/projects/netflix" element={<Netflix />} />

          <Route path="/projects/dermacode" element={<DermaCode />} />
          <Route path="/projects/rapportopro" element={<RapportoPro />} />

          <Route path="/contact" element={<Contatti />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
