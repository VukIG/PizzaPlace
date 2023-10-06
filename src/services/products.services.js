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

export const deleteItem = async (id) => {
    const response = await axios.delete(`${firebaseDatabaseURL}/${id}.json`);
    return response.data;
};

