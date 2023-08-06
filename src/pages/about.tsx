"use client"; // enable me to use hooks

import React, { useRef, useContext } from 'react';
import Image from 'next/image';
import s from '../styles/about.module.css'
import { ScrollContext } from '@/utils/scroll-observer';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { SocialLink } from '@/utils/links-icons';
import Link from 'next/link';
import { GradientBackground } from '../components/gradient-background';

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
            <section id='about' ref={refContainer} className='min-h-screen py-10 lg:py-0 flex justify-center'>
                <div className='flex flex-col-reverse items-center justify-center xl:flex-row max-w-screen mx-20 xl:px-36 xl:justify-center'>
                    <div className='about-info-container flex flex-col max-w-2xl text-justify lg:mr-28'>
                        <div className={`${s.aboutText} about-introduction mb-auto lg:mb-5`} style={{
                            opacity: opacityForBlock(progress, 1)
                        }}>
                            <div className='py-5 xl:py-10 text-center xl:text-left'>
                                <strong className='text-xl xl:text-5xl text-theme underline underline-offset-8 mb-10'>01.</strong>
                            </div>
                            <div className='about-introduction leading-tight'>
                                <strong className='text-sm xl:text-2xl underline underline-offset-8 decoration-dotted'>/ About me</strong>
                                <p className='text-xs font-light xl:text-lg my-5'>
                                    I am currently studying a degree in <b className='font-bold'>Computer Engineer </b>
                                    at the <strong> National University of Engineering</strong> in <strong className='font-bold'>Managua, Nicaragua</strong>.
                                    I have full interest in visual arts and full-stack web development.
                                </p>
                                <p className='text-xs font-light xl:text-lg my-5'>
                                    In my free time, i like to learn new things involved in the world
                                    of web development in a self-taught way. Also, enjoying to build attractive websites to improve
                                    user&apos;s experience. 
                                </p>
                            </div>
                        </div>
                        <div className={`${s.aboutText} about-hobbies xl:mb-5 inline-block after:content-['_']`} style={{
                            opacity: opacityForBlock(progress, 1)
                        }}>
                            <div className='about-introduction'>
                                <strong className='text-sm xl:text-2xl underline underline-offset-8 decoration-dotted'>/ I &#10084;</strong>
                                <p className='text-xs xl:text-lg my-5'>
                                    <Link href='#photography' className='underline underline-offset-4 text-theme' >Photography</Link>{''}, Art, Music, Movies.
                                </p>
                            </div>
                        </div>
                        <div className={`${s.aboutText} about-hobbies lg:mb-5 inline-block`} style={{
                            opacity: opacityForBlock(progress, 1)
                        }}>
                            <div className='about-introduction'>
                                <strong className='text-sm xl:text-2xl underline underline-offset-8 decoration-dotted'>/ Find me on the web</strong>
                                <div className='max-w-auto flex flex-col text-[#92DEEF] my-5'>
                                    <SocialLink href='https://github.com/mgrobleto' icon={<GitHubIcon fontSize='small' />}> @mgrobleto </SocialLink>
                                    <SocialLink href='https://www.instagram.com/marobleto/' icon={<InstagramIcon fontSize='small'/>}> @marobleto </SocialLink>
                                    <SocialLink href='https://twitter.com/marobleto_' icon={ <TwitterIcon fontSize='small'  /> }> @marobleto_ </SocialLink>
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
        </GradientBackground>
    )
}

export default About