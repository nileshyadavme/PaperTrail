from fastapi import FastAPI
from services.cors_config import add_cors

app = FastAPI()

# Apply CORS
add_cors(app)

# Dummy endpoints for testing React

@app.get("/")
async def root():
    return {"message": "Hello World from FastAPI!"}

@app.get("/user")
async def get_user():
    return {"name": "Alice", "age": 25, "email": "alice@example.com"}

@app.get("/tasks")
async def get_tasks():
    return [
        {"id": 1, "title": "Learn FastAPI", "done": False},
        {"id": 2, "title": "Connect React app", "done": True},
        {"id": 3, "title": "Build fullstack project", "done": False},
    ]
