'use client';

import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { useSectionObserver } from '@/utils/useSectionObserver';

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
        label: 'Main Projects',
        path: '#mainprojects'
    },
    {
        number: '04.',
        label: 'Other Projects',
        path: '#projects'
    },
    {
        number: '05.',
        label: 'Photography',
        path: '/photography'
    },
    {
        number: '06.',
        label: 'Contact',
        path: '#contact'
    }
]

const SideBar: React.FC = () => {
    const {activeSection} = useSectionObserver(['home-observer-proxy', 'about', 'mainprojects', 'projects', 'contact'])

    const isHome = activeSection === 'home';
    console.log('Active section (Sidebar):', activeSection);

    return (
        <div className='hidden xl:flex flex-col max-w-fit h-auto fixed pl-10 bottom-10 bg-transparent'>
            <div className='flex flex-col items-start justify-between leading-6 text-xs xl:text-lg my-5'>
                {links.map((l, i) => {
                    
                    const isActive = l.path.startsWith('#')
                        ? `#${activeSection}` === l.path
                        : false

                    const textColor = isHome ? '#132336' : '#E2E5E6';
                    const numberColor = isHome ? '#132336' : '#E2E5E6'; 
                    
                    return (
                        <Link
                            key={i}
                            href={l.path}
                            className={`group transition-transform ease-in-out delay-150 duration-300 ${
                                isActive
                                ? 'translate-x-3'
                                : 'hover:translate-x-3 md:transform-none'
                            }`}
                        >
                            <div className='flex flex-row justify-start items-center'>
                                <div className='underline underline-offset-4' style={{
                                    color: numberColor
                                }}> {l.number} </div>
                                <div className='ml-3 text-base group-hover:text-[#E2E5E6]' style={{
                                    color: textColor
                                }}> {l.label} </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default SideBar