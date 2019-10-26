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

      posts: allContentfulPost {
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
    reporter.panicOnBuild(`Error while building pages.`);
    return;
  }

  // Create pages
  const tourDetailPageTemplate = path.resolve(
    `src/templates/TourDetailPage/index.js`
  );
  const blogDetailPageTemplate = path.resolve(
    `src/templates/BlogDetailPage/index.js`
  );
  const blogPaginatedPageTemplate = path.resolve(
    `src/templates/BlogsPaginatedPage/index.js`
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

  result.data.posts.edges.forEach(({ node: { slug } }) => {
    createPage({
      path: `blog/${slug}`,
      component: blogDetailPageTemplate,
      context: {
        slug,
      },
    });
  });

  const numberOfBlogPosts = result.data.posts.edges.length;
  const postsPerPage = 5;
  const numberOfPages = Math.ceil(numberOfBlogPosts / postsPerPage);

  for (let i = 0; i < numberOfPages; i += 1) {
    createPage({
      path: i === 0 ? 'blogs' : `blogs/${i + 1}`,
      component: blogPaginatedPageTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
        numberOfPages,
      },
    });
  }
};
