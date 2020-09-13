import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBuJRdHhEeLDAbHaz7b2XXe3xYWEyafVgQ",
  authDomain: "slack-clone-29fde.firebaseapp.com",
  databaseURL: "https://slack-clone-29fde.firebaseio.com",
  projectId: "slack-clone-29fde",
  storageBucket: "slack-clone-29fde.appspot.com",
  messagingSenderId: "904558293098",
  appId: "1:904558293098:web:1cbc8862b01b87c2759a13",
  measurementId: "G-FZPCHEP6Y7",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
