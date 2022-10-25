import React from "react";
import { useParams } from "react-router";
import MoviesList from "../MoviesList/MoviesList";
import "./Category.css"

const Category = () => {
  const { category } = useParams();

  console.log(category);

  return (
    <>
      <div className="page-header">
        <h2>
        {category === "movie" ? "Movies" : "TV Series"}
        </h2>
      </div>

      <div className="container">
        <div className="section mb-3">
          <MoviesList category={category} />
        </div>
      </div>
    </>
  );
};

export default Category;
