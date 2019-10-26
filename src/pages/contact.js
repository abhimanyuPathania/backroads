import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import StyledBanner from '../components/StyledBanner';
import ContactForm from '../views/Contact/ContactForm';

export const query = graphql`
  {
    bannerImage: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const Contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <StyledBanner img={data.bannerImage.childImageSharp.fluid} />
      <ContactForm />
    </Layout>
  );
};

export default Contact;
