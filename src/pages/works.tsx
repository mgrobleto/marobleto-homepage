"use client"

import React from 'react';
import Image from 'next/image';
import { TileBackground, TileContent, TileWrapper, Tile } from '../components/tile';
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from '../components/work';
import { CodeLandImages, CodeLandInfo } from '@/components/works/codeland-info';
import { AdAstraHubImages, AdAstraHubInfo } from '@/components/works/adastrahub-info';
import { InventariaTecImages, InventariaTecInfo } from '@/components/works/inventariatec-info';
import { BeKindImages, BeKindInfo } from '@/components/works/bekind-info';

const Works : React.FC = () => {
    return (
        <div id='projects'>
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
        </div>
    )
}

export default Works