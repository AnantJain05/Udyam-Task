import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosInstance from "../../axios";
import "./CastList.css"

const CastList = (props) => {
  const { category } = useParams();

  const [casts, setCasts] = useState([]);

  const baseUrl= "https://api.themoviedb.org/3/"
  const apiKey= "03b1062b9935b24a081f7295b9272bf8"


  useEffect(() => {
    const getCredits = async () => {
      const url = category + "/" + props.id + "/credits";
      axiosInstance.get(url, {
        params: {
          api_key: apiKey,
        }
      }).then(res => {
        setCasts(res.cast.slice(0, 5));
      })
    };
    getCredits();
  }, [category, props.id]);

  return (
    <div className="casts">
      {casts.map((cast, index) => (
        <div key={index} className="casts__item">
          <div
            className="casts__item__img"
            style={{
              backgroundImage: `url(${"https://image.tmdb.org/t/p/w500/"+cast.profile_path})`,
            }}
          ></div>
          <p className="casts__item__name">{cast.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CastList;
