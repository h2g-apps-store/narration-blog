import React from "react";
import ArticleList from "../components/articles/ArticleList";

function Posts() {
  return (
    <>
      <section className="flex rounded-md shadow-xs xl:mt-10 flex-col justify-center items-center  py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20">
        <h1 className=" text-4xl sm:text-5xl md:6xl lg:text-6xl xl:text-7xl  text-center font-bold text-gray-700 dark:text-gray-100">
          Actualités accessibles avec narration
        </h1>
        <p className="text-xl font-light py-2 text-gray-500 text-center xl:w-[700px]">
          Lorsque l'on visite le blog Narration, on plonge dans un univers de
          découvertes et de partages inépuisables. Chaque jour, ce blog propose
          des articles passionnants portant sur des thèmes variés
        </p>
      </section>
      <ArticleList />
    </>
  );
}

export default Posts;
