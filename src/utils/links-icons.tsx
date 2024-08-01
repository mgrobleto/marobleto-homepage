'use client';

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface LinksProps {
    href: string
    icon?: React.ReactElement
    children?: React.ReactNode
    color: string
    classname?: string
}

export const SocialLink : React.FC<LinksProps> = ({ href, icon, color ,children, classname }) => {
    return (
        <Link href={href} target="_blank" className={`group my-1`}>
            <div className={`group min-w-fit min-h-fit flex flex-row items-center justify-start text-xs xl:text-lg`}
            onMouseEnter={(e) => e.currentTarget.style.color = color}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
            >
                <div className={`mr-3 ${classname}`}>{icon}</div>
                <div className='font-semibol'> {children} </div>
            </div>
        </Link>
    )
}

export const AnimatedSocialLink: React.FC<LinksProps> = ({href, icon, color, children, classname}) => {
    const router = useRouter()
    const [onHover, setOnHover] = useState(false)

    const isActive = router.pathname === '/photography'

    return (
        <Link href={href} target="_blank" className={`group my-2`}>
            <div className={`group min-w-fit min-h-fit flex items-center justify-start text-xs xl:text-md`}
            style={{
                color: isActive ? "black" : 'white'
            }}
            >
                <div style={{
                    transform: onHover ? 'translateX(-0.75rem)' : 'translateX(0.75rem)',
                    opacity: onHover ? '1' : '0',
                    transition: 'transform 0.4s ease-in-out, opacitity 0.2s ease-in-out' 
                }}> 
                    {children} 
                </div>
                <div className={`ml-3 ${classname}`}
                onMouseEnter={() => setOnHover(true)}
                onMouseLeave={() => setOnHover(false)}
                >
                    {icon}
                </div>
            </div>
        </Link>
    )
}