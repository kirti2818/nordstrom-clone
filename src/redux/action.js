import axios from "axios"
import {ACTIVE, KIDS_ALL_PRODUCTS, MEN_ALL_PRODUCTS, WOMEN_ALL_PRODUCTS} from "./actionType"
export const menAllProduct =(sortByPrice)=> async(dispatch)=>{
    console.log(sortByPrice)
    if(sortByPrice===""){
        let response = await axios.get("https://nordstrom-api.onrender.com/products?type=men")
        let pro = response.data
        // console.log(pro)
        dispatch({type:MEN_ALL_PRODUCTS , payload:pro})
    }
    else{
        let response = await axios.get(`https://nordstrom-api.onrender.com/products?type=men&_sort=price&_order=${sortByPrice}`)
        let pro = response.data
        // console.log(pro)
        dispatch({type:MEN_ALL_PRODUCTS , payload:pro})
    }
   
}


export const womenAllProduct =(sortByPrice)=> async(dispatch)=>{
    console.log(sortByPrice)
    if(sortByPrice===""){
        let response = await axios.get("https://nordstrom-api.onrender.com/products?type=womenActiveWear")
        let pro = response.data
        // console.log(pro)
        dispatch({type:WOMEN_ALL_PRODUCTS , payload:pro})
    }
    else{
        let response = await axios.get(`https://nordstrom-api.onrender.com/products?type=womenActiveWear&_sort=price&_order=${sortByPrice}`)
        let pro = response.data
        // console.log(pro)
        dispatch({type:WOMEN_ALL_PRODUCTS , payload:pro})
    }
   
}


export const kidsAllProduct =(sortByPrice)=> async(dispatch)=>{
    console.log(sortByPrice)
    
    if(sortByPrice===""){
        let response = await axios.get("https://nordstrom-api.onrender.com/products?type=kid")
        let pro = response.data
        console.log(pro)
        dispatch({type:KIDS_ALL_PRODUCTS , payload:pro})
    }
    else{
        let response = await axios.get(`https://nordstrom-api.onrender.com/products?type=kid&_sort=price&_order=${sortByPrice}`)
        let pro = response.data
        // console.log(pro)
        dispatch({type:KIDS_ALL_PRODUCTS , payload:pro})
    }
   
}

export const activeAllProduct =(sortByPrice)=> async(dispatch)=>{
    console.log(sortByPrice)
    if(sortByPrice===""){
        let response = await axios.get("https://nordstrom-api.onrender.com/products?type=shoes")
        let pro = response.data
        // console.log(pro)
        dispatch({type:ACTIVE , payload:pro})
    }
    else{
        let response = await axios.get(`https://nordstrom-api.onrender.com/products?type=shoes&_sort=price&_order=${sortByPrice}`)
        let pro = response.data
        // console.log(pro)
        dispatch({type:ACTIVE , payload:pro})
    }
   
}

