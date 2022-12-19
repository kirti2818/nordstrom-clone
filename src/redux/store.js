import { legacy_createStore,combineReducers, applyMiddleware,compose } from "redux";
import thunk from "redux-thunk"
import reducerCart from "../cart/cartReducer";
import { singleReducer } from "../SingleProduct/singleReducer";
import reducer from "./reducer";
const rootReducers = combineReducers({
    nordstromData : reducer,
    singleData : singleReducer,
    cartData : reducerCart
})
const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducers,createComposer(applyMiddleware(thunk)))