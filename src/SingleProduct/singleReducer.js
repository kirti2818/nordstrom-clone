import { GET_SINGLE_PRODUCT } from "./SingleActionType"

const initState={
    singleProductData : [],
    error:false,
    loading:false
}

export function singleReducer(state= initState , action){
    // console.log(action.payload)
  switch(action.type){
    case GET_SINGLE_PRODUCT:{
      console.log(action.payload)
        return {...state,singleProductData:action.payload}
    }
    default:{
        return state;
    }
  }
}