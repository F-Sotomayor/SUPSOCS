import firebase from "firebase/app";
import "firebase/firestore";

try {
  firebase.initializeApp({
    apiKey: "AIzaSyAGnAJnDfc7or6U8x60ttXHZ_AbDetwMcU",
    authDomain: "supsocs.firebaseapp.com",
    projectId: "supsocs",
    storageBucket: "supsocs.appspot.com",
    messagingSenderId: "792356309514",
    appId: "1:792356309514:web:f58d343e79423d972c2df3",
  });
} catch (err) {
  console.log(err);
}

const database = firebase.firestore();

export { database };
export default firebase;
