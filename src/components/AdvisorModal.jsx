import React from "react";
import { Modal, Button } from "react-bootstrap";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function AdvisorModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body style={{ padding: 32, borderRadius: 16 }}>
        <div style={{ textAlign: "center" }}>
          {/* Replace with actual advisor group image */}
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Advisor"
            style={{ width: 48, height: 48, borderRadius: "50%", marginBottom: 8 }}
          />
          <div style={{ fontWeight: 600, marginTop: 8, fontSize: 16 }}>
            Know Your Advisor
          </div>
          <Button
            variant="link"
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              fontSize: 20,
              color: "#000",
              textDecoration: "none",
              padding: 0
            }}
            onClick={handleClose}
            aria-label="Close"
          >
            &times;
          </Button>
        </div>
        <div
          style={{
            fontWeight: "bold",
            fontSize: 17,
            color: "#2563eb",
            margin: "18px 0 12px 0",
            textAlign: "center"
          }}
        >
          CV Expert who has done a PG Diploma in Career Counseling will call you shortly
        </div>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>
          Advantages of Consulting with our CV Expert :
        </div>
        <ul style={{ listStyle: "none", padding: 0, marginBottom: 28 }}>
          <li style={{ display: "flex", alignItems: "flex-start", marginBottom: 8 }}>
            <CheckCircleIcon sx={{ color: "#5CC9A7", marginRight: "8px" }} fontSize="small" />
            Helps you get the best online education provider after <b>comparing on 30+ factors</b>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", marginBottom: 8 }}>
            <CheckCircleIcon sx={{ color: "#5CC9A7", marginRight: "8px" }} fontSize="small" />
            100% unbiased & experienced counseling
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", marginBottom: 8 }}>
            <CheckCircleIcon sx={{ color: "#5CC9A7", marginRight: "8px" }} fontSize="small" />
            Get access to Free Post admission benefits & CV Community Access
          </li>
          <li style={{ display: "flex", alignItems: "flex-start" }}>
            <CheckCircleIcon sx={{ color: "#5CC9A7", marginRight: "8px" }} fontSize="small" />
            All calls are recorded.
          </li>
        </ul>
        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <Button
            variant="success"
            style={{
              borderRadius: 6,
              padding: "12px 32px",
              fontWeight: "bold",
              fontSize: 16
            }}
          >
            Whatsapp
          </Button>
          <Button
            variant="primary"
            style={{
              borderRadius: 6,
              padding: "12px 32px",
              fontWeight: "bold",
              fontSize: 16
            }}
          >
            Call me Now
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AdvisorModal;
