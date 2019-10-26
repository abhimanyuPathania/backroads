import React from 'react';

import Layout from '../components/Layout';
import Error404 from '../components/Error404';
import SEO from '../components/SEO';

const Page404 = () => {
  return (
    <Layout>
      <SEO title="Error" />
      <Error404 />
    </Layout>
  );
};

export default Page404;
