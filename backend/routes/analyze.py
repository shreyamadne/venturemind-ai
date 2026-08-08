from fastapi import APIRouter, HTTPException
from models.idea import BusinessIdea
from services.ai_service import analyze_business_idea

router = APIRouter()


@router.post("/analyze")
def analyze(idea: BusinessIdea):
    try:
        result = analyze_business_idea(idea)
        return result

    except Exception as e:
        print("ANALYZE ERROR:", repr(e))
        raise HTTPException(
            status_code=500,
            detail=f"Analysis failed: {str(e)}"
        )