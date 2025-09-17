// Contexto global de la aplicación React.
// Provee el estado y las funciones CRUD para solicitudes y tipos de solicitud.
// Permite compartir datos y lógica entre componentes usando React Context y Hooks.
import React, { createContext, useState, useEffect } from 'react';
import { getSolicitudes, createSolicitud, updateSolicitud as apiUpdateSolicitud } from '../services/solicitudesService';
import { getTiposSolicitud, createTipoSolicitud, updateTipoSolicitud, deleteTipoSolicitud } from '../services/tiposSolicitudService';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Función para refrescar tipos de solicitud desde la API
  const fetchTiposSolicitud = async () => {
    try {
      const response = await getTiposSolicitud();
      setTipos(response.data);
    } catch (error) {
      console.error('Error al refrescar tipos de solicitud:', error);
    }
  };
  const [solicitudes, setSolicitudes] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Función para refrescar solicitudes desde la API
  const fetchSolicitudes = async () => {
    try {
      const response = await getSolicitudes();
      setSolicitudes(response.data);
    } catch (error) {
      console.error('Error al refrescar solicitudes:', error);
    }
  };

  useEffect(() => {
    // Cargar solicitudes desde la API
    getSolicitudes()
      .then(response => {
        setSolicitudes(response.data);
      })
      .catch(error => {
        console.error('Error al obtener solicitudes:', error);
      });
    // Cargar tipos de solicitud desde la API
    getTiposSolicitud()
      .then(response => {
        setTipos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener tipos de solicitud:', error);
      })
      .finally(() => setLoading(false));
  }, []);


  // CRUD Solicitudes usando API
  const addSolicitud = async (solicitud) => {
    try {
      const response = await createSolicitud(solicitud);
      setSolicitudes([...solicitudes, response.data]);
    } catch (error) {
      console.error('Error al crear solicitud:', error);
    }
  };

  const updateSolicitud = async (id, data) => {
    try {
      const response = await apiUpdateSolicitud(id, data);
      setSolicitudes(solicitudes.map(s => s.id === id ? response.data : s));
    } catch (error) {
      console.error('Error al actualizar solicitud:', error);
    }
  };

  const deleteSolicitud = async (id) => {
    try {
      const solicitudActual = solicitudes.find(s => s.id === id);
      if (!solicitudActual) throw new Error('Solicitud no encontrada');
      const solicitudActualizada = {
        ...solicitudActual,
        estado: 'inactivo'
      };
      const response = await apiUpdateSolicitud(id, solicitudActualizada);
      setSolicitudes(solicitudes.map(s => s.id === id ? response.data : s));
    } catch (error) {
      console.error('Error al eliminar solicitud:', error);
    }
  };

  // CRUD Tipos usando API
  const addTipo = async (tipo) => {
    try {
      const response = await createTipoSolicitud(tipo);
      setTipos([...tipos, response.data]);
    } catch (error) {
      console.error('Error al crear tipo de solicitud:', error);
    }
  };

  const updateTipo = async (id, data) => {
    try {
      const response = await updateTipoSolicitud(id, data);
  setTipos(Array.isArray(tipos) ? tipos.map(t => t.id === id ? response.data : t) : []);
    } catch (error) {
      console.error('Error al actualizar tipo de solicitud:', error);
    }
  };

  const deleteTipo = async (id) => {
    try {
      await deleteTipoSolicitud(id);
  setTipos(Array.isArray(tipos) ? tipos.filter(t => t.id !== id) : []);
    } catch (error) {
      console.error('Error al eliminar tipo de solicitud:', error);
    }
  };

  return (
    <AppContext.Provider value={{
      solicitudes,
      tipos,
      loading,
      addSolicitud,
      updateSolicitud,
      deleteSolicitud,
      addTipo,
      updateTipo,
      deleteTipo,
      fetchSolicitudes,
      fetchTiposSolicitud
    }}>
      {children}
    </AppContext.Provider>
  );
};
