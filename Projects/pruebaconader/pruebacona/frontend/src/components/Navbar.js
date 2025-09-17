import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
        <img src="/logo.svg" alt="Logo" width="32" height="32" style={{marginRight: '8px'}} />
        <span className="fw-bold">Gestiones</span>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link d-flex align-items-center gap-1" to="/">
              <i className="bi bi-house-door-fill"></i> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex align-items-center gap-1" to="/solicitudes">
              <i className="bi bi-journal-text"></i> Solicitudes
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex align-items-center gap-1" to="/tipos">
              <i className="bi bi-journal-text"></i> Tipos de Solicitud
            </Link>
          </li>
          


          <li className="nav-item dropdown">
            <button className="nav-link dropdown-toggle d-flex align-items-center gap-1 bg-transparent border-0" id="ayudaDropdown" data-bs-toggle="dropdown" aria-expanded="false" type="button">
              <i className="bi bi-question-circle-fill"></i> Ayuda
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="ayudaDropdown">
              
              <li>
                <Link className="dropdown-item d-flex align-items-center gap-1" to="/documentacion">
                  <i className="bi bi-info-circle-fill"></i> Documentación
                </Link>
              </li>
              <li>
                <Link className="dropdown-item d-flex align-items-center gap-1" to="/manual">
                  <i className="bi bi-book"></i> Manual de Usuario
                </Link>
              </li>
              <li>
                <Link className="dropdown-item d-flex align-items-center gap-1" to="/requisitos">
                  <i className="bi bi-book"></i> Requisitos y Conclusiones
                </Link>
              </li>
            </ul>
          </li>
            
        </ul>
      </div>
    </div>
  </nav>

);

export default Navbar;
