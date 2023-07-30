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
    color: string
}

export const WorkContainer : React.FC<WorkContent> = ({ children }) => {
    return <div className='grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen'> { children } </div>
}

export const WorkBackground : React.FC = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky'> 
            <div className="bg-gradient-to-t from-[#0A1227] to-black h-[50vh] lg:h-auto"></div>
            <div className="bg-white h-[70vh] lg:min-h-screen"></div>
        </div>
    )
}

export const WorkHeader : React.FC =() => {
    return (
        <section className="bg-gradient-to-t from-[#0A1227] to-black h-[50vh] lg:h-auto">
            <h3 className="text-3xl md:text-4xl mb-10 font-bold text-center leading-tight">
                <span className='whitespace-nowrap underline underline-offset-8 decoration-dotted'>/ projects </span>
            </h3>
        </section>
    )
}

export const WorkLeft : React.FC<WorkProps> = ( { children, progress }) => {
    let translateY = Math.max(0, 50 - progress * 3 * 50)
    if(progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50)

    return (
        <div className="flex flex-col items-center justify-center text-1xl lg:text-3xl h-[50vh] lg:h-auto" style={{
            transform: `translateY(${translateY}px)`,
        }}>
            <div className="leading-10 max-w-auto">
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
            <div className="w-full max-w-auto py-auto lg:py-auto px-auto md:px-16">
                { children }
            </div>
        </div>
    )
}

export const WorkLink : React.FC<LinkProps> = ({ href, children }) => {
    return <Link href={href} target="_blank" className="underline underline-offset-auto my-1"> {children} </Link>
}

export const WorkDescription : React.FC<WorkContent> = ({ children }) => {
    return (
        <div className="text-sm lg:text-lg font-light max-w-md my-5 tracking-tight text-justify leading-relaxed">
            {children}
        </div>
    )
}

export const WorkDetail : React.FC<WorkDetails> = ({ title, children , color}) => {
    return (
        <div className="flex flex-col justify-between max-w-auto mb-[10px]">
            <h3 className='tracking-tight text-sm lg:text-lg underline underline-offset-8 decoration-dotted my-2' style={{
                color: color,
            }}>{title}</h3>
            
            <div className="text-sm lg:text-1xl flex flex-col"> {children} </div>
        </div>
    )
}