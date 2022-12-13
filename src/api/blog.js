import axios from ".";

export async function createBlog(content){
    return axios.post('http://localhost:8080/blog/create',{
        content

    })
}

export async function getAllBlogs(){
    return axios.get('http://localhost:8080/blog')
}
export async function deleteBlogById(id){
    return axios.delete(`http://localhost:8080/blog/${id}`)
}
export async function updateLikesById(id){
    return axios.put(`http://localhost:8080/blog/${id}`)
}
export async function getAllLikes(){
    return axios.get(`http://localhost:8080/blog/likes`)
}