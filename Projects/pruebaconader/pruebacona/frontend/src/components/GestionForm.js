// Formulario para agregar y editar solicitudes.
// Utiliza React Hook Form para validaciones y manejo de estado.
// Permite seleccionar tipo de solicitud y valida campos obligatorios.
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const GestionForm = ({ onSubmit, defaultValues, tipos }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues });
  const [success, setSuccess] = useState(false);

  const handleSave = async (data) => {
    const dataConEstado = {
      ...data,
      estado: data.estado || 'activo',
      tipoSolicitudId: parseInt(data.tipoSolicitudId, 10)
    };
    await onSubmit(dataConEstado);
    setSuccess(true);
    reset();
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <form onSubmit={handleSubmit(handleSave)} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input className="form-control" {...register('nombre', { required: true })} />
        {errors.nombre && <div className="text-danger">El nombre es requerido</div>}
      </div>
      <div className="mb-3">
        <label className="form-label">Descripción</label>
        <input className="form-control" {...register('descripcion')} />
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">Fecha</label>
          <input
            type="date"
            className="form-control"
            max={new Date().toISOString().split('T')[0]}
            {...register('fecha', {
              required: true,
              validate: value => {
                const hoy = new Date().toISOString().split('T')[0];
                return value <= hoy || 'No puedes elegir una fecha futura';
              }
            })}
          />
          {errors.fecha && <div className="text-danger">{errors.fecha.message || 'La fecha es requerida'}</div>}
        </div>
        <div className="col-md-6">
          <label className="form-label">Tipo de Solicitud</label>
          <select className="form-select" {...register('tipoSolicitudId', { required: true })}>
            <option value="">Seleccione...</option>
            {Array.isArray(tipos) && tipos.length > 0 ? (
              tipos.map(tipo => (
                <option key={tipo.id} value={tipo.id}>{tipo.nombre}</option>
              ))
            ) : (
              <option value="" disabled>No hay tipos disponibles</option>
            )}
          </select>
          {errors.tipoSolicitudId && <div className="text-danger">El tipo es requerido</div>}
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Guardar</button>
      {success && (
        <div className="alert alert-success mt-3" role="alert">
          Solicitud guardada correctamente
        </div>
      )}
    </form>
  );
};

export default GestionForm;
