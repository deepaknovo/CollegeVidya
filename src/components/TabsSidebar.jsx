import React from 'react';
import { Drawer, Tabs, Tab, Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const TabsSidebar = ({ open, onClose, uni }) => (
    <Drawer anchor="right" open={open} onClose={onClose}>
        <Box sx={{ width: 800, p: 2, overflow: 'auto', }}>
            <div className='d-flex justify-content-between mb-2'>
                <div>Hello</div>
                <div><CloseIcon onClick={onClose}/></div>
            </div>
            <Tabs value={uni.tab} onChange={(e, v) => uni.setTab(v)} className='d-flex'
                sx={{ backgroundColor: 'rgba(135, 206, 250, 0.1)', overflow: 'auto', }}
            >
                <Tab label="Know University" sx={{ py: 0.5, px: 1 }} />
                <Tab label="Fees Breakup" sx={{ py: 0.5, px: 1 }} />
                <Tab label="E‑Learning Experience" sx={{ py: 0.5, px: 1 }} />
                <Tab label="Alumni Talks & Review" sx={{ py: 0.5, px: 1 }} />
                <Tab label="Placement" sx={{ py: 0.5, px: 1 }} />
            </Tabs>
            <Box sx={{ mt: 2 }}>
                <Typography>{uni.tabContent[uni.tab]}</Typography>
            </Box>
        </Box>
    </Drawer>
);

export default TabsSidebar;
