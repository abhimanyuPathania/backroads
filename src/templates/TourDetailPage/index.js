import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { FaMoneyBillWave, FaMap } from 'react-icons/fa';

import Layout from '../../components/Layout';
import StyledBanner from '../../components/StyledBanner';
import SEO from '../../components/SEO';
import Day from '../../views/Tours/Day';

import styles from './styles.module.css';

const TourDetailPage = ({ data }) => {
  const {
    tour: {
      name,
      days,
      price,
      start,
      description: { description },
      images,
      journey,
      country,
    },
  } = data;
  const [mainImage, ...otherImages] = images;

  return (
    <Layout>
      <SEO title={name} />
      <StyledBanner img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {otherImages.slice(0, 3).map((image, index) => (
              <Img fluid={image.fluid} className={styles.image} key={index} />
            ))}
          </div>

          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} /> starting from ${price}
            </p>
            <p>
              <FaMap className={styles.icon} />
              {country}
            </p>
          </div>
          <h4>starts on: {start}</h4>
          <h4>duration: {days} days</h4>
          <p className={styles.description}>{description}</p>
          <h2>daily schedule</h2>
          <div className={styles.journey}>
            {journey.map((item, index) => (
              <Day key={index} day={item.day} info={item.info} />
            ))}
          </div>
          <Link to="/tours" className="btn-primary">
            back to tours
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query getTour($slug: String) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      slug
      price
      days
      country
      start(formatString: "dddd MMMM Do, YYYY")
      contentful_id
      description {
        description
      }
      journey {
        day
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;

export default TourDetailPage;
