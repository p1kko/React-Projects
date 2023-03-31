import React from 'react';
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div  className={styles.footerContainer}>
      <div className={styles.footerContent }>
        <p>©2023 React sneakers</p>
      </div>
    </div>
  );
}

export default Footer;