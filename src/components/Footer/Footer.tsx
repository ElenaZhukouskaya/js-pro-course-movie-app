import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterContainer}>
        <div className={styles.CopyRight}>
          <div className={styles.Icon}>
            <i className="far fa-copyright"></i>
          </div>
          <h3 className={styles.LibraryName}>Movies' library</h3>;
        </div>
        <div className={styles.FooterInfo}>
          <div className={styles.FooterItem}>Home</div>
          <div className={styles.FooterItem}>Term of services</div>
          <div className={styles.FooterItem}>About us</div>
          <div className={styles.FooterItem}>Recent releases</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
