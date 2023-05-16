import React from "react";
import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";

import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
const CarouselComponent = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };
  return (
      <div className="relative z-50">
        <AiFillLeftCircle
          onClick={handlePrevSlide}
          className="absolute left-0 z-50 m-auto text-5xl text-gray-400 cursor-pointer inset-y-1/2"
        />
        <div className="relative flex w-full overflow-hidden">
          <Swipe
            onSwipeLeft={handleNextSlide}
            onSwipeRight={handlePrevSlide}
            className="relative w-full z-51 "
          >
            {
              images?
            images.map((image, index) => {
              if (index === currentSlide) {
                return (
                  <img
                    className="m-auto md:w-full animate-fadeIn"
                    key={index}
                    src={image.imageTH}
                    object-fit='contain'
                    alt={image.imageTH}
                  />
                );
              }
            })
            : ''
          }
          </Swipe>
        </div>
        <AiFillRightCircle
          onClick={handleNextSlide}
          className="absolute right-0 z-50 m-auto text-5xl text-gray-400 cursor-pointer inset-y-1/2"
        />

        <div className="relative flex justify-center p-2">
          {
            images?
          images.map((_, index) => {
            return (
              <div
                className={
                  index === currentSlide
                    ? "h-4 w-4 bg-gray-600 rounded-full mx-2 mb-2 cursor-pointer"
                    : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
                }
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                }}
              />
            );
          })
          : ''
        }
        </div>
      </div>
  );
};

export default CarouselComponent;
