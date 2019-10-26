import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import classnames from 'classnames';

const Pagination = props => {
  const { currentPage, numberOfPages, getURL, className } = props;

  return (
    <div className={className}>
      {Array.from({ length: numberOfPages }, (_, i) => {
        return (
          <Link
            key={i}
            to={getURL({ page: i })}
            className={classnames('link', { active: currentPage === i + 1 })}
          >
            {i + 1}
          </Link>
        );
      })}
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  numberOfPages: PropTypes.number.isRequired,
  getURL: PropTypes.func.isRequired,
};

export default styled(Pagination)`
  display: flex;

  .link {
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing);
    background: var(--primaryColor);
    color: var(--mainWhite);
    border: 2px solid var(--primaryColor);
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
    transition: var(--mainTransition);
    cursor: pointer;
    margin-right: 0.5rem;
  }

  .link:hover {
    background: transparent;
    color: var(--primaryColor);
  }
  .link.active {
    background: var(--mainWhite);
    color: var(--primaryColor);
  }
`;
