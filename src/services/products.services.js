import { database as firebase } from '../firebase/firebase'; // Import Firebase
import 'firebase/database'; // Import the Firebase Realtime Database module

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
    await firebase.database().ref(`${id}`).update(updatedData);
    return updatedData;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const addItemToBase = async (id, newItem) => {
  try {
    await firebase.database().ref(`${id}`).set(newItem);
    return newItem;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
