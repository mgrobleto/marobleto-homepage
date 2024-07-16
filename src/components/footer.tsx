import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
    return (
        <div className="bg-transparent flex flex-col justify-center">
            <div className="flex flex-col justify-center items-center">
                <Link href="https://github.com/mgrobleto/marobleto-homepage" target="_blank">
                    <h3 className="text-xs mb-10 text-center leading-tight hover:text-theme">
                        &copy; Designed &amp; Built by Gabriela Robleto
                    </h3>
                </Link>
            </div>
        </div>
    )
}

export default Footer 