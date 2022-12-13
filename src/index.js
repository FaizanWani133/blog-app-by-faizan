import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import  { AuthContextProvider } from "./contexts/auth";
import { BlogContextProvider } from "./contexts/blog";
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="979077974077-e9b3ad040fpsesa5fr0ert0b55lhfpj0.apps.googleusercontent.com">
  <AuthContextProvider>
    <BlogContextProvider>
  <BrowserRouter>
    <ChakraProvider>
   <App />
      
    </ChakraProvider>
  </BrowserRouter>
  </BlogContextProvider>
  </AuthContextProvider>
  </GoogleOAuthProvider>
);
