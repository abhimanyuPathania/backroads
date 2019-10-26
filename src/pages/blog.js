import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import StyledBanner from '../components/StyledBanner';
import BlogList from '../views/Blog/BlogList';

export const query = graphql`
  {
    bannerImage: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const Blog = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <StyledBanner img={data.bannerImage.childImageSharp.fluid} />
      <BlogList />
    </Layout>
  );
};

export default Blog;
