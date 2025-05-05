"use client"

import React from 'react';
import Image from 'next/image';
import { TileBackground, TileContent, TileWrapper, Tile } from '../components/tile';
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from '../components/work';
import { CodeLandImages, CodeLandInfo } from '@/components/works/codeland-info';
import { AdAstraHubImages, AdAstraHubInfo } from '@/components/works/adastrahub-info';
import { InventariaTecImages, InventariaTecInfo } from '@/components/works/inventariatec-info';
import { BeKindImages, BeKindInfo } from '@/components/works/bekind-info';
import ProjectCard from '@/components/project-card';
import { GradientBackground } from '@/components/gradient-background';
import { CustomTitle } from '@/components/title';
import FadeInSection from '@/components/fade-in';

type Project = {
    title: string;
    description: string;
    stack: string[];
    githubLink: string;
    websiteLink: string;
    role: string;
}

type Projects = {
    [key : string] : Project
}

const projects: Projects = {
    project1: {
        title: 'React Login Auth with Firebase',
        description: `Basic React Login using Firebase authentication`,
        stack: ['React','Firebase', 'Ant Design'],
        githubLink: 'https://github.com/mgrobleto/Ad-Astra-Hub-Login-with-React-and-Firebase',
        websiteLink: '',
        role: 'Fullstack Dev'
    },

    project2:{
        title: 'Vintage Outdoor Landing Page Sample',
        description: `Landing Page Sample in Next js`,
        stack: ['Nextjs','Typescript', 'TailwindCSS'],
        githubLink: 'https://github.com/mgrobleto/vintage-outdoor-sample',
        websiteLink: 'https://vintage-outdoor-sample.vercel.app/',
        role: 'Frontend Dev'
    },

    project3: {
        title: 'marobleto-homepage',
        description: 'My homepage & Portfolio',
        stack: ['Next.js', 'TailwindCSS', 'MUI Icon Material'],
        githubLink: 'https://github.com/mgrobleto/marobleto-homepage',
        websiteLink: 'https://marobleto-portfolio.vercel.app/',
        role: 'Frontend Dev'
    },
}

const Works : React.FC = () => {
    return (
        <section id='projects' className='max-w-full bg-[#132336] min-h-screen p-20 flex flex-col justify-around items-center'>
                <CustomTitle title='Other Projects' color='#92DEEF'classname='underline underline-offset-8'/>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 relative max-w-[1000px] my-4">
                    {Object.keys(projects).map((key, i) => (
                        //const project = projects[key];
                        <FadeInSection 
                                key={key} 
                                delay={`${i + 1}00ms`}
                            >
                                <ProjectCard
                                    projectTitle={projects[key].title}
                                    projectDescription={projects[key].description}
                                    stack={projects[key].stack}
                                    githubLink={projects[key].githubLink}
                                    websiteLink={projects[key].websiteLink}
                                ></ProjectCard>
                        </FadeInSection>
                    )
                    )}
                </div>
            </section>
    )
}

export default Works