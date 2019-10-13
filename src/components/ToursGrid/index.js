import React, { Component } from 'react';

import Title from '../Title';
import TourCard from '../TourCard';

import styles from './styles.module.css';

export default class ToursGrid extends Component {
  state = {
    tours: [],
    sortedTours: [],
  };

  componentDidMount() {
    this.setState({
      tours: this.props.tours,
      sortedTours: this.props.tours,
    });
  }

  render() {
    const { sortedTours } = this.state;

    return (
      <section className={styles.tours}>
        <Title title="our" subtitle="tours" />
        <div className={styles.center}>
          {sortedTours.map(({ node: tour }) => (
            <TourCard tour={tour} key={tour.contentful_id} />
          ))}
        </div>
      </section>
    );
  }
}
