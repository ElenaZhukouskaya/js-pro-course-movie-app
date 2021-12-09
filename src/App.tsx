import React from "react";
import styles from "./App.module.css";
import Header from "components/Header";

import HomePage from "pages/HomePage";
import NoMatch from "pages/NoMatch";
import Footer from "components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetailsPage from "pages/MovieDetailsPage";

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
