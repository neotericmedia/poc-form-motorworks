import React, { useState } from 'react';
import '../styles/builder.css';
import Navigation from '../components/Navigation';
import BuildIntroduction from '../components/BuildIntroduction';
import ConfigurationWorkspace from '../components/ConfigurationWorkspace';
import BuildSummary from '../components/BuildSummary';
import Footer from '../components/Footer';

interface BikeConfig {
  tankFinish: string;
  leatherSeat: string;
  exhaust: string;
}

const Builder: React.FC = () => {
  const [config, setConfig] = useState<BikeConfig>({
    tankFinish: 'forestOlive',
    leatherSeat: 'tobacco',
    exhaust: 'brushedStainless'
  });

  const handleConfigChange = (key: keyof BikeConfig, value: string) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="builder">
      <Navigation />
      <BuildIntroduction />
      <ConfigurationWorkspace config={config} onConfigChange={handleConfigChange} />
      <BuildSummary config={config} />
      <Footer />
    </div>
  );
};

export default Builder;