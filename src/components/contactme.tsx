import React from 'react'
import { SocialLink } from '@/utils/links-icons'
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import { GradientBackground } from './gradient-background';
import Footer from './footer';

const ContactMe : React.FC = () => {
    return (
        <GradientBackground>
            <div id='contact' className='min-h-screen text-white flex flex-col justify-between items-center'>
                <div className='flex flex-col justify-center items-center font-bold p-12 h-[90vh]'>
                    <div className='py-10'>
                        <strong className='text-xl xl:text-5xl text-theme underline underline-offset-8 mb-10'>04.</strong>
                    </div>                
                    <h2 className='font-bold text-xl xl:text-4xl underline underline-offset-8 decoration-dotted'> / Get in touch</h2>
                    <div className='py-10'>
                        <button className='bg-[#92DEEF] bg-opacity-50 rounded-md p-2 hover:border-[#92DEEF] hover:shadow-lg hover:shadow-cyan-500/50 border-4'>
                            <SocialLink href='mailto:magabriela0715@gmail.com' icon={ <EmailTwoToneIcon sx={{ fontSize: 40}} />}>Say Hi &#33;</SocialLink>
                        </button>
                    </div> 
                </div> 
                <Footer />
            </div>
        </GradientBackground>
    )
}

export default ContactMe