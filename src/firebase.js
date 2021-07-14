import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

export const firebaseConfig = {
    apiKey: "AIzaSyCnA_4E_bFsRkniwqq-PbRWn1lu7_Hy8QM",
    authDomain: "test2-340d3.firebaseapp.com",
    projectId: "test2-340d3",
    storageBucket: "test2-340d3.appspot.com",
    messagingSenderId: "20499249143",
    appId: "1:20499249143:web:44e80c42fb2b27cfdfe0f2",
    measurementId: "G-1GDX2FXG8B"
};
var firebaseConfig2 = {
    apiKey: "AIzaSyDzN1E7Up2TL1MkeTpn1e38xT0BqyF9k9M",
    authDomain: "test3-54cf0.firebaseapp.com",
    projectId: "test3-54cf0",
    // databaseURL: 'gs://test3-54cf0.appspot.com/',
    storageBucket: "test3-54cf0.appspot.com",
    messagingSenderId: "654783744202",
    appId: "1:654783744202:web:9ac4239e9b7feedf150c33",
    measurementId: "G-K6SQGCFPRC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig2);

// firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;