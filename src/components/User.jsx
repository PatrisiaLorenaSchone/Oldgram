import {Flex } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import ProfileHeader from './ProfileHeader'
import ProfilePosts from './ProfilePosts'
import { GoBookmark } from "react-icons/go";
import { GoBookmarkFill } from "react-icons/go";
import { GoImage } from "react-icons/go";
// import useGetUserProfileById from "../hooks/useGetUserProfileById"
// import { getAuth } from 'firebase/auth'
import {AuthContext} from "../App"


function User(){
  const {uid} = useParams()
  // const {isLoading, userProfile} = useGetUserProfileById(uid)
  const user = React.useContext(AuthContext)

  return (
    <>
      <Flex
      py={10}
      px={4}
      mx={"auto"}
      flexDirection={"column"}
      maxW={{base:"90%", lg:"60%"}}
      >
      <ProfileHeader username={user.username}/>
      <Flex
        justifyContent={"flex-end"}
        gap={7}
        color={"whitesmoke"}
        >
        <Flex alignItems={"center"} gap={2} cursor={"pointer"}>
        <GoImage fill='gray'/> My Gallery 
        </Flex>
        <Flex alignItems={"center"} gap={2} cursor={"pointer"}>
        <GoBookmark /> Saved Posts 
        </Flex>
      </Flex>
      <ProfilePosts/>
      </Flex>
      </>
  )
}

export default User

/*
    <div className='user-profile'>
      <div className='profile-header'>
        
      </div>
      <hr />
      <div className="profile-posts"></div>
      <h2>Welcome to Oldgram</h2>
      <p>We are still planning this page</p>
    </div>
 */