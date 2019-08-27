import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ReviewsCard from './ReviewsCard';

export default function ReviewList() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get('https://lambda-bookr.herokuapp.com/api/reviews/')
      .then(response => {
        setReviews(response.data);
        console.log(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <section className="grid-view">
      {reviews.map(review => {
        return <ReviewsCard review={review} key={review.id} />;
      })}
    </section>
  );
}
