import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const RatingModal = ({ show, onHide }) => {
  const [stars, setStars] = useState(5);
  const [comment, setComment] = useState('');

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton><Modal.Title>Rating & Review</Modal.Title></Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Stars</Form.Label>
            <Form.Control as="select" value={stars} onChange={e=>setStars(e.target.value)}>
              {[5,4,3,2,1].map(n => <option key={n} value={n}>{n} Star</option>)}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Comment</Form.Label>
            <Form.Control as="textarea" rows={3} value={comment} onChange={e=>setComment(e.target.value)} />
          </Form.Group>
          <Button className="mt-3" onClick={() => onHide()}>Submit</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RatingModal;
