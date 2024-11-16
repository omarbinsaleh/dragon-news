import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import userIcon from '../../assets/user.png';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
  const navigate = useNavigate();
  const {logOut, user} = useContext(AuthContext);

  const location = useLocation();
  console.log(location)

  function handleLogOut() {
    logOut()
    .then(() => {
      console.log("user has loged out successfully!")
      navigate('/auth/login');
    })
    .catch((error) => {
      console.log(error.message);
    })
  }

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
        {location.pathname === '/auth/login' &&  <Link to={'/auth/register'} className='btn bg-black text-white rounded-none px-10 hover:bg-gray-600'>Register</Link>}
        {location.pathname === '/auth/register' &&  <Link to={'/auth/login'} className='btn bg-black text-white rounded-none px-10 hover:bg-gray-600'>Login</Link>}
        {user && <button onClick={handleLogOut} className='btn bg-black text-white rounded-none px-10 hover:bg-gray-600'>Log Out</button>}
      </div>
    </nav>
  )
}

export default Navbar
