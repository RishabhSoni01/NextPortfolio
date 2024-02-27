import { HoverEffect } from '@/components/ui/card-hover-effect'
import React from 'react'
import { SiExpress, SiMongodb, SiNodedotjs, SiReact, SiRedux, SiSocketdotio } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'
import { cn } from '@/lib/utils'

export default function Projects() {
    const projects=[
        {
            title:"E-shop",
            tech:[SiReact, SiNodedotjs, SiExpress,SiMongodb, SiRedux],
            link:"https://main--eshopwebsiteforshop.netlify.app/",
            cover:"/project-4.png",
            background:"bg-indigo-500"
        },
        {
            title:"Link-up",
            tech:[SiReact, SiNodedotjs, SiExpress,SiMongodb, SiRedux],
            link:"https://64e2354c59ca5776a15fc558--relaxed-llama-11d686.netlify.app/",
            cover:"/project-5.png",
            background:"bg-green-500"
        },
        {
            title:"Chatroom",
            tech:[SiReact, SiNodedotjs, SiExpress,SiMongodb, SiRedux, SiSocketdotio],
            link:"https://chatroom-0glw.onrender.com/",
            cover:"/project-3.png",
            background:"bg-indigo-500"
        },
        {
            title:"SimplyNote",
            tech:[SiReact, SiNodedotjs, SiExpress,SiMongodb, SiRedux],
            link:"https://simplynote.onrender.com/",
            cover:"/project-6.png",
            background:"bg-green-500"
        },
    ]
  return (
    <div className='py-10 p-5 sm:p-0'>
        <Title text="Projects 🎯" className='flex flex-col items-center'/>

        <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
            {projects.map((project,index)=>{
                return (<div>
                    <Link href={project.link} key={index}>
                        <div className={cn("p-5 rounded-md",project.background)}>
                            <DirectionAwareHover imageUrl={project.cover} className='w-full space-y-5 cursor-pointer'>
                            <div className='space-y-5'>
                                <h1 className='text-2xl font-bold'>{project.title}</h1>
                                <div className='flex item-center gap-5 '>
                                    {project.tech.map((Icon,Index)=>{
                                        return <Icon className="w-8 h-8" key={index} />
                                    })}
                                </div>
                            </div>
                            </DirectionAwareHover>
                        </div>
                    </Link>
                </div>
            )})}
        </div>
    </div>
    
  )
}
