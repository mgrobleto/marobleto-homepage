import { StaticImageData } from 'next/image'
import React from 'react'
import Image  from 'next/image'

type PropType = {
  selected: boolean
  imgSrc: StaticImageData
  index: number
  onClick: () => void
}

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, imgSrc, index, onClick } = props

  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
    >
      <button
        onClick={onClick}
        className="embla-thumbs__slide__button"
        type="button"
      >
        <div className="embla-thumbs__slide__number">
          <span>{index + 1}</span>
        </div>
        <Image
          className="embla-thumbs__slide__img"
          src={imgSrc}
          width={300}
          alt="Your alt text"
        />
      </button>
    </div>
  )
}
