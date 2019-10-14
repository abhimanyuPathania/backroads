import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

import styles from './styles.module.css';

const TourDay = ({ day, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section className={styles.day}>
      <h4>
        {day}
        <button className={styles.btn} onClick={() => setShowInfo(!showInfo)}>
          <FaAngleDown />
        </button>
      </h4>
      {showInfo && <p>{info}</p>}
    </section>
  );
};

export default TourDay;
