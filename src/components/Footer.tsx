import React from 'react';
import '../styles/footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="craft-promises">
          <span className="craft-promise">BUILT BY HAND. RIDDEN BY YOU.</span>
          <span className="craft-promise">2-year warranty</span>
          <span className="craft-promise">Worldwide delivery</span>
        </div>
        <div className="builder-support">
          <span className="support-text">A little guidance?</span>
          <a href="#" className="support-link">Talk to a builder ↗</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;