import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import { WorkDescription, WorkDetail, WorkLink } from '../../components/work';
import { SocialLink } from '@/utils/links-icons';
import imageByIndex from "@/utils/imageByIndex";
import Image from "next/image";

const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export const CodeLandInfo : React.FC = () => {
 return (
    <div>
        <div>Meet</div>
         <div className='text-4xl md:text-5xl text-[#11b7ec] font-semibold tracking-tight'>
            <WorkLink href='https://codeland-uni.herokuapp.com/'>CodeLand Website</WorkLink>
        </div>
        <WorkDescription>
            Created to help students in their way of learning C programming
            language with <b className='font-bold'>Turbo C 2.0</b>.
            We provide multiple code samples and documentation.
        </WorkDescription>
        <WorkDetail title='Stack' color='#11b7ec'>
            Python | JavaScript | Flask | MongoDB | CSS | Bootstrap 
        </WorkDetail>
        <WorkDetail title='Role' color='#11b7ec'> Frontend Dev </WorkDetail>
        <WorkDetail title='Colaborators' color='#11b7ec'>
            <WorkLink href='https://github.com/MiguelHG2351'>Miguel Hern&aacute;ndez</WorkLink>
            <WorkLink href='https://github.com/Mitch-coder'>Michelle Calder&oacute;n</WorkLink>
        </WorkDetail>
        <WorkDetail title='Learn more' color='#11b7ec'>
        <SocialLink href='https://github.com/mgrobleto/CodeLand' icon={ <GitHubIcon /> } />
        </WorkDetail>
    </div>
 )
}

export const CodeLandImages: React.FC = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-2 top-0 sticky">
            {SLIDES.map((index) => (
                <div className="m-5 xl:mx-5" key={index}>
                    <Image 
                        className="embla__slide__img"
                        src={imageByIndex(index)}
                        alt="Your alt text"
                        width={400}
                        height={200}
                    />
                </div>
            ))}
        </div>
    )
}