// Sarthak component with "Online Degree Programs are Equivalent..." section

import React from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './styles.css'
import AdvisorModal from "./AdvisorModal";
import SarthakImg from '../assets/wallpaperflare.com_wallpaper (1).jpg';

const SarthakComponent = () => (
    <div>
        <div className="d-flex align-items-center bg-white shadow-sm rounded px-4 py-3">
            {/* Sarthak Avatar */}
            <img
                src={SarthakImg}
                alt="Sarthak Avatar"
                style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    border: "2px solid #fff",
                    boxShadow: "0 0 0 2px #2ecc71"
                }}
                className="me-3"
            />
            {/* Greeting and info */}
            <span>
                <span className="fw-semibold text-warning">Hello Sarthak Garg,</span>
                <span className="ms-2 text-dark">
                    Great news! Special offers for <b>Online MBA</b>, upto <b>₹20,000</b> Subsidy Cashback Available* and <a href="#" className="text-primary fw-semibold">EMI Plans from ₹4999</a>
                </span>
            </span>
        </div>
        <div className="d-flex align-items-center justify-content-center rounded py-1 px-3 mb-3 mx-2" style={{ fontSize: "0.78rem", fontWeight: 500, background:"#ddd" }}>
            <span className="me-2" style={{ fontSize: "1.3rem" }}>⚡</span>
            <span>Online Degree Programs are Equivalent to Regular Degree (Campus Programs)</span>
        </div>
    </div>
);

const KnowYourAdvisorButton = ({setShowAdv}) => {
    
    return (
    <>
    <div onClick={() => setShowAdv(true)} className="advisor-bt mb-md-3 d-flex align-items-center justify-content-between w-100 py-3 px-3">
        <div>
            <div className="advisor">Know Your Advisor</div>
            <div className="asisst">Assisted 1800+ Students</div>
        </div>
        <div><KeyboardArrowRightIcon /></div>
    </div>
    </>
)};

const Sarthak = () => {
    const [showAdv, setShowAdv] = React.useState(false);
    return (
    <div className="d-block d-md-flex align-items-start justify-content-between gap-3 w-100">
        <div style={{ flexBasis: "75%" }}>
            <SarthakComponent />
        </div>
        <div style={{ flexBasis: "25%" }}>
            <KnowYourAdvisorButton setShowAdv={setShowAdv} />
        </div>
        <AdvisorModal show={showAdv} handleClose={() => setShowAdv(false)} />
    </div>
)};


export default Sarthak;
