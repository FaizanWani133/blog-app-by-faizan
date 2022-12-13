import { Button, FormControl, FormLabel, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text, useToast } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import AuthContext from '../contexts/auth';
import {BsGithub} from 'react-icons/bs'

function SignupToast({response}) {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const [gender,setGender] = useState("");

    const {onCloseSignup,isOpenSignup,onOpenLogin,signup} = useContext(AuthContext);
    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )
    
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
    
  
    return (
        <>
        <Modal isCentered isOpen={isOpenSignup} onClose={onCloseSignup}>
          {overlay}
          <ModalContent>
            <ModalHeader>Log In</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input value={name} onChange={(e)=>setName(prev=>e.target.value)} type={'text'} placeholder='Enter Name' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input value={email} onChange={(e)=>setEmail(prev=>e.target.value)} type={'email'} placeholder='Enter Email' />
            </FormControl>
            
            <FormControl mt={4}>
            <FormLabel>Gender</FormLabel>
                <Select value={gender} onChange={(e)=>setGender(prev=>e.target.value)} placeholder='Select Gender'>
                    <option value={'Male'}>Male</option>
                    <option value={'Female'}>Female</option>
                    <option value={'Others'}>Others</option>
                </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input value={password} onChange={(e)=>setPassword(prev=>e.target.value)} type={'password'} placeholder='Enter Password' />
            </FormControl>
            <Button onClick={()=>{
                signup(name,email,password,gender);
               
            }} mt={"20px"} colorScheme={"teal"} width={"100%"} >Login</Button>
            </ModalBody>
            <ModalFooter>
                
            
            <Button onClick={()=>{
                onCloseSignup();
                onOpenLogin();
            }}>Already a User ?</Button>
            
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default SignupToast