import React from 'react';
import '../styles/build-summary.css';

interface BikeConfig {
  tankFinish: string;
  leatherSeat: string;
  exhaust: string;
}

interface BuildSummaryProps {
  config: BikeConfig;
}

const BuildSummary: React.FC<BuildSummaryProps> = ({ config }) => {
  return (
    <section className="build-summary">
      <div className="summary-container">
        <div className="selected-build">
          <div className="build-label">YOUR ONE OF ONE</div>
          <h2 className="build-name">The Standard. Your signature.</h2>
          <p className="build-specs">Forest olive  /  Tobacco leather  /  Brushed stainless</p>
        </div>

        <div className="price-and-checkout">
          <div className="total-price">
            <div className="price-label">ESTIMATED TOTAL</div>
            <div className="price-amount">
              <span className="price-value">$9,850</span>
              <span className="price-currency">USD</span>
            </div>
          </div>

          <div className="build-action">
            <button className="review-button">
              <span>Review your build</span>
              <span className="button-icon">↗</span>
            </button>
            <p className="build-timeline">Made to order · Ready in 6–8 weeks</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildSummary;