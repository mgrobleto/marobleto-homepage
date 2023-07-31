"use client"; // enable me to use hooks

import React, { useRef, useContext } from 'react';
import Image from 'next/image';
import { ScrollContext } from '@/utils/scroll-observer';

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
    const progress = sectionProgress - blockNo
    if (progress >= 0 && progress < 1) return 1
    return 0.2
}

export const ProjectsIntro : React.FC = () => {
    const { scrollY } = useContext(ScrollContext)
    const refContainer = useRef<HTMLDivElement>(null)

    const numOfPages = 2
    let progress = 0

    const { current : elContainer } = refContainer
    if(elContainer) {
        const {  clientHeight, offsetTop } = elContainer
        const screenH = window.innerHeight
        const halfH = screenH / 2
        const percentY = Math.min(clientHeight + halfH, Math.max(-screenH , scrollY - offsetTop) + halfH) / clientHeight
        progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages))
    }

    return (
        <section ref={refContainer} className={`h-[30vh] sticky top-0 -z-10 bg-gradient-to-t from-[#0A1227] to-black flex flex-col items-center`}>
            <div className='' style={{
                opacity: opacityForBlock(progress, 0),
                transform: `translateY(${progress})`
            }}>
                <h3 className="text-3xl md:text-4xl mb-10 font-bold text-center leading-tight">
                    <span className='whitespace-nowrap underline underline-offset-8 decoration-dotted'>/ projects </span>
                </h3>
                <div className={`flex-grow-0 mx-10 pb-20 md:pb-0 transition-all duration-1000`}>
                    <Image
                        src="/assets/icons/arrow-down.svg"
                        alt="scroll down"
                        width={188 / 3}
                        height={105 / 3}
                        />
                </div>
            </div>
        </section>
    )
}