import React from "react";
import Genre from "./components/Genre";
import Home from "./components/Home";
import Search from "./components/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./UI/header";
import ImageHolder from "./UI/ImageHolder";
import Movie from "./components/Movie";
import Footer from "./UI/Footer";

const scrollTopHandler = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const RouterProvider = () => {
  return (
    <>
      <Router>
        <Header />
        <ImageHolder />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/genre/:type/:id" element={<Genre />} />
          <Route path="/search/:input" element={<Search />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
        <Footer scrollTop={scrollTopHandler} />
      </Router>
    </>
  );
};
export default RouterProvider;
