"use client"

import { ScrollContext } from "@/utils/scroll-observer"
import React, { useRef, useContext} from "react"

interface WrapperProps {
    children: React.ReactNode,
    numOfPages: number
}

interface TileContextValue {
    numOfPages: number
    currentPage: number
}

interface TileProps {
    children: React.ReactNode
}

interface Props {
    page: number
    children: React.ReactNode // i added this and it worked, so idk what happened jj
    renderContent: ( props : { progress: number}) => any
}
 
export const TileContext = React.createContext<TileContextValue>({
    numOfPages: 0,
    currentPage: 0
})

export const TileWrapper : React.FC<WrapperProps>  = ({
    children,
    numOfPages
}) => {
    const {scrollY} = useContext(ScrollContext)
    const refContainer = useRef<HTMLDivElement>(null)

    const { current : elContainer} = refContainer

    let currentPage = 0

    if(elContainer) {
        const { clientHeight, offsetTop } = elContainer
        const screenH = window.innerHeight
        const halfHeight = screenH / 2
        const percentY = Math.min(clientHeight + halfHeight, 
            Math.max(-screenH, scrollY - offsetTop) + halfHeight) / clientHeight
        currentPage = percentY * numOfPages
    }


    return (
        <TileContext.Provider value={{ numOfPages , currentPage }}>
            <div ref={refContainer} className='relative bg-black text-white' style={{
                height: numOfPages * 100 + 'vh'
            }}>
                {children}
            </div>
        </TileContext.Provider>
    )
}

export const TileBackground : React.FC <TileProps> = ({ children }) => {
   return <div className="absolute h-full w-full">{children}</div>
}

export const TileContent : React.FC <TileProps> = ({ children }) => {
    return <div className="sticky top-0 h-screen overflow-hidden">{children}</div>
}

export const Tile : React.FC <Props> = ({ page, renderContent }) => {
    const { currentPage, numOfPages } = useContext(TileContext) //i get the context values
    const progress = Math.max(0, currentPage - page)
    const refContainer = useRef<HTMLDivElement>(null)

    let opacity = Math.min(1, Math.max(0, progress * 4))

    if(progress > 0.85 && page < numOfPages - 1){
        opacity = Math.max(0, (1.0 - progress) * 4)
    }

    return (
        <div ref={refContainer} className="absolute top-0 w-full" style={{
            pointerEvents: progress <= 0 || progress >= 1 ? 'none' : undefined, //if its on view display opacity else
            opacity
        }}>
            {renderContent({ progress })}
        </div>
    )
}
