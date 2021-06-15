import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCXO3NFUWKLSPPrqDQkrMWY_qW7FR9S-KY",
    authDomain: "chathouse-3a7e6.firebaseapp.com",
    projectId: "chathouse-3a7e6",
    storageBucket: "chathouse-3a7e6.appspot.com",
    messagingSenderId: "167155445702",
    appId: "1:167155445702:web:8248355cbe47aaa4f70cc7",
    measurementId: "G-00QQMBYTPZ",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export async function uploadImage(image) {

    const storageRef = firebase.storage().ref()
    const fileRef = storageRef.child(image.name)
    await fileRef.put(image)
    const imageURL = await fileRef.getDownloadURL()
    return imageURL

}