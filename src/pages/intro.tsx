"use client"; // enable me to use hooks

import React, { useRef, useContext, useState, useCallback } from 'react';
import { ScrollContext } from '@/utils/scroll-observer';
import FadeInSection from '@/components/fade-in';
import { TypewriterText } from '@/components/typewriter-text';

const Intro : React.FC = () => {
    //const [imageLoaded, setImageLoaded] = useState(false)
    const refContainer = useRef<HTMLDivElement>(null)
    const { scrollY } = useContext(ScrollContext)

    let progress = 0

    const { current: elContainer } = refContainer

    //calculate the progress based on scroll position
    if(elContainer) {
        progress = Math.min(1, scrollY / elContainer.clientHeight)
    }

   /*  const handleImageLoaded = useCallback(() => {
        setImageLoaded(true)
    }, []) */

    return (
        <section
            id='home'
            ref={refContainer} 
            className="max-w-full min-h-screen sticky top-0 -z-10"
            style={{
                transform: `translateY(-${progress * 20}vh)`
            }}
        >
            <div id='home-observer-proxy' className='w-full absolute top-0 h-[1px]'>
                <div className="max-w-full flex flex-col min-h-screen p-24 bg-[#E2E5E6] justify-around items-center">
                    <div className="flex-col items-center  max-w-[1000px]">
                        <FadeInSection delay='1'>
                            <div className=""></div>
                            <div className="text-3xl font-semibold text-[#14324D]">
                                <TypewriterText texts={['¡Hey!', 'Gabriela here' ,`I'm a developer`, 'Welcome to my portfolio']} />
                            </div>
                            {/* <div className='p-9 z-10 drop-shadow-[0_5px_3px_rgba(0,0,0,0.5)] text-center flex flex-col items-center justify-center text-[#FCF3E3]'>
                                <h1 className="mb-6 text-4xl lg:text-6xl font-bold">It&apos;s </h1>
                                <h1 className="mb-6 text-5xl lg:text-7xl font-bold"> <span className='text-theme font-bold'>Gabriela Robleto</span> </h1>
                                <h2 className="mb-2 font-light text-sm lg:text-2xl tracking-tight opacity-75">
                                    <p>(Mid Web Developer &amp; Designer)</p>
                                </h2>
                            </div>  */}
                        </FadeInSection>
                    </div>
                
                </div>
            </div>
        </section>
    )
}

export default Intro