"use client"; // enable me to use hooks

/* type MousePosition = {
    x: number;
    y: number;
}

interface AboutProps {
    mousePosition: MousePosition;
} */

import React, { useRef, useContext } from 'react';
import s from '../styles/about.module.css'
import { ScrollContext } from '@/utils/scroll-observer';
import { CustomTitle, CustomSecondTitle} from '@/components/title';
import { GradientBackground } from '@/components/gradient-background';
import FadeInSection from '@/components/fade-in';
import Image from 'next/image';

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
    const progress = sectionProgress - blockNo
    if (progress >= 0 && progress < 1) return 1
    return 0.2
}

const About : React.FC = () => {
    const { scrollY } = useContext(ScrollContext)
    const refContainer = useRef<HTMLDivElement>(null)

    const numOfPages = 3
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
        <GradientBackground>
            <section id='about' ref={refContainer} className='min-h-screen max-w-full py-10 lg:p-0 flex items-center'>
                <FadeInSection delay='1'>
                <div className='flex flex-col-reverse items-center justify-center xl:flex-row mx-20 xl:px-36 xl:justify-center'>
                    <div className='about-info-container flex flex-col justify-around text-justify lg:mr-28'>
                            <div className={`${s.aboutText} about-introduction max-w-2xl mb-auto lg:mb-5`} style={{
                                opacity: opacityForBlock(progress, 1)
                            }}>
                                <CustomTitle title="About me" color='#92DEEF' classname='underline underline-offset-8'/>
                                <div className='about-introduction leading-tight'>
                                    <p className='text-xs font-light xl:text-lg'>
                                        Mid level designer and front-end developer based in Nicaragua. I found myself
                                        in places and projects where I can explode my creativity and critical thinking.
                                        With a passion for creating captivating digital experience, I bring a unique blend of creativity and technical skills to every project I undertake.
                                    </p>
                                </div>
                            </div>
                            <div className={`${s.aboutText} about-hobbies xl:mb-5 inline-block after:content-['_']`} style={{
                                opacity: opacityForBlock(progress, 1)
                            }}>
                                <div className='about-introduction'>
                                    {/* <strong className='text-sm xl:text-2xl underline underline-offset-8 decoration-dotted'>/ I &#10084;</strong> */}
                                    <CustomSecondTitle title='I &#10084;' color='#92DEEF'/>
                                    <p className='text-xs xl:text-lg my-5 font-light'>
                                        Photography, Music, Movies, Science
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='about-image max-w-fit transition-all duration-100 ease-in-out' style={{
                            opacity: opacityForBlock(progress, 1),
                            }}>
                            <Image
                                src="/assets/me_2023.jpeg"
                                alt="about me photo"
                                width={500}
                                height={500}
                                style={{
                                    borderRadius: 25, 
                                    boxShadow: '6px 13px 23px -5px rgba(0,0,0,.46)',
                                }}
                            />
                        </div>
                    </div>
                </FadeInSection>
            </section>
        </GradientBackground>
    )
}

export default About