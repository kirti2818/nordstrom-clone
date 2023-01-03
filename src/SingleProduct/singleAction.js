import axios from "axios"
import { GET_SINGLE_PRODUCT } from "./SingleActionType"

export const getSinglePro = (id) =>async(dispatch)=> {
    console.log(id)
    const response = await axios.get(`https://nordstrom-api.onrender.com/products?_id=?_id=${id}`)
    const data = response.data
    console.log(data)
    dispatch({type:GET_SINGLE_PRODUCT,payload:data})
}