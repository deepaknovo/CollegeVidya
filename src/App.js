import React, { useState } from 'react';
import Header from './components/Header';
import UniversityCard from './components/UniversityCard';
import TabsSidebar from './components/TabsSidebar';
import CompareToast from './components/CompareToast';
// import birchwoodLogo from './assets/birchwood-logo.png';
// import nmimsLogo from './assets/nmims-logo.png';

const DATA = [
  {
    name: 'Birchwood University Online',
    logo: 'birchwoodLogo',
    approvals: 'WES | CIE | FAPSC | CECU',
    rating: 4.8, reviews: 837,
    details: [
      { title: '100% online', text: 'Virtual campus; digital course material' },
      { title: 'Global University', text: 'Florida‑based accreditation' }
    ],
    tabContent: [
      'About Birchwood University...',
      'Fees ₹4,03,211 (Full Fee)',
      'E‑Learning Experience details...',
      'Alumni talks & review content...',
      'Placement stats & partner companies...'
    ]
  },
  {
    name: 'NMIMS Online',
    logo: 'nmimsLogo',
    approvals: 'UGC‑DEB | NIRF | NAAC A+',
    rating: 4.7, reviews: 485,
    details: [
      { title: '1,25,000+ Students', text: 'Large active community' },
      { title: '22,500+ Alumni', text: 'Strong global network' }
    ],
    tabContent: [
      'About NMIMS Online...',
      'Fees ₹55,000 / Sem',
      'E‑Learning Experience details...',
      'Alumni talks & review content...',
      'Placement stats & partner companies...'
    ]
  }
];

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarUni, setSidebarUni] = useState(null);
  const [compareList, setCompareList] = useState([]);
  const [toastShow, setToastShow] = useState(false);

  const openSidebar = uni => {
    setSidebarUni({ ...uni, tab: 0, setTab: v => setSidebarUni(u => ({ ...u, tab: v })) });
    setSidebarOpen(true);
  };

  const addCompare = uni => {
    if (compareList.find(u => u.name === uni.name)) return;
    setCompareList([...compareList, uni]);
    setToastShow(true);
  };

  return (<>
    <Header />
    <div className="container mt-3">
      <div className="row sticky-header fw-bold border-bottom pb-2">
        <div className="col">University</div>
        <div className="col">Approvals</div>
        <div className="col">Student Choice</div>
        <div className="col">Student Rating</div>
        <div className="col">Fee and offers</div>
        <div className="col">Available Experts</div>
      </div>
      <div className="row">
        <div className="col-md-9">
          {DATA.map((uni, i) => (
            <UniversityCard
              key={i}
              uni={uni}
              onOpenSidebar={() => openSidebar(uni)}
              onAdd={() => addCompare(uni)}
            />
          ))}
        </div>
        <div className="col-md-3 desktop-ads">
          <div style={{ border: '1px solid #ccc', padding: '10px' }}>Ad Placeholder</div>
        </div>
      </div>
    </div>

    <div className="mobile-ads">Mobile Ad Placeholder</div>

    <TabsSidebar
      open={sidebarOpen}
      onClose={() => setSidebarOpen(false)}
      uni={sidebarUni || { tab: 0, setTab: () => {}, tabContent: [] }}
    />

    <CompareToast show={toastShow} onHide={() => setToastShow(false)} selected={compareList} />
  </>);
}

export default App;