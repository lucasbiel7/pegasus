import firebase from 'react-native-firebase';

firebase.initializeApp({
    apiKey: 'AIzaSyCAsjrN3GwCYbHPqFfbd8i2mo38S-UeBBQ',
    appId: 'Pegasos',
    databaseURL: 'https://pegasos-f16ca.firebaseio.com/',
    projectId: 'pegasos-f16ca'
});
const database = firebase.firestore();

export default database;