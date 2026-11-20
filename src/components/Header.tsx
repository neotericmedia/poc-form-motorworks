import React from 'react';
import '../styles/header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">FORME</h1>
        <p className="header-subtitle">Custom Motorcycle Builder</p>
      </div>
    </header>
  );
};

export default Header;
