import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import StyledBanner from '../components/StyledBanner';

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
      <StyledBanner img={data.bannerImage.childImageSharp.fluid} />
    </Layout>
  );
};

export default Blog;
