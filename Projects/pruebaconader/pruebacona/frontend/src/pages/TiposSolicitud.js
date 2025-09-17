// Página para gestionar los tipos de solicitud.
// Permite crear, editar, eliminar y listar tipos de solicitud usando componentes y contexto global.
// Utiliza Bootstrap para estilos y React Hook Form para validaciones.
import React from 'react';
import { AppContext } from '../context/AppContext';
import { Container, Row, Col, Card } from 'react-bootstrap';
import TipoSolicitudForm from '../components/TipoSolicitudForm';
import TipoSolicitudList from '../components/TipoSolicitudList';
import { getTiposSolicitud } from '../services/tiposSolicitudService';
import styles from './TiposSolicitud.module.css';

const TiposSolicitud = ({ onEdit }) => {
  // Usar el contexto si existe para mantener sincronía
  const { tipos: tiposContext, addTipo, updateTipo, fetchTiposSolicitud } = React.useContext(AppContext);
  const [tipos, setTipos] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState("");

  const fetchTipos = async () => {
    setLoading(true);
    try {
      const res = await getTiposSolicitud();
      setTipos(res.data);
    } catch (err) {
      // Puedes mostrar un error aquí si lo deseas
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchTipos();
  }, []);

  // Sincronizar tipos con el contexto si cambia
  React.useEffect(() => {
    if (tiposContext && Array.isArray(tiposContext)) {
      setTipos(tiposContext);
    }
  }, [tiposContext]);

  // Sincronizar tipos con el contexto si cambia
  React.useEffect(() => {
    if (tiposContext && Array.isArray(tiposContext)) {
      setTipos(tiposContext);
    }
  }, [tiposContext]);

  const handleCreate = async (data) => {
    setLoading(true);
    setSuccess(false);
    setError("");
    const tipoConEstado = {
      ...data,
      estado: data.estado || "activo"
    };
    try {
      await addTipo(tipoConEstado);
      setSuccess(true);
      await fetchTiposSolicitud();
    } catch (err) {
      setError("Error al guardar. Verifica los datos o la conexión.");
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(false), 2000);
      setTimeout(() => setError(""), 3000);
    }
  };

  // Nueva función para "eliminar" (marcar como inactivo)
  const handleDelete = async (id) => {
    setLoading(true);
    setError("");
    try {
      const tipoActual = tiposContext.find(t => t.id === id);
      if (!tipoActual) throw new Error("Tipo no encontrado");
      const tipoActualizado = {
        ...tipoActual,
        estado: "inactivo"
      };
      await updateTipo(id, tipoActualizado);
      await fetchTiposSolicitud();
    } catch (err) {
      setError("Error al eliminar. Verifica la conexión.");
    } finally {
      setLoading(false);
      setTimeout(() => setError("") , 3000);
    }
  };

  // Función para editar y refrescar la lista
  const handleEdit = async (tipoEditado) => {
    setLoading(true);
    setError("");
    try {
      await updateTipo(tipoEditado.id, tipoEditado);
      await fetchTiposSolicitud();
    } catch (err) {
      setError("Error al editar. Verifica la conexión.");
    } finally {
      setLoading(false);
      setTimeout(() => setError("") , 3000);
    }
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center mb-4">
        <Col md={10}>
          <div className={styles['fade-in']}>
            <Card className="shadow-lg border-0">
              <Card.Body>
                <h2 className="mb-3 text-success fw-bold"><i className="bi bi-tags-fill me-2"></i>Gestión de Tipos de Solicitud</h2>
                <TipoSolicitudForm onSubmit={async (data) => {
                  await handleCreate(data);
                  await fetchTipos();
                }} />
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
                {loading ? <div className="text-center"><span className="spinner-border text-success"></span> Cargando...</div> : <TipoSolicitudList onEdit={handleEdit} tipos={tipos} onDelete={handleDelete} />}
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TiposSolicitud;
