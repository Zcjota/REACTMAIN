import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.js";
import Materiales from "./Materiales";
import Nosotros from "./Templates/Nosotros.js";
import Inicio from "./Templates/Inicio.js";
import { Model_inicio } from "./Materiales/Model_inicio.js";
import Vista_Auditorio from "./Templates/vistas/Vista_Auditorio";
import Vista_Baño from "./Templates/vistas/Vista_Baño";
import Vista_Biblioteca from "./Templates/vistas/Vista_Biblioteca";
import Vista_Cafeteria from "./Templates/vistas/Vista_Cafeteria";
import Vista_Coliseo from "./Templates/vistas/Vista_Coliseo";
import Vista_Laboratorio_Quimica from "./Templates/vistas/Vista_Laboratorio_Quimica";
import Vista_Laboratorio from "./Templates/vistas/Vista_Laboratorio";
import Vista_Medicina from "./Templates/vistas/Vista_Medicina";
import Vista_Modelo3D_Universidad from "./Templates/vistas/Vista_Modelo3D_Universidad.js";
import "../src/globals.css"; // Ajusta la ruta según sea necesario

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Materiales" element={<Materiales />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route
          path="/Modelo3D_Universidad"
          element={<Vista_Modelo3D_Universidad />}
        />
        <Route path="/Modelo3D-Auditorio" element={<Vista_Auditorio />} />
        <Route path="/Modelo3D-Biblioteca" element={<Vista_Biblioteca />} />
        <Route path="/Modelo3D-Cafeteria" element={<Vista_Cafeteria />} />
        <Route path="/Modelo3D-Baños" element={<Vista_Baño />} />
        <Route path="/Modelo3D-Coliseo" element={<Vista_Coliseo />} />
        <Route path="/Modelo3D-Laboratorio" element={<Vista_Laboratorio />} />
        <Route
          path="/Modelo3D-Laboratorio_Quimica"
          element={<Vista_Laboratorio_Quimica />}
        />
        <Route path="/Modelo3D-Medicina" element={<Vista_Medicina />} />
        <Route path="/Modelo3D-Pasillos" element={<Model_inicio />} />
        <Route path="/Modelo3D-Patio" element={<Model_inicio />} />
      </Routes>
    </Router>
  );
}
