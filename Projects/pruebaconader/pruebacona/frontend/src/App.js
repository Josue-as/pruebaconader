
import React, { useContext } from 'react';
import Layout from './components/Layout';
import EditSolicitudModal from './components/EditSolicitudModal';
import EditTipoModal from './components/EditTipoModal';
import AppRouter from './AppRouter';
import { AppProvider, AppContext } from './context/AppContext';

const MainContent = () => {
  const { updateSolicitud, updateTipo, tipos } = useContext(AppContext);
  const [showModal, setShowModal] = React.useState(false);
  const [selected, setSelected] = React.useState(null);
  const [showTipoModal, setShowTipoModal] = React.useState(false);
  const [selectedTipo, setSelectedTipo] = React.useState(null);

  // Solicitud
  const handleEdit = (solicitud) => {
    setSelected(solicitud);
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
    setSelected(null);
  };
  const handleUpdate = (data) => {
    updateSolicitud(selected.id, data);
    handleClose();
  };

  // Tipo de Solicitud
  const handleEditTipo = (tipo) => {
    setSelectedTipo(tipo);
    setShowTipoModal(true);
  };
  const handleCloseTipo = () => {
    setShowTipoModal(false);
    setSelectedTipo(null);
  };
  const handleUpdateTipo = (data) => {
    updateTipo(selectedTipo.id, data);
    handleCloseTipo();
  };

  return (
    <>
  <AppRouter onEditSolicitud={handleEdit} onEditTipo={handleEditTipo} />
  <EditSolicitudModal show={showModal} handleClose={handleClose} onSubmit={handleUpdate} defaultValues={selected} tipos={tipos} />
  <EditTipoModal show={showTipoModal} handleClose={handleCloseTipo} onSubmit={handleUpdateTipo} defaultValues={selectedTipo} />
    </>
  );
};

function App() {
  return (
    <AppProvider>
      <Layout>
        <MainContent />
      </Layout>
    </AppProvider>
  );
}

export default App;
