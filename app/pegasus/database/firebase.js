import * as firebase from 'firebase';
import '@firebase/firestore';
firebase.initializeApp({
    apiKey: 'AIzaSyCAsjrN3GwCYbHPqFfbd8i2mo38S-UeBBQ',
    authDomain: "pegasos-f16ca.firebaseapp.com",
    databaseURL: 'https://pegasos-f16ca.firebaseio.com',
    storageBucket: 'gs://pegasos-f16ca.appspot.com',
    projectId: 'pegasos-f16ca',


});
const database = firebase.database();

export default database;