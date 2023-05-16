import React from "react";
import Image from "next/image";
const ProductLogoComponent = ( props ) => {
  const images = props.images
  return (
    <div className="grid grid-cols-4 gap-5 p-5 lg:gap-10">

        {
        images?
        images.map((image, index) => {
          return (
            <div key={index} className="col-span-2 xl:col-span-1">
              <div
                key={index}
                className="flex flex-col justify-center items-center m-1 py-10 bg-white border border-gray-200 rounded-lg shadow-[#FF6F28] shadow-lg"
              >
                <img
                  src={image.imageTH}
                  alt={image.titleTH}
                />
              </div>
              <div>
                <p className="m-4 font-normal text-center text-gray-500 dark:text-gray-400">
                  {image.titleTH}
                </p>
              </div>
            </div>
          );
        }):''}
    </div>
  );
};

export default ProductLogoComponent;
