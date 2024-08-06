import React from "react"
import { EB_Garamond } from 'next/font/google';

import { CustomTitle } from "@/components/title"
import FadeInSection from "@/components/fade-in";
import { PhotoTitleCard } from "@/components/photography-card";

import image1 from '../../../public/assets/photography/leonPeople/4.jpg'
import image2 from '../../../public/assets/photography/diaDeMuertosMasatepe/1.jpg'
import image3 from '../../../public/assets/photography/nambume/1.jpg'
import image4 from '../../../public/assets/photography/masatepe/4.jpg'
import image5 from '../../../public/assets/photography/calles/2.jpg'
import image6 from '../../../public/assets/photography/catarina/2.jpg'

const font = EB_Garamond({ subsets: ['latin'] })

type Project = {
    imageLink: string
    title: string
    link : string
}

type Projects = {
    [key : string] : Project
}

const photographyProjects: Projects = {
    project1: {
        title: 'Gente León',
        imageLink: `${image1.src}`,
        link: '/photography/leon'
    },

    project2:{
        title: 'Día de Muertos',
        imageLink: `${image2.src}`,
        link: '/photography/dia-de-muertos'

    },

    project3:{
        title: 'Nambume Ancestral',
        imageLink: `${image3.src}`,
        link: '/photography/nambume'

    },

    project4:{
        title: 'Masatepe - Pueblo Natal',
        imageLink: `${image4.src}`,
        link: '/photography/masatepe'
    },

    project5:{
        title: 'Calles y Espacios',
        imageLink: `${image5.src}`,
        link: '/photography/calles'
    },

    project6:{
        title: 'Catarina',
        imageLink: `${image6.src}`,
        link: '/photography/catarina'
    },
}

const MyPhotography : React.FC = () => {
    return (
        <section id="photography" className={`min-h-screen flex flex-col ${font.className}`}>
            <div className="header w-full leading-tight min-h-min bg-photographyBackground bg-cover bg-fixed bg-bottom">
                <div className="absolute inset-0 bg-white opacity-40"></div>
                <div className="relative z-10 flex flex-col justify-around items-center p-10">
                    <CustomTitle title="Photography" color="black" classname="leading-loose"/>
                    <h3 className="text-sm xl:text-xl font-light text-center">
                        {/*APPLY WRITING EFFECT*/}
                        <span className="whitespace-nowrap tracking-wide">I am passionate about analog photography &#10085;</span>{''}
                    </h3>
                </div>
            </div>
            <div className="body w-full min-h-screen flex flex-col items-center">
                <CustomTitle title="About my work" color="#4f4f4f"/>
                <div className="about-desc px-10 max-w-3xl text-justify">
                    <p className='text-md font-light xl:text-lg text-[#4f4f4f] opacity-60'>
                        My passion lies in capturing day-to-day moments from people, my country and hometown. Trying to reflect
                        the beauty that exist in the most simplest things around us. 
                    </p>
                </div>
                <div className="photo-grid grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-max mx-28 my-10">
                    {Object.keys(photographyProjects).map((key, index) => (
                        <FadeInSection
                            key={index}
                            delay={`${index + 1}00ms`}
                        >
                            <PhotoTitleCard
                                title={photographyProjects[key].title}
                                imageLink={photographyProjects[key].imageLink}
                                link={photographyProjects[key].link}
                            ></PhotoTitleCard>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MyPhotography