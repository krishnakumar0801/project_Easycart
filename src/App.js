
import './App.css';
import Home from './Components/Home';
import Cart from '../src/Components/Cart';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Signin from './Components/Sign-in';
import Policy from './Components/policy';
import Returnorder from './Components/return&order';
import Newuser from './Components/Newuser';
import Menswear from './Components/clothes/menswear';
import Womenswear from './Components/clothes/womenswear';
function App() {
  return (
    <div className="App">
      
        <Router > 
            <Routes>
              
                <Route path='/Policy' element={<Policy />}></Route>
                 <Route path='/Home' element={<Home />}></Route>  
                <Route path='/' element={<Signin />} ></Route>  
                <Route path='/Return&order' element={<Returnorder/>}></Route>
                <Route path='/Cart' element={<Cart />} ></Route>
                <Route path='/Newuser' element={<Newuser/>}></Route>
                <Route path='/Menswear' element={<Menswear/>}> </Route>
                <Route path='/Womenswear' element={<Womenswear/>}> </Route>
            </Routes>
        </Router>
       
    </div>
  );
}

export default App;
