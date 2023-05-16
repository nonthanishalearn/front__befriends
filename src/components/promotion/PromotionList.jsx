import React from "react";
import Image from 'next/image'

const PromotionList = (props) => {
  // console.log(props);
  const images = props.contents;
  const imageHeader = props.imageHeader;
  const textHeader = props.textHeader;
  return (
    <div>
            <img
        className="flex"
        src={imageHeader}
        alt={imageHeader}
      >
      </img>
      <div className="text-2xl lg:text-5xl xl:px-20 py-2 text-white bg-[#002F6C]  "><h1>Promotion</h1></div>
      <div  className="text-xl xl:px-20 text-[#002F5C]"><h1>{textHeader}</h1></div>

        <div className="grid grid-cols-3 gap-5 my-5">
          {
            images?
          images.map((item, index) => {
            return (
              <div key={index} className="col-span-3 m-auto md:col-span-1">
                <img
                  className="w-full"
                  
                  src={item.imageTH}
                  alt="befriends-clinic"
                />
              </div>
            );
          }):''}
        </div>
    </div>
  );
};

export default PromotionList;
