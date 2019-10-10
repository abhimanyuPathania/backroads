import React from 'react';

import Title from '../../../components/Title';
import styles from './styles.module.css';

const ContactForm = () => {
  return (
    <section className={styles.contact}>
      <Title title="contact" subtitle="us" />
      <div className={styles.center}>
        <form action="" className={styles.form}>
          <div>
            <label htmlFor="name">name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="dohn joe"
            />
          </div>

          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="email@email.com"
            />
          </div>

          <div>
            <label htmlFor="message">message</label>
            <textarea
              name="message"
              id="message"
              className={styles.formControl}
              rows="7"
              placeholder="hello there"
            />
          </div>

          <div>
            <input
              type="submit"
              value="Submit Here"
              className={styles.submit}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
