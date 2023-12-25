import React from 'react'
import { Grid, GridItem, Flex, Text, Image, useDisclosure, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Modal, Box, Avatar, VStack, Divider} from '@chakra-ui/react'
import { AiFillHeart } from "react-icons/ai"
import { FaComment } from "react-icons/fa"
import Comment from './Comment'
import PostFooter from './PostFooter'
import post from "../assets/images/post-vangogh.jpg"
import { AuthContext } from "../App"

function ProfilePosts() {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const {user} = React.useContext(AuthContext)

  let allPosts = user && user.posts.map((post)=>{
    return(
      <>
      <GridItem
      cursor={"pointer"}
      borderRadius={3}
      overflow={"hidden"}
      border={"1px solid gray"}
      position={"relative"}
      aspectRatio={1/1}
      onClick={onOpen}
      >
        <Flex
        opacity={0}
        _hover={{opacity:1}}
        position={"absolute"}
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg={"blackAlpha.700"}
        transition={"all 0.3s ease"}
        zIndex={1}
        justifyContent={"center"}
        alignItems={"center"}
        >
          <Flex m={2}>
            <AiFillHeart size={20} fill='white'/>
            <Text fontWeight={"bold"} ml={1} color={"whitesmoke"}>0</Text>
          </Flex>
          <Flex m={2}>
            <FaComment size={20} fill='white'/>
            <Text fontWeight={"bold"} ml={1} color={"whitesmoke"}>0</Text>
          </Flex>
        </Flex>
        <Image src={post} name="photo" alt='profile post' width={"100%"}/>
      </GridItem>
      <Modal isOpen={isOpen} onClose={onClose}
      isCentered={true}
      size={{base:"200px", md:"350px"}}
      >
        <ModalOverlay/>
        <ModalContent color={"whitesmoke"}>
          <ModalCloseButton/>
          <ModalBody bg={"black"} p={3.5}>
            <Flex gap={4} w={{base:"90%", sm:"70%", md:"full"}} >
              <Box borderRadius={2}
              overflow={"hidden"}
              border={"1px solid grey"}
              flex={1.5}
              >
                <Image src={post} name="photo" alt='profile post'/>
              </Box>
              <Flex flex={1} flexDir={"column"} px={10} display={{base:"none",md:"flex"}} >
                <Flex alignItems={"center"} gap={5}>
                  <Avatar  size={"sm"} name='Patricia Schone'/>
                  <Text fontWeight={"bold"} fontSize={12}>
                    Patricia Schone
                  </Text>
                </Flex>
                <Divider my={4} bg={"gold"}/>
                <VStack w={"full"} alignItems={"start"} maxH={"350px"} overflowY={"auto"}>
                  <Comment
                  createdAt="1d ago"
                  username="patricia.schone"
                  profilePic="./assets/images/avatar-vangogh.jpg"
                  text={"Nice work!"}
                  />
                </VStack>
                <Divider my={4} bg={"gold"} mt={"auto"}/>
                <PostFooter/>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      </>
    )
  })
  return (
    <Grid
    border={"1px solid goldenrod"} 
    gap={3}
    flexWrap={"wrap"}
    mt={10}
    templateColumns={{sm:"repeat(2,1fr)",md:"repeat(3,1fr)"}}
    >
    {allPosts}
    </Grid>
  )
}

export default ProfilePosts
