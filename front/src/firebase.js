import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAjV3WXWA5c3V1j91KeH9jz6jk1g2oLFA8",
  authDomain: "discord-chat-mern.firebaseapp.com",
  projectId: "discord-chat-mern",
  storageBucket: "discord-chat-mern.appspot.com",
  messagingSenderId: "358203947642",
  appId: "1:358203947642:web:95f95ce76594f37497d9c3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
