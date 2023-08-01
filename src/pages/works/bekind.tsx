import React from "react"
import { WorkDescription, WorkLink, WorkDetail, WorkTech } from "@/components/work"
import GitHubIcon from '@mui/icons-material/GitHub'
import { SocialLink } from "@/utils/links-icons"
import Image from "next/image"
import { beKindImageByIndex } from "@/utils/imageByIndex";
import { Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper/modules'


import 'swiper/css'
import 'swiper/css/pagination'

const COLOR = 'rgb(147 51 234)'
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export const BeKindInfo : React.FC = () => {
    return (
        <>
            <div>Meet</div>
            <div className='text-sm md:text-5xl text-purple-600 font-semibold tracking-tight'>
                <WorkLink href='https://github.com/J2rg3n-B3rm2d3z/FinalProject'>Be Kind</WorkLink>
            </div>
            <WorkDescription>
                The idea of this project is to notify user&apos;s when a ATM has money or not.
                This works in a collabortative way where users can change the ATM state wheter it
                has money available or not.
            </WorkDescription>
            <WorkDetail title='Stack' color={COLOR}>
                <div className="grid grid-cols-4 grid-flow-row gap-2 mt-2">
                    <WorkTech> Kotlin </WorkTech>
                    <WorkTech> Firebase </WorkTech>
                    <WorkTech> Google Maps API </WorkTech>
                    <WorkTech> Material Design </WorkTech>
                </div>
            </WorkDetail>
            <WorkDetail title='Role' color={COLOR}> FullStack Dev </WorkDetail>
            <WorkDetail title='Colaborators' color={COLOR}>
                <div className="flex flex-row xl:flex-col">
                    <WorkLink href='https://github.com/J2rg3n-B3rm2d3z'>Jurgen B&eacute;rmudez</WorkLink>
                    <WorkLink href='https://github.com/Mitch-coder'>Michelle Calder&oacute;n</WorkLink>
                    <WorkLink href='https://github.com/ZharoonT'>Zharoon Treminio</WorkLink>
                </div>
            </WorkDetail>
            <WorkDetail title='Learn more' color={COLOR}>
                <SocialLink href='https://github.com/J2rg3n-B3rm2d3z/FinalProject' icon={ <GitHubIcon sx={{ fontSize: 'auto' }} /> }> </SocialLink>
            </WorkDetail>          
        </>
    )
}

export const BeKindImages: React.FC = () => {
    return (
        <Swiper
            speed={1000}
            slidesPerView={3}
            spaceBetween={20}
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
                            src={beKindImageByIndex(index)}
                            alt="Your alt text"
                            width={300}
                            height={100}
                            style={{
                                borderRadius: 5, overflow: 'hidden',
                            }}
                            layout="responsive"
                        />
                    </div>
                </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
        </Swiper>
    )
}