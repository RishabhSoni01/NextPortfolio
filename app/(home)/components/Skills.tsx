"use client"

import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import {SiExpress, SiHtml5, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact } from 'react-icons/si'

export default function Skills() {
    const skills=[
        {
            text:"React",
            Icon:SiReact
        },
        {
            text:"Node.js",
            Icon:SiNodedotjs
        },
        {
            text:"Express",
            Icon:SiExpress
        },
        {
            text:"Next.js",
            Icon:SiNextdotjs
        },
        {
            text:"MongoDB",
            Icon:SiMongodb
        },
        {
            text:"HTML",
            Icon:SiHtml5
        },
        {
            text:"Javascript",
            Icon:SiJavascript
        },
    ];
  return (
    <div className='max-w-5xl mx-auto px-8'>
         <Title text="Skills 🎯" className='flex flex-col items-center'/>
         <HoverEffect items={skills} />
    </div>
  )
}
