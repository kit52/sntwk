import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyCnA_4E_bFsRkniwqq-PbRWn1lu7_Hy8QM",
    authDomain: "test2-340d3.firebaseapp.com",
    projectId: "test2-340d3",
    storageBucket: "test2-340d3.appspot.com",
    messagingSenderId: "20499249143",
    appId: "1:20499249143:web:44e80c42fb2b27cfdfe0f2",
    measurementId: "G-1GDX2FXG8B"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;