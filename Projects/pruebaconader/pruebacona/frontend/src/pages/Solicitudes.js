// Página para gestionar las solicitudes.
// Permite crear, editar, eliminar y listar solicitudes usando componentes y contexto global.
// Utiliza Bootstrap para estilos y React Hook Form para validaciones.
import React, { useContext, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import GestionForm from '../components/GestionForm';
import { AppContext } from '../context/AppContext';
import GestionList from '../components/GestionList';
import styles from './Solicitudes.module.css';

const Solicitudes = () => {
  const { solicitudes, updateSolicitud, addSolicitud, fetchSolicitudes, tipos } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Función para editar y refrescar la lista
  const handleEdit = async (solicitudEditada) => {
    setLoading(true);
    setError("");
    try {
      await updateSolicitud(solicitudEditada.id, solicitudEditada);
      await fetchSolicitudes();
      setSuccess(true);
    } catch (err) {
      setError("Error al editar. Verifica la conexión.");
    } finally {
      setLoading(false);
      setTimeout(() => setError("") , 3000);
      setTimeout(() => setSuccess(false), 2000);
    }
  };

  // Crear solicitud y refrescar la lista
  const handleCreate = async (nuevaSolicitud) => {
    setLoading(true);
    setError("");
    try {
      await addSolicitud(nuevaSolicitud);
      if (fetchSolicitudes) await fetchSolicitudes();
      setSuccess(true);
    } catch (err) {
      setError("Error al guardar. Verifica la conexión.");
    } finally {
      setLoading(false);
      setTimeout(() => setError("") , 3000);
      setTimeout(() => setSuccess(false), 2000);
    }
  };

  const handleDelete = () => {};

  return (
    <Container className="mt-4">
      <Row className="justify-content-center mb-4">
        <Col md={10}>
          <div className={styles['fade-in']}>
            <Card className="shadow-lg border-0">
              <Card.Body>
                <h2 className="mb-3 text-primary fw-bold"><i className="bi bi-journal-text me-2"></i>Gestión de Solicitudes</h2>
                <GestionForm onSubmit={handleCreate} tipos={tipos} />
                {success && (
                  <div className="alert alert-success mt-3" role="alert">
                    <i className="bi bi-check-circle-fill me-2"></i>Guardado correctamente
                  </div>
                )}
                {error && (
                  <div className="alert alert-danger mt-3" role="alert">
                    <i className="bi bi-exclamation-triangle-fill me-2"></i>{error}
                  </div>
                )}
                <hr />
                {loading ? <div className="text-center"><span className="spinner-border text-primary"></span> Cargando...</div> : <GestionList onEdit={handleEdit} solicitudes={solicitudes} onDelete={handleDelete} tipos={tipos} />}
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Solicitudes;
