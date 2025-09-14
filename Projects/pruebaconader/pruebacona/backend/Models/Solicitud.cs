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