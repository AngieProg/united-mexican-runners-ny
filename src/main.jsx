import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Capi from "./sections/Capi.jsx";
import Team from "./components/Team.jsx";
import Entrenadores from "./sections/Entrenadores.jsx";
import Contacto from "./sections/Contacto.jsx";
import EnglishMain from "./sections/EnglishVersion/EnglishMain.jsx";
import TeamEnglish from "./sections/EnglishVersion/TeamEnglish.jsx";
import CapiEnglish from "./sections/EnglishVersion/CapiEnglish.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/english" element={<EnglishMain />} />
        <Route path="/capi" element={<Capi />} />
        <Route path="/capi-english" element={<CapiEnglish />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team-english" element={<TeamEnglish />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/entrenadores" element={<Entrenadores />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
