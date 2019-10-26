import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const GET_META = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDescription: description
        author
        siteUrl
        image
      }
    }
  }
`;

const SEO = ({ title, description }) => {
  const {
    site: {
      siteMetadata: { siteTitle, siteDescription, author, siteUrl, image },
    },
  } = useStaticQuery(GET_META);
  const titleValue = title ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <Helmet htmlAttributes={{ lang: 'en' }} title={titleValue}>
      <meta name="description" content={description || siteDescription}></meta>
      <meta name="image" content={image} />
      {/* facebook cards */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={`${siteUrl}/${image}`} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
      {/* twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={`${siteUrl}/${image}`} />
    </Helmet>
  );
};

export default SEO;
