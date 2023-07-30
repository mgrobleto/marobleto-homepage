import React from "react";
import Image from "next/image";
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import AutoPlay from 'embla-carousel-autoplay'
import imageByIndex from "./imageByIndex";

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

export const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [ emblaRef, emblaApi ]  = useEmblaCarousel(options, [AutoPlay()])

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((index) => (
                        <div className="embla__slide" key={index}>
                        <div className="embla__slide__number">
                            <span>{index + 1}</span>
                        </div>
                        <Image 
                            className="embla__slide__img"
                            src={imageByIndex(index)}
                            alt="Your alt text"
                        />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
