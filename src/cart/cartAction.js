import { ADD_TO_CART, CHECKOUT, REMOVE } from "./cartActionType"

export const addToCart = (data)=>(dispatch)=>{
    dispatch({type : ADD_TO_CART , payload : data})
}

// export const removeProduct = (id)=>({
//     type : REMOVE,
//     payload : id,
// })

export const checkout = ()=>({
    type : CHECKOUT,
})