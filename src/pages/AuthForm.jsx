import React from 'react'
import { Flex, Input } from '@chakra-ui/react'
import { GoPersonFill } from "react-icons/go"
import GoogleAuth from '../components/GoogleAuth';
import FacebookAuth from '../components/FacebookAuth'
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

function AuthForm() {
  const [isLogin, setIsLogin] = React.useState(true);

  return (
    <div className='auth-container'>
     <GoPersonFill className='user-icon'/>
    <h1 className='title'>{isLogin ? "Log in" : "Sign up"}</h1>
    <div className='auth-btns-container'>
      <GoogleAuth isLogin={isLogin}/>
      <FacebookAuth isLogin={isLogin}/>
    </div>
    <Flex direction={"column"} gap={3}>
        { isLogin ? <SignIn/> : <SignUp/>}
      <p>{ isLogin ? "Don't have an account?" : "Already have an account?"} <span onClick={()=> setIsLogin(!isLogin)} className='underline'>{ isLogin ? "Sign up " : "Log in "} here</span></p>
    </Flex>
    </div>
  )
}

export default AuthForm
