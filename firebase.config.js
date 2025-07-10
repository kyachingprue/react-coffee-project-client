// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCXwAvyL1xZomLs1xBnTNq5fF5wnexSGak',
  authDomain: 'coffee-project-auth-ad7e6.firebaseapp.com',
  projectId: 'coffee-project-auth-ad7e6',
  storageBucket: 'coffee-project-auth-ad7e6.firebasestorage.app',
  messagingSenderId: '166723144429',
  appId: '1:166723144429:web:b099e2c08776f0757adae4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
