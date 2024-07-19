'use client';

import React from "react";
import Link from "next/link";

interface LinksProps {
    href?: string
    icon?: React.ReactElement
    children?: React.ReactNode
    color: string
}

export const SocialLink : React.FC<LinksProps> = ({ href, icon, color ,children}) => {
    return (
        <Link href={href ? {href} : ''} target="_blank" className="my-1">
            <div className="min-w-fit min-h-fit
            flex flex-row items-center justify-start 
            text-xs xl:text-lg"
            onMouseEnter={(e) => e.currentTarget.style.color = color}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
            >
                <div className="mr-3">{icon}</div>
                <div className='font-semibol'> {children} </div>
            </div>
        </Link>
    )
}