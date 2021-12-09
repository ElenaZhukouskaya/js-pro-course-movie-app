import React from "react";
import styles from "./HomePage.module.css";
import Header from "components/Header";
import MovieResult from "components/MovieResult";
import Search from "components/Search";
import TopBar from "components/TopBar";

const HomePage = () => {
  return (
    <div>
      <Search />
      <TopBar />
      <div className={styles.homePage}>
        <MovieResult />
      </div>
    </div>
  );
};

export default HomePage;
