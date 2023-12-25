
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc} from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
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
const db = getFirestore(app);
const auth = getAuth(app);
const artistsCollectionRef = collection(db, "artist")

export async function getArtists(){
    const snapshot = await getDocs(artistsCollectionRef)
    const artists = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return artists
}

export async function getArtist(id){
    const docRef = doc(db, "artist", id)
    const snapshot = await getDoc(docRef)
    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}