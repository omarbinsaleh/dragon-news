import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

const LatestNews = () => {
   const [allNews, setAllNews] = useState([]);
   useEffect(() => {
      fetch("https://openapi.programming-hero.com/api/news/category/08")
      .then(response => response.json())
      .then(data => setAllNews(data.data));
   }, [])


  return (
    <div className='flex items-center bg-gray-100 p-2 gap-2'>
      <div className='bg-[#D72050] text-white px-3 py-2'>
         Latest
      </div>
      <div className='overflow-hidden'>
         <Marquee  pauseOnHover={true}>

            {allNews?.map(news => <Link className='mr-5' key={news._id} to={`/news/${news._id}`}>{news.title}</Link>)}

         </Marquee>
      </div>
    </div>
  )
}

export default LatestNews
