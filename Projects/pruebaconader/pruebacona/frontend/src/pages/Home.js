// Página principal de la aplicación.
// Muestra bienvenida, navegación y resumen de funcionalidades.
// Utiliza Bootstrap para estilos modernos y responsivos.
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => (
  <Container className="mt-5">
    <Row className="justify-content-center mb-4">
      <Col md={8}>
        <div className={styles['fade-in']}>
          <Card className="shadow-lg text-center border-0 bg-white">
            <Card.Body>
              <img src="/logo.svg" alt="Logo" width="60" height="60" className="mb-3" />
              <Card.Title as="h1" className="mb-3 text-primary fw-bold">Bienvenido a la Gestión de Solicitudes</Card.Title>
              <Card.Text className="fs-5 text-secondary">
                Administra tus solicitudes y tipos de solicitud de manera fácil y rápida.<br/>
                Utiliza el menú para navegar entre los módulos principales.
              </Card.Text>
              <div className="d-flex justify-content-center gap-3 mt-4">
                <Button as={Link} to="/solicitudes" variant="primary" className="d-flex align-items-center gap-2">
                  <i className="bi bi-journal-text"></i> Solicitudes
                </Button>
                <Button as={Link} to="/tipos" variant="success" className="d-flex align-items-center gap-2">
                  <i className="bi bi-tags-fill"></i> Tipos de Solicitud
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </Row>
    <Row className="justify-content-center">
      <Col md={8}>
        <div className={styles['fade-in']}>
          <Card className="border-0 shadow-sm mt-4">
            <Card.Header className="bg-info text-white fs-5 fw-bold">
              <i className="bi bi-info-circle-fill me-2"></i>¿Qué puedes hacer aquí?
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled fs-5 text-secondary">
                <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Registrar, editar y eliminar solicitudes.</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Gestionar tipos de solicitud y su estado.</li>
                <li className="mb-2"><i className="bi bi-search text-primary me-2"></i>Buscar y filtrar información fácilmente.</li>
                <li className="mb-2"><i className="bi bi-bootstrap-fill text-info me-2"></i>Interfaz moderna y responsiva con Bootstrap.</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Home;
