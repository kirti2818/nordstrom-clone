import axios from "axios"

const signUpData = (data = {})=>{
 return axios.post("https://nordstrom-api.onrender.com/signup",{
   Email :data.Email,
   Password : data.Password
 })
}

const signUpDat = ()=>{
 return axios.get("https://nordstrom-api.onrender.com/signup")
}

export {signUpData, signUpDat}