
const {Blog} = require("../models/blog.model")   ;


async function getBlogsByUserId(req, res) {

    const {userId} = req.params;

    const blogs = await Blog.find({
        'author.authorId': userId,
    }).sort({
        createdAt: -1
    })

    return res.send({
        status: 'success',
        data: blogs
    })
}

async function createBlog(req,res){
    try {
        const blog = req.body;
        const {user} = req;
        if(!user){
            return res.status(400).send({
                status: "Error",
                message: "User Not Logged In ",
              });

        }
        blog.author = {
            authorId:user._id,
            authorName:user.name,
            authorImage:user.image

        }
        const blogData = await Blog.create(blog);
    
        return res.status(200).send({
            status:'Blog Created successfully',
            data:blogData
        })
        
    } catch (error) {
        console.log(error.message)
        
    }
   
}
async function getAllBlogs(req,res){
    const blogs =await Blog.find().sort({createdAt: -1});
    
    return res.send({message:'Success',data:blogs})

}
async function deleteBlogById(req,res){
    const {id} = req.params;  
    const remove = await Blog.findByIdAndDelete(id);
   
    return  res.send({message:'Blog Deleted Successfully'})
    // return res.status(401).send({message:"Invalid User"});
}
async function updateLikes(req,res){
    const {id} = req.params;
    const {user} = req;
    if(user){
        const updated = await Blog.findByIdAndUpdate(id,{$inc:{likes:1}})
        return res.status(200).send({message:"Like successfully updated"});
    }
    return res.status(401).send({message:"Invalid User"});
}
async function getLikes(req,res){
    const {user} = req;
    if(user){
        const blogs = await Blog.find({'author.authorId': user._id});
        // console.log("totalblogs",blogs);
        const likes =  blogs.reduce((acc,el)=>acc+el.likes,0);
        return res.status(200).send({message:`Total Likes : ${likes}`});
    }
    return res.status(200).send({message:"Login to see Likes"})
}

module.exports = {
    createBlog,
    getBlogsByUserId,
    getAllBlogs,
    deleteBlogById,
    updateLikes,
    getLikes
}