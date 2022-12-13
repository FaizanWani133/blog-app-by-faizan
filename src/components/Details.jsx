import { Box, Button, Center, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import BlogContext from '../contexts/blog'

function Details({color,data,logo}) {
    const {likes} = useContext(BlogContext)
  return (
    <Button padding={"50px"} width="100%" colorScheme={color}  borderRadius="20px" bg={"#ffd54e"} >
        {likes}
    </Button>
  )
}

export default Details