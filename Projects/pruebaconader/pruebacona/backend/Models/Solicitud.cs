// Modelo de datos para la entidad Solicitud.
// Representa una solicitud registrada en el sistema, incluyendo nombre, descripción, fecha, estado y el tipo asociado.
// Utilizado por Entity Framework para persistencia y consultas en la base de datos.
namespace backend.Models
{
    public class Solicitud
    {
        public int Id { get; set; }
    public string? Nombre { get; set; }
    public string? Descripcion { get; set; }
    public string? Fecha { get; set; }
    public string? Estado { get; set; }
        public int TipoSolicitudId { get; set; }
    }
}