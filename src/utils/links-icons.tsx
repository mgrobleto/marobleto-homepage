import React from "react";
import Link from "next/link";

interface LinksProps {
    href: string
    icon: React.ReactElement
}

export const SocialLink : React.FC<LinksProps> = ({ href, icon}) => {
    return (
        <Link href={href} target="_blank" className="underline underline-offset-auto my-1">
            {icon}
        </Link>
    )
}