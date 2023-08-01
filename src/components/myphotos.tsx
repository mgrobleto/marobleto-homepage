import { Carousel } from "./carousel"
import CarouselItem from "./carousel-item"
import { WorkLink } from "./work"
import React from "react"
import { myphotographyImagesByIndex } from "@/utils/imageByIndex"
import Image from "next/image"
import { GradientBackground } from "./gradient-background"

const COUNT = 8
const SLIDES = Array.from(Array(COUNT).keys())

const MyPhotography : React.FC = () => {
    return (
        <section id="photography" className="min-h-screen bg-gradient-to-b from-[#0A1227] to-black py-10 xl:py-20 flex flex-col justify-center gap-16 md:gap-32">
            <div className="flex flex-col justify-center items-center">
                <div className='py-10'>
                    <strong className='text-xl xl:text-5xl text-theme underline underline-offset-8 mb-10'>03.</strong>
                </div>
                <h3 className="text-sm xl:text-xl mb-2 font-bold text-center">
                    <span className="whitespace-nowrap">&#40; I enjoy 35mm and digital photography &#41;</span>{''}
                </h3>
                <WorkLink href="https://www.instagram.com/marobleto/"> Check out my instagram </WorkLink>
            </div>
            <Carousel className="pt-10 pb-24">
                {SLIDES.map((index) => (
                    <CarouselItem index={index}>
                     <div className="mx-4">
                        <Image 
                            key={index}
                            src={myphotographyImagesByIndex(index)}
                            alt="my photos"
                            width={300}
                            height={100}
                            style={{
                                borderRadius: 10, overflow: 'hidden',
                            }}
                        />
                     </div>
                  </CarouselItem>
                ))}
            </Carousel>
        </section>
    )
}

export default MyPhotography