import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='flex flex-col max-w-6xl mx-auto items-center min-h-screen p-3 font-poppins'>
      <header className='w-full'>
         <Navbar></Navbar>
      </header>
      <main className='flex-1  w-full flex items-center justify-center'>
         <Outlet></Outlet>
      </main>
    </div>
  )
}

export default AuthLayout
