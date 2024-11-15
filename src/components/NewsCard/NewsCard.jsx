import React, { useState } from 'react'
import { FaShareAlt } from 'react-icons/fa';
import { FaRegBookmark } from 'react-icons/fa6';

const NewsCard = ({ news }) => {
   const [showFull, setShowFull] = useState(false)
   const { title, author, details, thumbnail_url: thumbnail, rating, total_view: view } = news;
   const { name, published_date:dateOfPublishing, img: authorImg } = author;
   const { number, badge } = rating;

   const description = showFull ? details : details.slice(0, 190);

   function handleShowFull() {
      setShowFull(!showFull);
   }

   return (
      <div className='w-11/12 mx-auto border rounded-md space-y-4'>
         <header className='flex items-center justify-between bg-gray-200 p-3 rounded-tl-md rounded-tr-md'>
            <div className='flex items-center gap-2'>
               <img className='w-[40px] aspect-square rounded-full' src={authorImg} alt="" />
               <div className='space-y-1'>
                  <p className='font-semibold'>{name || "Unkown Author"}</p>
                  <p className='text-xs'>{dateOfPublishing || 'N/A'}</p>
               </div>
            </div>
            <div className='flex items-center gap-2'>
               <button className="btn btn-ghost rounded-full">
                  <FaRegBookmark></FaRegBookmark>
               </button>
               <button className="btn btn-ghost rounded-full">
                  <FaShareAlt></FaShareAlt>
               </button>
            </div>
         </header>

         <div className='p-3 space-y-5'>
            <h1 className='text-lg font-bold'>{title}</h1>

            <div>
               <img className='w-full aspect-[6/3] ' src={thumbnail} alt="" />
            </div>

            <div>
               <p onClick={handleShowFull}>
                  {description}<span className={showFull ? 'hidden' : "inline text-slate-500"}>.... See more</span>
               </p>
            </div>

            <div className="divider"></div>

            <div className='flex items-center justify-between'>
               <div>
                  <p>Rating : {number}</p>
               </div>
               <div>
                  <p>Views : {view}</p>
               </div>
            </div>
         </div>

      </div>
   )
}

export default NewsCard
