import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import styles from './styles.module.css';

const BlogCard = ({ blog }) => {
  const { slug, title, image, published } = blog;
  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <Img fluid={image.fluid} className={styles.img} />
        <Link to={`/blog/${slug}`} className={styles.link}>
          read mode
        </Link>
        <h6 className={styles.date}>{published}</h6>
      </div>
      <div className={styles.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  );
};

export default BlogCard;
