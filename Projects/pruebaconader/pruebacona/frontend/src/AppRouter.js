import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Solicitudes from './pages/Solicitudes';
import TiposSolicitud from './pages/TiposSolicitud';
import Documentacion from './pages/Documentacion';
import ManualUsuario from './pages/ManualUsuario';
import RequisitosConclusiones from './pages/RequisitosConclusiones';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const AppRouter = ({ onEditSolicitud, onEditTipo }) => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/solicitudes" element={<Solicitudes onEdit={onEditSolicitud} />} />
      <Route path="/tipos" element={<TiposSolicitud onEdit={onEditTipo} />} />
      <Route path="/documentacion" element={<Documentacion />} />
      <Route path="/manual" element={<ManualUsuario />} />
      <Route path="/requisitos" element={<RequisitosConclusiones />} />
    </Routes>
    <Footer />
  </Router>
);

export default AppRouter;
