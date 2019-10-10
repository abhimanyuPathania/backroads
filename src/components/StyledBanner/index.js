import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

const StyledBanner = ({ children, img, className, home, ...otherProps }) => {
  return (
    <BackgroundImage className={className} fluid={img} {...otherProps}>
      {children}
    </BackgroundImage>
  );
};

export default styled(StyledBanner)`
  min-height: ${({ home }) => (home ? 'calc(100vh - 62px);' : '50vh')};
  background: ${({ home }) =>
    home
      ? 'linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))'
      : 'none'};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;
