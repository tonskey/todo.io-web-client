import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAGDD-oKszujV2O9PN6RF-Ulxsp1vqxs_w",
    authDomain: "todo-io-e49f9.firebaseapp.com",
    databaseURL: "https://todo-io-e49f9.firebaseio.com",
    projectId: "todo-io-e49f9",
    storageBucket: "todo-io-e49f9.appspot.com",
    messagingSenderId: "221283437161"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
export default firebase
