import React from "react";
import Image from 'next/image'

const ServicesHome = (props) => {
  const images = props.images
  return (
    <div className="grid grid-cols-4 gap-5 py-10 xl:mx-40">
      {
        images?
      images.map((image, index) => {
        return (
          <div key={index} className="col-span-2 lg:col-span-1"> 
            <img
            className="w-full m-auto"
              src={image.image}
              alt={image.title}
            />
          </div>
        );
      }):''}
    </div>
  );
};

export default ServicesHome;
