import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCn20qtUDSX2r4rpXu9PLxBW6jxcIjJnKk",
    authDomain: "chat-app-react-9b8e3.firebaseapp.com",
    projectId: "chat-app-react-9b8e3",
    storageBucket: "chat-app-react-9b8e3.appspot.com",
    messagingSenderId: "381809318399",
    appId: "1:381809318399:web:bd531adf7fd29b846cafca"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth,provider };
  export default db;