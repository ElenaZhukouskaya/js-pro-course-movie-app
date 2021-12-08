import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return <h3 className={styles.libraryName}> Movies' library</h3>;
};

export default Header;
