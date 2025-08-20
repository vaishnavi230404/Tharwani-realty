import React, { useState } from 'react';
import '../css/tabLayout.css'; 
import 'remixicon/fonts/remixicon.css';

const tabData = {
  Station: ["Ambernath Railway Station – 2.1 Kms", "Badlapur Railway Station – 7 Kms","Ulhasnagar Railway Station – 6 Km"],
  "School & Colleges": ["Arya Gurukul – 100 mts", "Ryan International – 1.6 Kms","Infant Jesus School – 1.5 Kms"],
  Shopping: ["D Mart – 3.7 Kms", "Reliance Smart – 200 Mts","Sawant Arcade Mall – 2.1 Kms","Mohan Galleria Shopping Mall – 5 Kms"],
  Hospitals: ["Sanjeevani Hospital – 2 Kms", "Vijay Multispecialty – 3.3 Kms","Dr. Koltes Shree Seva Hospital – 4 Kms"]
};

const getTabIcon = (tab) => {
  switch (tab) {
    case 'Station': return <i className="ri-train-line"></i>;
    case 'School & Colleges': return <i className="ri-school-line"></i>;
    case 'Shopping': return <i className="ri-shopping-bag-line"></i>;
    case 'Hospitals': return <i className="ri-hospital-line"></i>;
    default: return <i className="ri-map-pin-line"></i>;
  }
};

const TabLayout = ({ onBrochureClick }) => {
  const [activeTab, setActiveTab] = useState("Station");

  return (
    <div className="tab-wrapper">
      <div className="tab-header">
        {Object.keys(tabData).map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tab-content">
        <ul className="tab-list">
          {tabData[activeTab].map((item, idx) => (
            <li key={idx} className="tab-item">
              <span className="icon">{getTabIcon(activeTab)}</span> {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="location-button-container">
        <button className="location-button" onClick={onBrochureClick}>
          Request Location Details
        </button>
      </div>
    </div>
  );
};

export default TabLayout;
