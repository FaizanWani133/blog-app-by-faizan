import axios from ".";
// import axios from "axios";

export async function loginApi(email, password) {
    return axios.post('http://localhost:8080/user/login', {
        email, password
    })
}

// export async function loginWithGithubApi(code) {
//     return axios.get(`/user/githubSignin?code=${code}`)
// }
export async function signupApi(name, email, password,image='',username='') {
    return axios.post('http://localhost:8080/user/register',{
        name, email, password,image,username
    })

}

export async function getLoggedInUser() {
    return axios.get(`http://localhost:8080/user/loggedInUser`)
}
export async function googleSignup(name, email, password,image,username){
    return axios.post(`http://localhost:8080/user/google`,{
        name, email, password,image,username
    })
}