import React from "react";
import "./ResultPage.css";

interface ResultPageProps {
  businessName: string;
}

const swot = {
  strengths: ["Clear value proposition", "Low initial overhead", "Scalable digital model"],
  weaknesses: ["High customer acquisition cost", "Limited brand recognition"],
  opportunities: ["Growing market demand", "Potential for partnerships"],
  threats: ["Competitive landscape", "Changing regulations"],
};

const competitors = [
  { name: "Competitor A", strength: "Strong brand presence" },
  { name: "Competitor B", strength: "Lower pricing" },
  { name: "Competitor C", strength: "Established user base" },
];

const ResultPage: React.FC<ResultPageProps> = ({ businessName }) => {
  const score = 82;

  return (
    <div className="vm-result-page">
      <div className="vm-result-container">
        <div className="vm-result-header">
          <h1>Analysis Report</h1>
          <p>AI-generated insights for <strong>{businessName}</strong></p>
        </div>

        {/* Score Card */}
        <div className="vm-score-card">
          <div className="vm-score-circle">
            <span>{score}</span>
            <small>/ 100</small>
          </div>
          <div className="vm-score-info">
            <h2>Business Viability Score</h2>
            <p>
              This idea shows strong potential based on market demand,
              scalability, and revenue clarity. AI recommends refining
              customer acquisition strategy before launch.
            </p>
          </div>
        </div>

        {/* SWOT */}
        <div className="vm-section">
          <h2>SWOT Analysis</h2>
          <div className="vm-swot-grid">
            <div className="vm-swot-card vm-swot-strength">
              <h3>Strengths</h3>
              <ul>{swot.strengths.map((s, i) => <li key={i}>{s}</li>)}</ul>
            </div>
            <div className="vm-swot-card vm-swot-weakness">
              <h3>Weaknesses</h3>
              <ul>{swot.weaknesses.map((s, i) => <li key={i}>{s}</li>)}</ul>
            </div>
            <div className="vm-swot-card vm-swot-opportunity">
              <h3>Opportunities</h3>
              <ul>{swot.opportunities.map((s, i) => <li key={i}>{s}</li>)}</ul>
            </div>
            <div className="vm-swot-card vm-swot-threat">
              <h3>Threats</h3>
              <ul>{swot.threats.map((s, i) => <li key={i}>{s}</li>)}</ul>
            </div>
          </div>
        </div>

        {/* Competitor Insights */}
        <div className="vm-section">
          <h2>Competitor Insights</h2>
          <div className="vm-competitor-list">
            {competitors.map((c, i) => (
              <div className="vm-competitor-card" key={i}>
                <span className="vm-competitor-name">{c.name}</span>
                <span className="vm-competitor-strength">{c.strength}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Strategy */}
        <div className="vm-section">
          <h2>Revenue Strategy Recommendation</h2>
          <p className="vm-revenue-text">
            Consider a tiered subscription model with a free trial to reduce
            entry friction. Layer in premium features for power users and
            explore enterprise partnerships as a secondary revenue stream.
          </p>
        </div>

        <div className="vm-result-actions">
          <button className="vm-btn vm-btn-primary">Save Report</button>
          <button className="vm-btn vm-btn-outline">Export PDF</button>
          <button className="vm-btn vm-btn-outline" onClick={() => window.location.reload()}>
            Analyze Another Idea
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;