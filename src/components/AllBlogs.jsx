import { Box, HStack, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { getAllBlogs } from "../api/blog";
import BlogContext from "../contexts/blog";
import BlogPost from "./BlogPost";

function AllBlogs() {
  const {blogs,getBlogs} = useContext(BlogContext);


  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <Box p={2} mt={"20px"} width={"100%"}>
      <HStack justify={"space-between"}><Text fontSize={"25px"}>Top Blogs</Text><Text>Hello</Text></HStack>
      {blogs.map((el) => (
        <BlogPost key={el._id} data={el}></BlogPost>
      ))}
    </Box>
  );
}

export default AllBlogs;
