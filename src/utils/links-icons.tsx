import React from "react";
import Link from "next/link";

interface LinksProps {
    href: string
    icon?: React.ReactElement
    children?: React.ReactNode
}

export const SocialLink : React.FC<LinksProps> = ({ href, icon, children}) => {
    return (
        <Link href={href} target="_blank" className="my-1">
            <div className="min-w-fit min-h-fit
            flex flex-row items-center justify-start 
            text-xs xl:text-lg hover:text-theme"
            >
                <div className="">{icon}</div>
                <div className='font-semibol mx-5'> {children} </div>
            </div>
        </Link>
    )
}