"use client";

import React, { useState } from "react";

interface Props {
    number?: string;
    title: string;
    color?: string;
}

export const CustomTitle: React.FC<Props> = ({number, title, color}) => {
    return (
        <div className='py-5 xl:py-10 text-center xl:text-left'>
            <div className="flex flex-row items-center">
                {number !== undefined && number !== null ? (
                    <strong className='text-xl xl:text-6xl mr-10' style={{color : color}}>{number+'.'}</strong>
                ) : null}
                <strong className='text-xl xl:text-6xl underline underline-offset-8' style={{color: color}}>{title}</strong>
            </div>
        </div>
    )
}

export const CustomSecondTitle: React.FC<Props> = ({number, title, color}) => {
    return (
        <div className='text-center xl:text-left'>
            <div className="flex flex-row items-center">
                {number !== undefined && number !== null ? (
                    <strong className='text-lg xl:text-4xl mr-10' style={{color : color}}>{number+'.'}</strong>
                ) : null}
                <strong className='text-lg xl:text-3xl underline underline-offset-8' style={{color: color}}>{title}</strong>
            </div>
        </div>
    )
}