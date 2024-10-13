import React, { useState } from 'react';
import Tabs from './components/Tabs';
import ImageGallery from './components/ImageGallery';
import './App.css';

function App() {
  const [selectedTab, setSelectedTab] = useState('Outdoor');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="container">
      <h1>Bring out the beauty of your products.</h1>
      <p>As your business grows, so do the complexities of managing your operations. Genie helps you plan better, launch faster, and focus on what matters most—your customers.</p>
      <Tabs selectedTab={selectedTab} onTabClick={handleTabClick} />
      <ImageGallery />
    </div>
  );
}

export default App;