import { MEN_ALL_PRODUCTS } from "./actionType"

const initState={
    data:[]
}

export default function reducer(state=initState,action){
    
   switch(action.type){
    case MEN_ALL_PRODUCTS:{
        // console.log(action.payload)
        return {
            ...state,
            data:action.payload
        }
    }
    default:{
        return state
    }
   }
}