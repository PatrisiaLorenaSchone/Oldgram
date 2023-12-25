import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { signInWithFacebook } from '../auth'
// import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
// import { auth, db } from '../firebase'
// import useAuthStore from '../authstore';
// import { setDoc, doc, getDoc } from 'firebase/firestore';

function FacebookAuth({isLogin}) {
  return (
  <button onClick={()=> signInWithFacebook()} type='button' className='btn-secondary'>
    <FaFacebook fill='royalblue' className='btn-icon'/> {isLogin ? "Log in" : "Sign up"} with Facebook
  </button>
  )
}

export default FacebookAuth