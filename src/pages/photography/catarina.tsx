'use client'

import React from "react"
import { useState, useEffect } from "react"

import { CustomTitle } from "@/components/title"
import FadeInSection from "@/components/fade-in";
import { PhotoCard } from "@/components/photography-card";

import { EB_Garamond } from 'next/font/google';

import image1 from '../../../public/assets/photography/catarina/1.jpg'
import image2 from '../../../public/assets/photography/catarina/2.jpg'


const font = EB_Garamond({ subsets: ['latin'] })

type SpanClass = {
    colSpan: string;
    rowSpan: string;
}

type Photography = {
    imageLink: string
}

interface Project {
    [key : string] : Photography
}

const photographyProjects : Project = {
    image1: {
        imageLink: `${image1.src}`,
    },

    image2:{
        imageLink: `${image2.src}`,

    },
}

const getRandomSpan = () : SpanClass => {
    const randomColSpan = Math.floor(Math.random() * 4) + 1;
    const randomRowSpan = Math.floor(Math.random() * 4) + 1;

    return {
        colSpan: `col-span-${randomColSpan}`,
        rowSpan: `row-span-${randomRowSpan}`,
    }
}

const CatarinaPhotography : React.FC = () => {

    const [spanClasses, setSpanClasses] = useState<SpanClass[]>([])
    const shuffledKeys = Object.keys(photographyProjects).sort(() => Math.random() - 0.5) 

    useEffect(() => {
        const generatedSpanClasses = Object.keys(photographyProjects).map(() => getRandomSpan());

        setSpanClasses(generatedSpanClasses)

    }, [photographyProjects]);    

    return (
        <section id="photography" className={`min-h-screen flex flex-col ${font.className}`}>
            <div className = {`header w-full leading-tight min-h-min`} style={{
                backgroundImage: `url('${image2.src}')`,
                backgroundPosition: 'center',
            }}>
                <div className="absolute inset-0 bg-white opacity-40"></div>
                <div className="relative z-10 flex flex-col justify-around items-center p-10">
                    <CustomTitle title="Catarina - Mirador" color="white" classname="leading-loose"/>
                </div>
            </div>
            <div className="body w-full min-h-screen flex flex-col items-center my-10">
                <div className="about-desc px-10 max-w-3xl text-center">
                    <p className='text-md font-light xl:text-lg text-black opacity-60'>
                        Catarina, Masaya.
                    </p>
                </div>
                <div className="photo-grid grid grid-cols-2 lg:grid-cols-3 gap-6 relative max-w-max mx-20 my-10">
                    {shuffledKeys.map((key, index) => (
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

export default CatarinaPhotography