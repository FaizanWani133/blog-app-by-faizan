import { useDisclosure } from "@chakra-ui/react";
import React, { createContext, useContext, useEffect, useState } from "react";
import { getLoggedInUser, loginApi, signupApi } from "../api/user";
import BlogContext from "./blog";

const AuthContext = createContext({
  user: null,
  logout:()=>{},
  login: (email, password) => {},
  signup: (name, email, password, gender) => {},
  isOpenLogin: false,
  onOpenLogin: () => {},
  onCloseLogin: () => {},
  isOpenSignup: false,
  onOpenSignup: () => {},
  onCloseSignup: () => {},
});

export function AuthContextProvider({ children }) {
  const {likes,getTotalLikes} = useContext(BlogContext)
  const {
    isOpen: isOpenLogin,
    onOpen: onOpenLogin,
    onClose: onCloseLogin,
  } = useDisclosure();
  const {
    isOpen: isOpenSignup,
    onOpen: onOpenSignup,
    onClose: onCloseSignup,
  } = useDisclosure();
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    loginApi(email, password)
      .then((response) => {
        const token = response.data.token;

        localStorage.setItem("token", token);

        onCloseLogin();
      })
      .catch((err) => {
        const message = err.response.data.message;

        alert(message);
      });
  };

  const signup = (name, email, password, gender) => {
    // console.log(name,email,password,gender);
    signupApi(name, email, password, gender)
      .then((res) => console.log(res))
      .catch(err=>console.log(err));
  };
  const logout = ()=>{
    localStorage.removeItem("token");
    onOpenLogin();
    setUser(null);
    getTotalLikes();
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    getLoggedInUser(token)
      .then((res) => {
        getTotalLikes()
        setUser(res.data.data)})
      .catch((error) => {
        setUser(null);
        
      });
  }, [isOpenLogin,isOpenSignup]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isOpenLogin,
        onCloseLogin,
        onOpenLogin,
        isOpenSignup,
        onOpenSignup,
        onCloseSignup,
        login,
        signup,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
