import axios from "axios"
import {MEN_ALL_PRODUCTS} from "./actionType"
export const menAllProduct =(sortByPrice)=> async(dispatch)=>{
    console.log(sortByPrice)
    if(sortByPrice===""){
        let response = await axios.get("http://localhost:8081/products?type=men")
        let pro = response.data
        // console.log(pro)
        dispatch({type:MEN_ALL_PRODUCTS , payload:pro})
    }
    else{
        let response = await axios.get(`http://localhost:8081/products?type=men&_sort=price&_order=${sortByPrice}`)
        let pro = response.data
        // console.log(pro)
        dispatch({type:MEN_ALL_PRODUCTS , payload:pro})
    }
   
}


export const womenAllProduct =(sortByPrice)=> async(dispatch)=>{
    console.log(sortByPrice)
    if(sortByPrice===""){
        let response = await axios.get("http://localhost:8081/products?type=womenActiveWear")
        let pro = response.data
        // console.log(pro)
        dispatch({type:MEN_ALL_PRODUCTS , payload:pro})
    }
    else{
        let response = await axios.get(`http://localhost:8081/products?type=womenActiveWear&_sort=price&_order=${sortByPrice}`)
        let pro = response.data
        // console.log(pro)
        dispatch({type:MEN_ALL_PRODUCTS , payload:pro})
    }
   
}

