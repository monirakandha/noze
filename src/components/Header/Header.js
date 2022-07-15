import React from 'react';
import Logo from '../../assets/logo.png'

const Header = () => {
    return (
<div className='border-b-2 sticky top-0 z-50'>
<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Overview</a></li>
        <li><a>Specs</a></li>
        <li><a>Faq's</a></li>
        <li><a>Order for $249</a></li>
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl"><img src={Logo} alt="" /></a>
    <div class="navbar-start hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
    <li className='text-lg text-secondary'><a>Overview</a></li>
    <li className='text-lg text-secondary'><a>Specs</a></li>
    <li className='text-lg text-secondary'><a>Faq's</a></li>
    </ul>
  </div>
  </div>


  <div class="navbar-end">
  <div class="navbar-end hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <li><a>Order for $249</a></li>
      
    </ul>
  </div>
    <a class="btn btn-primary text-white">Pre Order</a>
  </div>
</div>
</div>

    );
};

export default Header;