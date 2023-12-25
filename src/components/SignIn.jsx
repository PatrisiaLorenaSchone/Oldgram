import React from 'react'
import { PiEyeClosed } from "react-icons/pi";
import { PiEye } from "react-icons/pi";
import { signInWithEmail } from '../auth'
import { useNavigate } from "react-router-dom";
// import {auth} from '../firebase'
// import useSignUpWithEmailAndPassword from '../hooks/useSignUpWithEmailAndPassword'
import { InputGroup, InputRightElement, Alert} from '@chakra-ui/react'
// import useLogin from '../hooks/useLogin'

function SignIn() {
  const [showPassword, setShowPassword] = React.useState(false)
  const [inputs, setInputs] = React.useState({
    email:"",
    password:"",
  })
  const navigate = useNavigate()

  function handleLogin(){
    signInWithEmail(inputs.email, inputs.password)
    navigate(`/user/1`);
  }
  // const {loading, error, login} = useLogin()
  return(
    <>
      <label htmlFor="email">Email:</label>
      <input 
      placeholder='Email'
      fontSize={14}
      type='email'
      required
      autoComplete='true'
      value={inputs.email}
      id='email'
      onChange={(e)=> setInputs({...inputs, email: e.target.value})}
      />
      <label htmlFor="password">Password:</label>
      <div className='password-input'>
      <input
      placeholder='Password'
      fontSize={14}
      type={showPassword ? 'text' : 'password'}
      required
      autoComplete='true'
      value={inputs.password}
      id='password'
      onChange={(e)=> setInputs({...inputs, password: e.target.value})}
      />
      <div className='password-eye'>{showPassword ? <PiEye fill='#232323' onClick={()=>setShowPassword(!showPassword)}/> : <PiEyeClosed fill='#232323' onClick={()=>setShowPassword(!showPassword)}/>}</div>
      </div>
      <button onClick={handleLogin} className='btn-primary'> Log in </button>
    </>
  )
}
export default SignIn
