import React from "react";
import { Fragment } from "react";
import useHttp from "../hooks/use-https";
import { popular, imgpath } from "../data";
import { useParams } from "react-router";
import classes from "./Genre.module.css";
import { Link } from "react-router-dom";

const Genre = () => {
  const { id } = useParams();

  const { movies } = useHttp(popular);

  const filteredMovies = movies?.results?.filter((movie) =>
    movie.genre_ids.includes(+id)
  );
  console.log(filteredMovies);
  const genres = filteredMovies?.map((movie) => {
    const { id, original_title, vote_average, poster_path } = movie;
    return (
      <Link
        to={`/movie/${id}`}
        id={id}
        key={id}
        className={classes.card}
        style={{ textDecoration: "none", color: "black" }}
      >
        <img src={imgpath + poster_path} alt="No poster available right now" />
        <div>
          <span>
            {original_title?.length > 15
              ? original_title?.substring(0, 15) + "..."
              : original_title}
          </span>
          <span>{vote_average}</span>
        </div>
      </Link>
    );
  });
  const blank = <h1 className={classes.errorText}>No items to show</h1>;

  return (
    <Fragment>
      <div className={classes.container}>
        {filteredMovies === 0 && blank}
        {genres}
      </div>
    </Fragment>
  );
};
//
export default Genre;
