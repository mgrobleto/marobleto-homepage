import React from "react";
import Link from "next/link";

interface LinksProps {
    href: string
    icon: React.ReactElement
    children: React.ReactNode
}

export const SocialLink : React.FC<LinksProps> = ({ href, icon, children}) => {
    return (
        <Link href={href} target="_blank" className="flex flex-row items-center my-2">
            {icon}
            <span className='mx-2'> {children} </span>
        </Link>
    )
}