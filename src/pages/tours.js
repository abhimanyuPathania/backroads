import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import StyledBanner from '../components/StyledBanner';
import SEO from '../components/SEO';
import ToursSection from '../views/Tours/ToursSection';

export const query = graphql`
  {
    bannerImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const ToursPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Tours" />
      <StyledBanner img={data.bannerImage.childImageSharp.fluid} />
      <ToursSection />
    </Layout>
  );
};

export default ToursPage;
