// CompareCard.js
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddIcon from "@mui/icons-material/Add";

export function SelectedCompareCard() {
  return (
    <Box sx={{
      border: "1.5px solid #e5e7eb",
      borderRadius: 7,
      width: 235,
      minHeight: 126,
      position: "relative",
      p: 2,
      mr: 2,
      bgcolor: "#fff"
    }}>
      {/* Badge */}
      <Box sx={{
        position: "absolute",
        left: 12,
        top: 8,
        bgcolor: "#fff0f0",
        color: "#ff6556",
        px: 1,
        py: "1px",
        fontSize: 13,
        borderRadius: 2,
        fontWeight: 700
      }}>
        32373
      </Box>
      {/* Check */}
      <CheckCircleIcon sx={{
        position: "absolute",
        right: 12,
        top: 8,
        color: "#2563eb",
        fontSize: 22
      }} />
      {/* Logo */}
      <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
        <img
          alt="MANIPAL"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Manipal_Academy_of_Higher_Education_logo.png/1200px-Manipal_Academy_of_Higher_Education_logo.png"
          style={{ width: 44, height: 44, objectFit: "contain", marginRight: 10 }}
        />
        <Box>
          <Typography fontWeight={700} fontSize={15} color="#343434">MANIPAL</Typography>
          <Typography fontSize={13}>MAHE Manipal Online</Typography>
        </Box>
      </Box>
      <Typography fontWeight={700} fontSize={16} color="#1c3c6b" mt={2}>
        ₹73,000<small style={{ fontSize: 13, color: "#808080" }}>/Sem</small>
      </Typography>
      <Box sx={{
        display: "flex", alignItems: "center", mt: 1, bgcolor: "#fff7ec", px: 1, borderRadius: 1, width: "fit-content"
      }}>
        <Typography fontSize={15} color="#ff9800" fontWeight={700}>4.6</Typography>
        <Typography fontSize={13} color="#f87d09" ml={1}>(Reviews)</Typography>
      </Box>
    </Box>
  );
}

export function EmptyCompareCard() {
  return (
    <Box sx={{
      border: "1.5px dashed #d1d5db",
      borderRadius: 7,
      width: 235,
      minHeight: 126,
      p: 2,
      mr: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      bgcolor: "#fafbfc"
    }}>
      <AddIcon sx={{ color: "#c3c8cf", fontSize: 34, mb: 1 }} />
      <Typography fontSize={17} color="#7e8697" fontWeight={500} textAlign="center">
        Add to Compare
      </Typography>
    </Box>
  );
}
