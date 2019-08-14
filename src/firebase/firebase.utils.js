import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyABChE_sCJD6Rx993FUn6PmsLU6ba6zUig",
    authDomain: "crown-app-mj.firebaseapp.com",
    databaseURL: "https://crown-app-mj.firebaseio.com",
    projectId: "crown-app-mj",
    storageBucket: "",
    messagingSenderId: "681245166100",
    appId: "1:681245166100:web:3d795edc99bb9c79"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
if (!userAuth) return;

const userRef = firestore.doc(`user/${userAuth.uid}`);

const snapShot = await userRef.get();

if(!snapShot.exists) {
  const { displayName, email} = userAuth;
  const createAt = new Date();

  try {
    await userRef.set({
      displayName, email, createAt, ...additionalData
    });
  } catch (error) {
    console.log('error creating user', error.message);
  }
}

console.log(snapShot)
return userRef;
}

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  auth.useDeviceLanguage();
  provider.setCustomParameters({ prompt: 'select_account'}); // popup language will be set from the googleAccount preference.
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

