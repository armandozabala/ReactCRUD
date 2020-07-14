import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
 apiKey: "AIzaSyDGIFBnO-ZgCTKrzZO-EBL122URBQSYgQs",
 authDomain: "iofirestore-41518.firebaseapp.com",
 databaseURL: "https://iofirestore-41518.firebaseio.com",
 projectId: "iofirestore-41518",
 storageBucket: "iofirestore-41518.appspot.com",
 messagingSenderId: "25669539594",
 appId: "1:25669539594:web:8a0ea50625a8b6cce74cf3"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();

