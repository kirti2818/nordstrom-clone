import {Routes,Route} from "react-router-dom"
import Home from "../Home/Home"
import Login from "../signup/Login"
import Men from "../Men/Men"
import SignUp from "../signup/Signup.jsx"
import Women from "../Women/Women"
import { SingleProduct } from "../SingleProduct/SingleProduct.jsx"
import Cart from "../cart/Cart"
import Purchase from "../purchase/Purchase"
export default function(){
    return(
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/men" element={<Men/>} />
        <Route path="/women" element={<Women/>} />
        <Route path="/SingleProduct/:id" element={<SingleProduct/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/purchase" element={<Purchase/>} />
        {/* <Route path="/kids" element={<Kids/>} />
        <Route path="/activeWear" element={<ActiveWear/>} /> */}
       </Routes>
    )
}