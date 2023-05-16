import React from "react";
import Link from "next/link";
import Image from 'next/image'

const PromotionHome = (props) => {
  const length = 500;
  const content = props.contents;
  const description = props.contents.descriptionTH.substring(0, length) + "...";
  return (
    <div
      style={{
        backgroundImage: `url("${content.imageTH}")`,
        backgroundSize: "1920px 600px",
        backgroundPosition: "center center",
      }}
    >
      <div className="flex flex-col h-[600px] items-end justify-end p-5 lg:p-20">
        <div className="flex justify-end">
          <h5 className="px-4 py-1 rounded text-xs bg-[#F76921] text-white">`Don&#39;t Lose`</h5>
        </div>
        <div className="my-1">
          <h3 className="px-2 text-5xl text-white">{content.titleTH}!</h3>
        </div>
        <div className="flex items-end justify-end my-5">
          <p className="px-2 text-sm text-white md:w-2/3 lg:w-1/3 text-end">
            {description}
          </p>
        </div>
        <div className="flex flex-row ">
          <Link  className="bg-[#FF6F28] m-5 hover:bg-gray-400 text-white py-5 px-10 rounded"href="/promotion">

              See more

          </Link>
        </div>
      </div>
    </div>
  );
};

export default PromotionHome;
