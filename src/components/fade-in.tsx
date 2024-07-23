'use client'

interface FadeInProps {
    children: React.ReactNode,
    delay: string
}

import React, { useEffect, useRef, useState } from "react";
import s from '@/styles/fade-in.module.css'


const FadeInSection: React.FC<FadeInProps> = ({ children, delay='0s' }) => {
    //const { scrollY } = useContext(ScrollContext)
    const [isVisible, setVisible] = useState(false)
    const domRef = useRef<HTMLDivElement>(null)

    const { current : elContainer} = domRef

   /*  const calculateVisibility = () => {
        if (!elContainer) return;

        const rect = elContainer.getBoundingClientRect();
        const windowHeight = elContainer.clientHeight;

        setVisible(rect.top <= windowHeight && rect.bottom >= 0)
        console.log('Calculated visibility'+ isVisible)
    }; */

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    console.log('Element is intersecting:', entry.target); 
                    setVisible(true)
                    if (domRef.current) {
                        observer.unobserve(domRef.current)
                    }
                } else {
                    console.log('Not intersecting:', entry.target)
                }
            })
        })
        if(domRef.current) {
            console.log('Observing element:', domRef.current); // Debug log
            observer.observe(domRef.current)
        } 

        return () =>{ 
            if(domRef.current) {
                observer.unobserve(domRef.current)
                console.log('Unobserving:')
            }
        }

        /* const handleScroll = () => {
            calculateVisibility();
        }

        window.addEventListener('scroll', handleScroll);
        calculateVisibility();
        return () => window.removeEventListener('scroll', handleScroll) */
    }, [domRef])

    return (
        <div
        ref={domRef}
        className={`${s.fadeInSection} ${isVisible ? 'is-visible' : ''}`}
        style={{ transitionDelay: `${delay}`}}
        >
            {children}
        </div>
    )
}

export default FadeInSection