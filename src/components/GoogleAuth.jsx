import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { signInWithGoogle } from '../auth'
// import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
// import { auth, db } from '../firebase'
// import useAuthStore from '../authstore';
// import { setDoc, doc, getDoc } from 'firebase/firestore';

function GoogleAuth({isLogin}) {
  return (
  <button onClick={()=> signInWithGoogle()} type='button' className='btn-secondary'>
    <FcGoogle className='btn-icon'/> {isLogin ? "Log in" : "Sign up"} with Google
  </button>
  )
}

export default GoogleAuth
