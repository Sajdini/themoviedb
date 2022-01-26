import React from "react";
import classes from "./header.module.css";
import { data } from "../data";
import { Link } from "react-router-dom";

import SearchForm from "./SearchForm";
const Header = () => {
  const movieGenres = data.map((i) => {
    const { id, genre } = i;
    return (
      <Link to={`/genre/movies/${id}`} key={id}>
        {genre}
      </Link>
    );
  });

  return (
    <div className={classes.header}>
      <div className={classes.leftSide}>
        <Link
          to={"/"}
          className={classes.logo}
          style={{ textDecoration: "none", color: "white" }}
        >
          <h2>The movieDb</h2>
        </Link>
        <div className={classes.actionContainer}>
          <div className={classes.dropdown}>
            <span className={classes.dropbtn}>Movies</span>
            <div className={classes.actions}>{movieGenres}</div>
          </div>
        </div>
      </div>
      <SearchForm />
    </div>
  );
};

export default Header;
