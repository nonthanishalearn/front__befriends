import React from "react";
import Image from "next/image";
import ArticleCard from "@/components/article/ArticleCard";
const ArticleListHome = (props) => {
  const articleList = props.contents;
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
      <div className="text-2xl lg:text-5xl xl:px-20 py-2 text-white bg-[#002F6C] "><h1>Article</h1></div>
      <div  className="text-xl xl:px-20 text-[#002F5C]"><h1>{textHeader}</h1></div>
      <div className="grid grid-cols-4 gap-5 p-2 xl:p-10 md:gap-10">
        {
        articleList?
        articleList.map((article, index) => {
          return (
            <div key={index} className="col-span-4 my-1 lg:col-span-2 ">
              <ArticleCard
                image={article.imageTH}
                title={article.titleTH}
                detail={article.descriptionTH}
                color={index == 0 ? "#002F6C" : "#ffffff"}
                textColor={index == 0 ? "#ffffff" : "#002F6C"}
                id={article.id}
              ></ArticleCard>
            </div>
          );
        })
        : ''
        }
      </div>
    </div>
  );
};

export default ArticleListHome;
