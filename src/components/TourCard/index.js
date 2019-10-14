import React from 'react';
import Image from 'gatsby-image';
import { FaMap } from 'react-icons/fa';
import { Link } from 'gatsby';

import styles from './styles.module.css';

const TourCard = ({ tour }) => {
  const { name, price, country, slug, images, days } = tour;
  const mainImage = images[0].fluid;

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single tour" />
        <Link className={styles.link} to={`/tours/${slug}`}>
          details
        </Link>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {country}
          </h4>
          <div className={styles.details}>
            <h6>{days} days</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TourCard;
