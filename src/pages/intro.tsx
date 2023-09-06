"use client"; // enable me to use hooks

import React, { useRef, useContext, useState, useCallback } from 'react';
import Image from "next/image";
import { ScrollContext } from '@/utils/scroll-observer';

const Intro : React.FC = () => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const refContainer = useRef<HTMLDivElement>(null)
    const { scrollY } = useContext(ScrollContext)

    let progress = 0

    const { current: elContainer } = refContainer

    //calculate the progress based on scroll position
    if(elContainer) {
        progress = Math.min(1, scrollY / elContainer.clientHeight)
    }

    const handleImageLoaded = useCallback(() => {
        setImageLoaded(true)
    }, [])

    return (
        <div 
            ref={refContainer} 
            className="min-h-screen sticky top-0 -z-10"
            style={{
                transform: `translateY(-${progress * 20}vh)`
            }}
        >
            <Image
                className='absolute'
                src="/assets/me2.jpeg"
                alt="background"
                style={{objectFit: "cover"}}
                fill
                priority
            />
            <div className="flex min-h-screen flex-col items-center justify-center p-24 backdrop-blur-lg">
                <div className='p-12 font-semibold z-10 drop-shadow-[0_5px_3px_rgba(0,0,0,0.5)] text-center flex flex-col items-center justify-center'>
                    <h1 className="mb-6 text-2xl lg:text-6xl">&iexcl;Hi, <span className='text-theme font-bold'>Gabriela</span> here&#33;</h1>
                    <h2 className="font-light mb-2 text-sm lg:text-2xl tracking-tight">
                        <p>(Developer / Designer)</p>
                    </h2>
                    <h3 className='font-light mb-2 text-lg xl:text-lg tracking-tight'>
                        <p>based in Nicaragua</p>
                    </h3>
                </div> 
                <div className={`flex-grow-0 mx-auto py-20 md:pb-0 transition-all duration-1000 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0 -translate-y-10'
                }`}>
                    <Image
                        src="/assets/icons/arrow-down.svg"
                        alt="scroll down"
                        width={188 / 3}
                        height={105 / 3}
                        onLoad={handleImageLoaded}
                    />
                </div>
            </div>
        </div>
    )
}

export default Intro