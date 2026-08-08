from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.analyze import router

app = FastAPI(title="VentureMind AI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)


@app.get("/")
def root():
    return {"message": "Backend Running 🚀"}


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "VentureMind AI API"
    }