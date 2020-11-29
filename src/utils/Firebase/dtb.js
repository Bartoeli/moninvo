import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCveeNlGkf1HxE1E1xXBhGhCuhRHseLsXQ',
  authDomain: 'moninvo-b092d.firebaseapp.com',
  databaseURL: 'https://moninvo-b092d.firebaseio.com',
  projectId: 'moninvo-b092d',
  storageBucket: 'moninvo-b092d.appspot.com',
  messagingSenderId: '649447721917',
  appId: '1:649447721917:web:6db079d44684cb2b3020d4',
};

firebase.initializeApp(firebaseConfig);

export const dtb = firebase.firestore();
