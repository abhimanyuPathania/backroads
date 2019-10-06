import React from 'react';

import Title from '../../../components/Title';

import services from '../../../constants/services';
import styles from './styles.module.css';

const ServicesSection = () => {
  return (
    <section className={styles.services}>
      <Title title="our" subtitle="services" />
      <div className={styles.center}>
        {services.map((item, index) => {
          return (
            <article className={styles.service} key={index}>
              <span>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
