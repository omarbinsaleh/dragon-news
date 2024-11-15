import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const Categories = () => {
   const [categories, setCategories] = useState([])

   useEffect(() => {
      fetch("https://openapi.programming-hero.com/api/news/categories")
      .then(response => response.json())
      .then(data => setCategories(data.data.news_category));
   }, [])

  return (
    <div className='space-y-3'>
      <h1 className='font-semibold'>All Categoris</h1>
      <div>
         {
            categories?.map(category => <NavLink className={'btn btn-block btn-ghost justify-start rounded-none font-normal px-10'}  to={`news/categories/${category.category_id}`} key={category.category_id}>{category.category_name} </NavLink>)
         }
      </div>
    </div>
  )
}

export default Categories