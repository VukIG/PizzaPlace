import { database } from '../firebase/firebase'; // Import Firebase
import 'firebase/database'; // Import the Firebase Realtime Database module
import { ref, set } from 'firebase/database';


const firebaseDatabaseURL = 'https://pizzaplace-a31d7-default-rtdb.europe-west1.firebasedatabase.app/';

export const fetchData = async () => {
  try {
    const response = await fetch(`${firebaseDatabaseURL}.json`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const modifyItem = async (id, updatedData) => {
  try {
    const itemRef = ref(database, `pizzas/${id}`);
    await set(itemRef, updatedData);
    return updatedData;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const addItemToBase = async (newItem) => {
  try {
    const itemRef = ref(database, `pizzas/${newItem.id}`);
    await set(itemRef, newItem);
    return newItem;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
