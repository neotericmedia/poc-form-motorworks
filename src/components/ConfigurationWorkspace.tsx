import React from 'react';
import '../styles/configuration-workspace.css';
import MotorcyclePreview from './MotorcyclePreview';
import CustomizationPanel from './CustomizationPanel';

interface BikeConfig {
  tankFinish: string;
  leatherSeat: string;
  exhaust: string;
}

interface ConfigurationWorkspaceProps {
  config: BikeConfig;
  onConfigChange: (key: keyof BikeConfig, value: string) => void;
}

const ConfigurationWorkspace: React.FC<ConfigurationWorkspaceProps> = ({ config, onConfigChange }) => {
  return (
    <section className="configuration-workspace">
      <MotorcyclePreview />
      <CustomizationPanel config={config} onConfigChange={onConfigChange} />
    </section>
  );
};

export default ConfigurationWorkspace;