'use client';

import React from "react";
import Link from "next/link";

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