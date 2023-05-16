import React from "react";
import Link from "next/link";
import Image from "next/image";

const ArticleHome = (props) => {
  const content = props.contents;
  return (
    <div className="mx-5 my-10 xl:mx-40 xl:my-10">
      <Link href="/article">
        <div className="flex flex-col items-center justify-center w-full overflow-auto bg-white rounded shadow-lg md:flex-row">
          <img
            className="flex w-2/5 rounded-l xl:w-96 "
            src={content.imageTH}
            alt={content.imageTH}
          ></img>
          <div className="flex flex-col justify-between w-3/5 m-5 leading-normal rounded-b lg:rounded-b-none lg:rounded-r">
              <span className="mb-2 font-bold text-gray-900 lg:text-3xl md:text-2xl">
                {content.titleTH}
              </span>
              <p className="text-base text-gray-700 ">{content.descriptionTH}</p>
            </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleHome;
