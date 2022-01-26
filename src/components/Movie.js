import React from "react";
import { useParams } from "react-router";
import useHttp from "../hooks/use-https";
import { baseUrl, apiKey } from "../data";
import classes from "./Movie.module.css";
import { imgpath } from "../data";

function Movie() {
  const { id } = useParams();
  const { movies, isLoading } = useHttp(
    `${baseUrl}/movie/${id}?api_key=${apiKey}&language=en-US`
  );

  if (isLoading) {
    return <div className={classes.loading}></div>;
  } else
    return (
      <div
        className={classes.container}
        style={{
          backgroundImage: ` url(${imgpath + movies.backdrop_path}) `,
          backgroundSize: "cover",
        }}
      >
        <div className={classes.movieInfo}>
          <h1>{movies?.title}</h1>
          <div className={classes.details}>
            <div className={classes.info}>
              <img src={imgpath + movies.poster_path} alt={movies.title} />
            </div>
            <div className={classes.description}>
              <h3>{movies.tagline}</h3>
              <h4>Rating : </h4>
              <span> {movies.vote_average}/10</span>
              <h4>Genre : </h4>
              {movies.genres.map((genre, index) => (
                <span key={index}> {genre["name"]}, </span>
              ))}
              <h4>Date Released : </h4>
              <span> {movies.release_date}</span>
              <h4>Duration : </h4>
              <span>
                {" "}
                {Math.floor(movies.runtime / 60)}
                {movies.runtime > 120 ? "hours" : "hour"} and{" "}
                {Math.floor(
                  (movies.runtime / 60 - Math.floor(movies.runtime / 60)) * 60
                )}{" "}
                minutes
              </span>
              <br />
              <br />
              <a href={`${movies.homepage}`}>Official website link</a>
              <h3 className={classes.briefing}>Brief description</h3>
              <br />
              <span>
                {movies.overview.length > 258
                  ? movies.overview.substring(0, 258)
                  : movies.overview}
                ...
              </span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Movie;
