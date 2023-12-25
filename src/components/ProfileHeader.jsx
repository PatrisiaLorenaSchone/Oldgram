import React from 'react'
import { Avatar, AvatarGroup, Flex} from '@chakra-ui/react'
// import useUserProfileStore from "../userProfileStore"
// import useAuthStore from "../authstore"
import {AuthContext} from "../App"

function ProfileHeader() {
  // const {userProfile} = useUserProfileStore();
  // const authUser = useAuthStore((state) => state.user);
  const {user} = React.useContext(AuthContext)

  return (
    <Flex
    gap={{base:4,sm:10}}
    py={10}
    direction={{base:"column",sm:"row"}}
    alignItems={"center"}
    borderBottom={"1px solid gray"}
    mb={2}
    >
      <Avatar       
      className='user-avatar'
      src={user && user.profilePicURL} 
      name={user && user.username}/>
      <Flex direction={"column"} gap={5} color={"whitesmoke"} >
      <div>
        <h3>{user && user.username}</h3>
        <p>Quote of the day: "<i></i>"</p>
      </div>
      <div>
        Friends  |  Posts  |  Ideas
      </div>
      </Flex>
    </Flex>
  )
}

export default ProfileHeader
