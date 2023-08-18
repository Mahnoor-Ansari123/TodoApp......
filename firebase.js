// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYATkxcY6Z_lI-Mzdc_htGBRJUmjUTRak",
  authDomain: "todo-app-945ef.firebaseapp.com",
  projectId: "todo-app-945ef",
  storageBucket: "todo-app-945ef.appspot.com",
  messagingSenderId: "347346708971",
  appId: "1:347346708971:web:3aba9db558443aeb5211ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);