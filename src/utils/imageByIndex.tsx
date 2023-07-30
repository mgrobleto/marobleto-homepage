// codeland images
import codeland1 from '../../public/assets/works/codeland/homepage.png'
import codeland2 from '../../public/assets/works/codeland/2.png'
import codeland3 from '../../public/assets/works/codeland/3.png'
import codeland4 from '../../public/assets/works/codeland/4.png'
import codeland5 from '../../public/assets/works/codeland/5.png'
import { StaticImageData } from 'next/image'

export const images: StaticImageData [] = [ codeland1, codeland2, codeland3, codeland4, codeland5 ]

const imageByIndex = (index: number): StaticImageData => images[index % images.length]

export default imageByIndex