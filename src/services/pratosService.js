import axios from 'axios';

const API_URL = 'http://localhost:8080/pratos'; // Troque para sua URL backend se necessário

export const buscarPratos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const cadastrarPrato = async (prato) => {
  const response = await axios.post(API_URL, prato);
  return response.data;
};
