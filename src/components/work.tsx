import React from "react";
import Link from "next/link";

interface WorkContent {
    children: React.ReactNode
}

interface WorkProps {
    children: React.ReactNode
    progress : number
}

interface LinkProps {
    href: string
    children: React.ReactNode
}

interface WorkDetails {
    title: string
    children: React.ReactNode
}

export const WorkContainer : React.FC<WorkContent> = ({ children }) => {
    return <div className='grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen'> { children } </div>
}

export const WorkBackground : React.FC = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky'> 
            <div className="bg-gradient-to-t from-[#0A1227] to-black h-[30vh] lg:h-auto"></div>
            <div className="bg-white h-[70vh] lg:min-h-screen"></div>
        </div>
    )
}

export const WorkHeader : React.FC =() => {
    return (
        <h3 className="text-3xl md:text-4xl mb-10 font-bold text-center leading-tight">
            <span className='whitespace-nowrap underline underline-offset-8 decoration-dotted'>/ projects </span>
        </h3>
    )
}

export const WorkLeft : React.FC<WorkProps> = ( { children, progress }) => {
    let translateY = Math.max(0, 50 - progress * 3 * 50)
    if(progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50)

    return (
        <div className="flex flex-col items-center justify-center text-2xl lg:text-3xl h-[30vh] lg:h-auto" style={{
            transform: `translateY(${translateY}px)`,
        }}>
            <div className="leading-10">
                { children }
            </div>
        </div>
    )
}

export const WorkRight : React.FC<WorkProps> = ( { children, progress }) => {
    let translateY = Math.max(-50, -(progress - 0.5) * 50)
    if(progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50)
    return (
        <div className="flex flex-1 lg:items-center justify-center h-screen" style={{
            transform: `translateY(${translateY}px)`
        }}>
            <div className="w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0">
                { children }
            </div>
        </div>
    )
}

export const WorkLink : React.FC<LinkProps> = ({ href, children }) => {
    return <Link href={href} target="_blank" className="underline underline-offset-auto"> {children} </Link>
}

export const WorkDescription : React.FC<WorkContent> = ({ children }) => {
    return (
        <div className="text-sm lg:text-lg font-light max-w-sm my-5 tracking-tight text-justify leading-relaxed">
            {children}
        </div>
    )
}

export const WorkDetail : React.FC<WorkDetails> = ({ title, children }) => {
    return (
        <div className="flex flex-col text-sm lg:text-lg mb-[10px]">
            <h3 className='font-bold tracking-tight underline-offset-auto text-[#54c5df]'>{title}</h3>
            {children}
        </div>
    )
}

export const WorkStack : React.FC<WorkContent> = ({ children }) => {
    return (
        <div className="flex flex-col text-sm lg:text-lg">
            <h3 className='font-bold tracking-tight underline-offset-auto text-[#92DEEF]'>Stack</h3>
            <div className="font-light">{children}</div>
        </div>
    )
}

export const WorkRole : React.FC<WorkContent> = ( { children }) => {
    return (
        <div className="text-sm lg:text-lg font-light max-w-sm my-5 tracking-tight text-justify leading-relaxed">
            {children}
        </div>
    )
}

export const WorkColaborator : React.FC<WorkContent> = ( { children }) => {
    return (
        <div className="flex flex-col text-sm lg:text-lg text-sky-600 underline-offset-auto">
            <h3 className='font-bold tracking-tight underline-offset-auto text-[#92DEEF]'>Colaborators</h3>
            {children}
        </div>
    )
}