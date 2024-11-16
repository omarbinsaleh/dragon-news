import React from 'react'
import { Link } from 'react-router-dom'

const Career = () => {
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-center gap-5'>
      <h1 className='text-2xl font-bold text-slate-700'>Career with Dragon News</h1>
      <Link className='btn' to={'/'}>Go to Newsfeed Section</Link>

    </div>
  )
}

export default Career
