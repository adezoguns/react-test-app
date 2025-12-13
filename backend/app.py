from fastapi import FastAPI, Request,  Depends, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
import asyncio
import base64

### uv run uvicorn app:app --reload

app = FastAPI()


#### This is neccessary for local development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000", "*"],  # your React dev URL(s)
    allow_credentials=True,
    allow_methods=["*"],   # or ["POST", "GET", "OPTIONS"]
    allow_headers=["*"],   # or ["Content-Type", "Authorization"]
)


data=[
    {"id": 1, "surname": "Ogunleye", "name": "Adeola"},
    {"id": 2, "surname": "Dauda", "name": "Adebisi"},
    {"id": 3, "surname": "Brent", "name": "Thomas"},
    {"id": 4, "surname": "Oyediran", "name": "Akeem"}
]

# Path parameter
@app.get("/api/health")
def check_health():
    return {"message": "Saying hello from the server!!!!"}


@app.get("/api/playdata")
def playdata():
    return{"data": data}


class SendSampleData(BaseModel):
    firstname: str
    surname: str

# Root endpoint
@app.post("/api/send")
async def read_root(request: SendSampleData):
   
    data = pd.DataFrame([{"firstname":request.firstname, "surname": request.surname}])
    await asyncio.sleep(0.5)
    return {"message": f"Hello {request.surname} {request.firstname} from the server!!!!"}