"use client"

import React from 'react';
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import { CodeLandImages, CodeLandInfo } from '@/pages/works/codeland';
import { TileBackground, TileContent, TileWrapper, Tile } from './tile';
import { WorkBackground, WorkContainer, WorkDescription, WorkDetail, WorkHeader, WorkLeft, WorkLink, WorkRight } from './work';
import { SocialLink } from '@/utils/links-icons';
import { AdAstraHubImages, AdAstraHubInfo } from '@/pages/works/adastrahub';
import { InventariaTecImages, InventariaTecInfo } from '@/pages/works/inventaria-tec';
import { BeKindImages, BeKindInfo } from '@/pages/works/bekind';

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
                                <div className={`flex-grow-0 mx-10 py-20 md:pb-0 transition-all duration-1000`}>
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
    )
}

export default Works