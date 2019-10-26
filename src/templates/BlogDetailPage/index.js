import React from 'react';
import { graphql, Link } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../../components/Layout';

import styles from './styles.module.css';

const BlogDetailPage = ({ data }) => {
  const {
    post: {
      title,
      published,
      text: { json },
    },
  } = data;
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const image = node.data.target.fields.file['en-US'].url;
        return (
          <div>
            <img src={image} alt="something" width={400} />
          </div>
        );
      },

      'embedded-entry-block': node => {
        const { title, image, text } = node.data.target.fields;
        return (
          <div>
            <h4>More for you</h4>
            <p>{title['en-US']}</p>
            <img
              width={200}
              src={image['en-US'].fields.file['en-US'].url}
              alt="embedded entry"
            />
            {documentToReactComponents(text['en-US'])}
          </div>
        );
      },
    },
  };

  return (
    <Layout>
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>Published at: {published}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>
          <Link to="/blog" className="btn-primary">
            all posts
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query getPost($slug: String) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do, YYYY")
      text {
        json
      }
    }
  }
`;

export default BlogDetailPage;
