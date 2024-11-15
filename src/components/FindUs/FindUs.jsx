import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const FindUs = () => {
   return (
      <div className='space-y-3'>
         <h1 className="font-semibold">Find Us On</h1>

         <div className="join join-vertical w-full border *:text-slate-500 rounded-md">
            <button className="btn join-item btn-block btn-ghost  border-b border-b-gray-200 justify-start">
               <FaFacebook className='text-blue-500 text-center w-9 h-9 p-2 rounded-full bg-gray-200'></FaFacebook> Faceboook
            </button>
            <button className="btn join-item btn-block btn-ghost border-b border-b-gray-200 justify-start ">
               <FaTwitter className='text-blue-500 text-center w-9 h-9 p-2 rounded-full bg-gray-200'></FaTwitter> Twiitter
            </button>
            <button className="btn join-item btn-block btn-ghost justify-start">
               <FaInstagram className='text-red-500 text-center w-9 h-9 p-2 rounded-full bg-gray-200'></FaInstagram> Instagram
            </button>
         </div>
      </div>
   )
}

export default FindUs
