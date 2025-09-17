// Componente para mostrar el listado de solicitudes.
// Permite buscar, filtrar, paginar, editar y eliminar solicitudes.
// Utiliza Bootstrap para estilos y React Context para acceder al estado global.
import React, { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import GestionForm from './GestionForm';
import { AppContext } from '../context/AppContext';

const GestionList = ({ onEdit }) => {
  const { solicitudes, deleteSolicitud, tipos } = useContext(AppContext);
  const [search, setSearch] = useState('');
  const [estado, setEstado] = useState('todos');
  const [showModal, setShowModal] = useState(false);
  const [editSolicitud, setEditSolicitud] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  // Filtrado por búsqueda y estado
  const filtered = Array.isArray(solicitudes) ? solicitudes.filter(s => {
    const matchSearch = s.nombre?.toLowerCase().includes(search.toLowerCase()) ||
      (s.descripcion && s.descripcion.toLowerCase().includes(search.toLowerCase()));
    const estadoSolicitud = (typeof s.estado === 'string' && s.estado) ? s.estado.toLowerCase() : 'activo';
    const matchEstado = estado === 'todos' || estadoSolicitud === estado.toLowerCase();
    return matchSearch && matchEstado;
  }) : [];

  // Paginación
  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginated = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  // Modal y lógica de edición
  const handleEditClick = (solicitud) => {
    setEditSolicitud(solicitud);
    setShowModal(true);
  };

  const handleEditSubmit = async (solicitudEditada) => {
    await onEdit(solicitudEditada);
    setShowModal(false);
    setEditSolicitud(null);
  };

  return (
    <div>
      <h2>Solicitudes</h2>
      <div className="row mb-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar por nombre o descripción..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <select className="form-select" value={estado} onChange={e => setEstado(e.target.value)}>
            <option value="todos">Todos</option>
            <option value="activo">Activos</option>
            <option value="inactivo">Inactivos</option>
          </select>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>No.</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Fecha</th>
              <th>Tipo</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((s, idx) => (
              <tr key={s.id}>
                <td>{(currentPage - 1) * pageSize + idx + 1}</td>
                <td>{s.nombre}</td>
                <td>{s.descripcion}</td>
                <td>{s.fecha}</td>
                <td>{tipos.find(t => t.id === s.tipoSolicitudId)?.nombre || '-'}</td>
                <td>{s.estado || 'activo'}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2" onClick={() => handleEditClick(s)}>Editar</button>
                  <button className="btn btn-danger btn-sm" onClick={() => deleteSolicitud(s.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {totalPages > 1 && (
        <nav className="d-flex justify-content-center my-3">
          <ul className="pagination">
            <li className={`page-item${currentPage === 1 ? ' disabled' : ''}`}>
              <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                Anterior
              </button>
            </li>
            {Array.from({ length: totalPages }).map((_, i) => (
              <li key={i} className={`page-item${currentPage === i + 1 ? ' active' : ''}`}>
                <button className="page-link" onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
              </li>
            ))}
            <li className={`page-item${currentPage === totalPages ? ' disabled' : ''}`}>
              <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
                Siguiente
              </button>
            </li>
          </ul>
        </nav>
      )}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Solicitud</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editSolicitud && (
            <GestionForm
              defaultValues={editSolicitud}
              tipos={tipos}
              onSubmit={handleEditSubmit}
            />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default GestionList;
//}

//export default GestionList;
