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

import { StaticImageData } from 'next/image'

const codeLandImages: StaticImageData [] = [ codeland1,codeland3]
const adastrahubImages: StaticImageData[] = [ adastrahub1, adastrahub2, adastrahub3, adastrahub4 ]
const inventariatecImages: StaticImageData[] = [ inventariatec1, inventariatec2, inventariatec3, inventariatec4, inventariatec5, inventariatec6 ]
const bekindImages: StaticImageData[] = [ bekind1, bekind2, bekind3, bekind4, bekind5 ]

export const codeLandImageByIndex = (index: number): StaticImageData => codeLandImages[index % codeLandImages.length]

export const adAstraHubImageByIndex = (index: number): StaticImageData => adastrahubImages[index % adastrahubImages.length]

export const inventariaTecImageByIndex = (index: number): StaticImageData => inventariatecImages[ index % inventariatecImages.length]

export const beKindImageByIndex = (index: number): StaticImageData => bekindImages [ index % bekindImages.length ]