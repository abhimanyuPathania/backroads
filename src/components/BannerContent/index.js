import React from 'react';
import styles from './styles.module.css';

const MainBanner = ({ title, info, children }) => {
  return (
    <div className={styles.banner}>
      <h1>{title}</h1>
      <p>{info}</p>
      {children}
    </div>
  );
};

export default MainBanner;
