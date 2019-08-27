import React from 'react';
import { Card, Icon, Divider } from 'semantic-ui-react';
import ReviewsList from './ReviewsList';

import './ReviewsCard.css';

export default function ReviewsCard(props) {
  {
    console.log(props);
  }
  return (
    <Card className="body-width">
      <Card.Content header={props.review.title} />
      <Card.Content>Username: {props.review.username}</Card.Content>
      <Card.Content>Rating: {props.review.rating}</Card.Content>
      <Card.Content>Comments: {props.review.comment}</Card.Content>
    </Card>
  );
}
