"use client"

import React from 'react';
import Image from 'next/image';
import { CodeLandImages, CodeLandInfo } from '@/pages/works/codeland';
import { TileBackground, TileContent, TileWrapper, Tile } from './tile';
import { WorkBackground, WorkContainer, WorkHeader, WorkLeft, WorkRight } from './work';
import { AdAstraHubImages, AdAstraHubInfo } from '@/pages/works/adastrahub';
import { InventariaTecImages, InventariaTecInfo } from '@/pages/works/inventaria-tec';
import { BeKindImages, BeKindInfo } from '@/pages/works/bekind';
import SideBar from './sidebar';

const Works : React.FC = () => {
    return (
        <div id='projects'>
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
                                    <div className='flex flex-col justify-between'>
                                        <WorkHeader />
                                        <div className={`flex-grow-0 mx-10 py-20 md:pb-0 transition-all duration-1000`}>
                                            <Image
                                                src="/assets/icons/arrow-down.svg"
                                                alt="scroll down"
                                                width={188 / 3}
                                                height={105 / 3}
                                            />
                                        </div>
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
                                    <CodeLandImages />
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
                                    <AdAstraHubInfo />
                                </WorkLeft>
                                <WorkRight progress={progress}>
                                    <AdAstraHubImages />
                                </WorkRight>
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
                                <InventariaTecInfo /> 
                                </WorkLeft>
                                <WorkRight progress={progress}>
                                    <InventariaTecImages />
                                </WorkRight>
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
                                    <BeKindInfo />
                                </WorkLeft>
                                <WorkRight progress={progress}>
                                    <BeKindImages />
                                </WorkRight>
                            </WorkContainer>
                        )}>
                    </Tile>
                </TileContent>
            </TileWrapper>
        </div>
    )
}

export default Works