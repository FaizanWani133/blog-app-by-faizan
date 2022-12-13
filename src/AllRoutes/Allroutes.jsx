import React from 'react'
import { Route, Routes } from 'react-router'

import Home from '../pages/Home';
import NavBar from '../components/NavBar';

import { Box, Container, Flex } from '@chakra-ui/react';


function Allroutes() {
  return (
    
      <Flex p={4} gap={"20px"} width={"100%"}>
      <Routes>
        <Route path='/' element={<Home/>}></Route>   
        <Route path='/create' element={<Home/>}></Route> 
        <Route path='/myblogs' element={<Home/>}></Route> 
        <Route path='/account' element={<Home/>}></Route> 
        
      </Routes>
      </Flex>
    
  )
}

export default Allroutes