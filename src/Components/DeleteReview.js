import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Review() {
  const [deleteReviews, setDeleteReviews] = useState([]);
  useEffect(() => {
    axios
      .post('https://lambda-bookr.herokuapp.com/api/reviews/', {
        title: 'test post'
      })
      .then(response => {
        console.log(response);
        setDeleteReviews(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return <div>Reviews console logged</div>;
}
