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
        private static List<TipoSolicitud> tipos = new List<TipoSolicitud>();

        [HttpGet]
        public IEnumerable<TipoSolicitud> Get()
        {
            return tipos;
        }

        [HttpGet("{id}")]
        public ActionResult<TipoSolicitud> GetById(int id)
        {
            var tipo = tipos.FirstOrDefault(t => t.Id == id);
            if (tipo == null) return NotFound();
            return tipo;
        }

        [HttpPost]
        public IActionResult Post([FromBody] TipoSolicitud nuevoTipo)
        {
            nuevoTipo.Id = tipos.Count + 1;
            tipos.Add(nuevoTipo);
            return CreatedAtAction(nameof(GetById), new { id = nuevoTipo.Id }, nuevoTipo);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] TipoSolicitud actualizado)
        {
            var tipo = tipos.FirstOrDefault(t => t.Id == id);
            if (tipo == null) return NotFound();
            tipo.Nombre = actualizado.Nombre;
            tipo.Descripcion = actualizado.Descripcion;
            tipo.Estado = actualizado.Estado;
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var tipo = tipos.FirstOrDefault(t => t.Id == id);
            if (tipo == null) return NotFound();
            tipos.Remove(tipo);
            return NoContent();
        }
    }
}
