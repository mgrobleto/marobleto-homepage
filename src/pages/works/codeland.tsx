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

const COLOR = '#11b7ec'
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export const CodeLandInfo : React.FC = () => {
 return (
    <div>
        <div>Meet</div>
         <div className='text-sm md:text-5xl text-[#11b7ec] font-semibold tracking-tight'>
            <WorkLink href='https://codeland-uni.herokuapp.com/'>CodeLand Website</WorkLink>
        </div>
        <WorkDescription>
            Created to help students in their way of learning <span className="font-bold">C programming language </span>
            with <strong className='font-bold'>Turbo C 2.0</strong>.
            It works as a collaborative page between users where you can
            create your own account and be able to share your own projects.
        </WorkDescription>
        <WorkDetail title='Stack' color={COLOR}>
            Python | JavaScript | Flask | MongoDB | Firebase | CSS | Bootstrap 
        </WorkDetail>
        <WorkDetail title='Role' color={COLOR}> Frontend Dev </WorkDetail>
        <WorkDetail title='Colaborators' color={COLOR}>
            <WorkLink href='https://github.com/MiguelHG2351'>Miguel Hern&aacute;ndez</WorkLink>
            <WorkLink href='https://github.com/Mitch-coder'>Michelle Calder&oacute;n</WorkLink>
        </WorkDetail>
        <WorkDetail title='Learn more' color={COLOR}>
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
                    <div className="my-5 xl:my-0">
                        <Image 
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