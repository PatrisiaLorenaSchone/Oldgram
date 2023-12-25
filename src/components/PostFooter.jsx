import { Flex, InputGroup, Input, InputRightElement, Button } from '@chakra-ui/react'
import React from 'react'
// import { GoHeart } from "react-icons/go";
// import { GoHeartFill } from "react-icons/go";
// import { FaRegComment } from "react-icons/fa6";
// import { GoBookmark } from "react-icons/go";
// import { GoBookmarkFill } from "react-icons/go";

function PostFooter() {
  return (
    <Flex alignItems={"center"} gap={4} w={"full"} justifyContent={"space-between"} px={3}>
       <InputGroup>
       <Input variant={"flushed"} placeholder={"Add a comment..."} fontSize={14} />
       <InputRightElement>
       <Button
       fontSize={14}
       color={"darkgoldenrod"}
       fontWeight={600}
       cursor={"pointer"}
       _hover={{color:"gold"}}
       bg={"transparent"}
       >
        Post
       </Button>
       </InputRightElement>
       </InputGroup>
    </Flex>
  )
}

export default PostFooter
