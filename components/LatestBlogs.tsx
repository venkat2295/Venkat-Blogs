import { projects } from '@/data'
import React from 'react'
import  ThreeDCardDemo  from './ui/blogcard'

const LatestBlogs = () => {
  return (
    <div className='lg:py-28 md:py-16' id='blogs'>
       <h1 className='heading'>
        a small selection of {' '}
        <span className='text-[#3946d8]'>recent blogs</span>
       </h1>
       <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
         {projects.map(({id,title,des,img})=>(
            <div key={id} className=' sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem]  flex items-center justify-center sm:w-[570px] w-[80vw]'>
               <ThreeDCardDemo id={id} title={title} des={des} img={img}  />
            </div>
))}
       </div>
    </div>
  )
}


export default LatestBlogs