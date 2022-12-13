const express = require('express');

const { login, register, getLoggedInUser, googleLogin } = require('../controllers/auth.controller');
const userRouter = express.Router();


userRouter.get("/loggedInUser",getLoggedInUser)
userRouter.post('/login',login)
userRouter.post('/register',register)
userRouter.post('/google',googleLogin)


module.exports = userRouter