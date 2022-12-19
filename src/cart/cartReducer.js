import { ADD_TO_CART, CHECKOUT, REMOVE } from "./cartActionType"
const initstate = {
    cartitemdata:[]
}
const reducerCart = (state=initstate,action) =>{
    console.log(action.payload)
    switch(action.type){
        case ADD_TO_CART :{
            return {
                ...state,
                cartitemdata:[...state.cartitemdata,action.payload]
            }
        }
        // case REMOVE : {
        //     const cartAfterItemRemoval = state.filter(
        //         (item) =>item.id !== action.payload
        //     )
        //     return cartAfterItemRemoval
        // }
        case CHECKOUT : {
            return []
        }
        default : {
            return state
        } 
    }
}

export default reducerCart