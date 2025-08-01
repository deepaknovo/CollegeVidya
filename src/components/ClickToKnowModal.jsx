import React from 'react';

const ClickToKnowModal = ({ show, onHide }) => (
  <div className={`modal fade${show ? ' show d-block' : ''}`} tabIndex="-1" style={{ background: 'rgba(0,0,0,0.5)' }}>
    <div className="modal-dialog modal-dialog-centered" style={{ minWidth: 600, maxWidth: 700 }}>
      <div className="modal-content" style={{ borderRadius: 16 }}>
        <div className="modal-body px-4 py-3 position-relative">
          {/* Close button */}
          <button type="button" className="btn-close position-absolute end-0 mt-2 me-2" onClick={onHide} aria-label="Close"></button>
          {/* Header */}
          <div className="text-center mb-4 mt-2">
            <span className="fw-bold fs-5">
              Check out these must-have approvals to secure your future
            </span>
            <span style={{
              display: 'inline-block',
              verticalAlign: 'middle',
              marginLeft: 8,
              width: 25,
              height: 25,
              background: 'linear-gradient(135deg, #f00, #fc0)',
              borderRadius: '50%',
              position: 'relative'
            }}>
              <span style={{
                display: 'block',
                width: 25,
                height: 25,
                borderRadius: '50%',
                background: '#fff',
                border: '2.5px solid #f00',
                boxSizing: 'border-box',
                position: 'absolute',
                top: 0,
                left: 0
              }}>
                <svg width="14" height="14" style={{ position: 'absolute', top: 4.5, left: 7 }} viewBox="0 0 20 20">
                  <circle cx="7" cy="7" r="7" fill="#fff" />
                  <polygon points="7,4 12,7 7,10" fill="#f00"/>
                </svg>
              </span>
            </span>
          </div>
          {/* UGC Card */}
          <div className="bg-white p-3 mb-3" style={{ border: "1px solid #e5e7eb", borderRadius: 8 }}>
            <div className="d-flex align-items-center mb-2">
              <img src="https://upload.wikimedia.org/wikipedia/en/9/9e/Ugc_india_logo.png" alt="UGC" style={{ width: 60, marginRight: 16 }} />
              <div>
                <div className="fw-bold">UGC (University Grants Commission)</div>
              </div>
            </div>
            <ul className="mb-0" style={{ fontSize: 15 }}>
              <li>UGC is a statutory body set up by the Ministry of Education, Government of India.</li>
              <li>UGC is responsible for maintaining the standards of Higher Education in India.</li>
              <li>UGC approval helps in identifying fake from authentic universities.</li>
              <li>UGC approval is a must. Without this, your degree is not valid.</li>
            </ul>
          </div>
          {/* DEB Card */}
          <div className="bg-white p-3" style={{ border: "1px solid #e5e7eb", borderRadius: 8 }}>
            <div className="d-flex align-items-center">
              <img src="https://www.ugc.ac.in/deb/images/ugcdeb.png" alt="DEB" style={{ width: 60, marginRight: 16 }} />
              <div>
                <div className="fw-bold">DEB (Distance Education Bureau)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ClickToKnowModal;
