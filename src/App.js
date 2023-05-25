import React from 'react';
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom';
import Navbar from './pages/navbar/Navbar';
import Customize from './pages/customize/Customize';
import Home from './pages/home/Home';
import Clothe from './pages/clothe/Clothe';
import Cart from './pages/cart/Cart';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Shoe from './pages/shoe/Shoe';
// import Shoes from './pages/shoe/Shoes';
// import './index.css';

function App() {
  return (
    <>
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/customize' element={<Customize/>}/>
        <Route path='/shoe' element={<Shoe/>}/>
        <Route path='/clothe' element={<Clothe/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
