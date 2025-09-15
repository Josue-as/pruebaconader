// Contexto principal de la base de datos para la aplicación Gestiones.
// Define las tablas Solicitudes y TipoDeSolicitudes usando Entity Framework Core.
// Permite la persistencia y consulta de datos desde los controladores.
using Microsoft.EntityFrameworkCore;

namespace backend.Models
{
    public class GestionesDbContext : DbContext
    {
        public GestionesDbContext(DbContextOptions<GestionesDbContext> options) : base(options) { }

        public DbSet<TipoSolicitud> TipoDeSolicitudes { get; set; }
        public DbSet<Solicitud> Solicitudes { get; set; }
    }
}
