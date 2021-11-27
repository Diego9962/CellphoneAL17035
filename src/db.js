// Conveniently import this file anywhere to use db

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyApg_dOW8fCN-8FeUjSnxo830IkU8NVJYg",
  authDomain: "xd4f-85837.firebaseapp.com",
  projectId: "xd4f-85837",
  storageBucket: "xd4f-85837.appspot.com",
  messagingSenderId: "437209053047",
  appId: "1:437209053047:web:6906ed342b7e9c9f395372"
  };

var app = firebase.initializeApp(firebaseConfig)

export const db = app.firestore()
export const st = app.storage()

// Export types that exists in Firestore - Uncomment if you need them in your app
// const { Timestamp, GeoPoint } = firebase.firestore
// export { Timestamp, GeoPoint }
