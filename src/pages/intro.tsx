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
                src="/assets/zero-absolute.jpg"
                alt="background"
                style={{objectFit: "cover"}}
                fill
                priority
            />
            <div className="flex min-h-screen flex-col items-center justify-center p-24 backdrop-blur-lg">
                <div className='p-12 font-bold z-10 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex flex-col items-center justify-center'>
                    <h1 className="mb-6 text-2xl lg:text-6xl">¡Hi, <span className='text-[#1E336C]'>Gabriela</span> here!</h1>
                    <h2 className="font-light mb-2 text-sm lg:text-2xl tracking-tight">
                        <p>(Artist / Developer / Designer)</p>
                    </h2>
                    <h3 className='font-light mb-2 text-1xl xl:text-2xl tracking-tight'>
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