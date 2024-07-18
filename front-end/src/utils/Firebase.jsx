// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB2LwbxQQw83C23Zp_d-sjYqBq-LpG_PjM',
  authDomain: 'miras-portfolio.firebaseapp.com',
  projectId: 'miras-portfolio',
  storageBucket: 'miras-portfolio.appspot.com',
  messagingSenderId: '886651654996',
  appId: '1:886651654996:web:d91f6a5efc234a1478aec1',
  measurementId: 'G-2HBFP86EQV',
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);
const storage = getStorage(firebaseApp);

export { firebaseApp, database, storage };
