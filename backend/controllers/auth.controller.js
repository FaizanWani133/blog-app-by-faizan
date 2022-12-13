const { User } = require("../models/user.model");
require('dotenv').config()
const jwt = require("jsonwebtoken");

const newToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
};

const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      // console.log(user);
      return res.status(400).send({ message: "User Already Exists" });
    } else {
      user = await User.create(req.body);
      return res.status(201).send({ message: "User Created" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(404).send({ message: "Invalid Credentials" });

    const match = user.checkPassword(req.body.password);
    if (!match) return res.status(404).send({ message: "Invalid Credentials" });
    const token = newToken(user);
    return res.status(200).send({ message: "User Logged In", token: token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const getLoggedInUser =  (req, res) => {
  
    const { user } = req;
    console.log(user);

    if (user) {
      return res.send({
        status: "Success",
        data: user,
      });
    } else {
      return res.status(400).send({
        status: "Error",
        message: "User Not Logged Inn ",
      });
    }
  
};
// async function githubSignin(req, res) {

//   try {
//       const {code} = req.query

//       let githubService = new GithubService();
//       const userDetails = await githubService.getUser(code);

//       let existingUser = await User.findOne({
//           authType: 'github',
//           username: userDetails.login
//       });

//       if (!existingUser) {
//           existingUser = await User.create({
//               authType: 'github',
//               name: userDetails.name,
//               githubUsername: userDetails.login,
//               image: userDetails.avatar_url,
//               email: userDetails.email,
//           })
//       }
      
//       let token = generateToken(existingUser);

//       return res.status(200).send({
//           status: 'success',
//           data: {
//               token
//           }
//       })

//   } catch(err) {

//       console.error(err)
//       return res.status(400).send({
//           status: 'success',
//           message: 'Something went wrong'
//       })
//   }
// }
async function googleLogin(req,res){
  try {
    const {email,password,name,username,image} = req.body;
    let user = await User.findOne({ email: email});
    if(user){
      const match = user.checkPassword(password);
    if (!match) return res.status(404).send({ message: "Invalid Credentials" });
    const token = newToken(user);
    return res.status(200).send({ message: "User Logged In", token: token });
    }
    user = await User.create(req.body);
    const tk = newToken(user);
    return res.status(200).send({ message: "User Logged In", token: tk });
    
  } catch (error) {
    res.status(500).send(error.message);
    
  }
}





module.exports = {
  register,
  login,
  getLoggedInUser,
  googleLogin
};
