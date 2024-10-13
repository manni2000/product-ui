import React from 'react';
import './Tabs.css';

function Tabs({ selectedTab, onTabClick }) {
  const tabs = ['Outdoor', 'Studio', 'With Human', 'Try On', 'Character Consistency', 'Diversity'];

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab ${selectedTab === tab ? 'active' : ''}`}
          onClick={() => onTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
