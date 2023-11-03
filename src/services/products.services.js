import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';

const firebaseDatabaseURL = 'https://your-firebase-database-url.firebaseio.com';

// Function to fetch items
export const useFetchItems = () => {
  return useQuery('items', async () => {
    const response = await axios.get(`${firebaseDatabaseURL}/items.json`);
    return response.data;
  });
};

// Function to add an item
export const useAddItem = () => {
  const queryClient = useQueryClient();

  const addItem = async (newItem) => {
    const response = await axios.post(`${firebaseDatabaseURL}/items.json`, newItem);
    queryClient.invalidateQueries('items'); // Invalidate the items query to refetch data
    return response.data;
  };

  return useMutation(addItem);
};

// Function to edit an item
export const useEditItem = () => {
  const queryClient = useQueryClient();

  const editItem = async (id, updatedData) => {
    const response = await axios.put(`${firebaseDatabaseURL}/items/${id}.json`, updatedData);
    queryClient.invalidateQueries('items'); // Invalidate the items query to refetch data
    return response.data;
  };

  return useMutation(editItem);
};
