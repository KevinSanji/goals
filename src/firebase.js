import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCw4yCchRWWv-UTdzFrt8UfaMfPofSfy6A",
    authDomain: "goals-2574e.firebaseapp.com",
    databaseURL: "https://goals-2574e.firebaseio.com",
    projectId: "goals-2574e",
    storageBucket: "",
    messagingSenderId: "1071302108591"
};

export const firebaseApp = firebase.initializeApp(config);
