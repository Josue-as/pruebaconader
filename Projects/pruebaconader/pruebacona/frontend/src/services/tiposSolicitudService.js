// Servicio para consumir la API de tipos de solicitud desde el frontend.
// Provee funciones para operaciones CRUD usando axios.
// Centraliza la lógica de comunicación con el backend.
import axios from 'axios';

//const API_URL = 'http://localhost:5207/TiposSolicitud';
//const API_URL = 'http://192.168.0.14:5207/TiposSolicitud';
const API_URL = 'https://3.85.104.24:5208/TiposSolicitud';
export const getTiposSolicitud = () => axios.get(API_URL);
export const createTipoSolicitud = (data) => axios.post(API_URL, data);
export const updateTipoSolicitud = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteTipoSolicitud = (id) => axios.delete(`${API_URL}/${id}`);
