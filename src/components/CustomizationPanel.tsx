import React from 'react';
import '../styles/customization-panel.css';

interface BikeConfig {
  tankFinish: string;
  leatherSeat: string;
  exhaust: string;
}

interface CustomizationPanelProps {
  config: BikeConfig;
  onConfigChange: (key: keyof BikeConfig, value: string) => void;
}

const CustomizationPanel: React.FC<CustomizationPanelProps> = ({ config, onConfigChange }) => {
  const tankFinishes = [
    { id: 'forestOlive', name: 'Forest olive', color: '#616b54' },
    { id: 'carbonBlack', name: 'Carbon black', color: '#292b29' },
    { id: 'boneWhite', name: 'Bone white', color: '#e8e4d9' },
    { id: 'oxideRed', name: 'Oxide red', color: '#8e3e2f' },
    { id: 'slateBlue', name: 'Slate blue', color: '#7e8e98' }
  ];

  const leatherSeats = [
    { id: 'tobacco', name: 'Tobacco', color: '#765340' },
    { id: 'midnight', name: 'Midnight', color: '#292b29' }
  ];

  return (
    <div className="customization-panel">
      <div className="build-steps">
        <span className="step">01  Base</span>
        <span className="step-separator">—</span>
        <span className="step step-active">02  Customize</span>
        <span className="step-separator">—</span>
        <span className="step">03  Review</span>
      </div>

      <div className="selected-motorcycle">
        <h2 className="config-title">Make it yours.</h2>
        <div className="model-selector">
          <span className="model-name">The Standard 650</span>
          <a href="#" className="change-model">Change model</a>
        </div>
      </div>

      <div className="panel-divider"></div>

      <div className="customization-section">
        <div className="section-header">
          <h3 className="section-title">01 / TANK FINISH</h3>
          <span className="section-status">Included</span>
        </div>
        <div className="paint-colors">
          {tankFinishes.map(finish => (
            <button
              key={finish.id}
              className={`color-option ${config.tankFinish === finish.id ? 'selected' : ''}`}
              style={{ '--color': finish.color } as React.CSSProperties}
              onClick={() => onConfigChange('tankFinish', finish.id)}
              title={finish.name}
              aria-label={finish.name}
            >
              <div className="color-swatch" style={{ backgroundColor: finish.color }}></div>
            </button>
          ))}
        </div>
        <div className="selected-paint">
          <span className="paint-name">Forest olive</span>
          <span className="paint-finish">Matte finish</span>
        </div>
      </div>

      <div className="customization-section">
        <div className="section-header">
          <h3 className="section-title">02 / LEATHER SEAT</h3>
          <span className="section-status">Included</span>
        </div>
        <div className="leather-choices">
          {leatherSeats.map(seat => (
            <button
              key={seat.id}
              className={`leather-option ${config.leatherSeat === seat.id ? 'selected' : ''}`}
              onClick={() => onConfigChange('leatherSeat', seat.id)}
            >
              <div className="leather-sample" style={{ backgroundColor: seat.color }}></div>
              <span className="leather-name">{seat.name}</span>
              {config.leatherSeat === seat.id && <span className="checkmark">✓</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="customization-section">
        <div className="section-header">
          <h3 className="section-title">03 / EXHAUST</h3>
          <span className="section-price">+$350</span>
        </div>
        <div className="exhaust-option">
          <div className="exhaust-info">
            <h4 className="exhaust-name">Brushed stainless</h4>
            <p className="exhaust-description">Twin pipes. A deeper kind of roar.</p>
          </div>
          <span className="exhaust-toggle">⌄</span>
        </div>
      </div>

      <div className="reset-configuration">
        <span className="reset-icon">↺</span>
        <span className="reset-text">Reset to original</span>
      </div>
    </div>
  );
};

export default CustomizationPanel;