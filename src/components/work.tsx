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

interface WorkDetail {
    title?: string
    children?: React.ReactNode
    color?: string
}

export const WorkContainer : React.FC<WorkContent> = ({ children }) => {
    return <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-around min-h-screen lg:mx-20'> { children } </div>
}

export const WorkBackground : React.FC = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky justify-center items-center'> 
            <div className="bg-[#1D0D40] h-[70vh] lg:min-h-screen flex justify-center items-center"></div>
            <div className="bg-[#1D0D40] h-[30vh] lg:min-h-screen flex justify-center items-center"></div>
        </div>
    )
}

/* export const WorkHeader : React.FC =() => {
    return (
        <h3 className="flex flex-col text-sm md:text-3xl my-10 font-bold text-center leading-tight">
            <strong className='text-xl xl:text-5xl text-theme underline underline-offset-8 mb-10'>02.</strong>
            <span className='whitespace-nowrap underline underline-offset-8 decoration-dotted'>/ Projects </span>
        </h3>
    )
} */

export const WorkLeft : React.FC<WorkProps> = ( { children, progress }) => {
    let translateY = Math.max(0, 50 - progress * 3 * 50)
    if(progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50)

    return (
        <div className="flex flex-col text-1xl lg:text-3xl h-[70vh] lg:min-h-screen lg:min-w-[300px]" style={{
            transform: `translateY(${translateY}px)`,
        }}>
            <div className="leading-10 max-w-auto mx-28 my-5 lg:my-10 h-[90vh] lg:min-h-screen">
                { children }
            </div>
        </div>
    )
}

export const WorkRight : React.FC<WorkProps> = ( { children, progress }) => {
    let translateY = Math.max(-50, -(progress - 0.5) * 50)
    if(progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50)
    return (
        <div className="flex flex-1 h-auto lg:min-h-screen" style={{
            transform: `translateY(${translateY}px)`
        }}>
            <div className="w-full max-w-auto lg:my-36 px-5 md:px-10 lg:min-h-min">
                { children }
            </div>
        </div>
    )
}

export const WorkLink : React.FC<LinkProps> = ({ href, children }) => {
    return <Link href={href} target="_blank" className="underline underline-offset-auto my-1 mr-5 md:mr-0"> {children} </Link>
}

export const WorkDescription : React.FC<WorkContent> = ({ children }) => {
    return (
        <div className="text-xs lg:text-lg font-extralight max-w-[400px] my-2 lg:my-5 tracking-tight text-justify leading-relaxed">
            {children}
        </div>
    )
}

export const WorkDetail : React.FC<WorkDetail> = ({ title, children , color}) => {
    return (
        <div className="flex flex-col justify-between max-w-fit mb-auto lg:mb-[10px]">
            <h3 className='tracking-tight text-sm xl:text-lg font-semibold underline underline-offset-8 decoration-dotted my-2' style={{
                color: color,
            }}>{title}</h3>
            
            <div className="text-xs lg:text-lg font-extralight flex flex-col"> {children} </div>
        </div>
    )
}

export const WorkTech: React.FC<WorkDetail> = ({title, children, color}) => {
    return (
        <div className="min-w-fit h-fit bg-theme bg-opacity-60 text-white rounded-xl p-2 text-[10px] xl:text-xs hover:border-[#92DEEF] hover:shadow-lg hover:shadow-cyan-500/50 border-2">
            {children}
        </div>
    )
}