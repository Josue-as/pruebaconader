// Formulario para agregar y editar tipos de solicitud.
// Utiliza React Hook Form para validaciones y manejo de estado.
// Valida campos obligatorios y muestra mensajes de éxito.
import React from 'react';
import { useForm } from 'react-hook-form';

const TipoSolicitudForm = ({ onSubmit, defaultValues }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues });
  const [success, setSuccess] = React.useState(false);

  const handleSave = async (data) => {
    await onSubmit(data);
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
      <button type="submit" className="btn btn-success">Guardar</button>
      {success && (
        <div className="alert alert-success mt-3" role="alert">
          Guardado correctamente
        </div>
      )}
    </form>
  );
};

export default TipoSolicitudForm;
