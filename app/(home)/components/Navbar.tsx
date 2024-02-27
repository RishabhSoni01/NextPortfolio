import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

export default function Navbar({className}:{className?:string}){

    const socials = [
        {
            Link:"https://www.linkedin.com/in/rishabh-soni-9a42141ba/",
            Label: "Linkedin",
            Icon: SiLinkedin

        },
        {
            Link:"https://github.com/RishabhSoni01/",
            Label: "Github",
            Icon: SiGithub
        },
        {
            Link:"https://www.linkedin.com/in/rishabh-soni-9a42141ba/",
            Label: "Twitter",
            Icon: SiX
        }
    ]
  return (
    <nav className={cn('py-10 flex justify-between items-center',className)}>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500'>Rishabh 👨🏻‍💻</h1>
        <div className="flex items-center gap-5">
            {socials.map((social,index)=>{
                const Icon=social.Icon
                return  <a href={social.Link} key={index} aria-label={social.Label} target="_blank" rel="noopener noreferrer">
                <Icon className='w-7 h-7 hover:scale-125 transtition-all' />
            </a>
            })}
        </div>
    </nav>
  )
}