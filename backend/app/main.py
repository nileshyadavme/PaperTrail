from fastapi import FastAPI
from app.services.cors_config import add_cors
from app.routes.resume import router

app = FastAPI()

add_cors(app)
app.include_router(router)

@app.get("/")
async def root():
    return {"message": "API running"}
