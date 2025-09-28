from fastapi import APIRouter, UploadFile, HTTPException
from fastapi.responses import JSONResponse
from app.mongodb import fs, resumes_collection
import datetime
import logging

router = APIRouter(prefix="/resumes", tags=["resumes"])
logger = logging.getLogger(__name__)

@router.post("/upload")
async def upload_resume(file: UploadFile):
    logger.info(f"Received file: {file.filename}")
    if not file.filename.endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Only PDF files allowed")

    file_id = fs.put(file.file, filename=file.filename)
    resume_doc = {"filename": file.filename, "file_id": file_id, "uploaded_at": datetime.datetime.utcnow(), "parsed_data": {}}
    inserted = resumes_collection.insert_one(resume_doc)
    logger.info(f"Inserted metadata with id {inserted.inserted_id}")

    return JSONResponse({
        "message": "Resume uploaded successfully",
        "resume_id": str(inserted.inserted_id),
        "file_id": str(file_id),
        "filename": file.filename
    })
