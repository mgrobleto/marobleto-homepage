import React from 'react'
import { WorkDescription, WorkLink, WorkDetail } from '@/components/work'
import GitHubIcon from '@mui/icons-material/GitHub'
import { SocialLink } from '@/utils/links-icons'
import Image from 'next/image'
import { inventariaTecImageByIndex } from '@/utils/imageByIndex'
import { Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper/modules'


import 'swiper/css'
import 'swiper/css/pagination'


const COLOR = 'rgb(59 130 246)'
const SLIDE_COUNT = 6
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export const InventariaTecInfo : React.FC = () => {
    return (
        <>
            <div>Meet</div>
            <div className='text-sm md:text-5xl text-blue-500 font-semibold tracking-tight'>
                <WorkLink href='https://github.com/mgrobleto/InventariTecFrontendApp'>Invent&aacute;ria Tec Website</WorkLink>
            </div>
            <WorkDescription>
                Basic invoice and storage management system using Django API.
            </WorkDescription>
            <WorkDetail title='Stack' color={COLOR}>
                Angular | Python | Django Rest Framework | Microsoft SQL Server | Angular Material | Bootstrap
            </WorkDetail>
            <WorkDetail title='Role' color={COLOR}> FullStack Dev </WorkDetail>
            <WorkDetail title='Learn more' color={COLOR}>
                <SocialLink href='https://github.com/mgrobleto/InventariTecFrontendApp' icon={ <GitHubIcon  sx={{ fontSize: 30 }} /> }></SocialLink>
            </WorkDetail>
        </>
    )
}

export const InventariaTecImages: React.FC = () => {
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
                    <div className='my-8 xl:my-0'>
                        <Image 
                            src={inventariaTecImageByIndex(index)}
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