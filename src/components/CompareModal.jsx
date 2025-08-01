import React from "react";
import { Modal, Fade, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { SelectedCompareCard, EmptyCompareCard } from "./CompareCard";
import { Button, Typography } from "@mui/material";

const style = {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100vw",
    bgcolor: "#fff",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    boxShadow: 24,
    p: 3,
    outline: "none",
    minHeight: "220px",
    transition: "transform 1s cubic-bezier(0.42,0,0.58,1)"
};

export default function CompareBottomModal({ open, handleClose }) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slotProps={{
                backdrop: {
                    style: { backgroundColor: "rgba(0,0,0,0.15)" }
                }
            }}
        >
            <Fade in={open} timeout={1000}>
                <Box sx={style}>
                    <IconButton
                        onClick={handleClose}
                        sx={{ position: "absolute", top: 14, right: 16 }}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 2 }}>
                        <SelectedCompareCard />
                        <EmptyCompareCard />
                        <EmptyCompareCard />
                        <Button
                            variant="contained"
                            sx={{
                                ml: 2,
                                bgcolor: "#ff6433",
                                fontWeight: 600,
                                fontSize: 16,
                                px: 4,
                                py: 2,
                                borderRadius: 2,
                                textTransform: "none",
                                minWidth: 150,
                                "&:hover": { bgcolor: "#ff471a" }
                            }}
                        >
                            Compare Now
                        </Button>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
}
