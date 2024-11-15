import React from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import NewsCard from '../components/NewsCard/NewsCard';

const News = () => {
   const {id} = useParams();
   const {data} = useLoaderData();

   console.log(data)

  return (
    <div className='space-y-3'>
      <h1 className='font-semibold px-6'>Dragon News Home</h1>
      <div className='space-y-4 pb-10'>
        {
          data?.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
        }
      </div>
    </div>
  )
}

export default News
