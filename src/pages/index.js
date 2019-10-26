import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import StyledBanner from '../components/StyledBanner';
import BannerContent from '../components/BannerContent';
import AboutSection from '../views/Home/About';
import ServicesSection from '../views/Home/Services';
import FeaturedTours from '../views/Home/FeaturedTours';

const Home = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <StyledBanner
        home
        img={data.bannerImage.childImageSharp.fluid}
        Tag="header"
      >
        <BannerContent
          title="continue exploring"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, placeat!"
        >
          <Link className="btn-white" to="/tours">
            explore tours
          </Link>
        </BannerContent>
      </StyledBanner>
      <AboutSection />
      <ServicesSection />
      <FeaturedTours />
    </Layout>
  );
};

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

export default Home;
