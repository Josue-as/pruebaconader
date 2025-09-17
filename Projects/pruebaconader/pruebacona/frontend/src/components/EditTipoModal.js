import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const EditTipoModal = ({ show, handleClose, onSubmit, defaultValues }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({ defaultValues });

  React.useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Tipo de Solicitud</Modal.Title>
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

export default EditTipoModal;
