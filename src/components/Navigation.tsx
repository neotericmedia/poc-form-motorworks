import React from 'react';
import '../styles/navigation.css';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <div className="nav-brand">
        <h1 className="nav-brand-title">FORME</h1>
        <span className="nav-brand-subtitle">MOTORWORKS</span>
      </div>
      <div className="nav-main">
        <a href="#" className="nav-link">The motorcycles</a>
        <span className="nav-link nav-link-active">Build your own</span>
        <a href="#" className="nav-link">Our workshop</a>
      </div>
      <div className="nav-saved">
        <span className="nav-saved-text">Saved builds</span>
        <span className="nav-saved-count">(0)</span>
        <span className="nav-saved-icon">↗</span>
      </div>
    </nav>
  );
};

export default Navigation;