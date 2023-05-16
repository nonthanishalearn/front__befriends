import React from "react";
import Image from "next/image";

import ArticleCard from "@/components/article/ArticleCard";
import Link from "next/link";

const ArticleListHome = (props) => {
  const articleList = props.contents;
  return (
    <div className="py-10">
      <div className="flex flex-row items-center justify-center my-10">
        <h5 className="px-2 text-white bg-gradient-to-r from-cyan-900 to-blue-500">
          The Blog
        </h5>
      </div>
      <div className="flex flex-col items-center justify-center my-5">
        <h2 className="text-5xl text-gray-500">Article</h2>
      </div>
      <div className="grid grid-cols-2 gap-5 md:px-20 lg:gap-10">
        {articleList
          ? articleList.map((article, index) => {
              return index < 4 ? (
                <div key={index} className="col-span-2 my-1 xl:col-span-1">
                  <ArticleCard
                    image={article.imageTH}
                    title={article.titleTH}
                    detail={article.descriptionTH}
                    color={index == 0 ? "#002F6C" : "#ffffff"}
                    textColor={index == 0 ? "#ffffff" : "#002F6C"}
                    id={article.id}
                  ></ArticleCard>
                </div>
              ) : (
                ""
              );
            })
          : ""}
      </div>
      <div className="flex flex-row items-center justify-center my-10 lg:items-end">
        <Link
          className="bg-[#FF6F28] m-5 hover:bg-gray-400 text-white py-5 px-10 rounded"
          href="/article"
        >
          See more
        </Link>
      </div>
    </div>
  );
};

export default ArticleListHome;
