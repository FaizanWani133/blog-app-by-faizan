import { SearchIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
 
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/auth";
import ToastStatusExample from "./LoginToast";
import SignupToast from "./SignupToast";

function NavBar() {
  const {onOpenLogin,onOpenSignup,user,logout} = useContext(AuthContext)
  return (
    <>
    <Flex
      p={2}
      width={"100%"}
      flexDir="row"
      align={"center"}
      justifyContent="space-between"    
    >
      
      <Flex>
      <InputGroup borderRadius={50} size='md'>
      <Input borderRadius={50}
        pr='4.5rem'
        
        placeholder='Search Blogs'
      />
      <InputRightElement  >
      <IconButton  borderRadius={50} aria-label='Search database' icon={<SearchIcon />} />
      </InputRightElement>
    </InputGroup>
      </Flex>
      <Box>
        <Menu>
          <MenuButton >
            {user ? <Avatar name={user.name} src={user.image} ></Avatar> : <Avatar ></Avatar> }
          </MenuButton>
          <MenuList>
            <MenuOptionGroup title="Profile">
              {user && <MenuItem>My Account</MenuItem>}
              <MenuItem>My Blogs</MenuItem>
              {user===null ? <MenuItem
          onClick={() => {
            
            onOpenLogin()
          }}
        >
          Login
        </MenuItem> : <MenuItem onClick={()=>{
         logout();
        }}>Logout</MenuItem>}  
            </MenuOptionGroup>
            
          </MenuList>
        </Menu>
      </Box>
    </Flex>
     <ToastStatusExample/>
     <SignupToast/>
   
    </>
  );
}

export default NavBar;
