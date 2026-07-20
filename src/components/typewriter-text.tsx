import Typewriter from 'typewriter-effect'
import React from 'react'

interface TypewriterTextProps {
    texts:string[];
    loop?:boolean;
    delay?: number;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({texts, loop=true, delay=75}) => {
    return (
        <Typewriter 
            options={{
                strings: texts,
                autoStart: true,
                loop,
                delay
            }}
        />
    )
}
