import React from "react";
import ReviewCardHome from "@/components/reveiw/ReviewCardHome";
import Link from "next/link";
import Image from 'next/image'

const ReviewHome = (props) => {
  const images = props.images
  return (
    <div
    style={{ backgroundImage: `url("/asset/image/home/HomeP_Review.png")`, backgroundSize: '1800px 800px' }}
    
    >
      <div className="flex justify-center">
        <h5 className="m-5 text-2xl font-bold text-white">Review</h5>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {
          images?
        images.map((image, index) => {
          return (
            index < 4?
            (<div key={index} className="col-span-2 my-10 lg:col-span-1">
              <ReviewCardHome before={image.before} after={image.after}></ReviewCardHome>
            </div>) : ('')
          );
        }):''}
      </div>
      <div className="flex flex-row items-center justify-center lg:justify-end lg:items-end">
        <Link className="bg-[#FF6F28] m-5 hover:bg-gray-400 text-white py-5 px-10 rounded"href="/review">

          See more

        </Link>
      </div>
    </div>
  );
};

export default ReviewHome;
