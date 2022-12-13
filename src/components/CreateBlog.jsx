import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { createBlog } from "../api/blog";
import BlogContext from "../contexts/blog";

function CreateBlog() {

  const [content, setContent] = useState("");
  const { getBlogs } = useContext(BlogContext);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  function postBlog() {
    setLoading(true);
    createBlog(content)
      .then((res) => {
        getBlogs();
        setContent("")
        toast({
            title: 'Success',
            description: "Blog Posted",
            status: 'success',
            duration: 3000,
            isClosable: true, 
        })
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }

  return (
    <Box borderRadius={20} bg="#ffd54e" width={"100%"} p={4}>
     
      <FormControl>
        <Textarea
          bg={"white"}
          mt={2}
          value={content}
          onChange={(e) => setContent((prev) => e.target.value)}
          placeholder="What is in your Mind?"
        ></Textarea>
      </FormControl>
      <Button
        isDisabled={!content}
        isLoading={loading}
        onClick={postBlog}
        mt={4}
        colorScheme={"teal"}
      >
        POST
      </Button>
    </Box>
  );
}

export default CreateBlog;
