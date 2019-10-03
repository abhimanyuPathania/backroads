import React from 'react';
import { Link } from 'gatsby';

import BannerContent from '../BannerContent';
import styles from './styles.module.css';

const Error404 = () => {
  return (
    <header className={styles.error}>
      <BannerContent title="oops it's a dead end!">
        <Link to="/" className="btn-white">
          back home
        </Link>
      </BannerContent>
    </header>
  );
};

export default Error404;
