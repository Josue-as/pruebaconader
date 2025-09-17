import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ManualUsuario = () => (
  <Container className="mt-5">
    <Row className="justify-content-center">
      <Col md={10}>
        <Card className="shadow-lg border-0">
          <Card.Body>
            <h1 className="mb-4 text-success fw-bold">Manual de Usuario</h1>
            <h3>Bienvenido</h3>
            <p>Este manual te ayudará a utilizar la aplicación de Gestión de Solicitudes de manera eficiente y segura.</p>
            <h3>Módulos principales</h3>
            <ul>
              <li><b>Home:</b> Página de inicio y navegación.</li>
              <li><b>Solicitudes:</b> Registro, edición, eliminación lógica, búsqueda y filtrado de solicitudes.</li>
              <li><b>Tipos de Solicitud:</b> Gestión de los tipos, edición, eliminación y filtrado.</li>
              <li><b>Documentación:</b> Información técnica y de instalación.</li>
            </ul>
            <h3>Operaciones básicas</h3>
            <ol>
              <li><b>Agregar:</b> Completa el formulario y presiona "Guardar". Todos los campos obligatorios deben estar llenos.</li>
              <li><b>Editar:</b> Haz clic en el botón <span className="badge bg-warning text-dark">Editar</span> junto al registro y modifica los datos.</li>
              <li><b>Eliminar:</b> Haz clic en <span className="badge bg-danger">Eliminar</span> para marcar el registro como inactivo (no se borra físicamente).</li>
              <li><b>Buscar y filtrar:</b> Usa la barra de búsqueda y los selectores de estado para encontrar registros específicos.</li>
            </ol>
            <h3>Recomendaciones de uso</h3>
            <ul>
              <li>Verifica que los datos ingresados sean correctos antes de guardar.</li>
              <li>Utiliza los filtros para encontrar información rápidamente.</li>
              <li>Consulta la sección de Documentación para detalles técnicos y solución de problemas.</li>
            </ul>
            <h3>Preguntas Frecuentes (FAQ)</h3>
            <ul>
              <li><b>¿Cómo recupero un registro eliminado?</b> Los registros eliminados quedan como "inactivos" y pueden ser visualizados usando el filtro de estado.</li>
              <li><b>¿Qué hago si la app no carga?</b> Verifica la conexión al backend y la base de datos. Consulta la Documentación.</li>
              <li><b>¿Puedo modificar los tipos de solicitud?</b> Sí, desde el módulo correspondiente puedes editar y eliminar tipos.</li>
            </ul>
              <h3>Errores comunes y cómo solucionarlos</h3>
              <ul>
                <li><b>No se puede guardar un registro:</b> Revisa que todos los campos obligatorios estén completos y que los datos sean válidos.</li>
                <li><b>No aparecen registros en la lista:</b> Verifica que no estén filtrados como "inactivos" o que la búsqueda no esté vacía.</li>
                <li><b>Error de conexión con el servidor:</b> Asegúrate de que el backend esté iniciado y la base de datos esté disponible. Consulta la Documentación para reiniciar servicios.</li>
                <li><b>Problemas de visualización:</b> Actualiza la página y verifica tu conexión a internet. Si el problema persiste, limpia la caché del navegador.</li>
              </ul>
            <h3>Soporte</h3>
            <p>Para dudas técnicas o soporte, contacta al desarrollador o consulta la Documentación.</p>
            <h3>Créditos</h3>
            <p>Desarrollado por <b>Josue Daniel Ajpacajá</b><br/>Fecha: Septiembre 2025</p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default ManualUsuario;
