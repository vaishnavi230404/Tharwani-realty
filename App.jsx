import React, { useState } from 'react';
import './App.css';
import Home from './home';
import Sidebar from "../src/components/html/sidebar";
import EnquiryPopup from '../src/components/html/popup'; 

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="home-container">
      <div className="main-content">
        <Home onBrochureClick={handleOpenPopup} />
      </div>
      <div className="sidebar-column">
        <Sidebar onBrochureClick={handleOpenPopup}/>
      </div>

      {/* Add the popup at the root level */}
      <EnquiryPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
}

export default App;
