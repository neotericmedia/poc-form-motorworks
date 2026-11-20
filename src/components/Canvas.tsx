import React from 'react';
import '../styles/canvas.css';

interface BikeConfig {
  frame: string;
  color: string;
  wheels: string;
  exhaust: string;
}

interface CanvasProps {
  config: BikeConfig;
}

const Canvas: React.FC<CanvasProps> = ({ config }) => {
  return (
    <div className="canvas">
      <div className="canvas-preview">
        <div className="bike-preview" style={{ borderColor: config.color }}>
          <p>🏍️ Bike Preview</p>
          <p className="config-text">{config.frame} • {config.wheels}</p>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
