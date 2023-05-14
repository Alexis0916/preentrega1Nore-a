
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB67jA0Jtk3aQlLoSq3Bq0iE8Q143pq848",
  authDomain: "exa-pinturas.firebaseapp.com",
  projectId: "exa-pinturas",
  storageBucket: "exa-pinturas.appspot.com",
  messagingSenderId: "113752939125",
  appId: "1:113752939125:web:55fadca02b792ebd70763c"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);