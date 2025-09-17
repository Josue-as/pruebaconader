import React from 'react';

const GestionDetail = ({ gestion }) => (
  <div>
    <h2>Detalle de gestión</h2>
    {/* Mostrar detalles de la gestión */}
    <pre>{JSON.stringify(gestion, null, 2)}</pre>
  </div>
);

export default GestionDetail;
