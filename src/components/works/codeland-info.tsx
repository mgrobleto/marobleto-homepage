import React from "react"
import GitHubIcon from '@mui/icons-material/GitHub'
import { WorkDescription, WorkDetail, WorkLink, WorkTech } from '../work'
import { SocialLink } from '@/utils/links-icons'
import { codeLandImageByIndex } from "@/utils/imageByIndex"
import Image from "next/image"
import { Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper/modules'


import 'swiper/css'
import 'swiper/css/pagination'

const COLOR = '#92DEEF'
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export const CodeLandInfo : React.FC = () => {
 return (
    <div>
        <div>Meet</div>
         <div className='text-sm md:text-4xl text-theme font-semibold tracking-tight hover:text-[#aee7f3] focus:text-theme 
                            hover:translate-x-3 
                            md:transform-none 
                            transition ease-in-out delay-150
                            duration-300'>
            <WorkLink href='https://codeland-uni.herokuapp.com/'>CodeLand Website</WorkLink>
        </div>
        <WorkDescription>
            Created to help students in their way of learning <span className="font-bold">C programming language </span>
            with <strong className='font-bold'>Turbo C 2.0</strong>.
            It works as a collaborative page between users where you can
            create your own account and be able to share your own projects.
        </WorkDescription>
        <WorkDetail title='Stack' color={COLOR}>
            <div className="grid grid-cols-4 grid-flow-row gap-2 mt-2">
                <WorkTech> Python </WorkTech>
                <WorkTech> JavaScript </WorkTech>
                <WorkTech> Flask </WorkTech>
                <WorkTech> MongoDB </WorkTech>
                <WorkTech> Firebase </WorkTech>
                <WorkTech> CSS </WorkTech>
                <WorkTech> Bootstrap </WorkTech>
            </div>
        </WorkDetail>
        <WorkDetail title='Role' color={COLOR}> Frontend Dev </WorkDetail>
        {/* <WorkDetail title='Colaborators' color={COLOR}>
            <div className="flex flex-row xl:flex-col">
                <WorkLink href='https://github.com/MiguelHG2351'>Miguel Hern&aacute;ndez</WorkLink>
                <WorkLink href='https://github.com/Mitch-coder'>Michelle Calder&oacute;n</WorkLink>
            </div>   
        </WorkDetail> */}
        <WorkDetail title='Learn more' color={COLOR}></WorkDetail>
        <div className="max-w-fit h-auto bg-transparent">
            <SocialLink href='https://github.com/mgrobleto/CodeLand' icon={ <GitHubIcon sx={{ fontSize: 'auto'}} /> } color="#92DEEF"> </SocialLink>
        </div>
    </div>
 )
}

export const CodeLandImages: React.FC = () => {
    return (
        <Swiper
            slidesPerView={1}
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
                    <div className="my-5 xl:my-0">
                        <Image 
                            key={index}
                            src={codeLandImageByIndex(index)}
                            alt="Your alt text"
                            layout="responsive"
                            width={300}
                            height={100}
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