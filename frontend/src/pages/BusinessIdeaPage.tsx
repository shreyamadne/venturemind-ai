import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./BusinessIdeaPage.css";

interface FormData {
  businessName: string;
  industry: string;
  targetAudience: string;
  problemStatement: string;
  solutionDescription: string;
  revenueModel: string;
  additionalNotes: string;
}

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

const initialForm: FormData = {
  businessName: "",
  industry: "",
  targetAudience: "",
  problemStatement: "",
  solutionDescription: "",
  revenueModel: "",
  additionalNotes: "",
};

const industries = [
  "Technology / SaaS",
  "E-commerce",
  "Healthcare",
  "Finance",
  "Education",
  "Food & Beverage",
  "Real Estate",
  "Travel & Hospitality",
  "Other",
];

const BusinessIdeaPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post<AnalysisResult>(
        "https://venturemind-ai-fo6t.onrender.com",
        {
          title: formData.businessName,
          description: `
Industry: ${formData.industry}

Problem:
${formData.problemStatement}

Solution:
${formData.solutionDescription}

Revenue Model:
${formData.revenueModel}

Additional Notes:
${formData.additionalNotes}
          `,
          target_market: formData.targetAudience,
        }
      );

      console.log("Gemini Analysis:", response.data);

      navigate("/results", {
        state: {
          businessName: formData.businessName,
          industry: formData.industry,
          analysis: response.data,
        },
      });
    } catch (error) {
      console.error("API Error:", error);

      if (axios.isAxiosError(error)) {
        console.error("Backend response:", error.response?.data);
      }

      alert(
        "Failed to analyze business idea. Please make sure the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="vm-idea-page">
      {loading && (
        <div className="vm-loading-overlay">
          <div className="vm-spinner" />
          <p>Analyzing your business idea with AI...</p>
          <span>Please wait while Gemini prepares your report.</span>
        </div>
      )}

      <div className="vm-idea-container">
        <div className="vm-idea-header">
          <h1>Analyze Your Business Idea</h1>
          <p>
            Describe your startup idea and let AI evaluate its business
            potential.
          </p>
        </div>

        <form className="vm-idea-form" onSubmit={handleSubmit}>
          <div className="vm-form-grid">
            <div className="vm-form-group">
              <label htmlFor="businessName">Business Name</label>

              <input
                id="businessName"
                name="businessName"
                type="text"
                placeholder="e.g. NovaFit"
                value={formData.businessName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="vm-form-group">
              <label htmlFor="industry">Industry</label>

              <select
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select an industry
                </option>

                {industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="vm-form-group">
            <label htmlFor="targetAudience">Target Audience</label>

            <input
              id="targetAudience"
              name="targetAudience"
              type="text"
              placeholder="e.g. Busy professionals aged 25-40"
              value={formData.targetAudience}
              onChange={handleChange}
              required
            />
          </div>

          <div className="vm-form-group">
            <label htmlFor="problemStatement">Problem Statement</label>

            <textarea
              id="problemStatement"
              name="problemStatement"
              rows={4}
              placeholder="What problem does your idea solve?"
              value={formData.problemStatement}
              onChange={handleChange}
              required
            />
          </div>

          <div className="vm-form-group">
            <label htmlFor="solutionDescription">
              Solution Description
            </label>

            <textarea
              id="solutionDescription"
              name="solutionDescription"
              rows={4}
              placeholder="How does your product/service solve the problem?"
              value={formData.solutionDescription}
              onChange={handleChange}
              required
            />
          </div>

          <div className="vm-form-group">
            <label htmlFor="revenueModel">Revenue Model</label>

            <input
              id="revenueModel"
              name="revenueModel"
              type="text"
              placeholder="e.g. Monthly subscription, freemium"
              value={formData.revenueModel}
              onChange={handleChange}
              required
            />
          </div>

          <div className="vm-form-group">
            <label htmlFor="additionalNotes">Additional Notes</label>

            <textarea
              id="additionalNotes"
              name="additionalNotes"
              rows={3}
              placeholder="Anything else AI should consider (optional)"
              value={formData.additionalNotes}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="vm-analyze-btn"
            disabled={loading}
          >
            {loading ? "Analyzing..." : "Analyze Business Idea"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BusinessIdeaPage;