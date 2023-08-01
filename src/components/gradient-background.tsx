'use client'

import React, {useEffect, useRef} from "react"

interface Props {
    children: React.ReactNode
}

export const GradientBackground : React.FC<Props> = ({children}) => {

    const heroRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            if(!heroRef.current) return
            const {clientX, clientY } = e
            heroRef.current.style.setProperty('--x', `${clientX}px`)
            heroRef.current.style.setProperty('--y', `${clientY}px`)
        }

        window.addEventListener("mousemove", updateMousePosition)

        return () => window.removeEventListener("mousemove", updateMousePosition)
    })

    return (
        <>
            <style jsx>
                {`
                    .hero {
                        height: 100vh;
                        width: 100%;
                        background-color: #0A1227;
                        background-image: radial-gradient(
                            600px at var(--x, 100px) var(--y, 100px),
                            rgba(29, 78, 216, 0.15),
                            transparent 80%
                        );
                    }
                `}
            </style>
            <div ref={heroRef} className="hero">
                {children}
            </div>
        </>
    )
}