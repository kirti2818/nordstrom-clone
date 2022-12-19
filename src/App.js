import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Men from './Men/Men';
import Home from './Home/Home';
import Women from './Women/Women';
import SignUp from './signup/Signup.jsx';
import AllRoutes from './Routes/AllRoutes';
import Cart from './cart/Cart';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      {/* <Men/> */}
      {/* <Women/> */}
      {/* <Home/> */}
      {/* <SignUp/> */}
      {/* <Cart/> */}
    </div>
  );
}

export default App;
