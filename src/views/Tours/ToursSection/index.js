import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import ToursGrid from '../../../components/ToursGrid';

const GET_TOURS = graphql`
  {
    allTours: allContentfulTour {
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
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

const ToursSection = () => {
  const {
    allTours: { edges: tours },
  } = useStaticQuery(GET_TOURS);

  return <ToursGrid tours={tours} />;
};

export default ToursSection;
