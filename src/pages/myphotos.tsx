import { Carousel } from "../components/carousel"
import CarouselItem from "../components/carousel-item"
import { WorkLink } from "../components/work"
import React from "react"
import { myphotographyImagesByIndex } from "@/utils/imageByIndex"
import Image from "next/image"

const COUNT = 8
const SLIDES = Array.from(Array(COUNT).keys())

const MyPhotography : React.FC = () => {
    return (
        <section id="photography" className="min-h-screen bg-gradient-to-b from-[#0A1227] to-black py-10 xl:py-20 flex flex-col justify-center gap-16 md:gap-32">
            <div className="flex flex-col justify-center items-center leading-tight">
                <div className='flex flex-col items-center mb-5'>
                    <strong className='text-xl xl:text-5xl text-theme underline underline-offset-8 mb-5'>03.</strong>
                    <h3 className="text-sm xl:text-xl mb-5 font-bold text-center">
                        <span className='whitespace-nowrap underline underline-offset-8 decoration-dotted'>/ My Photography </span>
                     </h3>
                </div>
                <h3 className="text-sm xl:text-xl font-bold text-center">
                    <span className="whitespace-nowrap">&#40; I enjoy 35mm and digital photography &#10085; &#41;</span>{''}
                </h3>
                <WorkLink href="https://www.instagram.com/marobleto/"> Check out my instagram </WorkLink>
            </div>
            <Carousel className="pb-24">
                {SLIDES.map((index) => (
                    <CarouselItem index={index} key={index}>
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