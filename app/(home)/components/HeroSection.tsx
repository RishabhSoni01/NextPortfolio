import { MovingBorderBtn } from '@/components/ui/moving-border'
import Link from 'next/link'
import React from 'react'
import Title from './Title'

export default function HeroSection() {
  return (
    <div className='min-h-[85vh] flex flex-col-reverse gap-15 lg:gap-0 lg:flex-row items-center justify-between'>
      <div className='space-y-10 text-center lg:text-left'>
        <h1 className='text-4xl lg:text-7xl font-bold space-z-3'>Nice to meet you!
        <br /> <span className='underline underline-offset-8 decoration-green-500'>{"I'm Rishabh"}</span>
        </h1>
        <p className='md:w-96 text-gray-300'>
            {
                "I'm a Full stack developer, currently pursuing a B.Tech in Information Technology from IIIT Bhopal, maintaining a solid CGPA of 8.43.  I have a strong foundation in C++ , I have a strong grasp on my coursework like OOPs, DBMS , Computer Networks , and am skilled in technologies like Node.js, Express.js, Next.js, React.js, and MongoDB. , which I extensively utilize for software development."
            }
        </p>
        <div>
                <a href="mailto:rshbh226@gmail.com" className='inline-block group' target="_blank" rel="noopener noreferrer">
                    <Title text="Contact Me🌐" />
                </a>
            </div>
            <div>
                <a href="https://drive.google.com/file/d/1RETf_JU9z180lBlei3Y1x4Vk4wzUSlYc/view?usp=sharing" className='inline-block group' target="_blank" rel="noopener noreferrer">
                    <Title text="Resume " />
                </a>
            </div>
      </div>
      <div className='relative'>
        <div className=' w-auto h-72 space-y-2 -rotate-[27deg] mt-2 mb-4'>
            <div className='flex gap-3 translate-x-8'>
                <div className='w-32 h-32 rounded-2xl bg-green-500'></div>
                <div className='w-32 h-32 rounded-full bg-indigo-500'></div>
            </div>
            <div className='flex gap-3 -translate-x-8 '>
                <div className='w-32 h-32 rounded-full bg-indigo-500'></div>
                <div className='w-32 h-32 rounded-2xl bg-green-500'></div>
            </div>
            <div className='glow absolute top-[50%] right-1/2 -z-10'></div>
        </div>
        <div className='absolute bottom-5 sm:bottom-14 left-0 sm:-left-10'>
            <MovingBorderBtn borderRadius='0.5rem' className='p-3 font-semibold' >
                <p>📢 Available for work</p>
            </MovingBorderBtn>
        </div>
      </div>
    </div>
  )
}
