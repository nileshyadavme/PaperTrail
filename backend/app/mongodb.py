from pymongo import MongoClient
import gridfs
from dotenv import load_dotenv

import os
load_dotenv()

MONGODB_URI = os.getenv("MONGODB_URI")
DATABASE_NAME = os.getenv("DATABASE_NAME", "resume_analyzer")
client = MongoClient(MONGODB_URI)

db = client[DATABASE_NAME]           # Database
fs = gridfs.GridFS(db)             # GridFS for storing PDFs
resumes_collection = db["resumes"] # Metadata collection
