const express = require('express');
const { createBlog, getAllBlogs, deleteBlogById, updateLikes, getLikes } = require('../controllers/blog.controller');

const blogRouter = express.Router()


blogRouter.post('/create', createBlog)
blogRouter.get('/', getAllBlogs)
blogRouter.delete('/:id',deleteBlogById)
blogRouter.put('/:id',updateLikes)
blogRouter.get("/likes",getLikes)

module.exports = blogRouter;