import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Star, Info } from '@mui/icons-material';
import ClickToKnowModal from './ClickToKnowModal';
import RatingModal from './RatingModal';

const UniversityCard = ({ uni, onOpenSidebar, onAdd }) => {
  const [showKnow, setShowKnow] = useState(false);
  const [showRating, setShowRating] = useState(false);

  return <>
    <Card className="mb-3">
      <Card.Body className="d-flex justify-content-between flex-column flex-md-row">
        <div style={{ cursor: 'pointer' }} onClick={() => onOpenSidebar(uni)}>
          <img src={uni.logo} alt={uni.name} width="50" className="me-2" />
          <strong>{uni.name}</strong>
          <div><small>{uni.approvals}</small></div>
          <div><Star fontSize="small" /> {uni.rating} ({uni.reviews})</div>
        </div>
        <div className="mt-2 mt-md-0 text-end">
          <Button variant="link" onClick={() => setShowKnow(true)}>
            <Info fontSize="small" /> Know University
          </Button><br/>
          <Button variant="link" onClick={() => setShowRating(true)}>
            Rating
          </Button><br/>
          <Button variant="primary" onClick={onAdd}>Add to compare</Button>
        </div>
      </Card.Body>
    </Card>
    <ClickToKnowModal show={showKnow} onHide={() => setShowKnow(false)} uni={uni} />
    <RatingModal show={showRating} onHide={() => setShowRating(false)} />
  </>;
};
export default UniversityCard;
