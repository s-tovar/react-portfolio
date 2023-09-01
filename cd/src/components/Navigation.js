import React, { useState } from 'react';

function Navigation() {
  const [activeTab, setActiveTab] = useState('About Me');

  return (
    <nav>
      {['About Me', 'Portfolio', 'Contact', 'Resume'].map(tab => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={activeTab === tab ? 'active' : ''}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}

export default Navigation;
