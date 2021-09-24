import axios from "axios";

const baseUrl = "http://localhost:3001/persons";
const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObj) => {
  const request = axios.post(baseUrl, newObj);
  return request.then((response) => response.data);
};

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request;
};

const updates = (id, newObj) => {
  const request = axios.put(`${baseUrl}/${id}`, newObj);
  return request;
};
// const update
export default { getAll, create, remove, updates };
