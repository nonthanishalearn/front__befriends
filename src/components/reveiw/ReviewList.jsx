import React from "react";
import Image from "next/image";

import ReviewCardHome from "@/components/reveiw/ReviewCardHome";
const ReviewList = (props) => {
  const images = props.images;
  // const imageHeader = props.imageHeader;
  // const textHeader = props.textHeader;
  return (
    <div>
      {/* <img className="flex" src={imageHeader} alt={imageHeader}></img>
      <div className="text-5xl xl:px-20 py-2 text-white bg-[#002F6C] ">
        <h1>Review</h1>
      </div>
      <div className="text-xl xl:px-20 text-[#002F5C]">
        <h1>{textHeader}</h1>
      </div> */}
      <div className="grid grid-cols-4 gap-5">
        {
          images?
        images.map((image, index) => {
          return (
            <div key={index} className="col-span-4 md:col-span-2 xl:col-span-1">
              <ReviewCardHome
                before={image.before}
                after={image.after}
              ></ReviewCardHome>
            </div>
          );
        }):''}
      </div>
    </div>
  );
};

export default ReviewList;
