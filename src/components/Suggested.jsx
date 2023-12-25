import { Flex, Avatar, Button, Text } from '@chakra-ui/react'
import React from 'react'
// import useLogout from '../hooks/useLogout'
// import useAuthStore from '../authstore'
import { Link } from 'react-router-dom'

function Suggested() {
  // const {handleLogout} = useLogout()
  // const authUser = useAuthStore((state) => state.user);

  // if(!authUser) return null;
  
  return (
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} color={"whitesmoke"} py={10} >
      <Flex justifyContent={"space-between"}  gap={2}>
        <Link to={`user/`}>
          <Avatar size={"md"} 
          // src={authUser.profilePicURL}
          />
        </Link>
        <Link to={`user/`}>
          <Text fontSize={12} fontWeight={"bold"}>
            {/* {authUser.username} */}
          </Text>
        </Link>
      </Flex>
      <Button
      size={"xs"}
      background={"transparent"}
      _hover={{background: "transparent", color:"goldenrod"}}
      fontSize={14}
      fontWeight={"medium"}
      color={"whitesmoke"}
      cursor={"pointer"}
      // onClick={handleLogout}
      >
        Log out
      </Button>
  </Flex>
  )
}

export default Suggested
