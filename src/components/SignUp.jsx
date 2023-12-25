import React from 'react'
import {signUpWithEmail} from '../auth'
import { PiEyeClosed } from "react-icons/pi";
import { PiEye } from "react-icons/pi";
import { InputGroup, InputRightElement, Alert} from '@chakra-ui/react'

function SignUp() {
  const [showPassword, setShowPassword] = React.useState(false)
  const [inputs, setInputs] = React.useState({
    fullName:"",
    username:"",
    email:"",
    password:"",
  })
  return (
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
      <label htmlFor="username">Username:</label>
      <input 
      placeholder='Username'
      fontSize={14}
      type='text'
      required
      autoComplete='true'
      value={inputs.username}
      id="username"
      onChange={(e)=> setInputs({...inputs, username: e.target.value})}
      />
      <label htmlFor="name">Full Name:</label>
      <input
      placeholder='Full Name'
      fontSize={14}
      type='text'
      required
      autoComplete='true'
      value={inputs.fullName}
      id='name'
      onChange={(e)=> setInputs({...inputs, fullName: e.target.value})}
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
      {/* {
        error && (
          <Alert status='error' fontSize={12} p={2} borderRadius={3}>
            {error.message}
          </Alert>
        )
      } */}
      <button onClick={()=>{signUpWithEmail(inputs.email, inputs.password)}} className='btn-primary'>Sign up</button>
    </>
  )
}

export default SignUp
