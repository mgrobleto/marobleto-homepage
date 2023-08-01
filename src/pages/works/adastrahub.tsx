import React from "react";
import { WorkDescription, WorkLink, WorkDetail } from "@/components/work";
import GitHubIcon from '@mui/icons-material/GitHub';
import { SocialLink } from "@/utils/links-icons";
import Image from "next/image";
import { adAstraHubImageByIndex } from "@/utils/imageByIndex";
import { Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper/modules'


import 'swiper/css'
import 'swiper/css/pagination'


const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export const AdAstraHubInfo : React.FC = () => {
    return (
        <>
            <div>Meet</div>
            <div className='text-sm md:text-5xl text-[#f287b1] font-semibold tracking-tight'>
                <WorkLink href='https://mgrobleto.github.io/AdAstraHubWebsite/'>Ad Astra Hub Website</WorkLink>
            </div>
            <WorkDescription>
                Ad Astra Hub Website is a friendly space to explore and learn about the cosmos. 
                You can check <strong className="font-bold">Astronomy Picture of the Day</strong> powered by NASA's Astronomy Picture of the Day API 
                in a minimalist and functional way, also providing you to select any date you would like to see Apod&apos;s picture or video.
            </WorkDescription>
            <WorkDetail title='Stack' color='#f287b1'>
                React | Axios | useQuery | TailwindCSS | MUI Core | Frame Motion | NASA APOD API 
            </WorkDetail>
            <WorkDetail title='Role' color='#f287b1'> Frontend Dev </WorkDetail>
            <WorkDetail title='Learn more' color='#f287b1'>
                <SocialLink href='https://github.com/mgrobleto/AdAstraHubWebsite' icon={ <GitHubIcon sx={{ fontSize: 30 }} /> }></SocialLink>
            </WorkDetail>
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