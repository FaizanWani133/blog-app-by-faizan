import { Box } from '@chakra-ui/react';
import React, { useContext } from 'react'
import AllBlogs from '../components/AllBlogs';
import CreateBlog from '../components/CreateBlog';
import CreateBlogTemp from '../components/CreateBlogTemp';
import Details from '../components/Details';
import AuthContext from '../contexts/auth'

function Home() {

  const {user} = useContext(AuthContext);

  return (
    <>
    <Box flexGrow={"1"} maxW="800px"  >
      {user ? <CreateBlog/>:<CreateBlogTemp/>}
      <AllBlogs></AllBlogs>
    </Box>
    <Box width={"30%"}>
      <Details/>
    </Box>
    </>
    
   
  )
}

export default Home