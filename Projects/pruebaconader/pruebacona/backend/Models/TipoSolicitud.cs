// Modelo de datos para la entidad TipoSolicitud.
// Representa un tipo de solicitud en el sistema, incluyendo nombre, descripción y estado.
// Utilizado por Entity Framework para persistencia y consultas en la base de datos.
namespace backend.Models
{
    public class TipoSolicitud
    {
        public int Id { get; set; }
    public string? Nombre { get; set; }
    public string? Descripcion { get; set; }
    public string? Estado { get; set; }
    }
}