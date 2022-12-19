import axios from "axios"

const signUpData = (data = {})=>{
 return axios.post("http://localhost:8081/signup",{
   Email :data.Email,
   Password : data.Password
 })
}

const signUpDat = ()=>{
 return axios.get("http://localhost:8081/signup")
}

export {signUpData, signUpDat}