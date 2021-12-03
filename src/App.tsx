import Footer from "components/Footer";
import Header from "components/Header";
import MovieResult from "components/MovieResult";
import Search from "components/Search";
import React from "react";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.MainComponent}>
        <Header />
        <div className={styles.SearchContainer}>
          <Search />
        </div>
      </div>
      <MovieResult />
      <Footer />
    </div>
  );
}

export default App;
