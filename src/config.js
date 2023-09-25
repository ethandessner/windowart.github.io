import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCbVV4tFEdM8d-UBFq17sSQfAxZLAXS_j4",
  authDomain: "windowart-224b0.firebaseapp.com",
  projectId: "windowart-224b0",
  storageBucket: "windowart-224b0.appspot.com",
  messagingSenderId: "1066570854535",
  appId: "1:1066570854535:web:6ef6ea5e34458127630822",
  measurementId: "G-X6G6BYNK4N",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const imageDb = getStorage(app);
