import axios from 'axios';

const authService = {
    registerUserApi : (username,email,password) => {
        return axios.post(`${process.env.REACT_APP_API_URL}/api/auth/signup`,{
            username:username,
            email:email,
            password:password
        })
    },   
    registerAdminApi : (username,email,password) => {
        return axios.post(`${process.env.REACT_APP_API_URL}/api/auth/signupAdmin`,{
            username:username,
            email:email,
            password:password
        })
    },   
    loginApi:(username,password) => {
        return axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`,{
            username:username,
            password:password
        })
    },
    authHeader:() => {
        return {Authorization: "Bearer "+ localStorage.getItem("user")};
    },
    storeToken:(token) =>{
        localStorage.setItem("user",token);
    },
    logout:() => {
        localStorage.removeItem("user");
    }    
}

export default authService;