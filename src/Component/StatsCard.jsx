import React from 'react';
import { Card } from 'react-bootstrap';
import "./statsCard.css"; 

const StatsCard = ({ title, value }) => {
  return (
    <Card className="p-3 text-center">
      <h5>{title}</h5>
      <h3>{value}</h3>
      <small>{date}</small>
    </Card>
  );
};

export default StatsCard;
