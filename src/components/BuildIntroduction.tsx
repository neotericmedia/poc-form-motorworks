import React from 'react';
import '../styles/build-introduction.css';

const BuildIntroduction: React.FC = () => {
  return (
    <section className="build-introduction">
      <div className="intro-left">
        <div className="intro-label">THE CUSTOM GARAGE</div>
        <h2 className="intro-title">Built around you.</h2>
      </div>
      <div className="intro-right">
        <h3 className="intro-subtitle">A machine with your name on it.</h3>
        <p className="intro-description">Start with a classic. Make it unmistakably yours.</p>
      </div>
    </section>
  );
};

export default BuildIntroduction;