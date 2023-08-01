'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
    {
        number: '01.',
        label: 'About',
        path: '#about'
    },
    {
        number: '02.',
        label: 'Projects',
        path: '#projects'
    },
    {
        number: '03.',
        label: 'Photography',
        path: '#photography'
    },
    {
        number: '04.',
        label: 'Contact',
        path: '#contact'
    }
]

const SideBar: React.FC = () => {
    const pathname = usePathname()

    return (
        <div className='hidden xl:flex flex-col max-w-md h-auto fixed px-10 bottom-10 bg-transparent'>
            <div className='flex flex-col leading-6 font-2xl my-5'>
                {links.map((l, i) => {
                    const isActive = pathname === l.path
                    
                    return (
                        <Link
                            key={i}
                            href={l.path}
                            className={isActive ? 'focus:text-white' : ''}
                            style={{
                                marginBottom: 2
                            }}
                        >
                            <div className='flex flex-row items-center'>
                                <div className='underline underline-offset-4 text-theme'> {l.number} </div>
                                <div className='mx-2'> {l.label} </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default SideBar