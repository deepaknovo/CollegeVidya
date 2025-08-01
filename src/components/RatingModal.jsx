import React from 'react';

const RatingModal = ({ show, onHide }) => (
  <div className={`modal fade${show ? ' show d-block' : ''}`} tabIndex="-1" style={{ background: 'rgba(0,0,0,0.5)' }}>
    <div className="modal-dialog modal-lg modal-dialog-centered">
      <div className="modal-content" style={{ borderRadius: 18 }}>
        <div className="modal-body p-4" style={{ maxHeight: "80vh", overflowY: "auto" }}>
          {/* Close */}
          <button type="button" className="btn-close position-absolute end-0 m-3" onClick={onHide} aria-label="Close"></button>
          {/* Title */}
          <div className="mb-3 fw-bold fs-5">Top Reviews from Students</div>
          <div className="row">
            {/* LEFT: Ratings Summary */}
            <div className="col-md-4 border-end">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/25/Manipal_Academy_of_Higher_Education_logo.png" alt="Manipal" style={{width: 120, marginBottom: 10}}/>
              <div className="fw-bold mb-2">Student Reviews</div>
              <div className="text-muted mb-3" style={{ fontSize: 13 }}>46 Global Reviews</div>
              <div>
                {[
                  { stars: 5, percent: 71.7 },
                  { stars: 4, percent: 21.7 },
                  { stars: 3, percent: 6.5 },
                  { stars: 2, percent: 0 },
                  { stars: 1, percent: 0 },
                ].map((r, i) => (
                  <div className="d-flex align-items-center mb-2" key={r.stars}>
                    <span style={{ width: 34 }}>{r.stars} Star</span>
                    <div className="progress flex-grow-1 mx-2" style={{ height: 8, background: "#e9ecef" }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${r.percent}%`,
                          background: r.stars >= 4 ? "#ffc72c" : "#d3d3d3"
                        }}
                        aria-valuenow={r.percent}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span style={{ width: 44, fontSize: 13, color: "#7c7c7c" }}>{r.percent}%</span>
                  </div>
                ))}
              </div>
              <div className="my-2">
                <a href="#" className="fw-bold" style={{ fontSize: 13, color: "#0063e5" }}>
                  + How are ratings calculated?
                </a>
              </div>
              <hr />
              <div className="mb-2 fw-bold" style={{ fontSize: 15 }}>Review this university</div>
              <div className="mb-3" style={{ fontSize: 13, color: "#7c7c7c" }}>
                Share your thoughts with other students
              </div>
              <button className="btn btn-danger w-100" style={{ background: "#ff5c37", border: 0, borderRadius: 7, fontWeight: 600 }}>
                Write a review
              </button>
            </div>
            {/* RIGHT: Reviews */}
            <div className="col-md-8 ps-md-4">
              {[{
                user: "Suhas J",
                initials: "SJ",
                stars: 5,
                degree: "MBA in Finance",
                date: "Jul 22, 2025",
                review: "Just got Final Level Approval from College today in my dashboard as well as a Mail from them. Admission process was smooth and Hassle free! Thanks to MAHE online Support team also. Big thanks to College Vidya team !",
              }, {
                user: "Samyak Jain",
                initials: "SJ",
                stars: 5,
                degree: "MBA in Finance",
                date: "Jul 18, 2025",
                review: "A Recognised University with excellent faculties with good placement opportunities. The multicultural environment help students to grow socially and professionally. Overall, Manipal University is a great choice.",
              }].map((r, i) => (
                <div className="mb-4 pb-2 border-bottom" key={i}>
                  <div className="d-flex align-items-center mb-1">
                    <div className="rounded-circle bg-light d-flex align-items-center justify-content-center me-2"
                      style={{ width: 38, height: 38, fontWeight: 700, color: "#4c9b88", fontSize: 17 }}>
                      {r.initials}
                    </div>
                    <div>
                      <span className="fw-bold">{r.user}</span>
                      <div>
                        {Array.from({ length: r.stars }).map((_, i) =>
                          <span key={i} style={{ color: "#ffc72c", fontSize: 16, marginRight: 2 }}>★</span>
                        )}
                      </div>
                      <div className="fw-bold" style={{ fontSize: 14 }}>{r.degree}</div>
                    </div>
                    <div className="ms-auto text-end text-muted" style={{ fontSize: 13 }}>
                      Reviewed on {r.date}
                    </div>
                  </div>
                  <div className="mb-2" style={{ fontSize: 14 }}>{r.review}</div>
                  <div className="d-flex align-items-center gap-3 mb-1">
                    <button className="btn btn-light btn-sm me-1 border" style={{ fontSize: 13 }}>Helpful</button>
                    <span className="text-muted" style={{ fontSize: 13, cursor: "pointer" }}>Report</span>
                    <span className="text-primary" style={{ fontSize: 13, cursor: "pointer" }}>Talk to Alumni</span>
                  </div>
                  <div className="text-primary" style={{ fontSize: 14, cursor: "pointer" }}>
                    <span className="me-1">↩</span>Reply
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RatingModal;