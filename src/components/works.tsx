"use client"

import React from 'react';
import { CodeLandImages, CodeLandInfo } from '@/pages/works/codeland';
import { TileBackground, TileContent, TileWrapper, Tile } from './tile';
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from './work';
import { AdAstraHubImages, AdAstraHubInfo } from '@/pages/works/adastrahub';
import { InventariaTecImages, InventariaTecInfo } from '@/pages/works/inventaria-tec';
import { BeKindImages, BeKindInfo } from '@/pages/works/bekind';

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
                    page={1} 
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
                    page={2} 
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
                    page={3} 
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