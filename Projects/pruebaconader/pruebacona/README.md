# Gestión de Solicitudes

Aplicación fullstack para la administración de solicitudes y tipos de solicitud, desarrollada con React, .NET Core y Azure SQL. Incluye buenas prácticas, documentación y una experiencia visual moderna con Bootstrap.

## Tabla de Contenidos
- [Características](#características)
- [Requisitos Técnicos](#requisitos-técnicos)
- [Instalación y Ejecución](#instalación-y-ejecución)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Configuración de la Base de Datos](#configuración-de-la-base-de-datos)
- [Uso de la Aplicación](#uso-de-la-aplicación)
- [Documentación del Código](#documentación-del-código)
- [Pruebas y Validación](#pruebas-y-validación)
- [Créditos](#créditos)

## Características
- CRUD completo para Solicitudes y Tipos de Solicitud
- Eliminación lógica y validaciones en formularios
- Búsqueda, filtrado y paginación en listados
- Estado global con React Context y Hooks
- Backend RESTful con .NET Core y Entity Framework
- Estilos responsivos y atractivos con Bootstrap
- Documentación en los archivos principales

## Requisitos Técnicos
- Node.js >= 16
- .NET Core >= 6
- SQL Server o Azure SQL
- npm, dotnet-ef

## Instalación y Ejecución

### Backend (.NET Core)
```sh
cd backend
dotnet restore
dotnet ef database update
dotnet run
```

### Frontend (React)
```sh
cd frontend
npm install
npm start
```

## Estructura del Proyecto
```
/backend
  /Controllers
  /Models
  GestionesDbContext.cs
/frontend
  /src
    /components
    /context
    /pages
    /services
  package.json
```

## Configuración de la Base de Datos
- Base de datos: `gestiones`
- Tablas: `Solicitudes`, `TipoDeSolicitudes`
- Migraciones automáticas con Entity Framework Core

## Uso de la Aplicación
1. Accede a `http://localhost:3000`
2. Navega entre Solicitudes y Tipos de Solicitud
3. Realiza operaciones CRUD, búsqueda y filtrado
4. Visualiza mensajes de validación y alertas

## Documentación del Código
- Todos los archivos principales incluyen comentarios explicativos.
- Los servicios y controladores están organizados por responsabilidad.
- Ejemplo de documentación en código:
  ```js
  // Formulario para agregar y editar solicitudes.
  // Utiliza React Hook Form para validaciones y manejo de estado.
  ```

## Pruebas y Validación
- Verifica que todas las operaciones CRUD funcionen correctamente.
- Revisa la experiencia visual y responsividad en diferentes dispositivos.
- Consulta los logs en la carpeta `backend/Logs` para depuración.

## Créditos
Desarrollado por: Josue Daniel Ajpacaja Santos
Fecha: Septiembre 2025
