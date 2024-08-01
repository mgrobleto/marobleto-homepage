'use client'

import React, { useEffect, useState } from "react"
import { EB_Garamond } from 'next/font/google';

import { CustomTitle } from "@/components/title"
import FadeInSection from "@/components/fade-in";
import { PhotoCard } from "@/components/photography-card";

import image1 from '../../../public/assets/photography/diaDeMuertosMasatepe/1.jpg'
import image2 from '../../../public/assets/photography/diaDeMuertosMasatepe/2.jpg'
import image3 from '../../../public/assets/photography/diaDeMuertosMasatepe/3.jpg'
import image4 from '../../../public/assets/photography/diaDeMuertosMasatepe/4.jpg'
import image5 from '../../../public/assets/photography/diaDeMuertosMasatepe/5.jpg'
import image6 from '../../../public/assets/photography/diaDeMuertosMasatepe/6.jpg'
import image7 from '../../../public/assets/photography/diaDeMuertosMasatepe/7.jpg'
import image8 from '../../../public/assets/photography/diaDeMuertosMasatepe/8.jpg'
import image9 from '../../../public/assets/photography/diaDeMuertosMasatepe/9.jpg'
import image10 from '../../../public/assets/photography/diaDeMuertosMasatepe/10.jpg'



const font = EB_Garamond({ subsets: ['latin'] })

type SpanClass = {
    colSpan: string;
    rowSpan: string;
}

type Project = {
    imageLink: string
}

type Projects = {
    [key : string] : Project
}

const photographyProjects: Projects = {
    project1: {
        imageLink: `${image1.src}`,
    },

    project2:{
        imageLink: `${image2.src}`,
    },

    project3:{
        imageLink: `${image3.src}`,
    },

    project4:{
        imageLink: `${image4.src}`,
    },

    project5:{
        imageLink: `${image5.src}`,
    },

    project6:{
        imageLink: `${image6.src}`,
    },

    project7:{
        imageLink: `${image7.src}`,
    },

    project8:{
        imageLink: `${image8.src}`,
    },

    project9: {
        imageLink: `${image9.src}`
    },

    project10: {
        imageLink: `${image10.src}`
    }
}

const getRandomSpan = () : SpanClass => {
    const randomColSpan = Math.floor(Math.random() * 2) + 1;
    const randomRowSpan = Math.floor(Math.random() * 2) + 1;

    return {
        colSpan: `col-span-${randomColSpan}`,
        rowSpan: `row-span-${randomRowSpan}`,
    }
}


const Photography : React.FC = () => {
    const [spanClasses, setSpanClasses] = useState<SpanClass[]>([])

    useEffect(() => {
        const generatedSpanClasses = Object.keys(photographyProjects).map(() => getRandomSpan());

        setSpanClasses(generatedSpanClasses)

    }, [photographyProjects]);    
    
    return (
        <section id="photography" className={`min-h-screen flex flex-col ${font.className}`}>
            <div className = {`header w-full leading-tight min-h-min`} style={{
                backgroundImage: `url('${image3.src}')`,
                backgroundPosition: 'center',
            }}>
                <div className="absolute inset-0 bg-white opacity-40"></div>
                <div className="relative z-10 flex flex-col justify-around items-center p-10">
                    <CustomTitle title="Día de Muertos, Masatepe" color="white" classname="leading-loose"/>
                </div>
            </div>
            <div className="body w-full min-h-screen flex flex-col items-center my-10">
                <div className="about-desc px-10 max-w-3xl text-justify">
                    <p className='text-xs font-light xl:text-lg text-black opacity-60'>
                       01 de noviembre del 2023
                    </p>
                </div>
                <div className="photo-grid grid grid-cols-2 lg:grid-cols-3 gap-6 relative max-w-max mx-20 my-10">
                    {Object.keys(photographyProjects).map((key, index) => (
                        <FadeInSection
                            key={index}
                            delay={`${index + 1}00mw`}
                        >
                            <PhotoCard
                                imageLink={photographyProjects[key].imageLink}
                                colSpan={spanClasses[index]?.colSpan}
                                rowSpan={spanClasses[index]?.rowSpan}
                            ></PhotoCard>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Photography