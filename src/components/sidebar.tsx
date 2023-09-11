import React from 'react'
import Link from 'next/link'

const links = [
    {
        number: '01.',
        label: 'About me',
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
    return (
        <div className='hidden xl:flex flex-col max-w-md h-auto fixed px-10 bottom-10 bg-transparent'>
            <div className='flex flex-col justify-center leading-6 text-xs xl:text-lg my-5 mr-10'>
                {links.map((l, i) => {
                    
                    return (
                        <Link
                            key={i}
                            href={l.path}
                            className='hover:text-theme focus:text-theme'
                            style={{
                                marginBottom: 2
                            }}
                        >
                            <div className='flex flex-row justify-start'>
                                <div className='underline underline-offset-4 text-theme'> {l.number} </div>
                                <div className='ml-2'> {l.label} </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default SideBar