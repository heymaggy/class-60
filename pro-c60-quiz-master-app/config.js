import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBIBmL0aRXrrahmhCxqa3pBp09nAbMLJi0",
  authDomain: "wireless-buzzer-app-c57ac.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-app-c57ac-default-rtdb.firebaseio.com",
  projectId: "wireless-buzzer-app-c57ac",
  storageBucket: "wireless-buzzer-app-c57ac.appspot.com",
  messagingSenderId: "479622794452",
  appId: "1:479622794452:web:dc0e0226139fc2bdd7ff41"
};


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()