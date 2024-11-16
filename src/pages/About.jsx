import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-center gap-5'>
      <h1 className='text-2xl font-bold text-slate-700'>About Us Page</h1>
      <Link className='btn' to={'/'}>Go to News Section</Link>

    </div>
  )
}

export default About
