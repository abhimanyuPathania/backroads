const path = require('path');

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Query all tours from contentful
  const result = await graphql(`
    {
      tours: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while building tour pages.`);
    return;
  }

  // Create pages for each tour.
  const tourDetailPageTemplate = path.resolve(
    `src/templates/TourDetailPage/index.js`
  );
  result.data.tours.edges.forEach(({ node: { slug } }) => {
    createPage({
      path: `tours/${slug}`,
      component: tourDetailPageTemplate,
      // In the tour detail template's graphql query, use slug
      // as a GraphQL variable to query for data from contentful.
      context: {
        slug,
      },
    });
  });
};
