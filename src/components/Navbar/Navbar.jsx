import React from 'react'
import { Link } from 'react-router-dom'
import userIcon from '../../assets/user.png';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between'>
      <div ></div>
      <div className='flex justify-center '>
         <ul className='flex items-center justify-center gap-10'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/career'>Career</Link></li>
         </ul>
      </div>
      <div className='flex items-center gap-2 '>
         <img src={userIcon} alt="" />
         <button className='btn bg-black text-white rounded-none px-10 hover:bg-gray-600'>Login</button>
      </div>
    </nav>
  )
}

export default Navbar
