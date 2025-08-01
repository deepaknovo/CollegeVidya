import React, { useState } from 'react';
import { Card, Button, Row, Col, Badge } from 'react-bootstrap';
import { Star, Info } from '@mui/icons-material';
import ClickToKnowModal from './ClickToKnowModal';
import RatingModal from './RatingModal';
import './styles.css'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import CompareBottomModal from './CompareModal';
import Expert from '../assets/IMG_0181.jpg';

const dividerClass = "border-end border-2";

const UniversityCard = ({ uni, onOpenSidebar, onAdd }) => {
  const [showKnow, setShowKnow] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [comparemdl, setcomparemdl] = useState(false);

  return (
    <Card className="mb-4 shadow-sm rounded">
      <Card.Body style={{ padding: 0 }}>
        <Row className="align-items-center text-center">
          {/* University Info */}
          <Col className={`${dividerClass}`}>
            <div>
              <Badge bg={uni.trusted ? "primary" : "danger"} className="mt-0">
                {uni.trusted ? "CV Trusted" : "Powered by upGrad"}
              </Badge>
              {/* <div className="Bdg">
                {uni.trusted ? "CV Trusted" : "Powered by upGrad"}
              </div> */}
            </div>
            <div style={{ cursor: 'pointer' }} onClick={() => onOpenSidebar(uni)}> <strong>{uni.name}</strong></div>
            {/* <img src={uni.logo} alt={uni.name} width="50" /> */}
          </Col>

          {/* Main Details */}
          <Col className={dividerClass}>
            <div className='clicktoknowbtn' onClick={() => setShowKnow(true)}><span className="clicktoknowtxt">Click to know &gt;</span></div>
            <div >
              <div>
                <small>{uni.approvals}</small>
              </div>
              {/* <Button
                variant="link"
                className="p-0 text-decoration-none"
                onClick={() => setShowKnow(true)}
              >
                <Info fontSize="small" /> Click to know &gt;
              </Button> */}
            </div>
          </Col>

          {/* Student Choice */}
          <Col className={dividerClass}>
            <Box position="relative" display="inline-flex">
              <CircularProgress
                variant="determinate"
                value={36}
                size={48}
                thickness={4}
                sx={{
                  color: '#3cb371',
                  backgroundColor: '#f2f3f8',
                  borderRadius: '50%',
                }}
              />
              <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%"
                height="100%"
              >
                <span style={{ color: '#3cb371', fontWeight: 600, fontSize: 16 }}>36%</span>
              </Box>
            </Box>
          </Col>

          {/* Rating */}
          <Col className={dividerClass}>
            <div onClick={() => setShowRating(true)}>
              <Star fontSize="small" htmlColor="#f7b500" />
              <span style={{ fontWeight: 600 }}>{uni.rating}/5</span>
              <div style={{ fontSize: 12, color: '#999' }}>
                {uni.reviews} reviews
              </div>
            </div>
          </Col>

          {/* Fee & Apply */}
          <Col className={dividerClass}>
            <div>
              <Button onClick={() => onOpenSidebar(uni)} size="sm" className="mb-1" style={{ fontWeight: 600, backgroundColor: "#f75d34" }}>
                73000* / sem
              </Button>
            </div>
          </Col>

          {/* Expert/Contact */}
          <Col >
            <div>
              <img src={Expert} alt="Expert" width="36" className="rounded-circle mb-1" />
              <div style={{ fontSize: 11 }}>
                <a href={uni.expertLink}>Talk to our expert</a>
              </div>
            </div>
          </Col>
        </Row>

        {/* Add to Compare Section */}
        <Row className="pt-3 mt-3 border-top">
          <Col>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span style={{ color: '#28a745', fontSize: 13 }}>No Cat Exam Requirement included </span>
                {uni.extraInfo && <span style={{ color: '#007bff', marginLeft: 12 }}>Emi start at rupee 11,600/month </span>}
              </div>
              <Button variant="primary" size="sm" onClick={() => setcomparemdl(true)} >
                Add to compare
              </Button>
            </div>
          </Col>
        </Row>
      </Card.Body>
      <ClickToKnowModal show={showKnow} onHide={() => setShowKnow(false)} uni={uni} />
      <RatingModal show={showRating} onHide={() => setShowRating(false)} />
      <CompareBottomModal open={comparemdl} handleClose={() => setcomparemdl(false)} />
    </Card>
  );
};

export default UniversityCard;
