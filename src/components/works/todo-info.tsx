import React from "react";
import { WorkDescription, WorkLink, WorkDetail, WorkTech } from "../work";
import { GitHub } from "@mui/icons-material";
import { SocialLink } from "@/utils/links-icons";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination } from "swiper/modules";

import { todoImageByIndex } from "@/utils/imageByIndex";

import 'swiper/css'
import 'swiper/css/pagination'

const COLOR = 'rgb(59 130 246)'
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export const TodoAppInfo : React.FC = () => {
    return (
        <>
            <div>Meet</div>
            <div className='text-sm md:text-4xl text-blue-500 font-semibold tracking-tight hover:text-[#609afa] 
                            hover:translate-x-3 
                            md:transform-none 
                            transition ease-in-out delay-150
                            duration-300'>
                <WorkLink href='https://github.com/mgrobleto/todo-app'>To Do App</WorkLink>
            </div>
            <WorkDescription>
                To Do Mobile App with React Native
            </WorkDescription>
            <WorkDetail title='Stack' color={COLOR}>
                <div className="grid grid-cols-4 grid-flow-row gap-2 mt-2">
                    <WorkTech> React Native </WorkTech>
                    <WorkTech> Native Base </WorkTech>
                    <WorkTech> Reanimated </WorkTech>
                    <WorkTech> Moti  </WorkTech>
                    <WorkTech> Expo </WorkTech>
                </div>
            </WorkDetail>
            <WorkDetail title='Role' color={COLOR}> Frontend Dev </WorkDetail>
            <WorkDetail title='Learn more' color={COLOR}></WorkDetail>
            <div className="max-w-fit h-auto bg-transparent">
                <SocialLink href='https://github.com/mgrobleto/todo-app' icon={ <GitHub  sx={{ fontSize: 'auto' }} /> } color='#609afa'></SocialLink>
            </div>
        </>
    )
}

export const TodoAppImages: React.FC = () => {
    return (
        <Swiper
            slidesPerView={'auto'}
            spaceBetween={30}
            autoplay={{ delay: 2000 }}
            loop={true}
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {SLIDES.map((index) => (
                <SwiperSlide key={index}>
                    <div className='my-8 xl:my-0 w-[500px] h-[500px]'>
                        <Image 
                            key={index}
                            src={todoImageByIndex(index)}
                            alt="Your alt text"
                            fill
                            className="object-contain"
                            style={{
                                borderRadius: 10, overflow: 'hidden',
                            }}
                        />
                    </div>
                </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
        </Swiper>
    )
}