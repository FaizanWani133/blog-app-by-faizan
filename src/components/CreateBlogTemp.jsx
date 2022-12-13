import { Box, Button, FormControl, FormLabel, Input, Text, Textarea } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { createBlog } from '../api/blog';
import AuthContext from '../contexts/auth';
import BlogContext from '../contexts/blog';

function CreateBlogTemp() {


    const {onCloseLogin,isOpenLogin,onOpenLogin,login} = useContext(AuthContext);
   





  return (
    <Box borderRadius={20} bg="orange" width={"100%"} p={4}  >
        <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi ullam quisquam molestiae fuga libero dolores illum eos dolore tenetur repudiandae doloremque veritatis ab ad mollitia, dignissimos quaerat totam distinctio vel?</Text>
        
        <Button onClick={onOpenLogin}   mt={4} colorScheme={"teal"}>Login To Post a Blog</Button>
    </Box>
  )
}

export default CreateBlogTemp