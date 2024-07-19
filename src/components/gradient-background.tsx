'use client'

import React, {useEffect, useRef, useState} from "react"

interface Props {
    children: React.ReactNode
}
  

export const GradientBackground : React.FC<Props> = ({children}) => {

    const refContainer = useRef<HTMLDivElement>(null)
    //const { current : elContainer } = refContainer
    //const [mousePosition, setMousePosition] = useState<MousePosition>({x: 100, y: 100})

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            if(!refContainer.current) return
            const {clientX, clientY } = e
            //setMousePosition({x: clientX, y: clientY})
            refContainer.current.style.setProperty('--x', `${clientX}px`)
            refContainer.current.style.setProperty('--y', `${clientY}px`)
        }

        window.addEventListener("mousemove", updateMousePosition)

        return () => window.removeEventListener("mousemove", updateMousePosition)
    }, [])

    return (
        <div ref={refContainer} className="hero">
            <style jsx>
                {`
                    .hero {
                        height: unset;
                        width: 100%;
                        background-color: #1D0D40;
                        background-image: radial-gradient(
                            600px at var(--x, 100px) var(--y, 100px),
                            rgba(29, 78, 216, 0.15),
                            transparent 80%
                        );
                    }
                `}
            </style>
            {children}
        </div>
    )
}