import React from 'react';

import Navbar from '../Navbar';
import Footer from '../Footer';
import SEO from '../SEO';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
