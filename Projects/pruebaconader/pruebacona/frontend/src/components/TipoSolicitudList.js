// Componente para mostrar el listado de tipos de solicitud.
// Permite buscar, filtrar, paginar, editar y eliminar tipos de solicitud.
// Utiliza Bootstrap para estilos y React Context para acceder al estado global.
import React, { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import TipoSolicitudForm from './TipoSolicitudForm';
import { AppContext } from '../context/AppContext';

const TipoSolicitudList = ({ onEdit, onDelete }) => {
  const { tipos } = useContext(AppContext);
  const [search, setSearch] = useState('');
  const [estado, setEstado] = useState('todos');
  const [showModal, setShowModal] = useState(false);
  const [editTipo, setEditTipo] = useState(null);

  // Filtrado por búsqueda y estado
  const filtered = Array.isArray(tipos) ? tipos.filter(tipo => {
    const matchSearch = tipo.nombre?.toLowerCase().includes(search.toLowerCase()) ||
      (tipo.descripcion && tipo.descripcion.toLowerCase().includes(search.toLowerCase()));
    let estadoTipo = (typeof tipo.estado === 'string' && tipo.estado) ? tipo.estado.toLowerCase() : 'activo';
    // Normalizar posibles valores
    if (estadoTipo === 'inactivo' || estadoTipo === 'inactiva') estadoTipo = 'inactivo';
    if (estadoTipo === 'activo' || estadoTipo === 'activa') estadoTipo = 'activo';
    const matchEstado = estado === 'todos' || estadoTipo === estado.toLowerCase();
    return matchSearch && matchEstado;
  }) : [];

  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginated = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  // Modal y lógica de edición
  const handleEditClick = (tipo) => {
    setEditTipo(tipo);
    setShowModal(true);
  };

  const handleEditSubmit = async (tipoEditado) => {
    await onEdit(tipoEditado);
    setShowModal(false);
    setEditTipo(null);
    setTimeout(() => {
      if (typeof window !== 'undefined') window.dispatchEvent(new Event('resize'));
    }, 100);
  };

  return (
    <div>
      <h2>Tipos de Solicitud</h2>
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
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>No.</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map((tipo, idx) => (
            <tr key={tipo.id}>
              <td>{(currentPage - 1) * pageSize + idx + 1}</td>
              <td>{tipo.nombre}</td>
              <td>{tipo.descripcion}</td>
              <td>{tipo.estado ? tipo.estado : 'Activo'}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEditClick(tipo)}>Editar</button>
                <button className="btn btn-danger btn-sm" onClick={() => onDelete(tipo.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
          <Modal.Title>Editar Tipo de Solicitud</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editTipo && (
            <TipoSolicitudForm
              defaultValues={editTipo}
              onSubmit={handleEditSubmit}
            />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TipoSolicitudList;
