import React from 'react'
import Link from 'next/link'

const links = [
    {
        number: '01.',
        label: 'Home',
        path: '#'
    },
    {
        number: '02.',
        label: 'About me',
        path: '#about'
    },
    {
        number: '03.',
        label: 'Experience',
        path: '#projects'
    },
   /*  {
         number: '03.',
         label: 'Photography',
         path: '#photography'
    }, */
    {
        number: '04.',
        label: 'Contact',
        path: '#contact'
    }
]

const SideBar: React.FC = () => {
    return (
        <div className='hidden xl:flex flex-col max-w-md h-auto fixed px-10 bottom-10 bg-transparent'>
            <div className='flex flex-col items-start justify-between leading-6 text-xs xl:text-lg my-5 mr-10'>
                {links.map((l, i) => {
                    
                    return (
                        <Link
                            key={i}
                            href={l.path}
                            className='hover:text-theme focus:text-theme 
                            hover:translate-x-3 
                            md:transform-none 
                            transition ease-in-out delay-150
                            duration-300'
                            style={{
                                margin: 4
                            }}
                        >
                            <div className='flex flex-row justify-start items-center'>
                                <div className='underline underline-offset-4 text-theme'> {l.number} </div>
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