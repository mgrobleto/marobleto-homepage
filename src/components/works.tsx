"use client"

import React from 'react';
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import { CodeLandInfo } from '@/pages/works/codeland';
import { TileBackground, TileContent, TileWrapper, Tile } from './tile';
import { WorkBackground, WorkContainer, WorkDescription, WorkDetail, WorkHeader, WorkLeft, WorkLink, WorkRight } from './work';
import { SocialLink } from '@/utils/links-icons';

const Works : React.FC = () => {
    return (
        <TileWrapper numOfPages={5}>
            <TileBackground>
                <WorkBackground />
            </TileBackground>
            <TileContent>
                <Tile 
                    page={0} 
                    renderContent={({ progress }) => (
                        <WorkContainer>
                            <WorkLeft progress={progress}>
                                <WorkHeader />
                                <div className={`flex-grow-0 mx-10 pb-20 md:pb-0 transition-all duration-1000`}>
                                    <Image
                                        src="/assets/icons/arrow-down.svg"
                                        alt="scroll down"
                                        width={188 / 3}
                                        height={105 / 3}
                                    />
                                </div>
                            </WorkLeft>
                        </WorkContainer>
                    )}>
                </Tile>
            </TileContent>
            <TileContent>
                <Tile 
                    page={1} 
                    renderContent={({ progress }) => (
                        <WorkContainer>
                            <WorkLeft progress={progress}>
                                <CodeLandInfo />
                            </WorkLeft>
                            <WorkRight progress={progress}>
                                <Image 
                                    src="/assets/works/codeland/homepage.png"
                                    layout='responsive'
                                    alt="codeland"
                                    style={{borderRadius: '25px'}}
                                    width={300}
                                    height={150}
                                />
                            </WorkRight>
                        </WorkContainer>
                    )}>
                </Tile>
            </TileContent>
            <TileContent>
                <Tile 
                    page={2} 
                    renderContent={({ progress }) => (
                        <WorkContainer>
                            <WorkLeft progress={progress}>
                                <div>Meet</div>
                                <div className='text-4xl md:text-5xl text-[#f287b1] font-semibold tracking-tight'>
                                    <WorkLink href='https://mgrobleto.github.io/AdAstraHubWebsite/'>Ad Astra Hub Website</WorkLink>
                                </div>
                                <WorkDescription>
                                    Ad Astra Hub Website is a friendly space to explore and learn about the cosmos. 
                                    You can check Astronomy Picture of the Day powered by NASA's Astronomy Picture of the Day API 
                                    in a minimalist and functional way, also providing you to select any date you would like to see Apod&apos;s picture or video.
                                </WorkDescription>
                                <WorkDetail title='Stack' color='#f287b1'>
                                    React | Axios | useQuery | TailwindCSS | MUI Core | NASA APOD API 
                                </WorkDetail>
                                <WorkDetail title='Role' color='#f287b1'> Frontend Dev </WorkDetail>
                                <WorkDetail title='Learn more' color='#f287b1'>
                                    <SocialLink href='https://github.com/mgrobleto/AdAstraHubWebsite' icon={ <GitHubIcon /> } />
                                </WorkDetail>
                            </WorkLeft>
                        </WorkContainer>
                    )}>
                </Tile>
            </TileContent>
            <TileContent>
                <Tile 
                    page={3} 
                    renderContent={({ progress }) => (
                        <WorkContainer>
                            <WorkLeft progress={progress}>
                                <div>Meet</div>
                                <div className='text-4xl md:text-5xl text-blue-500 font-semibold tracking-tight'>
                                    <WorkLink href='https://github.com/mgrobleto/InventariTecFrontendApp'>Invent&aacute;ria Tec Website</WorkLink>
                                </div>
                                <WorkDescription>
                                    Basic Invoice and Product Management System using Django API.
                                </WorkDescription>
                                <WorkDetail title='Stack' color='rgb(59 130 246)'>
                                    Angular | Python | Django Rest Framework | Microsoft SQL Server | Angular Material 
                                </WorkDetail>
                                <WorkDetail title='Role' color='rgb(59 130 246)'> FullStack Dev </WorkDetail>
                                <WorkDetail title='Learn more' color='rgb(59 130 246)'>
                                    <SocialLink href='https://github.com/mgrobleto/InventariTecFrontendApp' icon={ <GitHubIcon /> } />
                                </WorkDetail>
                            </WorkLeft>
                        </WorkContainer>
                    )}>
                </Tile>
            </TileContent>
            <TileContent>
                <Tile 
                    page={4} 
                    renderContent={({ progress }) => (
                        <WorkContainer>
                            <WorkLeft progress={progress}>
                                <div>Meet</div>
                                <div className='text-4xl md:text-5xl text-purple-600 font-semibold tracking-tight'>
                                    <WorkLink href='https://github.com/J2rg3n-B3rm2d3z/FinalProject'>Be Kind</WorkLink>
                                </div>
                                <WorkDescription>
                                    The idea if this project is to notify user&apos;s when a ATM has money or not.
                                    This works as a collabortative notification between user&apos;s changing the ATM state wheter it
                                    has money available or not.
                                </WorkDescription>
                                <WorkDetail title='Stack' color='rgb(147 51 234)'>
                                    Kotlin | Firebase | Android Studio | Google Maps API | Material Design
                                </WorkDetail>
                                <WorkDetail title='Role' color='rgb(147 51 234)'> FullStack Dev </WorkDetail>
                                <WorkDetail title='Colaborators' color='rgb(147 51 234)'>
                                    <WorkLink href='https://github.com/J2rg3n-B3rm2d3z'>Jurgen B&eacute;rmudez</WorkLink>
                                    <WorkLink href='https://github.com/Mitch-coder'>Michelle Calder&oacute;n</WorkLink>
                                    <WorkLink href='https://github.com/ZharoonT'>Zharoon Treminio</WorkLink>
                                </WorkDetail>
                                <WorkDetail title='Learn more' color='rgb(147 51 234)'>
                                    <SocialLink href='https://github.com/J2rg3n-B3rm2d3z/FinalProject' icon={ <GitHubIcon /> } />
                                </WorkDetail>
                            </WorkLeft>
                        </WorkContainer>
                    )}>
                </Tile>
            </TileContent>
        </TileWrapper>
    )
}

export default Works