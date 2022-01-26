import React from "react";
import classes from "./Genre.module.css";
import { useParams } from "react-router";
import useHttp from "../hooks/use-https";
import { imgpath } from "../data";
import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
const Search = () => {
  const { input } = useParams();

  const { movies } = useHttp(
    `https://api.themoviedb.org/3/search/multi?api_key=125429bf4c273f1b1157d696c699b8d2&query=${input}`
  );

  const search = movies?.results?.map((movie) => {
    const name = movie.original_title || movie.original_name;
    const { id, original_title, vote_average, poster_path } = movie;
    return (
      <Fragment>
        <Link
          to={`movie/${id}`}
          id={id}
          key={id}
          className={classes.card}
          style={{ textDecoration: "none", color: "black" }}
        >
          <img src={imgpath + poster_path} alt={original_title} />
          <div>
            <span>
              {name?.length > 15 ? name?.substring(0, 15) + "..." : name}
            </span>
            <span>{vote_average}</span>
          </div>
        </Link>
      </Fragment>
    );
  });
  const blank = <h1 className={classes.errorText}>No items to show</h1>;

  return (
    <div className={classes.container}>
      {movies === 0 && blank}
      {search}
    </div>
  );
};

export default Search;
