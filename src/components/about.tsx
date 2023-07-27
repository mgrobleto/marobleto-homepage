"use client"; // enable me to use hooks

import React, { useRef, useContext } from 'react';
import Image from 'next/image';
import s from '../styles/about.module.css'
import { ScrollContext } from '@/utils/scroll-observer';

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
    const progress = sectionProgress - blockNo
    if (progress >= 0 && progress < 1) return 1
    return 0.2
}

const About : React.FC = () => {
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
        <section ref={refContainer} className={`min-h-screen bg-gradient-to-b from-[#0A1227] to-black flex flex-col py-20`}>
            <div className='container flex flex-row mx-auto p-28 justify-between'>
                <div className='about-info-container flex flex-col max-w-2xl text-justify'>
                    <div className={`${s.aboutText} about-introduction`} style={{
                        opacity: opacityForBlock(progress, 0)
                    }}>
                        <hr className="mb-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                        <div className='about-introduction'>
                            <strong className='text-3xl md:text-4xl'>/ about me</strong>
                            <p className='text-sm md:text-xl mt-5'>
                                I am currently studying a degree in <b>Computer Engineer </b>
                                at the National University of Engineering in Managua, Nicaragua.
                                I have full interest in visual arts and full stack development.
                            </p>
                        </div>
                    </div>
                    <div className={`${s.aboutText} about-hobbies my-14 inline-block after:content-['_']`} style={{
                        opacity: opacityForBlock(progress, 1)
                    }}>
                        <div className='about-introduction'>
                            <strong className='text-3xl md:text-4xl'>/ I ♥</strong>
                            <p className='text-sm md:text-xl mt-5'>
                                I am currently studying a degree in <b>Computer Engineer </b>
                                at the National University of Engineering in Managua, Nicaragua.
                                I have full interest in visual arts and full stack development.
                            </p>
                        </div>
                    </div>
                </div>
                <Image
                    src="/assets/me.jpg"
                    alt="about me photo"
                    style={{borderRadius: '25px', boxShadow: '6px 13px 23px -5px rgba(0,0,0,.46)'}}
                    width={500}
                    height={150}
                />
            </div>
        </section>
    )
}

export default About