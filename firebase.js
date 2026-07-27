import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { 
getAuth 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { 
getFirestore 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { 
getStorage 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";


const firebaseConfig = {
  apiKey: "AIzaSyCthwkWoFGbQZAaBaF4SV8nGg2i2U6jmnE",
  authDomain: "sharpboi-beats.firebaseapp.com",
  projectId: "sharpboi-beats",
  storageBucket: "sharpboi-beats.firebasestorage.app",
  messagingSenderId: "955737615942",
  appId: "1:955737615942:web:a14e435922821e464f6447",
  measurementId: "G-LN2SCV0TCC"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);
