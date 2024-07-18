"use client"; // enable me to use hooks

import React, { useRef, useContext, useState, useCallback } from 'react';
import SocialMedia from '@/components/social-media-links';
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
        <section
            id='home'
            ref={refContainer} 
            className="min-h-screen sticky top-0 -z-10"
            style={{
                transform: `translateY(-${progress * 20}vh)`
            }}
        >
            <div className="flex flex-col min-h-screen p-24 bg-[#090D26]">
                <div className="flex-col items-center justify-center ">
                    <div className='p-12 z-10 drop-shadow-[0_5px_3px_rgba(0,0,0,0.5)] text-center flex flex-col items-center justify-center text-[#FCF3E3]'>
                        <h1 className="mb-6 text-4xl lg:text-6xl font-bold">It&apos;s </h1>
                        <h1 className="mb-6 text-5xl lg:text-7xl font-bold"> <span className='text-theme font-bold'>Gabriela Robleto</span> </h1>
                        <h2 className="mb-2 font-light text-sm lg:text-2xl tracking-tight opacity-75">
                            <p>(Junior Developer &amp; Designer)</p>
                        </h2>
                    </div> 
                </div>
              
            </div>
        </section>
    )
}

export default Intro