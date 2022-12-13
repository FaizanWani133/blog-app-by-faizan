import React, { createContext, useContext, useEffect, useState } from 'react'
import { getAllBlogs, getAllLikes } from '../api/blog';
import AuthContext from './auth';


const BlogContext = createContext({

    getBlogs: () => {},
    blogs:[],
    getTotalLikes:()=>{},
    likes:"",
  });

  export function BlogContextProvider({ children }) {
    const [blogs,setBlogs] = useState([]);
    const [likes,setLikes] = useState("");
    const {isOpenLogin,onOpenSignup,user,logout} = useContext(AuthContext)
    function getBlogs(){
        getAllBlogs().then(res=>setBlogs(res.data.data))

    }
    function getTotalLikes(){
        getAllLikes().then(res=>setLikes(res.data.message)).catch(err=>console.log(err))

    }
    
    useEffect(() => {
        getBlogs();
        getTotalLikes();

    }, [isOpenLogin]);
  
    return (
      <BlogContext.Provider
        value={{ 
          getBlogs,
          blogs,
          likes,
          getTotalLikes
        }}
      >
        {children}
      </BlogContext.Provider>
    );
  }
  export default BlogContext