import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const select = (e)=> {
    console.log(e.target);
    var element = document.querySelector(".active")
    
    if (element !== null){
      element.classList.remove("active");
    }
    e.target.parentElement.classList.add("active");
  }

  return (
    <div className="header">
      <div className="header__wrap container">
        <div className="logo">
          <Link to="/">MoviesHub</Link>
        </div>

        <ul className="header__nav">
            <li onClick={select}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={select}>
              <Link to="/movie">Movies</Link>
            </li>
            <li onClick={select}>
              <Link to="/tv">TV Series</Link>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
