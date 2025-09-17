// Servicio para consumir la API de solicitudes desde el frontend.
// Provee funciones para operaciones CRUD usando axios.
// Centraliza la lógica de comunicación con el backend.
import axios from 'axios';
//const API_URL = 'http://localhost:5207/Solicitudes';
//const API_URL = 'http://192.168.0.14:5207/Solicitudes';
const API_URL = 'https://3.85.104.24:5208/Solicitudes';

export const getSolicitudes = () => axios.get(API_URL);
export const createSolicitud = (data) => axios.post(API_URL, data);
export const updateSolicitud = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteSolicitud = (id) => axios.delete(`${API_URL}/${id}`);
