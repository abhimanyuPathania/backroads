import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Title from '../../../components/Title';
import BlogCard from '../../../components/BlogCard';

import styles from './styles.module.css';

const GET_ALL_POSTS = graphql`
  {
    posts: allContentfulPost(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          id
          title
          slug
          published(formatString: "MMMM, Do YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

const BlogList = () => {
  const {
    posts: { edges: posts },
  } = useStaticQuery(GET_ALL_POSTS);

  return (
    <section className={styles.blog}>
      <Title title="our" subtitle="blogs" />
      <div className={styles.center}>
        {posts.map(({ node }) => (
          <BlogCard key={node.id} blog={node} />
        ))}
      </div>
    </section>
  );
};

export default BlogList;
