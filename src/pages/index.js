import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import StyledBanner from '../components/StyledBanner';
import BannerContent from '../components/BannerContent';
import AboutSection from '../views/Home/About';
import ServicesSection from '../views/Home/Services';

const Home = ({ data }) => {
  return (
    <Layout>
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
