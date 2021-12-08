import React from "react";
import styles from "./App.module.css";
import Header from "components/Header";
import Search from "components/Search";
import TopBar from "components/TopBar";
import MovieResult from "components/MovieResult";
import Footer from "components/Footer";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.mainComponent}>
        <Header />
        <div className={styles.searchContainer}>
          <Search />
        </div>
      </div>
      <TopBar />
      <MovieResult />
      <Footer />
    </div>
  );
}

export default App;
