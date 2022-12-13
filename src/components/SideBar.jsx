import { Box, Button, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
    console.log(window.location.toString());
  return (
    <Flex margin={"0 auto"} p="20px 0" width={"100%"} height="90%" justifyContent="space-between" align="center"  flexDir='column' >
       <Box p={4}> <Image src='https://www.lifepng.com/wp-content/uploads/2020/11/AngelList-Peace-Logo-png-hd.png'></Image></Box>
        <Button><Link  to={"/"}>Dashboard</Link></Button>
        <Button><Link  to={"/account"}>Dashboard</Link></Button>
        <Button><Link  to={"/"}>Dashboard</Link></Button>
        <Button><Link  to={"/"}>Dashboard</Link></Button>
        <Button><Link  to={"/"}>Dashboard</Link></Button>
        <Button><Link  to={"/"}>Dashboard</Link></Button>
        

    </Flex>
  )
}

export default SideBar