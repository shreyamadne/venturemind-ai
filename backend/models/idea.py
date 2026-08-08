from pydantic import BaseModel

class BusinessIdea(BaseModel):
    title: str
    description: str
    target_market: str