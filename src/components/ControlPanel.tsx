import React from 'react';
import '../styles/control-panel.css';

interface BikeConfig {
  frame: string;
  color: string;
  wheels: string;
  exhaust: string;
}

interface ControlPanelProps {
  config: BikeConfig;
  onChange: (config: BikeConfig) => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ config, onChange }) => {
  const handleChange = (key: keyof BikeConfig, value: string) => {
    onChange({ ...config, [key]: value });
  };

  return (
    <div className="control-panel">
      <h2>Customize Your Bike</h2>
      
      <div className="control-group">
        <label>Frame Type</label>
        <select value={config.frame} onChange={(e) => handleChange('frame', e.target.value)}>
          <option value="sportster">Sportster</option>
          <option value="cruiser">Cruiser</option>
          <option value="touring">Touring</option>
        </select>
      </div>

      <div className="control-group">
        <label>Color</label>
        <input type="color" value={config.color} onChange={(e) => handleChange('color', e.target.value)} />
      </div>

      <div className="control-group">
        <label>Wheels</label>
        <select value={config.wheels} onChange={(e) => handleChange('wheels', e.target.value)}>
          <option value="standard">Standard</option>
          <option value="chrome">Chrome</option>
          <option value="alloy">Alloy</option>
        </select>
      </div>

      <div className="control-group">
        <label>Exhaust</label>
        <select value={config.exhaust} onChange={(e) => handleChange('exhaust', e.target.value)}>
          <option value="chrome">Chrome</option>
          <option value="black">Black</option>
          <option value="performance">Performance</option>
        </select>
      </div>

      <button className="btn-save">Save Configuration</button>
    </div>
  );
};

export default ControlPanel;
