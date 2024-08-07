import React from "react";
import { WorkDescription, WorkLink, WorkDetail, WorkTech } from "@/components/work";
import GitHubIcon from '@mui/icons-material/GitHub';
import { SocialLink } from "@/utils/links-icons";
import Image from "next/image";
import { adAstraHubImageByIndex } from "@/utils/imageByIndex";
import { Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper/modules'


import 'swiper/css'
import 'swiper/css/pagination'

const COLOR = '#f287b1'
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export const AdAstraHubInfo : React.FC = () => {
    return (
        <>
            <div>Meet</div>
            <div className='text-sm md:text-4xl text-[#f287b1] font-semibold tracking-tight hover:text-[#e74d85] 
                            hover:translate-x-3 
                            md:transform-none 
                            transition ease-in-out delay-150
                            duration-300'>
                <WorkLink href='https://mgrobleto.github.io/AdAstraHubWebsite/'>Ad Astra Hub Website</WorkLink>
            </div>
            <WorkDescription>
                Ad Astra Hub Website is a friendly space to explore and learn about the cosmos. 
                You can check <strong className="font-bold">Astronomy Picture of the Day</strong> powered by NASA's Astronomy Picture of the Day API 
                in a minimalist and functional way, also providing you to select any date you would like to see Apod&apos;s picture or video.
            </WorkDescription>
            <WorkDetail title='Stack' color={COLOR}>
                <div className="grid grid-cols-4 grid-flow-row gap-2 mt-2">
                    <WorkTech> React </WorkTech>
                    <WorkTech> Axios </WorkTech>
                    <WorkTech> useQuery </WorkTech>
                    <WorkTech> TailwindCSS </WorkTech>
                    <WorkTech> MUI Core </WorkTech>
                    <WorkTech> Frame Motion  </WorkTech>
                    <WorkTech> NASA APOD API  </WorkTech>
                </div>
            </WorkDetail>
            <WorkDetail title='Role' color={COLOR}> Frontend Dev </WorkDetail>
            <WorkDetail title='Learn more' color={COLOR}></WorkDetail>
            <div className="max-w-fit h-auto bg-transparent">
                <SocialLink href='https://github.com/mgrobleto/AdAstraHubWebsite' icon={ <GitHubIcon sx={{ fontSize: 'auto'}} /> } color="#f287b1"></SocialLink>
            </div>
        </>
    )
}

export const AdAstraHubImages: React.FC = () => {
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
                    <div className="my-5 xl:my-0">
                        <Image 
                            key={index}
                            src={adAstraHubImageByIndex(index)}
                            alt="Your alt text"
                            width={300}
                            height={100}
                            style={{
                                borderRadius: 10, overflow: 'hidden',
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