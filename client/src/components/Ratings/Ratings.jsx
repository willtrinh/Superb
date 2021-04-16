import React from 'react';
import Breakdown from './Breakdown';
import ReviewsList from './ReviewsList';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // property: true,
    };
  }

  render() {
    return (
      <div id="ratings-reviews">
        <h2>Ratings</h2>
        <div id="breakdown">
          <Breakdown />
        </div>
        <div id="reviews-list">
          ReviewsList
          <ReviewsList />
        </div>
      </div>
    );
  }
}

export default Ratings;
