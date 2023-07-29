"use client"

import React from 'react';
import Image from 'next/image';
import { TileBackground, TileContent, TileWrapper, Tile } from './tile';
import { WorkBackground, WorkColaborator, WorkContainer, WorkDescription, WorkDetail, WorkHeader, WorkLeft, WorkLink, WorkRight, WorkRole, WorkStack } from './work';

const Works : React.FC = () => {
    return (
        <TileWrapper numOfPages={4}>
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
                                <div>Meet</div>
                                <div className='text-4xl md:text-5xl text-purple-600 font-semibold tracking-tight'>
                                    <WorkLink href='https://codeland-uni.herokuapp.com/'>CodeLand Website</WorkLink>
                                </div>
                                <WorkDescription>
                                    Website designed to help students in their way of learning C programming
                                    language with Turbo C 2.0.
                                    We provide multiple code samples, documentation and a special tool
                                    that facilitates the usage of Turbo C 2.0 .
                                </WorkDescription>
                                <WorkDetail title='Stack'> Python / Flask / JavaScript / MongoDB / Jira / CSS </WorkDetail>
                                <WorkDetail title='Role'> Frontend Dev </WorkDetail>
                                <WorkDetail title='Colaborators'>
                                    <WorkLink href='https://github.com/MiguelHG2351'>Miguel Hernandez</WorkLink>
                                    <WorkLink href='https://github.com/Mitch-coder'>Michelle Calder&oacute;n</WorkLink>
                                </WorkDetail>
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
                            </WorkLeft>
                        </WorkContainer>
                    )}>
                </Tile>
            </TileContent>
        </TileWrapper>
    )
}

export default Works