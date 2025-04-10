'use client';

import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { ScrollContext } from '@/utils/scroll-observer'


const links = [
    {
        number: '01.',
        label: 'Home',
        path: '#home'
    },
    {
        number: '02.',
        label: 'About me',
        path: '#about'
    },
    {
        number: '03.',
        label: 'Projects',
        path: '#projects'
    },
    {
        number: '04.',
        label: 'Photography',
        path: '/photography'
    },
    {
        number: '04.',
        label: 'Contact',
        path: '#contact'
    }
]

const SideBar: React.FC = () => {
    const { scrollY } = useContext(ScrollContext)
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const sections = links.map(link => document.getElementById(link.path.replace('#', '')))
        let currentSection = '';

        sections.forEach((section, index) => {
            if(section) {
                const rect = section.getBoundingClientRect();
                if(rect.top + window.scrollY <= scrollY + window.innerHeight / 2) {
                    currentSection = links[index].path
                }
            }
        });
        setActiveSection(currentSection);
    }, [scrollY, links])

    return (
        <div className='hidden xl:flex flex-col max-w-fit h-auto fixed pl-10 bottom-10 bg-transparent'>
            <div className='flex flex-col items-start justify-between leading-6 text-xs xl:text-lg my-5'>
                {links.map((l, i) => {
                    
                    return (
                        <Link
                            key={i}
                            href={l.path}
                            className={activeSection === l.path ?  'text-[#0D1A2B] translate-x-3 transition ease-in-out delay-150 duration-300': 'text-[#95B3E4] hover:text-[#0D1A2B] hover:translate-x-3 md:transform-none transition ease-in-out delay-150 duration-300'}
                            style={{
                                margin: 4
                            }}
                        >
                            <div className='flex flex-row justify-start items-center'>
                                <div className='underline underline-offset-4 text-[#0D1A2B]'> {l.number} </div>
                                <div className='ml-3 text-base'> {l.label} </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default SideBar