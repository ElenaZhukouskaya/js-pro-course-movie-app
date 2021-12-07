import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.copyRight}>
          <div className={styles.icon}>
            <i className="far fa-copyright"></i>
          </div>
          <h3 className={styles.libraryName}>Movies' library</h3>;
        </div>
        <div className={styles.footerInfo}>
          <div className={styles.footerItem}>Home</div>
          <div className={styles.footerItem}>Term of services</div>
          <div className={styles.footerItem}>About us</div>
          <div className={styles.footerItem}>Recent releases</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
