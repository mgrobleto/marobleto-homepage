import React from "react";

interface Props {
 children: React.ReactNode
}

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
    const progress = sectionProgress - blockNo
    if (progress >= 0 && progress < 1) return 1
    return 0.2
}


export const Header: React.FC<Props> = ({ children }) => {
    return (
        <section className="h-[5vh] py-5 lg:h-auto flex flex-col justify-center">
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-1xl md:text-2xl mb-10 font-bold text-center leading-tight">
                    { children }
                </h3>
            </div>
        </section>
    )
}