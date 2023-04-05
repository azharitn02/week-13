import axios from "axios";

const API_URL = "http://localhost:8000/";

export const getBooks = () => {
  return axios.get(`${API_URL}books/`);
};

export const getBook = (id) => {
  return axios.get(`${API_URL}books/${id}/`);
};

export const createBook = (data) => {
  return axios.post(`${API_URL}books/`, data);
};

export const updateBook = (id, data) => {
  return axios.put(`${API_URL}books/${id}/`, data);
};

export const deleteBook = (id) => {
  return axios.delete(`${API_URL}books/${id}/`);
};
