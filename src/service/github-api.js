import axios from "axios";

const token = process.env.REACT_APP_GITHUB_TOKEN

const instance = axios.create({
    timeout: 1000,
    headers: {Authorization: `Bearer ${token}`},
})


export const getLoggedInUser = () => instance.get("https://api.github.com/user").then(response => response.data)
export const getUser =  (inputUser) => axios.get(`https://api.github.com/users/TomZe1982`)
    .then(response => response.data)
   // .then (response => console.log("INPUT USER: ",inputUser, "RESPONSE: ", response))

