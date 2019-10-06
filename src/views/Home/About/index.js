import React from 'react';

import Title from '../../../components/Title';

import img from '../../../images/defaultBcg.jpeg';
import styles from './styles.module.css';

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about image" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis fugit minus omnis?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis fugit minus omnis?
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  );
};

export default About;
