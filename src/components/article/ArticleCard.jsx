import React from "react";
import Link from "next/link";
import Image from 'next/image'

const ArticleCard = (props) => {
  const length = 100;
  const image = props.image;
  const title = props.title;
  const detail = props.detail.substring(0, length) + "...";
  const color = props.color;
  const textColor = props.textColor;
  const id = props.id;

  return (
    // <div className="flex flex-row justify-center w-full shadow-lg">
    //   <div
    //     className="flex-none w-56 h-64 overflow-hidden text-center bg-cover rounded-t-none rounded-l lg:w-64"
    //     style={{ backgroundImage: `url("${image}")` }}
    //     title={title}
    //   ></div>
    //   <div
    //     className="flex flex-col justify-between leading-normal bg-white rounded-b lg:border-l-0 lg:rounded-b-none lg:rounded-r"
    //     style={{ background: `${color}`, color: `${textColor}` }}
    //   >
    //     <div className="flex flex-col px-10 pt-10 items-between ">
    //       <div className="w-full text-xl font-bold break-words truncate">
    //         {title}
    //       </div>
    //       <p className="w-full break-words truncate">
    //         {detail}
    //       </p>
    //       <div className="flex justify-start my-1">
    //         <button
    //           className="bg-[#fff] rounded-xs py-1 px-5 text-xs"
    //           style={{ background: `${textColor}`, color: `${color}` }}
    //         >
    //           READ MORE
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col mx-5 bg-transparent bg-white rounded shadow-lg bg-clip-border">
      <div
        className="flex"
        style={{ background: `${color}`, color: `${textColor}` }}
      >
        <div className="flex flex-row items-center justify-center w-3/6">
          <img className="mx-auto rounded rounded-r-none " src={image} alt="card image" />
        </div>
        <div className="flex-1 w-3/6 p-2 rounded rounded-l-none md:p-10 text-secondary ">
          <span 
          className="text-sm font-bold uppercase xl:text-xl">{title}</span>
          <p className="mb-5 text-xs break-words md:mb-10 md:text-lg lg:mb-18 opacity-80">{detail}</p>
          <Link href="/article/[slug]" as={`/article/${id}`}>
              <button
                className="bg-[#fff] rounded-xs py-1 px-5 text-xs"
                style={{ background: `${textColor}`, color: `${color}` }}
              >
                Read More
              </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
