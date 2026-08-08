import os
import json

from dotenv import load_dotenv
from google import genai
from models.idea import BusinessIdea

load_dotenv()

API_KEY = os.getenv("GEMINI_API_KEY")

if not API_KEY:
    raise ValueError("GEMINI_API_KEY is missing from the .env file")

client = genai.Client(api_key=API_KEY)


def analyze_business_idea(idea: BusinessIdea):

    prompt = f"""
You are an expert startup consultant, business strategist, and market analyst.

Analyze this business idea:

Business Name:
{idea.title}

Business Description:
{idea.description}

Target Market:
{idea.target_market}

Return ONLY valid JSON.

Use exactly this structure:

{{
    "score": 85,
    "summary": "A short overall evaluation of the business idea.",
    "market_analysis": "Analysis of the market opportunity and demand.",
    "target_audience": "Analysis of the target customers.",
    "strengths": [
        "Strength 1",
        "Strength 2",
        "Strength 3"
    ],
    "weaknesses": [
        "Weakness 1",
        "Weakness 2"
    ],
    "opportunities": [
        "Opportunity 1",
        "Opportunity 2"
    ],
    "threats": [
        "Threat 1",
        "Threat 2"
    ],
    "revenue_strategy": "Recommended revenue model and monetization strategy.",
    "competitor_analysis": "General competitor and competitive landscape analysis.",
    "growth_strategy": "Recommended strategy for acquiring customers and growing.",
    "funding_readiness": "Assessment of whether the idea appears ready for funding.",
    "roadmap": [
        "First important step",
        "Second important step",
        "Third important step",
        "Fourth important step"
    ],
    "recommendation": "Final recommendation for the entrepreneur."
}}

Important rules:
- score must be a number from 0 to 100.
- Return JSON only.
- Do NOT use markdown.
- Do NOT use ```json.
- Do NOT add explanations outside the JSON.
"""

    response = client.models.generate_content(
        model="gemini-3.6-flash",
        contents=prompt,
    )

    text = response.text.strip()

    if text.startswith("```"):
        text = text.replace("```json", "").replace("```", "").strip()

    try:
        return json.loads(text)
    except json.JSONDecodeError:
        return {
            "score": 0,
            "summary": "The AI returned an unexpected response format.",
            "market_analysis": text,
            "target_audience": "",
            "strengths": [],
            "weaknesses": [],
            "opportunities": [],
            "threats": [],
            "revenue_strategy": "",
            "competitor_analysis": "",
            "growth_strategy": "",
            "funding_readiness": "",
            "roadmap": [],
            "recommendation": "Please try the analysis again."
        }