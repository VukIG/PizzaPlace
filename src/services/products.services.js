import axios from 'axios';

const firebaseDatabaseURL = 'https://pizzaplace-a31d7-default-rtdb.europe-west1.firebasedatabase.app/';

export const fetchData = async () => {
  const response = await axios.get(firebaseDatabaseURL);
  return response.data;
};

export const modifyItem = async (id, updatedData) => {
  const response = await axios.patch(`${firebaseDatabaseURL}/${id}.json`, updatedData);
  return response.data;
};

export const addItem = async (id, newItem) => {
  const response = await axios.post(`${firebaseDatabaseURL}/${id}.json`, newItem);
  return response.data;
};
