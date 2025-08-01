import React, { useState } from 'react';
import Header from './components/Header';
import UniversityCard from './components/UniversityCard';
import TabsSidebar from './components/TabsSidebar';
import CompareToast from './components/CompareToast';
import Sarthak from './components/Sarthak';
import RightSideAds from './components/AddCards';
// import birchwoodLogo from './assets/birchwood-logo.png';
// import nmimsLogo from './assets/nmims-logo.png';
import './styles.css'

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
  },
  {
    name: 'ABS Online',
    logo: 'nmimsLogo',
    approvals: 'UGC‑DEB | NIRF | NAAC A+',
    rating: 4.3, reviews: 985,
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
  },
  {
    name: 'Galgotias University Online',
    logo: 'abcUniLogo',
    approvals: 'UGC‑DEB | AICTE | NAAC A++',
    rating: 4.6,
    reviews: 1342,
    details: [
      { title: '1,50,000+ Students', text: 'Vibrant student community' },
      { title: '30,000+ Alumni', text: 'Global career reach' }
    ],
    tabContent: [
      'About ABC University Online and its legacy...',
      'Fees ₹60,000 / Sem with flexible payment plans',
      'Advanced E‑Learning with live sessions and AI tutors',
      'Student success stories and alumni journeys',
      'Top placements with 250+ hiring partners'
    ]
  },
  {
    name: 'Amity University Online',
    logo: 'amityLogo',
    approvals: 'UGC‑DEB | WES | NAAC A+',
    rating: 4.4,
    reviews: 1178,
    details: [
      { title: '2,00,000+ Students', text: 'Pan-India and global presence' },
      { title: '40,000+ Alumni', text: 'Strong industry connections' }
    ],
    tabContent: [
      'About Amity Online and its global accreditation...',
      'Fees ₹65,000 / Sem with EMI options available',
      'Immersive digital classrooms and mentorship support',
      'Alumni testimonials and inspiring career shifts',
      'Placement tie-ups with MNCs and startups alike'
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
    <div className='enrty'>
      <Header />
      <div className="px-2 px-md-5 mt-3">
        <Sarthak />
        <div className="row">
          <div className="col-md-9">
            <div className="row sticky-header px-3 gap-1 pb-2">
              <div className="col sticky-head-content">University</div>
              <div className="col sticky-head-content">Approvals</div>
              <div className="col sticky-head-content">Student Choice</div>
              <div className="col sticky-head-content">Student Rating</div>
              <div className="col sticky-head-content">Fee and offers</div>
              <div className="col sticky-head-content">Available Experts</div>
            </div>
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
            <div style={{ border: '1px solid #ccc', padding: '2px' }}><RightSideAds /></div>
          </div>
        </div>
      </div>

      <div className="mobile-ads"><RightSideAds /></div>

      <TabsSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        uni={sidebarUni || { tab: 0, setTab: () => { }, tabContent: [] }}
      />
      <CompareToast show={toastShow} onHide={() => setToastShow(false)} selected={compareList} />
    </div>
  </>);
}

export default App;