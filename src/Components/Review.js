import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Review() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .post('https://lambda-bookr.herokuapp.com/api/books/', {
        title: 'test post'
      })
      .then(response => {
        console.log(response);
        setReviews(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return <div>Reviews{reviews} console logged</div>;
}
