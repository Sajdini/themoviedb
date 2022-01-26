import React from "react";
import useHttp from "../hooks/use-https";
import classes from "./Home.module.css";
import { popular, trending, upcoming, imgpath } from "../data";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const { movies: popularMoviesData } = useHttp(popular);
  const { movies: trendingMoviesData } = useHttp(trending);
  const { movies: upcomingMoviesData } = useHttp(upcoming);

  const popMovies = popularMoviesData?.results?.map((movie) => {
    const { id, original_title, vote_average, poster_path } = movie;
    return (
      <Link
        to={`/movie/${id}`}
        style={{ textDecoration: "none", color: "black" }}
        key={id}
        className={classes.card}
      >
        <img src={imgpath + poster_path} alt={original_title} />
        <div>
          <span>
            {original_title?.length > 15
              ? original_title.substring(0, 15) + "..."
              : original_title}
          </span>
          <span>{vote_average}</span>
        </div>
      </Link>
    );
  });

  const trendMovies = trendingMoviesData?.results?.map((movie) => {
    const { id, original_title, vote_average, poster_path } = movie;
    return (
      <Link
        to={`/movie/${id}`}
        style={{ textDecoration: "none", color: "black" }}
        key={id}
        className={classes.card}
      >
        <img src={imgpath + poster_path} alt={original_title} />
        <div>
          <span>
            {original_title?.length > 15
              ? original_title.substring(0, 15) + "..."
              : original_title}
          </span>
          <span>{vote_average}</span>
        </div>
      </Link>
    );
  });

  const upMovies = upcomingMoviesData?.results?.map((movie) => {
    const { id, original_title, vote_average, poster_path } = movie;
    return (
      <Link
        to={`/movie/${id}`}
        style={{ textDecoration: "none", color: "black" }}
        key={id}
        className={classes.card}
      >
        <img src={imgpath + poster_path} alt={original_title} />
        <div>
          <span>
            {original_title?.length > 15
              ? original_title.substring(0, 15) + "..."
              : original_title}
          </span>
          <span>{vote_average}</span>
        </div>
      </Link>
    );
  });

  return (
    <Fragment>
      <h1>The most popular</h1>
      <div className={classes.container}>{popMovies}</div>
      <h1>Trending this week</h1>
      <div className={classes.container}>{trendMovies}</div>
      <h1>Upcoming</h1>
      <div className={classes.container}>{upMovies}</div>
    </Fragment>
  );
};

export default Home;
