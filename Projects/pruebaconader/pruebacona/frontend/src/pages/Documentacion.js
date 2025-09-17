import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Documentacion = () => (
  <Container className="mt-5">
    <Row className="justify-content-center">
      <Col md={10}>
        <Card className="shadow-lg border-0">
          <Card.Body>
            <h1 className="mb-4 text-primary fw-bold">Documentación de la Aplicación</h1>
            <h3>Características</h3>
            <ul>
              <li>CRUD completo para Solicitudes y Tipos de Solicitud</li>
              <li>Eliminación lógica y validaciones en formularios</li>
              <li>Búsqueda, filtrado y paginación en listados</li>
              <li>Estado global con React Context y Hooks</li>
              <li>Backend RESTful con .NET Core y Entity Framework</li>
              <li>Estilos responsivos y atractivos con Bootstrap</li>
              <li>Documentación en los archivos principales</li>
            </ul>
            <h3>Instalación y Ejecución</h3>
            <h5>Backend (.NET Core)</h5>
            <pre><code>cd backend
dotnet restore
dotnet ef database update
dotnet run</code></pre>
            <h5>Frontend (React)</h5>
            <pre><code>cd frontend
npm install
npm start</code></pre>
            <h3>Uso de la Aplicación</h3>
            <ol>
              <li>Accede a <b>http://localhost:3000</b> ó (http://tudominio:3000)</li>
              
              <li>Navega entre Solicitudes y Tipos de Solicitud</li>
              <li>Realiza operaciones CRUD, búsqueda y filtrado</li>
              <li>Visualiza mensajes de validación y alertas</li>
            </ol>
            <h3>Documentación del Código</h3>
            <ul>
              <li>Todos los archivos principales incluyen comentarios explicativos.</li>
              <li>Los servicios y controladores están organizados por responsabilidad.</li>
              <li>Ejemplo de documentación en código:</li>
            </ul>
            <pre><code>{`// Formulario para agregar y editar solicitudes.
// Utiliza React Hook Form para validaciones y manejo de estado.`}</code></pre>
            <h3>Pruebas y Validación</h3>
            <ul>
              <li>Verifica que todas las operaciones CRUD funcionen correctamente.</li>
              <li>Revisa la experiencia visual y responsividad en diferentes dispositivos.</li>
              <li>Consulta los logs en la carpeta <b>backend/Logs</b> para depuración.</li>
            </ul>
            <h3>Archivos principales</h3>
            <h5>Frontend</h5>
            <ul>
              <li><b>AppContext.js</b> — Estado global y lógica de negocio.</li>
              <li><b>GestionForm.js</b> — Formulario de solicitudes.</li>
              <li><b>GestionList.js</b> — Listado de solicitudes.</li>
              <li><b>TipoSolicitudForm.js</b> — Formulario de tipos de solicitud.</li>
              <li><b>TipoSolicitudList.js</b> — Listado de tipos de solicitud.</li>
              <li><b>solicitudesService.js</b> — Servicio para solicitudes (API).</li>
              <li><b>tiposSolicitudService.js</b> — Servicio para tipos de solicitud (API).</li>
              <li><b>Home.js</b> — Página principal.</li>
              <li><b>Solicitudes.js</b> — Página de solicitudes.</li>
              <li><b>TiposSolicitud.js</b> — Página de tipos de solicitud.</li>
            </ul>
            <h5>Backend</h5>
            <ul>
              <li><b>GestionesDbContext.cs</b> — Contexto de base de datos.</li>
              <li><b>Solicitud.cs</b> — Modelo de solicitud.</li>
              <li><b>TipoSolicitud.cs</b> — Modelo de tipo de solicitud.</li>
              <li><b>SolicitudesController.cs</b> — API de solicitudes.</li>
              <li><b>TiposSolicitudController.cs</b> — API de tipos de solicitud.</li>
            </ul>
            <h3>Créditos</h3>
            <p>Desarrollado por <b>Josue Daniel Ajpacajá Santos</b><br/>Fecha: Septiembre 2025</p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Documentacion;
