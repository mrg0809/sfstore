import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBH8bsNzMCZ-YasLlxUV4jvEn0LiheWDTg",
  authDomain: "ofanmayoreo.firebaseapp.com",
  projectId: "ofanmayoreo",
  storageBucket: "ofanmayoreo.appspot.com",
  messagingSenderId: "629613102548",
  appId: "1:629613102548:web:82c998652866eb1cfdc241"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp=()=>{
    return app
}