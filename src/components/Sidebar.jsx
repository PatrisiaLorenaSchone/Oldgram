import { Box, Flex, Link } from '@chakra-ui/react'
import { Link as RouterLink } from "react-router-dom"
import React from 'react'
import logo from "../assets/images/logo.png"
import { BiLogOut } from "react-icons/bi"
import { GoHomeFill } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { GoPlusCircle } from "react-icons/go";
import { signUserOut } from '../auth'
import { useNavigate } from "react-router-dom";
// import useLogout from '../hooks/useLogout'
// import useAuthStore from '../authstore'

function Sidebar() {
  const navigate = useNavigate()
  // const {handleLogout} = useLogout()
  // const authUser = useAuthStore(state => state.user);
  function handleLogout(){
    signUserOut()
    navigate(`/authentification`);
  }

  return (
    <Box
    width={200}
    height={"99vh"}
    borderRight={"1px solid"}
    borderColor={"whiteAlpha.300"}
    position={"fixed"}
    top={0}
    left={0}
    py={5}
    px={{base:2,md:4}}
    className='sidebar'
    >
      <Flex direction={"column"} gap={10} w={"full"} height={"100%"}>
        <Flex mt={75} direction={"column"} gap={5}>
            <Link 
              className='sidebar-link'
              to={"/"}
              as={RouterLink}
            >
              <GoHomeFill className='sidebar-icons'/>
              <Box>Home</Box>
            </Link>
            <Link 
              className='sidebar-link'
              to={"authentification"}
              as={RouterLink}
            >
              <GoPerson className='sidebar-icons'/>
              <Box>Profile</Box>
            </Link>
            <Link 
              className='sidebar-link'
              to={"canva"}
              as={RouterLink}
            >
              <GoPlusCircle className='sidebar-icons'/>
              <Box>Create</Box>
            </Link>
            <Link 
              className='sidebar-link'
              to={"search"}
              as={RouterLink}
            >
              <GoSearch className='sidebar-icons'/>
              <Box>Search</Box>
            </Link>
        </Flex>
        <Flex 
              onClick={handleLogout}
              className='sidebar-link sidebar-logout'
              mt="auto"
            >
              <BiLogOut className='sidebar-icons'/>
              <Box
              >Log out</Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Sidebar
