import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCYTtaW3EeRgrWyrn4SBgqtSmb6WEQreug",
  authDomain: "storybook-todo.firebaseapp.com",
  databaseURL: "https://storybook-todo.firebaseio.com",
  projectId: "storybook-todo",
  storageBucket: "storybook-todo.appspot.com",
  messagingSenderId: "850616267396",
  appId: "1:850616267396:web:f888eb6d421360ece6c8d1",
});

const db = firebaseApp.firestore();

export default db;
