"use client"; // enable me to use hooks

import React, { useRef, useContext } from 'react';
import Image from 'next/image';
import s from '../styles/about.module.css'
import { ScrollContext } from '@/utils/scroll-observer';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { SocialLink } from '@/utils/links-icons';

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
        <section ref={refContainer} className='lg:min-h-screen sticky top-0 -z-0 bg-gradient-to-b from-[#0A1227] to-black py-10 xl:py-20' style={{
            transform: `translateY(${progress})`
        }}>
            <div className='flex flex-col-reverse items-center xl:flex-row max-w-screen mx-20 xl:py-28 xl:px-36 justify-between'>
                <div className='about-info-container flex flex-col max-w-2xl text-justify mt-10'>
                    <div className={`${s.aboutText} about-introduction mb-auto xl:mb-5`} style={{
                        opacity: opacityForBlock(progress, 1)
                    }}>
                        <div className='about-introduction leading-tight'>
                            <strong className='text-sm xl:text-3xl underline underline-offset-8 decoration-dotted'>/ about me</strong>
                            <p className='text-xs font-light xl:text-xl my-5'>
                                I am currently studying a degree in <b className='font-bold'>Computer Engineer </b>
                                at the <strong> National University of Engineering</strong> in Managua, Nicaragua.
                                I have full interest in visual arts and full-stack development.
                                In my free time, i like to learn new things involved in the world
                                of web development in a self-taught way. Also, i love taking
                                pictures and watching movies. 
                            </p>
                        </div>
                    </div>
                    <div className={`${s.aboutText} about-hobbies xl:mb-5 inline-block after:content-['_']`} style={{
                        opacity: opacityForBlock(progress, 1)
                    }}>
                        <div className='about-introduction'>
                            <strong className='text-sm xl:text-3xl underline underline-offset-8 decoration-dotted'>/ i ♥</strong>
                            <p className='text-xs xl:text-xl my-5'>
                                Photography, Art, Music, Movies.
                            </p>
                        </div>
                    </div>
                    <div className={`${s.aboutText} about-hobbies xl:mb-5 inline-block`} style={{
                        opacity: opacityForBlock(progress, 1)
                    }}>
                        <div className='about-introduction'>
                            <strong className='text-sm xl:text-3xl underline underline-offset-8 decoration-dotted'>/ find me on the web</strong>
                            <div className='social-links flex flex-col text-[#92DEEF] text-xs lg:text-md my-5'>
                                <SocialLink href='https://github.com/mgrobleto' icon={<GitHubIcon />}> @mgrobleto </SocialLink>
                                <SocialLink href='https://www.instagram.com/marobleto/' icon={<InstagramIcon />}> @marobleto </SocialLink>
                                <SocialLink href='https://twitter.com/marobleto_' icon={ <TwitterIcon  /> }> @marobleto_ </SocialLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about-image max-w-[500px] transition-all duration-100 ease-in-out' style={{
                    opacity: opacityForBlock(progress, 1),
                    }}>
                    <Image
                        src="/assets/me.jpg"
                        alt="about me photo"
                        layout='responsive'
                        width={300}
                        height={100}
                        style={{
                            borderRadius: 25, 
                            boxShadow: '6px 13px 23px -5px rgba(0,0,0,.46)',
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default About