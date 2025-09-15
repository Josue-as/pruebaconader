// Controlador API para la entidad TipoSolicitud.
// Expone endpoints RESTful para operaciones CRUD sobre tipos de solicitud.
// Utiliza Entity Framework y GestionesDbContext para persistencia y consulta de datos.
using Microsoft.AspNetCore.Mvc;
using backend.Models;
using System.Collections.Generic;
using System.Linq;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TiposSolicitudController : ControllerBase
    {
        private readonly GestionesDbContext _context;

        public TiposSolicitudController(GestionesDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<TipoSolicitud>> Get()
        {
            return _context.TipoDeSolicitudes.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<TipoSolicitud> GetById(int id)
        {
            var tipo = _context.TipoDeSolicitudes.Find(id);
            if (tipo == null) return NotFound();
            return tipo;
        }

        [HttpPost]
        public IActionResult Post([FromBody] TipoSolicitud nuevoTipo)
        {
            if (string.IsNullOrEmpty(nuevoTipo.Estado))
            {
                nuevoTipo.Estado = "activo";
            }
            _context.TipoDeSolicitudes.Add(nuevoTipo);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetById), new { id = nuevoTipo.Id }, nuevoTipo);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] TipoSolicitud actualizado)
        {
            var tipo = _context.TipoDeSolicitudes.Find(id);
            if (tipo == null) return NotFound();
            tipo.Nombre = actualizado.Nombre;
            tipo.Descripcion = actualizado.Descripcion;
            tipo.Estado = actualizado.Estado;
            _context.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var tipo = _context.TipoDeSolicitudes.Find(id);
            if (tipo == null) return NotFound();
            _context.TipoDeSolicitudes.Remove(tipo);
            _context.SaveChanges();
            return NoContent();
        }
    }
}
