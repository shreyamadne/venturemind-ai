import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AIResultsPage.css";

interface AnalysisResult {
  score: number;
  summary: string;
  market_analysis: string;
  target_audience: string;
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
  revenue_strategy: string;
  competitor_analysis: string;
  growth_strategy: string;
  funding_readiness: string;
  roadmap: string[];
  recommendation: string;
}

interface LocationState {
  businessName: string;
  industry: string;
  analysis: AnalysisResult;
}

const AIResultsPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as LocationState | null;

  if (!state || !state.analysis) {
    return (
      <div className="vm3-page">
        <div className="vm3-content">
          <div className="vm3-score-card">
            <div className="vm3-score-info">
              <h1>No Analysis Found</h1>

              <p>
                Please analyze a business idea first to view the AI-generated
                report.
              </p>

              <button
                className="vm3-btn vm3-btn-primary"
                onClick={() => navigate("/analyze")}
              >
                Analyze Business Idea
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const { businessName, industry, analysis } = state;

  const score = Math.max(0, Math.min(100, analysis.score || 0));

  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (score / 100) * circumference;

  const getScoreLabel = () => {
    if (score >= 80) return "Excellent Potential";
    if (score >= 60) return "Good Potential";
    if (score >= 40) return "Moderate Potential";
    return "Needs Improvement";
  };

  return (
    <div className="vm3-page">
      {/* Header */}
      <header className="vm3-header">
        <div className="vm3-header-inner">
          <button
            className="vm3-back-btn"
            onClick={() => navigate("/analyze")}
          >
            ← Back
          </button>

          <div className="vm3-logo">
            VentureMind <span>AI</span>
          </div>

          <div className="vm3-header-spacer" />
        </div>
      </header>

      <main className="vm3-content">
        {/* Title */}
        <section className="vm3-section">
          <div>
            <h1>{businessName}</h1>

            <p>{industry}</p>
          </div>
        </section>

        {/* Score */}
        <section className="vm3-score-card">
          <div className="vm3-score-circle-wrap">
            <svg
              className="vm3-score-svg"
              viewBox="0 0 120 120"
            >
              <circle
                className="vm3-score-track"
                cx="60"
                cy="60"
                r="54"
              />

              <circle
                className="vm3-score-progress"
                cx="60"
                cy="60"
                r="54"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
              />
            </svg>

            <div className="vm3-score-text">
              <span className="vm3-score-number">
                {score}
              </span>

              <span className="vm3-score-total">
                / 100
              </span>
            </div>
          </div>

          <div className="vm3-score-info">
            <h1>
              Business Score: {getScoreLabel()}
            </h1>

            <p>
              {analysis.summary}
            </p>
          </div>
        </section>

        {/* Market Analysis */}
        <section className="vm3-section">
          <h2>Market Analysis</h2>

          <div className="vm3-agent-card">
            <p>
              {analysis.market_analysis}
            </p>
          </div>
        </section>

        {/* Target Audience */}
        <section className="vm3-section">
          <h2>Target Audience Insights</h2>

          <div className="vm3-agent-card">
            <p>
              {analysis.target_audience}
            </p>
          </div>
        </section>

        {/* SWOT */}
        <section className="vm3-section">
          <h2>SWOT Analysis</h2>

          <div className="vm3-swot-grid">
            <div className="vm3-swot-card vm3-swot-strength">
              <h3>Strengths</h3>

              <ul>
                {analysis.strengths?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="vm3-swot-card vm3-swot-weakness">
              <h3>Weaknesses</h3>

              <ul>
                {analysis.weaknesses?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="vm3-swot-card vm3-swot-opportunity">
              <h3>Opportunities</h3>

              <ul>
                {analysis.opportunities?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="vm3-swot-card vm3-swot-threat">
              <h3>Threats</h3>

              <ul>
                {analysis.threats?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Revenue Strategy */}
        <section className="vm3-section">
          <h2>Revenue Strategy</h2>

          <div className="vm3-agent-card">
            <p>
              {analysis.revenue_strategy}
            </p>
          </div>
        </section>

        {/* Competitor Analysis */}
        <section className="vm3-section">
          <h2>Competitor Insights</h2>

          <div className="vm3-agent-card">
            <p>
              {analysis.competitor_analysis}
            </p>
          </div>
        </section>

        {/* Growth Strategy */}
        <section className="vm3-section">
          <h2>Growth Strategy</h2>

          <div className="vm3-agent-card">
            <p>
              {analysis.growth_strategy}
            </p>
          </div>
        </section>

        {/* Funding */}
        <section className="vm3-section">
          <h2>Funding Readiness</h2>

          <div className="vm3-agent-card">
            <p>
              {analysis.funding_readiness}
            </p>
          </div>
        </section>

        {/* Roadmap */}
        <section className="vm3-section">
          <h2>Recommended Roadmap</h2>

          <div className="vm3-next-steps">
            {analysis.roadmap?.map((step, index) => (
              <div
                className="vm3-next-step-item"
                key={index}
              >
                <span className="vm3-next-step-number">
                  {index + 1}
                </span>

                <span>{step}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Final Recommendation */}
        <section className="vm3-section">
          <h2>Final Recommendation</h2>

          <div className="vm3-agent-card">
            <p>
              {analysis.recommendation}
            </p>
          </div>
        </section>

        {/* Actions */}
        <section className="vm3-actions">
          <button
            className="vm3-btn vm3-btn-outline"
            onClick={() => navigate("/analyze")}
          >
            Analyze Another Idea
          </button>

          <button
            className="vm3-btn vm3-btn-primary"
            onClick={() => navigate("/dashboard")}
          >
            Back to Dashboard
          </button>
        </section>
      </main>
    </div>
  );
};

export default AIResultsPage;