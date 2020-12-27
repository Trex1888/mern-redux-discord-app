import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAEA5iljJiIXGIypNwwOsNZn42D2BoTJEQ",
  authDomain: "discordmern-bece2.firebaseapp.com",
  projectId: "discordmern-bece2",
  storageBucket: "discordmern-bece2.appspot.com",
  messagingSenderId: "110546363218",
  appId: "1:110546363218:web:810624e066a5b703b8108b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
