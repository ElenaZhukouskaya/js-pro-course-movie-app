import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <h3 className={styles.siteName}> Movies' library</h3>
    </div>
  );
};

export default Header;
