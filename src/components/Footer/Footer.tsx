import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <h3 className={styles.siteName}>Movies' library</h3>
        <div className={styles.copyRight}>
          <div className={styles.icon}>
            <i className="far fa-copyright"></i>
          </div>
          <p className={styles.icon}>Zhukouskaya Alena 2021</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
