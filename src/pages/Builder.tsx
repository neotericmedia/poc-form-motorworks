import React, { useState } from 'react';
import '../styles/builder.css';
import Header from '../components/Header';
import Canvas from '../components/Canvas';
import ControlPanel from '../components/ControlPanel';

const Builder: React.FC = () => {
  const [bikeConfig, setBikeConfig] = useState({
    frame: 'sportster',
    color: '#1a1a1a',
    wheels: 'standard',
    exhaust: 'chrome'
  });

  return (
    <div className="builder">
      <Header />
      <div className="builder-layout">
        <Canvas config={bikeConfig} />
        <ControlPanel config={bikeConfig} onChange={setBikeConfig} />
      </div>
    </div>
  );
};

export default Builder;
