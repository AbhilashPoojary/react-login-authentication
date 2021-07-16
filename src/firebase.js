import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyB8jMySiR046uWbTXlRIgmBQnNg04R1_7c",
  authDomain: "react-auth-dev-84bfa.firebaseapp.com",
  projectId: "react-auth-dev-84bfa",
  storageBucket: "react-auth-dev-84bfa.appspot.com",
  messagingSenderId: "649145967213",
  appId: "1:649145967213:web:4be2e78c15d969a01dd564",
});

export const auth = app.auth();
export default app;
