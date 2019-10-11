import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Title from '../../../components/Title';
import TourCard from '../../../components/TourCard';

import styles from './styles.module.css';

const FEATURED_TOURS = graphql`
  {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
      edges {
        node {
          contentful_id
          slug
          name
          country
          price
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

const FeaturedTours = () => {
  const {
    featuredTours: { edges: tours },
  } = useStaticQuery(FEATURED_TOURS);

  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="tours" />
      <div className={styles.center}>
        {tours.map(({ node }) => (
          <TourCard key={node.contentful_id} tour={node} />
        ))}
      </div>
      <Link to="/tours" className="btn-primary">
        all tours
      </Link>
    </section>
  );
};

export default FeaturedTours;
