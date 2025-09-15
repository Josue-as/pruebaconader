// Controlador API para la entidad Solicitud.
// Expone endpoints RESTful para operaciones CRUD sobre solicitudes.
// Utiliza Entity Framework y GestionesDbContext para persistencia y consulta de datos.
using Microsoft.AspNetCore.Mvc;
using backend.Models;
using System.Collections.Generic;
using System.Linq;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SolicitudesController : ControllerBase
    {
        private readonly GestionesDbContext _context;

        public SolicitudesController(GestionesDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Solicitud>> Get()
        {
            return _context.Solicitudes.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Solicitud> GetById(int id)
        {
            var solicitud = _context.Solicitudes.Find(id);
            if (solicitud == null) return NotFound();
            return solicitud;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Solicitud nuevaSolicitud)
        {
            // Log para depuración en archivo dentro de carpeta Logs
            var logDir = "Logs";
            if (!System.IO.Directory.Exists(logDir))
                System.IO.Directory.CreateDirectory(logDir);
            var logPath = System.IO.Path.Combine(logDir, "solicitudes_log.txt");
            var logMsg = $"{DateTime.Now}: Nombre={nuevaSolicitud.Nombre}, Descripcion={nuevaSolicitud.Descripcion}, Fecha={nuevaSolicitud.Fecha}, Estado={nuevaSolicitud.Estado}, TipoSolicitudId={nuevaSolicitud.TipoSolicitudId}\n";
            System.IO.File.AppendAllText(logPath, logMsg);
            _context.Solicitudes.Add(nuevaSolicitud);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetById), new { id = nuevaSolicitud.Id }, nuevaSolicitud);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Solicitud actualizada)
        {
            var solicitud = _context.Solicitudes.Find(id);
            if (solicitud == null) return NotFound();
            solicitud.Nombre = actualizada.Nombre;
            solicitud.Descripcion = actualizada.Descripcion;
            solicitud.Fecha = actualizada.Fecha;
            solicitud.Estado = actualizada.Estado;
            solicitud.TipoSolicitudId = actualizada.TipoSolicitudId;
            _context.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var solicitud = _context.Solicitudes.Find(id);
            if (solicitud == null) return NotFound();
            _context.Solicitudes.Remove(solicitud);
            _context.SaveChanges();
            return NoContent();
        }
    }
}
