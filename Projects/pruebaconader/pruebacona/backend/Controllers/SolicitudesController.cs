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
        private static List<Solicitud> solicitudes = new List<Solicitud>();

        [HttpGet]
        public IEnumerable<Solicitud> Get()
        {
            return solicitudes;
        }

        [HttpGet("{id}")]
        public ActionResult<Solicitud> GetById(int id)
        {
            var solicitud = solicitudes.FirstOrDefault(s => s.Id == id);
            if (solicitud == null) return NotFound();
            return solicitud;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Solicitud nuevaSolicitud)
        {
            nuevaSolicitud.Id = solicitudes.Count + 1;
            solicitudes.Add(nuevaSolicitud);
            return CreatedAtAction(nameof(GetById), new { id = nuevaSolicitud.Id }, nuevaSolicitud);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Solicitud actualizada)
        {
            var solicitud = solicitudes.FirstOrDefault(s => s.Id == id);
            if (solicitud == null) return NotFound();
            solicitud.Nombre = actualizada.Nombre;
            solicitud.Descripcion = actualizada.Descripcion;
            solicitud.Fecha = actualizada.Fecha;
            solicitud.Estado = actualizada.Estado;
            solicitud.TipoSolicitudId = actualizada.TipoSolicitudId;
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var solicitud = solicitudes.FirstOrDefault(s => s.Id == id);
            if (solicitud == null) return NotFound();
            solicitudes.Remove(solicitud);
            return NoContent();
        }
    }
}
