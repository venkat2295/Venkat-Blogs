'use client'

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { Spotlight } from '@/components/ui/Spotlight';
import Image from 'next/image';
import { projects } from '@/data';

const Blogpagecontent = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  // Find the project that matches the ID from query parameters
  const project = projects.find(project => project.id.toString() === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className='pb-24 mb-60  sm:pt-3 md:pt-3 lg:pt-5'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 p-4">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className='flex flex-col relative my-10 z-10 gap-8 md:gap-12 lg:gap-20 p-4'>
        <div className='flex w-full items-center justify-center'>
          <div className="flex flex-col items-center justify-start w-full p-4">
            <Image
              src={project.img}
              height={5000}
              width={5000}
              className="h-[60vw] sm:h-[50vw] lg:h-[40vw] w-full object-cover rounded-xl group-hover:card:shadow-xl"
              alt="thumbnail"
            />
            <div className="mt-5 w-full"> 
              <h2 className="text-xl lg:text-4xl md:text-3xl sm:text-2xl font-bold">{project.title}</h2>
              <p className='mt-6 lg:text-base break-words'>{project.exp}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogpagecontent;