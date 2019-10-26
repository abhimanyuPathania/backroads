import React, { useCallback } from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import BlogCard from '../../components/BlogCard';
import Title from '../../components/Title';
import Pagination from '../../components/Pagination';

import styles from './styles.module.css';

const BlogsPaginated = props => {
  const {
    data,
    pageContext: { currentPage, numberOfPages },
  } = props;

  const getPageURL = useCallback(({ page }) => {
    return page === 0 ? '/blogs' : `/blogs/${page + 1}`;
  }, []);

  return (
    <Layout>
      <section className={styles.blog}>
        <Title title="latest" subtitle="posts" />
        <div className={styles.center}>
          {data.posts.edges.map(({ node }) => (
            <BlogCard key={node.id} blog={node} />
          ))}
        </div>
      </section>
      <section className={styles.links}>
        <Pagination
          currentPage={currentPage}
          numberOfPages={numberOfPages}
          getURL={getPageURL}
        />
      </section>
    </Layout>
  );
};

export const query = graphql`
  query getPostsPaginated($limit: Int!, $skip: Int!) {
    posts: allContentfulPost(
      limit: $limit
      skip: $skip
      sort: { fields: published, order: DESC }
    ) {
      edges {
        node {
          slug
          title
          id: contentful_id
          published(formatString: "MMMM Do, YYYY")
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

export default BlogsPaginated;
