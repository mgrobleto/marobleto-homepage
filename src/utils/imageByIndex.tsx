// codeland images
import codeland1 from '../../public/assets/works/codeland/homepage.png'
import codeland3 from '../../public/assets/works/codeland/projects2.png'

// as astra hub images
import adastrahub1 from '../../public/assets/works/adastrahub/home.png'
import adastrahub2 from '../../public/assets/works/adastrahub/apod.png'
import adastrahub3 from '../../public/assets/works/adastrahub/selectDate.png'
import adastrahub4 from '../../public/assets/works/adastrahub/info.png'

//invetaria tec images
import inventariatec1 from '../../public/assets/works/inventariaTec/login.png'
import inventariatec2 from '../../public/assets/works/inventariaTec/homePage.png'
import inventariatec3 from '../../public/assets/works/inventariaTec/invoiceManagement.png'
import inventariatec4 from '../../public/assets/works/inventariaTec/createNewInvoice.png'
import inventariatec5 from '../../public/assets/works/inventariaTec/invoiceDetail.png'
import inventariatec6 from '../../public/assets/works/inventariaTec/addProduct.png'

// be kind images
import bekind1 from '../../public/assets/works/beKind/splashScreen.png'
import bekind2 from '../../public/assets/works/beKind/mainScreen.png'
import bekind3 from '../../public/assets/works/beKind/selectAtm.png'
import bekind4 from '../../public/assets/works/beKind/changeState.png'
import bekind5 from '../../public/assets/works/beKind/updatedState.png'

// photography images
import photo1 from '../../public/assets/photography/1.jpg'
import photo2 from '../../public/assets/photography/2.jpg'
import photo3 from '../../public/assets/photography/3.jpg'
import photo4 from '../../public/assets/photography/4.jpg'
import photo5 from '../../public/assets/photography/5.jpg'
import photo6 from '../../public/assets/photography/6.jpg'
import photo7 from '../../public/assets/photography/7.jpg'
import photo8 from '../../public/assets/photography/8.jpg'

import { StaticImageData } from 'next/image'

const codeLandImages: StaticImageData [] = [ 
    codeland1,
    codeland3
]

const adastrahubImages: StaticImageData[] = [ 
    adastrahub1, 
    adastrahub2, 
    adastrahub3, 
    adastrahub4 
]

const inventariatecImages: StaticImageData[] = [ 
    inventariatec1, 
    inventariatec2, 
    inventariatec3, 
    inventariatec4, 
    inventariatec5, 
    inventariatec6 
]

const bekindImages: StaticImageData[] = [ 
    bekind1, 
    bekind2, 
    bekind3, 
    bekind4, 
    bekind5 
]

const myphotographyImages: StaticImageData[] = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8
]

export const codeLandImageByIndex = (index: number): StaticImageData => codeLandImages[index % codeLandImages.length]

export const adAstraHubImageByIndex = (index: number): StaticImageData => adastrahubImages[index % adastrahubImages.length]

export const inventariaTecImageByIndex = (index: number): StaticImageData => inventariatecImages[ index % inventariatecImages.length]

export const beKindImageByIndex = (index: number): StaticImageData => bekindImages [ index % bekindImages.length ]

export const myphotographyImagesByIndex = (index: number): StaticImageData => myphotographyImages[ index % myphotographyImages.length]