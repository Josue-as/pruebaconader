
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const RequisitosConclusiones = () => (
  <Container className="mt-5">
    <Row className="justify-content-center">
      <Col md={10}>
        <Card className="shadow-lg border-0">
          <Card.Body>
            <h1 className="mb-4 text-primary fw-bold">INSTRUCCIONES GENERALES DEL PROYECTO</h1>
            <h3 className="mt-4">Requisito 1: Crear una aplicación completa con frontend en React!</h3>
            <ul>
              <li>El proyecto tiene una carpeta <b>frontend</b> con estructura de React.</li>
              <li>Se usan componentes, rutas, contexto global y formularios.</li>
              <li>El diseño y la lógica están implementados en React.</li>
              <li className="text-success fw-bold">✅ Cumplido: El frontend está desarrollado completamente en React.</li>
            </ul>
            <h3 className="mt-4">Requisito 2: Crear un backend y una base de datos llamada gestiones para operaciones CRUD!</h3>
            <ul>
              <li>Existe backend en .NET Core con controladores para Solicitudes y TiposSolicitud.</li>
              <li>El contexto <b>GestionesDbContext</b> define la base de datos gestiones con tablas para solicitudes y tipos de solicitud.</li>
              <li>Los controladores implementan métodos CRUD: GET, POST, PUT, DELETE.</li>
              <li>Se usa Entity Framework Core y migraciones para persistencia real.</li>
              <li className="text-success fw-bold">✅ Cumplido: El backend y la base de datos gestiones permiten operaciones CRUD completas.</li>
            </ul>
            <h3 className="mt-4">Requisito 3: Utilizar React hooks (useContext, useEffect, useState) y React Hook Form para formularios y validación!</h3>
            <ul>
              <li>Se usan <b>useContext</b>, <b>useEffect</b> y <b>useState</b> en componentes clave (GestionList.js, TipoSolicitudList.js, AppContext.js, App.js, etc.).</li>
              <li>Los formularios (GestionForm.js, TipoSolicitudForm.js, EditTipoModal.js, EditSolicitudModal.js) usan <b>useForm</b> de React Hook Form para gestión y validación.</li>
              <li>La validación de campos y el manejo de errores se realiza con React Hook Form.</li>
              <li className="text-success fw-bold">✅ Cumplido: Los hooks y React Hook Form se usan correctamente para formularios y lógica de estado.</li>
            </ul>
            <h3 className="mt-4">Requisito 4: Utilizar Bootstrap para estilizar las vistas y hacerlas más atractivas</h3>
            <ul>
              <li><b>Home</b><br/>
                Usa Container, Row, Col, Card, Button de Bootstrap.<br/>
                Iconos de Bootstrap, colores personalizados, estructura response.<br/>
                Listado de funcionalidades con iconos y colores.<br/>
                Diseño moderno y visualmente atractivo.
              </li>
              <li><b>Solicitudes</b><br/>
                Estructura con Container, Row, Col, Card.<br/>
                Títulos con iconos, alertas visuales (alert-success, alert-danger), spinner de carga.<br/>
                Formulario y listado integrados en un card Bootstrap.<br/>
                Uso de clases de Bootstrap para  estilo.
              </li>
              <li><b>Tipos de Solicitud</b><br/>
                Estructura con Container, Row, Col, Card.<br/>
                Título con icono, alertas visuales, spinner de carga.<br/>
                Formulario y listado integrados en card Bootstrap.<br/>
                Colores y clases de Bootstrap para experiencia visual.
              </li>
              <li className="text-success fw-bold">✅ Cumplido: Las vistas principales cumplen el requisito de utilizar Bootstrap para el estilo y hacerlas más atractivas. Se emplean componentes, clases y utilidades de Bootstrap, junto con iconos y colores personalizados, logrando una interfaz moderna.</li>
            </ul>
              {/* Tabla de requerimientos generales */}
              <hr className="my-4" />
              <h3 className="mt-4">Requerimientos Generales y Validaciones</h3>
              <h3 className="mt-4">Frontend (React)</h3>
              <div className="table-responsive">
                <table className="table table-bordered align-middle">
                  <thead className="table-primary">
                    <tr>
                      <th>Generales</th>
                      <th>Requerimiento</th>
                      <th>Validación</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td rowSpan="2">Formulario de Solicitud</td>
                      <td>Crear un formulario para agregar y actualizar solicitudes utilizando React Hook Forms. Validar que ningún campo obligatorio quede vacío</td>
                      <td>
                        El formulario para agregar y actualizar solicitudes (GestionForm.js) utiliza React Hook Form y valida que ningún campo obligatorio quede vacío.<br/>
                        <b>Campos validados como requeridos:</b> Nombre (required: true), Fecha (required: true y no permite fechas futuras), Tipo de Solicitud (required: true)<br/>
                        <b>Mensajes de error:</b> Se muestran mensajes claros si algún campo obligatorio está vacío.<br/>
                        <b>Integración con React Hook Form:</b> Uso de register, handleSubmit, formState.errors.<br/>
                        El formulario es reutilizable para agregar y actualizar.
                      </td>
                    </tr>
                    <tr>
                      <td>Mostrar una lista de solicitudes obtenidas desde una API. Implementar búsqueda y filtrado con filter o map. Incluir opciones para editar y "eliminar" (cambiar estado a inactivo) las solicitudes</td>
                      <td>
                        El contexto (AppContext.js) obtiene las solicitudes desde la API (getSolicitudes) y las expone vía solicitudes.<br/>
                        El componente GestionList.js consume solicitudes desde el contexto y las muestra en una tabla Bootstrap.<br/>
                        <b>Implementar búsqueda y filtrado:</b> En GestionList.js, se usa .filter() para búsqueda por nombre/descripcion y por estado (activo/inactivo/todos). Se usa .map() para renderizar la lista paginada de solicitudes.<br/>
                        <b>Opciones para editar y "eliminar":</b> Botón "Editar" abre un modal con el formulario para actualizar la solicitud. Botón "Eliminar" llama a deleteSolicitud, que actualiza el estado de la solicitud a "inactivo" en la API y en el estado local.
                      </td>
                    </tr>
                    <tr>
                      <td rowSpan="2">Catálogo de Tipo de Solicitudes</td>
                      <td>Crear un formulario para agregar y actualizar tipos de solicitudes</td>
                      <td>
                        El componente TipoSolicitudForm.js utiliza React Hook Form.<br/>
                        Valida el campo "nombre" como obligatorio.<br/>
                        Permite agregar y actualizar tipos de solicitud (usando defaultValues para edición).
                      </td>
                    </tr>
                    <tr>
                      <td>Mostrar una lista de tipos de solicitudes obtenidas desde una API, con opciones para editar y eliminar tipos</td>
                      <td>
                        El componente TipoSolicitudList.js consume los tipos desde el contexto (tipos), que se obtienen vía API.<br/>
                        Muestra la lista en una tabla Bootstrap, con paginación y filtrado por nombre/estado.<br/>
                        Botón "Editar" abre un modal con el formulario para actualizar el tipo.<br/>
                        Botón "Eliminar" ejecuta la función onDelete, que elimina el tipo (o lo marca como inactivo según la lógica del contexto).
                      </td>
                    </tr>
                    <tr>
                      <td>Uso de Hooks y Context</td>
                      <td>Utilizar useContext para manejar el estado global de la aplicación y useEffect para obtener la lista de solicitudes y tipos de solicitudes al cargar la página</td>
                      <td>
                        Se utiliza useContext en los componentes principales (Solicitudes, TiposSolicitud, GestionList, TipoSolicitudList) para acceder al estado global (solicitudes, tipos, y funciones CRUD) definido en AppContext.<br/>
                        En AppContext.js, se emplea useEffect para obtener la lista de solicitudes y tipos de solicitudes desde la API al cargar la página, y se actualizan los estados globales correspondientes.
                      </td>
                    </tr>
                    <tr>
                      <td>Estilización con Bootstrap</td>
                      <td>Utilizar Bootstrap para estilizar los formularios y las listas, asegurando vistas responsivas y atractivas.</td>
                      <td>
                        <b>Formularios (GestionForm.js, TipoSolicitudForm.js):</b> Se usan clases Bootstrap: form-control, form-label, form-select, btn, alert. Estructura responsiva con filas y columnas (row, col-md-6). Mensajes de validación y alertas visuales.<br/>
                        <b>Listas (GestionList.js, TipoSolicitudList.js):</b> Tablas responsivas con clases table, table-bordered, table-responsive. Paginación con clases pagination, page-item, page-link. Botones de acción con estilos Bootstrap (btn-warning, btn-danger, btn-sm, me-2). Uso de modales Bootstrap para edición.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
                                        <h3 className="mt-4">Backend y Base de Datos</h3>
                {/* Segunda tabla de requerimientos y validaciones */}
                <div className="table-responsive mt-4">
                  <table className="table table-bordered align-middle">
                    <thead className="table-primary">
                      <tr>
                        <th>Generales</th>
                        <th>Requerimiento</th>
                        <th>Validación</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>API de Solicitudes y Tipos de Solicitudes</td>
                        <td>Crear un backend que exponga las APIs necesarias para realizar operaciones CRUD con las solicitudes y los tipos de solicitudes.</td>
                        <td>
                          El backend expone las APIs necesarias para operaciones CRUD de solicitudes y tipos de solicitudes:<br/>
                          <ul>
                            <li><b>SolicitudesController:</b>
                              <ul>
                                <li>GET: Listar todas las solicitudes.</li>
                                <li>GET/&#123;id&#125;: Obtener una solicitud por ID.</li>
                                <li>PUT/&#123;id&#125;: Actualizar una solicitud existente.</li>
                                <li>DELETE/&#123;id&#125;: Eliminar una solicitud.</li>
                                

                              </ul>
                            </li>
                            <li><b>TiposSolicitudController:</b>
                              <ul>
                                <li>GET: Listar todos los tipos de solicitud.</li>
                                <li>GET/&#123;id&#125;: Obtener un tipo por ID.</li>
                                <li>POST: Crear un nuevo tipo de solicitud.</li>
                                <li>PUT/&#123;id&#125;: Actualizar un tipo existente.</li>
                                <li>DELETE/&#123;id&#125;: Eliminar un tipo de solicitud.</li>
                              </ul>
                            </li>
                          </ul>
                          Ambos controladores usan Entity Framework y exponen endpoints RESTful, cumpliendo el requisito de backend CRUD para ambos modelos.
                        </td>
                      </tr>
                      <tr>
                        <td>Base de Datos</td>
                        <td>Crear una base de datos llamada gestiones con dos tablas: Solicitudes y TipoDeSolicitudes</td>
                        <td>
                          <b>Tabla Solicitudes (Solicitud.cs):</b><br/>
                          Campos: Id, Nombre, Descripcion, Fecha, Estado, TipoSolicitudId.<br/>
                          <b>Tabla TipoDeSolicitudes (TipoSolicitud.cs):</b><br/>
                          Campos: Id, Nombre, Descripcion, Estado.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            
    
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default RequisitosConclusiones;
