import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import HeroBanner from '../components/HeroBanner';
import BannerContent from '../components/BannerContent';
import AboutSection from '../views/Home/About';
import ServicesSection from '../views/Home/Services';

const Home = () => {
  return (
    <Layout>
      <HeroBanner>
        <BannerContent
          title="continue exploring"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, placeat!"
        >
          <Link className="btn-white" to="/tours">
            explore tours
          </Link>
        </BannerContent>
      </HeroBanner>
      <AboutSection />
      <ServicesSection />
    </Layout>
  );
};

export default Home;
