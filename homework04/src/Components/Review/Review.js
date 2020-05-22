import React, { Component } from "react";
import { getReviews } from "../../Helpers/movies-api";

class Reviews extends Component {
  state = {
    reviews: [],
  };
  componentDidMount() {
    getReviews(this.props.id).then((reviews) => this.setState({ reviews }));
  }
  render() {
    const { reviews } = this.state;
    return (
      <>
        {!reviews.length && <p>We don't have any reviews for this movie.</p>}
        {reviews && (
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                {review.author}
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Reviews;
