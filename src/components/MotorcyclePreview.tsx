import React, { useState } from 'react';
import '../styles/motorcycle-preview.css';

const MotorcyclePreview: React.FC = () => {
  const [currentView, setCurrentView] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(1);

  return (
    <div className="motorcycle-preview">
      <div className="motorcycle-studio">
        <img 
          src="/figma-assets/2e40e3dc81ad594c0fe897bffd59280394c1b773.jpg" 
          alt="Custom olive café racer" 
          className="motorcycle-image"
          style={{ transform: `scale(${zoomLevel})` }}
        />
        <div className="studio-label">
          <div className="studio-label-top">
            <h3 className="studio-title">THE STANDARD</h3>
            <div className="studio-handbuilt">
              <span className="handbuilt-dot"></span>
              <span className="handbuilt-text">Handbuilt. Never mass-produced.</span>
            </div>
          </div>
          <div className="studio-specs">
            <span className="studio-model">650  /  CAFÉ RACER</span>
          </div>
        </div>
        <div className="view-controls">
          <span className="view-current">01</span>
          <span className="view-separator">/  03</span>
          <span className="view-label">SIDE PROFILE</span>
        </div>
        <div className="zoom-controls">
          <button className="zoom-btn" onClick={() => setZoomLevel(Math.max(0.8, zoomLevel - 0.1))}>−</button>
          <button className="zoom-btn" onClick={() => setZoomLevel(Math.min(1.3, zoomLevel + 0.1))}>+</button>
        </div>
      </div>

      <div className="motorcycle-specifications">
        <div className="spec-item">
          <div className="spec-label">ENGINE</div>
          <div className="spec-value">
            <span className="spec-number">648</span>
            <span className="spec-unit">cc</span>
          </div>
        </div>
        <div className="spec-item">
          <div className="spec-label">PEAK POWER</div>
          <div className="spec-value">
            <span className="spec-number">47</span>
            <span className="spec-unit">hp</span>
          </div>
        </div>
        <div className="spec-item">
          <div className="spec-label">TORQUE</div>
          <div className="spec-value">
            <span className="spec-number">52</span>
            <span className="spec-unit">Nm</span>
          </div>
        </div>
        <div className="spec-item">
          <div className="spec-label">DRY WEIGHT</div>
          <div className="spec-value">
            <span className="spec-number">196</span>
            <span className="spec-unit">kg</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotorcyclePreview;