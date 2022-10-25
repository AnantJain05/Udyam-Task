import React, { useEffect, useState } from "react";
import "./MoviesList.css";
import MovieCard from "../MovieCard/MovieCard";
import axiosInstance from "../../axios";

const MoviesList = (props) => {
  const [items, setItems] = useState([]);
  const [keyword, setKeyword] = useState("");
  const baseUrl= "https://api.themoviedb.org/3/"
  const apiKey= "03b1062b9935b24a081f7295b9272bf8"
  
    const getList = async () => {
      if (keyword !== "") {
        const url = "search/" + props.category;
        axiosInstance.get(url, {
          params: {
            api_key: apiKey,
            query: keyword,
          }
        }).then(res => {
          setItems(res.results);
        })
      }
    };
  useEffect(() => {
    getList();
  }, [props.category]);

  return (
    <>
      <div className="section mb-3">
        <div className="movie-search">
          <input
            type="text"
            placeholder="Enter keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button
            className="btn small"
            onClick={getList}
          >
            Search
          </button>
        </div>
      </div>
      <div className="movie-grid">
        {items.map((item, index) => (
          <MovieCard key={index} category={props.category} item={item} />
        ))}
      </div>
    </>
  );
};

export default MoviesList;
