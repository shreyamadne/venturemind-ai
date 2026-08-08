import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DashboardPage.css";

interface Analysis {
  id: number;
  idea: string;
  date: string;
  score: number;
  status: "Completed" | "In Progress" | "Failed";
}

const recentAnalyses: Analysis[] = [
  {
    id: 1,
    idea: "AI-Powered Meal Planning App",
    date: "Aug 4, 2026",
    score: 87,
    status: "Completed",
  },
  {
    id: 2,
    idea: "Subscription Box for Pet Toys",
    date: "Aug 3, 2026",
    score: 72,
    status: "Completed",
  },
  {
    id: 3,
    idea: "B2B SaaS for Invoice Automation",
    date: "Aug 2, 2026",
    score: 91,
    status: "Completed",
  },
  {
    id: 4,
    idea: "VR Fitness Coaching Platform",
    date: "Aug 1, 2026",
    score: 0,
    status: "In Progress",
  },
  {
    id: 5,
    idea: "Local Farmers Marketplace App",
    date: "Jul 30, 2026",
    score: 65,
    status: "Completed",
  },
];

const statusClass: Record<Analysis["status"], string> = {
  Completed: "vm-status-completed",
  "In Progress": "vm-status-progress",
  Failed: "vm-status-failed",
};

const DashboardPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const goToAnalyze = () => {
    setSidebarOpen(false);
    navigate("/analyze");
  };

  const goToDashboard = () => {
    setSidebarOpen(false);
    navigate("/dashboard");
  };

  const logout = () => {
    navigate("/");
  };

  return (
    <div className="vm-dashboard">
      {/* Sidebar */}
      <aside
        className={`vm-sidebar ${
          sidebarOpen ? "vm-sidebar-open" : ""
        }`}
      >
        <div className="vm-sidebar-logo">
          VentureMind <span>AI</span>
        </div>

        <nav className="vm-sidebar-nav">
          <button
            type="button"
            className="vm-sidebar-link vm-sidebar-link-active"
            onClick={goToDashboard}
          >
            <span>▣</span>
            Dashboard
          </button>

          <button
            type="button"
            className="vm-sidebar-link"
            onClick={goToAnalyze}
          >
            <span>＋</span>
            New Analysis
          </button>

          <button
            type="button"
            className="vm-sidebar-link"
            onClick={() => alert("Analysis history will be available soon.")}
          >
            <span>◷</span>
            History
          </button>

          <button
            type="button"
            className="vm-sidebar-link"
            onClick={() => alert("Saved reports will be available soon.")}
          >
            <span>▤</span>
            Saved Reports
          </button>

          <button
            type="button"
            className="vm-sidebar-link"
            onClick={() => alert("Settings will be available soon.")}
          >
            <span>⚙</span>
            Settings
          </button>
        </nav>

        <button
          type="button"
          className="vm-sidebar-logout"
          onClick={logout}
        >
          Logout
        </button>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="vm-sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main */}
      <div className="vm-dash-main">
        {/* Top Navbar */}
        <header className="vm-topbar">
          <div className="vm-topbar-left">
            <button
              className="vm-menu-btn"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle menu"
            >
              ☰
            </button>

            <span className="vm-welcome-text">
              Welcome, User
            </span>
          </div>

          <div className="vm-topbar-right">
            <div className="vm-search-bar">
              <input
                type="text"
                placeholder="Search analyses..."
              />
            </div>

            <button
              className="vm-icon-btn"
              aria-label="Notifications"
            >
              🔔
            </button>

            <div className="vm-profile-icon">
              U
            </div>
          </div>
        </header>

        <main className="vm-content">
          {/* Hero Card */}
          <section className="vm-hero-card">
            <div>
              <h1>Welcome to VentureMind AI</h1>

              <p>
                Validate your startup ideas with AI-powered
                business intelligence.
              </p>

              <button
                type="button"
                className="vm-btn vm-btn-primary"
                onClick={goToAnalyze}
              >
                Analyze New Business Idea
              </button>
            </div>

            <div className="vm-hero-card-glow" />
          </section>

          {/* Stats */}
          <section className="vm-stats-grid">
            <div className="vm-stat-card">
              <span className="vm-stat-label">
                Total Analyses
              </span>
              <span className="vm-stat-value">
                128
              </span>
            </div>

            <div className="vm-stat-card">
              <span className="vm-stat-label">
                Saved Reports
              </span>
              <span className="vm-stat-value">
                42
              </span>
            </div>

            <div className="vm-stat-card">
              <span className="vm-stat-label">
                AI Score Average
              </span>
              <span className="vm-stat-value">
                78.4
              </span>
            </div>

            <div className="vm-stat-card">
              <span className="vm-stat-label">
                Success Predictions
              </span>
              <span className="vm-stat-value">
                91%
              </span>
            </div>
          </section>

          {/* Recent Analyses */}
          <section className="vm-table-card">
            <h2>Recent Analyses</h2>

            <div className="vm-table-wrapper">
              <table className="vm-table">
                <thead>
                  <tr>
                    <th>Business Idea</th>
                    <th>Date</th>
                    <th>AI Score</th>
                    <th>Status</th>
                    <th>View Report</th>
                  </tr>
                </thead>

                <tbody>
                  {recentAnalyses.map((row) => (
                    <tr key={row.id}>
                      <td>{row.idea}</td>

                      <td>{row.date}</td>

                      <td>
                        {row.status === "Completed"
                          ? row.score
                          : "—"}
                      </td>

                      <td>
                        <span
                          className={`vm-status-badge ${
                            statusClass[row.status]
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>

                      <td>
                        <button
                          type="button"
                          className="vm-view-btn"
                          disabled={
                            row.status !== "Completed"
                          }
                          onClick={() => {
                            if (row.status === "Completed") {
                              alert(
                                "This report is a demo record."
                              );
                            }
                          }}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Quick Actions */}
          <section className="vm-quick-actions">
            <h2>Quick Actions</h2>

            <div className="vm-quick-actions-grid">
              <button
                type="button"
                className="vm-quick-card"
                onClick={goToAnalyze}
              >
                <div className="vm-quick-icon">
                  🚀
                </div>

                <span>Start New Analysis</span>
              </button>

              <button
                type="button"
                className="vm-quick-card"
                onClick={() =>
                  alert(
                    "Business plan upload will be available soon."
                  )
                }
              >
                <div className="vm-quick-icon">
                  📄
                </div>

                <span>Upload Business Plan</span>
              </button>

              <button
                type="button"
                className="vm-quick-card"
                onClick={() =>
                  alert(
                    "Report export will be available soon."
                  )
                }
              >
                <div className="vm-quick-icon">
                  📤
                </div>

                <span>Export Reports</span>
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;