import React from "react"
import GitHubIcon from '@mui/icons-material/GitHub'
import { WorkDescription, WorkDetail, WorkLink } from '../../components/work'
import { SocialLink } from '@/utils/links-icons'
import { codeLandImageByIndex } from "@/utils/imageByIndex"
import Image from "next/image"
import { Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper/modules'


import 'swiper/css'
import 'swiper/css/pagination'

const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export const CodeLandInfo : React.FC = () => {
 return (
    <div>
        <div>Meet</div>
         <div className='text-4xl md:text-5xl text-[#11b7ec] font-semibold tracking-tight'>
            <WorkLink href='https://codeland-uni.herokuapp.com/'>CodeLand Website</WorkLink>
        </div>
        <WorkDescription>
            Created to help students in their way of learning C programming
            language with <b className='font-bold'>Turbo C 2.0</b>.
            We provide multiple code samples and documentation.
        </WorkDescription>
        <WorkDetail title='Stack' color='#11b7ec'>
            Python | JavaScript | Flask | MongoDB | CSS | Bootstrap 
        </WorkDetail>
        <WorkDetail title='Role' color='#11b7ec'> Frontend Dev </WorkDetail>
        <WorkDetail title='Colaborators' color='#11b7ec'>
            <WorkLink href='https://github.com/MiguelHG2351'>Miguel Hern&aacute;ndez</WorkLink>
            <WorkLink href='https://github.com/Mitch-coder'>Michelle Calder&oacute;n</WorkLink>
        </WorkDetail>
        <WorkDetail title='Learn more' color='#11b7ec'>
        <SocialLink href='https://github.com/mgrobleto/CodeLand' icon={ <GitHubIcon /> }>Check repository </SocialLink>
        </WorkDetail>
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
                    <Image 
                        src={codeLandImageByIndex(index)}
                        alt="Your alt text"
                        width={300}
                        height={100}
                        style={{
                            borderRadius: 10, overflow: 'hidden',
                        }}
                        layout="responsive"
                    />
                </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
        </Swiper>
    )
}