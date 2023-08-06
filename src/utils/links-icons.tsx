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
            <div className="flex flex-row items-center text-xs xl:text-lg">
                <div>{icon}</div>
                <div className='font-semibol mx-5'> {children} </div>
            </div>
        </Link>
    )
}