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
        title: 'CodeLand',
        description: `Created to help students in their way of learning C programming language with Turbo C 2.0.
            It works as a collaborative page between users where you can
            create your own account and be able to share your own projects.`,
        stack: ['Python','JavaScript', 'Flask', 'MongoDB', 'Firebase', 'CSS', 'Bootstrap'],
        githubLink: 'https://github.com/mgrobleto/CodeLand',
        websiteLink: 'https://codeland-uni.herokuapp.com/',
        role: 'Fullstack Dev'
    },

    project2:{
        title: 'MiPyme Saas',
        description: `Basic invoice and storage management Saas system for MiPymes in Nicaragua.`,
        stack: ['Angular','Angular Material', 'Bootstrap', 'Django Rest Framework'],
        githubLink: 'https://github.com/mgrobleto/InventariTecFrontendApp',
        websiteLink: '',
        role: 'Frontend Dev'
    },

    project3:{
        title: 'Ad Astra Hub',
        description: `Ad Astra Hub Website is a friendly space to explore and learn about the cosmos. 
                You can check Astronomy Picture of the Day powered by NASA's Astronomy Picture of the Day API 
                in a minimalist and functional way, also providing you to select any date you would like to see Apod's picture or video.`,
        stack: ['React', 'Axios', 'useQuery', 'TailwindCSS', 'MUI Core', 'Frame Motion', 'NASA APOD API'],
        githubLink: 'https://github.com/mgrobleto/AdAstraHubWebsite',
        websiteLink: 'https://mgrobleto.github.io/AdAstraHubWebsite/',
        role: 'Frontend Dev'
    },

    project4:{
        title: 'Be Kind',
        description: `The idea of this project is to notify user's when a ATM has money or not. This works in a collabortative way where users can change the ATM state wheter it has money available or not.`,
        stack: ['Kotlin', 'Firebase', 'Google Maps API', 'Material Design'],
        githubLink: 'https://github.com/J2rg3n-B3rm2d3z/FinalProject',
        websiteLink: '',
        role: 'Fullstack Dev'
    },

    project5:{
        title: 'To-do App',
        description: 'A simple To-Do/Task Manager',
        stack: ['React Native', 'Expo', 'Reanimated', 'Native Base', 'Moti'],
        githubLink: 'https://github.com/mgrobleto/todo-app',
        websiteLink: '',
        role: 'Frontend Dev'
    },

    project6: {
        title: 'marobleto-homepage',
        description: 'My homepage & Portfolio',
        stack: ['Next.js', 'TailwindCSS', 'MUI Icon Material'],
        githubLink: 'https://github.com/mgrobleto/marobleto-homepage',
        websiteLink: 'https://marobleto-portfolio.vercel.app/',
        role: 'Frontend Dev'
    }
}

const Works : React.FC = () => {
    return (
        <GradientBackground>
            <div id='projects' className='max-w-full min-h-screen p-20 flex flex-col justify-around items-center'>
                <CustomTitle title='Projects' color='#92DEEF'/>
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
            </div>
        </GradientBackground>
    )
}

export default Works