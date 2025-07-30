import React from 'react';
import { Modal, Card, Row, Col } from 'react-bootstrap';

const ClickToKnowModal = ({ show, onHide, uni }) => (
  <Modal show={show} onHide={onHide} size="lg">
    <Modal.Header closeButton>
      <Modal.Title>Know University – {uni.name}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Row>
        {uni.details.map((d, i) => (
          <Col md={4} key={i}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{d.title}</Card.Title>
                <Card.Text>{d.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Modal.Body>
  </Modal>
);

export default ClickToKnowModal;
