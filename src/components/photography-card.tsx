'use client';

import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Url } from "next/dist/shared/lib/router/router";
import { StringLiteral } from "typescript";

interface PhotoTitleCard {
    imageLink: string;
    title?: string;
    link: string;
    classname?: string;
}

interface PhotoCard {
    imageLink: string;
    colSpan: string;
    rowSpan: string
}

export const PhotoTitleCard : React.FC<PhotoTitleCard> = ({imageLink, title, link , classname}) => {

    const router = useRouter()

    const handleOnClick = (link: string) => {
        router.push(link)
    }

    return (
        <div className="card group min-w-[350px] h-[500px] flex flex-col justify-between rounded-lg shadow-2xl hover:translate-y-1.5 ease-in-out transition delay-150 duration-200 hover:cursor-pointer" 
            onClick={() => handleOnClick(link)}
        >
            <div className={`img relative w-full h-[100%]`}>
                <Image 
                    src={imageLink}
                    layout="fill"
                    objectFit="cover"
                    alt="photography"
                    className="rounded-t-lg"
                />
            </div>
            <div className="title font-light text-[#4f4f4f] text-center text-xl group-hover:underline flex items-center justify-center p-2">
                {title}
            </div>
        </div>
    )
}

export const PhotoCard : React.FC<PhotoCard> = ({imageLink, colSpan, rowSpan}) => {
    return (
        <div className={`card group relative overflow-hidden rounded-lg shadow-2xl hover:translate-y-1.5 ease-in-out transition delay-150 duration-200 ${colSpan} ${rowSpan}`}>
            <div className={`img relative w-full h-full`}>
                <img src={imageLink} alt="photography" className="rounded-lg w-full h-full object-cover" />
                {/* <Image 
                    src={imageLink}
                    width={500}
                    height={500}
                    alt="photography"
                    className="rounded-lg"
                /> */}
            </div>
        </div>
    )
}