import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAzKFUIIDTkoxymojhbWM7sul_SwFA2PEI",
  authDomain: "lucianina-ecommerce.firebaseapp.com",
  projectId: "lucianina-ecommerce",
  storageBucket: "lucianina-ecommerce.appspot.com",
  messagingSenderId: "809967626204",
  appId: "1:809967626204:web:2179e471998e3593af1119"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
  return app;
}