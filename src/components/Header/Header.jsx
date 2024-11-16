import React from 'react'
import logo from '../../assets/logo.png';
import moment from 'moment';

const Header = () => {
   const dateTimeString = moment().format('dddd, MMMM Do, YYYY')

   
  return (
    <div className='flex flex-col items-center py-3 px-3'>
      <div>
         <img className='w-[500px]' src={logo} alt="" />
      </div>
      <h2 className="text-gray-400">Journalism Without Fear or Favour</h2>
      <p>{dateTimeString}</p>
    </div>
  )
}

export default Header
