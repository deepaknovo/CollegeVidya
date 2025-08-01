import React from "react";
import { Card, Button } from "react-bootstrap";
import { Box, Typography, Chip, Avatar } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

function AdVideoCard() {
  return (
    <Card style={{ marginBottom: 20, borderRadius: 14, boxShadow: "0 2px 12px #e2e8f0" }}>
      <Card.Body style={{ padding: 18 }}>
        <Typography variant="subtitle2" fontWeight={700} gutterBottom>
          Moment of Truth – Success Stories
        </Typography>
        <Box position="relative" mb={1}>
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Success Story"
            style={{
              width: "100%",
              borderRadius: 10,
              objectFit: "cover",
              aspectRatio: "4/2"
            }}
          />
          <Box
            position="absolute"
            top="50%"
            left="50%"
            style={{
              transform: "translate(-50%,-50%)",
              background: "#fff",
              borderRadius: "50%"
            }}
          >
            <PlayCircleFilledWhiteIcon style={{ fontSize: 54, color: "#3182ce" }} />
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" gap={1} mt={2}>
          <Chip label="1" color="primary" size="small" />
          <Chip label="2" variant="outlined" size="small" />
        </Box>
      </Card.Body>
    </Card>
  );
}

function AdNewsCard() {
  return (
    <Card style={{ marginBottom: 20, borderRadius: 14, boxShadow: "0 2px 12px #e2e8f0" }}>
      <Card.Body style={{ padding: 18 }}>
        <Box display="flex" alignItems="center" mb={1}>
          <Chip
            label="CV In News"
            size="small"
            sx={{
              bgcolor: "#ffdbdb",
              color: "#e53935",
              fontWeight: 700,
              fontSize: 11,
              borderRadius: 1,
              mr: 1
            }}
          />
          <Typography variant="subtitle2" fontWeight={700} color="#d32f2f">
            Outlook
          </Typography>
        </Box>
        <Typography fontWeight={700} fontSize={15} mb={1.5}>
          CV Awarded the Best Advisory Platform for Online Education by Outlook.
        </Typography>
        <Button
          variant="outline-primary"
          size="sm"
          style={{
            fontWeight: 600,
            fontSize: 13,
            borderRadius: 20
          }}
        >
          Read More &gt;
        </Button>
      </Card.Body>
    </Card>
  );
}

function AdWhyTrustCard() {
  return (
    <Card style={{ borderRadius: 14, boxShadow: "0 2px 12px #e2e8f0" }}>
      <Card.Body style={{ padding: 18 }}>
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar
            src="https://cdn.pixabay.com/photo/2017/01/31/13/05/robot-2027195_1280.png"
            sx={{ width: 32, height: 32, mr: 1 }}
          />
          <Typography variant="subtitle2" fontWeight={700}>
            Why should you trust CV?
          </Typography>
        </Box>
        <ul style={{ paddingLeft: 18, fontSize: 15, marginBottom: 0 }}>
          <li>CV Placement Support</li>
          <li>Exclusive CV Telegram Community</li>
          <li>Compare 50+ Universities</li>
        </ul>
      </Card.Body>
    </Card>
  );
}

export default function RightSideAds() {
  return (
    <Box sx={{ width: 240, margin: "0" }}>
      <AdVideoCard />
      <AdNewsCard />
      <AdWhyTrustCard />
    </Box>
  );
}
