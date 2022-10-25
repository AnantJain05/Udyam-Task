import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./detail.css";
import CastList from "../CastList/CastList";
import axiosInstance from "../../axios";

const Detail = () => {
  const { category, id } = useParams();
  const [item, setItem] = useState(null);
  const apiKey= "03b1062b9935b24a081f7295b9272bf8"  

  useEffect(() => {
    const getDetail = async () => {
      const url = category + "/" + id;
      axiosInstance.get(url, {
        params: {
          api_key: apiKey,
        }
      }).then(res => {
        setItem(res);
      })
    };
    getDetail();
  }, [category, id]);

  return (
    <>
      {item && (
        <>
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url(${"https://image.tmdb.org/t/p/original/"+(
                    item.poster_path
                  )})`,
                }}
              ></div>
            </div>

            <div className="movie-content__info">
              <h1 className="title">{item.title || item.name}</h1>
              <div className="genres">
                {item.genres &&
                  item.genres.slice(0, 4).map((genre, index) => (
                    <span key={index} className="genres__item">
                      {genre.name}
                    </span>
                  ))}
              </div>
              <p className="overview">{item.overview}</p>
              <div className="cast">
                <div className="section__header">
                  <h2>Casts</h2>
                </div>
                <CastList id={item.id} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
