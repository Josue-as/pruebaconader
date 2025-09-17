import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const EditSolicitudModal = ({ show, handleClose, onSubmit, defaultValues, tipos }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({ defaultValues });

  React.useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Solicitud</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input className="form-control" {...register('nombre', { required: true })} />
            {errors.nombre && <div className="text-danger">El nombre es requerido</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Descripción</label>
            <input className="form-control" {...register('descripcion')} />
          </div>
          <div className="mb-3">
            <label className="form-label">Fecha</label>
            <input type="date" className="form-control" {...register('fecha', { required: true })} />
            {errors.fecha && <div className="text-danger">La fecha es requerida</div>}
          </div>
          <div className="mb-3">
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
          {defaultValues && defaultValues.estado && (
            <div className="mb-3">
              <span className={`badge bg-${defaultValues.estado === 'inactivo' ? 'danger' : 'success'}`}>Estado: {defaultValues.estado}</span>
            </div>
          )}
          <div className="d-flex justify-content-end gap-2">
            <Button variant="secondary" onClick={handleClose} type="button">Cerrar</Button>
            <Button variant="primary" type="submit">Guardar Cambios</Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default EditSolicitudModal;
