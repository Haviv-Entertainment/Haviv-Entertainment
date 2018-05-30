// import * as firebase from 'firebase';
const firebase = require('firebase/app');

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyD1pyBWJ-BecJgGgphY1QBHKhlpBJpsXOg',
  authDomain: 'haviventertainment-46f15.firebaseapp.com',
  databaseURL: 'https://haviventertainment-46f15.firebaseio.com',
  projectId: 'haviventertainment-46f15',
  storageBucket: 'haviventertainment-46f15.appspot.com',
  messagingSenderId: '86525300383',
};
const fire = firebase.initializeApp(config);

// export default fire;
module.exports = fire;
