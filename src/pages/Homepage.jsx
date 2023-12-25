import React from 'react'
import Post from '../components/Post'
import { Box } from '@chakra-ui/react'
import Suggested from '../components/Suggested'

function Homepage() {
  return (
    <div className='col'>
          <Post/>
          <Box flex={2} display={{base:"none", lg:"block"}}>
            {/* <Suggested/> */}
          </Box>
    </div>
  )
}

export default Homepage
