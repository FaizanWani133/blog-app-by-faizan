import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Image, Text, useToast } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { BsThreeDotsVertical, BsTrash } from 'react-icons/bs'
import { BiChat, BiLike, BiShare } from 'react-icons/bi'
import AuthContext from '../contexts/auth'
import { deleteBlogById, updateLikesById } from '../api/blog'
import BlogContext from '../contexts/blog'

function BlogPost({data}) {
    const {user} = useContext(AuthContext)
    const toast = useToast();
    const {getBlogs,getTotalLikes} = useContext(BlogContext)

    function deleteBlog(){
        
        deleteBlogById(data._id).then(res=>toast({
            title: 'Deleted',
            description: "Blog Deleted Successfully",
            status: 'success',
            duration: 3000,
            isClosable: true, 
        })).finally(()=>{
            getBlogs()
            getTotalLikes()})
    }

    function updateLikes(){
        updateLikesById(data._id).then(res=>{
            getBlogs()
            getTotalLikes();
        }).catch(res=>toast({
            title: 'Error',
            description: "user not logged in",
            status: 'error',
            duration: 3000,
            isClosable: true, 
        }))
    }
  return (
    <Card bg={"grey"} borderRadius={"20px"} boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;"} margin={"20px auto"} width="100%">
  <CardHeader>
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name={data.author.authorName} src={data.author.authorImage} />

        <Box>
          <Heading size='sm'>{data.author.authorName}</Heading>
          {/* <Text>{data.author.authorName}</Text> */}
        </Box>
      </Flex>
      {user && user._id==data.author.authorId && <IconButton
      onClick={deleteBlog}
        variant='ghost'
        colorScheme='gray'
        aria-label='See menu'
        icon={<BsTrash />}
      />}
    </Flex>
  </CardHeader>
  <CardBody>
    <Text>
      {data.content}
    </Text>
  </CardBody>
  {/* <Image
    objectFit='cover'
    src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    alt='Chakra UI'
  /> */}

  <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        minW: '136px',
      },
    }}
  >
    <Button onClick={updateLikes} flex='1' variant='ghost' leftIcon={<BiLike />}>
      {data.likes} Like
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
      Comment
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
      Share
    </Button>
  </CardFooter>
</Card>
  )
}

export default BlogPost