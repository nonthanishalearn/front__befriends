import React from 'react'
import Carousel from "@/components/banner/CarouselComponent";
const BannerHome = (props) => {
  // console.log(props)
  const images = props.images
  return (
    <div>
        <Carousel images={images} />
    </div>
  )
}

export default BannerHome


