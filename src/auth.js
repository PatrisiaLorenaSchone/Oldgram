import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpSByuDo07Pyd6tqGeIjuRW66jbkGbGY4",
  authDomain: "oldgram-80698.firebaseapp.com",
  projectId: "oldgram-80698",
  storageBucket: "oldgram-80698.appspot.com",
  messagingSenderId: "2384442811",
  appId: "1:2384442811:web:49ece5c395a8769bbc809e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const user = auth.currentUser;
const providerG = new GoogleAuthProvider();
const providerF = new FacebookAuthProvider();


//FOR SIGNING UP
export function signUpWithEmail(email, password){
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
}


//FOR LOGGING IN
export function signInWithEmail(email, password){
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
}


//FOR LOGGING OUT
export function signUserOut(){
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage)
  });
}


//SIGN IN WITH GOOGLE
export function signInWithGoogle(){
  signInWithPopup(auth, providerG)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}


//SIGN IN WITH FACEBOOK  https://oldgram-80698.firebaseapp.com/__/auth/handler
export function signInWithFacebook(){
  signInWithPopup(auth, providerF)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });
}


//FOR USER STATE
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    console.log('the user is in')
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    console.log('the user is out')
    // ...
  }
});


//SETTING THE CURRENT USER
export function getUser(user){
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
  
    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
  }
}