import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { GlareCardDemo } from './ui/glowingcard'

const Hero = () => {
  return (
    <div className='pb-20 lg:pb-44 sm:pt-36 md:pt-16'>
        <div>
               <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='blue' />
        </div>
        <div className="h-screen w-full dark:bg-black-200 bg-white  flex items-center justify-center absolute top-0 left-0">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
    <div className='flex flex-col sm:flex-row relative my-20 z-10 gap-8 md:gap-12 lg:gap-20'>
    <div className='flex w-full max-w-[89vw] md:max-w-3xl lg:max-w-4xl xl:max-w-6xl flex-col-reverse sm:flex-row'>
        <div className='flex-1 flex flex-col items-center justify-center order-last sm:order-none'>
            <TextGenerateEffect
                className="text-center text-[40px] md:text-5xl lg:text-6xl xl:text-7xl" 
                words="Welcome to my Blog Page Explore to know my Experiences"
            />

            <p className='text-center'>
                Hi, I&apos;m Venkat, a Full Stack Developer From IIIT Bhubaneswar
            </p>
           
        </div>
        <div className='flex justify-center w-full md:w-[40vw] lg:w-[25vw] mt-5 rounded-full order-first sm:order-none'>
            <GlareCardDemo />
        </div>
    </div>
</div>
</div>
  )
}

export default Hero