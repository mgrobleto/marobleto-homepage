import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SocialLink } from '@/utils/links-icons'
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';

const ContactMe : React.FC = () => {
    return (
        <div id='contact' className='min-h-screen bg-gradient-to-t from-[#0A1227] to-black text-white flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center mb-10 font-bold p-12 z-10 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]'>
                <h3 className='font-bold text-xl mb-10 text-theme'> 04. What&apos;s next?</h3>
                <h2 className='font-bold text-4xl underline underline-offset-8 decoration-dotted'> / Get in touch</h2>
            </div> 
            <div>
                <button className='bg-[#92DEEF] bg-opacity-50 rounded-md p-2 hover:border-[#92DEEF] hover:shadow-lg hover:shadow-cyan-500/50 border-4'>
                    <SocialLink href='mailto:magabriela0715@gmail.com' icon={ <EmailTwoToneIcon sx={{ fontSize: 40}} />}>Say Hi</SocialLink>
                </button>
            </div> 
        </div>
    )
}

export default ContactMe