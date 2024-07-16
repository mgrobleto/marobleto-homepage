/* type MousePosition = {
    x: number;
    y: number;
}

interface ContactMeProps {
    mousePosition: MousePosition
} */

"use client";

import React, { useRef } from 'react'
import { SocialLink } from '@/utils/links-icons'
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import Footer from '../components/footer';
import { GradientBackground } from '@/components/gradient-background';
import { CustomTitle } from '@/components/title';

const ContactMe : React.FC = () => {
    const refContainer = useRef<HTMLDivElement>(null)
    
    return (
        <GradientBackground>
            <section id='contact' ref={refContainer} className='min-h-screen py-10 lg:py-0 text-white flex flex-col justify-around'>
            <div className='flex flex-col justify-center items-center font-bold h-[80vh]'>            
                {/* <h2 className='font-bold text-xl xl:text-4xl underline underline-offset-8 decoration-dotted'> / Get in touch</h2> */}
                <CustomTitle title='Get in touch' color='#92DEEF'/>
                <div className='py-6'>
                    <button className='bg-[#92DEEF] bg-opacity-50 rounded-lg p-2 hover:border-[#92DEEF] hover:shadow-lg hover:shadow-cyan-500/50 border-4'>
                        <SocialLink href='mailto:magabriela0715@gmail.com' icon={ <EmailTwoToneIcon sx={{ fontSize: 40}} />}>Say Hi &#33;</SocialLink>
                    </button>
                </div> 
            </div> 
            <Footer />
            </section>
        </GradientBackground>
    )
}

export default ContactMe