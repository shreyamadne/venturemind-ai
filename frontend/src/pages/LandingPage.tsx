import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const trustedBy = ["Microsoft", "Google", "Amazon", "OpenAI", "Startup India"];

const features = [
  { icon: "🧠", title: "AI Business Analysis", desc: "Deep AI-driven evaluation of your startup idea's viability and potential." },
  { icon: "📊", title: "Market Research", desc: "Real-time market trends, sizing, and target audience insights." },
  { icon: "🎯", title: "SWOT Analysis", desc: "Strengths, weaknesses, opportunities and threats, auto-generated." },
  { icon: "💰", title: "Revenue Strategy", desc: "Actionable monetization models and growth strategies." },
  { icon: "🔍", title: "Competitor Insights", desc: "Understand your competitive landscape instantly." },
  { icon: "⭐", title: "Business Score", desc: "Get a data-backed score for your idea's real-world potential." },
];

const steps = [
  { number: "01", title: "Describe Your Business Idea", desc: "Tell us about your concept, target audience, and goals in a simple form." },
  { number: "02", title: "AI Agents Analyze It", desc: "Our AI evaluates market fit, competition, risks, and opportunities." },
  { number: "03", title: "Receive a Complete Report", desc: "Get a full business report with scores, insights, and recommendations." },
];

const stats = [
  { value: "10K+", label: "Business Ideas" },
  { value: "95%", label: "AI Accuracy" },
  { value: "150+", label: "Countries" },
  { value: "4.9★", label: "Average Rating" },
];

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="vm2-page">
      {/* Navbar */}
      <nav className="vm2-navbar">
        <div className="vm2-navbar-inner">
          <div className="vm2-logo">VentureMind <span>AI</span></div>
          <ul className="vm2-nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="vm2-btn vm2-btn-outline" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="vm2-hero">
        <div className="vm2-hero-left">
          <span className="vm2-badge">✨ AI-Powered Business Validation</span>
          <h1>Validate Your Startup Idea with AI</h1>
          <p>
            Receive AI-powered market analysis, SWOT analysis, competitor
            insights, business scoring, and growth strategies within seconds.
          </p>
          <div className="vm2-hero-buttons">
            <button className="vm2-btn vm2-btn-primary" onClick={() => navigate("/analyze")}>
              Start Free
            </button>
            <button className="vm2-btn vm2-btn-outline">Watch Demo</button>
          </div>
        </div>

        <div className="vm2-hero-right">
          <div className="vm2-illustration">
            <div className="vm2-illus-card vm2-illus-card-1">
              <div className="vm2-illus-dot" />
              <div className="vm2-illus-line vm2-w70" />
              <div className="vm2-illus-line vm2-w40" />
            </div>
            <div className="vm2-illus-card vm2-illus-card-2">
              <div className="vm2-illus-chart">
                <span style={{ height: "40%" }} />
                <span style={{ height: "65%" }} />
                <span style={{ height: "50%" }} />
                <span style={{ height: "85%" }} />
                <span style={{ height: "60%" }} />
              </div>
              <div className="vm2-illus-line vm2-w60" />
            </div>
            <div className="vm2-illus-card vm2-illus-card-3">
              <div className="vm2-illus-score">92</div>
              <div className="vm2-illus-line vm2-w50" />
            </div>
            <div className="vm2-illus-blob vm2-illus-blob-1" />
            <div className="vm2-illus-blob vm2-illus-blob-2" />
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="vm2-trusted">
        <p>Trusted by teams at</p>
        <div className="vm2-trusted-logos">
          {trustedBy.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="vm2-features">
        <div className="vm2-section-header">
          <h2>Everything You Need to Validate Your Idea</h2>
          <p>Powerful AI tools designed for founders who move fast.</p>
        </div>
        <div className="vm2-features-grid">
          {features.map((f, i) => (
            <div className="vm2-feature-card" key={i}>
              <div className="vm2-feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="vm2-how">
        <div className="vm2-section-header">
          <h2>How It Works</h2>
          <p>From idea to insight in three simple steps.</p>
        </div>
        <div className="vm2-how-grid">
          {steps.map((s, i) => (
            <div className="vm2-how-card" key={i}>
              <div className="vm2-how-number">{s.number}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              {i < steps.length - 1 && <div className="vm2-how-connector" />}
            </div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section id="pricing" className="vm2-stats">
        <div className="vm2-stats-grid">
          {stats.map((s, i) => (
            <div className="vm2-stat-item" key={i}>
              <span className="vm2-stat-value">{s.value}</span>
              <span className="vm2-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="vm2-cta">
        <div className="vm2-cta-card">
          <h2>Turn Your Startup Idea Into Reality</h2>
          <button className="vm2-btn vm2-btn-white" onClick={() => navigate("/analyze")}>
            Analyze My Idea
          </button>
          <div className="vm2-cta-glow" />
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="vm2-footer">
        <div className="vm2-footer-inner">
          <div className="vm2-footer-brand">
            <h3>VentureMind <span>AI</span></h3>
            <p>AI-powered business validation platform for modern founders.</p>
          </div>

          <div className="vm2-footer-col">
            <h4>Company</h4>
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="vm2-footer-col">
            <h4>Resources</h4>
            <a href="#">Blog</a>
            <a href="#">Documentation</a>
            <a href="#">Help Center</a>
            <a href="#">API</a>
          </div>

          <div className="vm2-footer-col">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>

          <div className="vm2-footer-col">
            <h4>Social</h4>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter / X</a>
            <a href="#">Instagram</a>
          </div>
        </div>
        <div className="vm2-footer-bottom">
          © {new Date().getFullYear()} VentureMind AI. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;