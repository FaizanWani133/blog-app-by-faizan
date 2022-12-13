const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    content: { type: String, required: true,  },
    author: {
      authorId: {type:mongoose.ObjectId,ref:'users'},
      authorName: String,
      authorImage: String,
    },
    likes:{type:Number ,default:0}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Blog = mongoose.model("blogs", blogSchema);

module.exports = {
  Blog,
};
