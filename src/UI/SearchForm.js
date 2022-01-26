import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./header.module.css";
function SearchForm(props) {
  const [text, setText] = useState("");
  let navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    navigate(`/search/${text}`, { replace: true });
    setText("");
  };

  return (
    <div>
      <form className={classes.search} onSubmit={onSubmitHandler}>
        <button className={classes.searchBtn}>
          <span className="text">Search</span>
        </button>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Look for a movie"
          style={{ fontStyle: `italic` }}
        />
      </form>
    </div>
  );
}

export default SearchForm;
