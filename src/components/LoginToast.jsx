import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { googleSignup, loginApi, signupApi } from "../api/user";
import AuthContext from "../contexts/auth";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

function ToastStatusExample({ response }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { onCloseLogin, isOpenLogin, onOpenSignup, login } =
    useContext(AuthContext);
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  

  return (
    <>
      <Modal isCentered isOpen={isOpenLogin} onClose={onCloseLogin}>
        {overlay}
        <ModalContent>
          <ModalHeader>Log In</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                value={email}
                onChange={(e) => setEmail((prev) => e.target.value)}
                type={"email"}
                placeholder="Enter Email"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                value={password}
                onChange={(e) => setPassword((prev) => e.target.value)}
                type={"password"}
                placeholder="Enter Password"
              />
            </FormControl>
            <Button
              mt={"20px"}
              width={"100%"}
              colorScheme="teal"
              onClick={() => {
                login(email, password);
              }}
            >
              Login
            </Button>
          </ModalBody>
          <ModalFooter>
            <Flex margin={"0 auto 0 0"}>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                  var decoded = jwt_decode(credentialResponse.credential);
                  googleSignup(decoded.name, decoded.email, decoded.sub,decoded.picture,decoded.name).then((res)=>{
                    login(decoded.email,decoded.sub)
                  })
                  // console.log(decoded);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
              
              {/* <IconButton
                marginLeft={"0"}
                justifySelf={"left"}
                fontSize={"25px"}
                icon={<BsGithub />}
              ></IconButton>
              <IconButton
                marginLeft={"0"}
                fontSize={"25px"}
                icon={<BsGithub />}
              ></IconButton> */}
            </Flex>

            <Button
              onClick={() => {
                onCloseLogin();
                onOpenSignup();
              }}
            >
              Create an account
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ToastStatusExample;
