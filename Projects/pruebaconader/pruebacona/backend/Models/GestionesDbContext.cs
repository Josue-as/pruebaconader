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
