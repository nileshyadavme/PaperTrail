import os
os.environ["SPACY_MODEL"] = "en_core_web_sm"

from pyresparser import ResumeParser
data = ResumeParser("./backend/app/assets/resume.pdf").get_extracted_data()
print(data)
