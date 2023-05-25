import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../login/Login';
import './navbar.css';

const logo =require('../../images/logo-hanger.png');

const Navbar = () => {
  return (
    <nav className='bg-black text-white flex items-center justify-between p-2'>
      <div>
        <Link to={'/'} className='text-2xl font-semibold text-yellow-600 hover:text-orange-900 uppercase'><img src={logo} alt="logo-hanger" className='h-20 bg-transparent ml-10'/></Link>
      </div>
      <ul className='flex'>
        <li className='mx-4'><Link to={'/Clothe'} className='hover:text-orange-900 font-light'>Clothes</Link></li>
        <li className='mx-4'><Link to={'/Shoe'} className='hover:text-orange-900 font-light'>Shoes</Link></li>
        <li className='mx-4'><Link to={'/customize'} className='hover:text-orange-900 font-light'>Customization</Link></li>
      </ul>

    {/* Add to cart */}
    <div className='flex'>
      <Link to={'/cart'}>
      <button className="cta hover:text-orange-900" >
        
    <span className="hover-underline-animation"> Cart </span>
    <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal" className='ml-1 fill-current text-white'>
        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
        <path
                  className='icon-hover'
                  transform='translate(30)'
                  d='M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z'
                  data-name='Path 10'
                  id='Path_10'
                ></path>
    </svg>
</button>

 {/* login and register */}
 
    <Link to={'/login'} element={<Login/>}>
      <button>
  <span className="transition"></span>
  <span className="gradient"></span>
  <span className="label">Login</span>
</button>
      </Link>

      <Link to={'/register'} element={<Login/>}>
      <button className='mx-2'>
  <span className="transition"></span>
  <span className="gradient"></span>
  <span className="label">Register</span>
</button>
      </Link>
    
</Link>
</div>
    </nav>
  );
};

export default Navbar;
