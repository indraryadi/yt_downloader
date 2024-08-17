from fastapi import FastAPI 
from pydantic import BaseModel
from core.stream_processing import *
from core.downloader import *
from pathlib import Path
import time
import asyncio

class QualityParam(BaseModel):
    url: str
    download_type: str

class DownloadParam(BaseModel):
    url: str
    download_type: str
    qualities: str

app=FastAPI()

_save_path=str(Path.home()/'Downloads')

@app.get("/api/test")
def test():
    data={"messsage":"hello"}
    return data

@app.post("/api/getQuality")
def getQuality(req: QualityParam):
    url=req.url
    download_type=req.download_type

    raw_data=get_video_stream(url)
    video_quality=get_video_quality(raw_data,download_type)
    response= video_quality 
    return response

@app.post("/api/downloadVideo")
def downloadVideo(req:DownloadParam):
    url=req.url
    download_type=req.download_type

    raw_data=get_video_stream(url)
    quality=req.qualities

    link=get_video_link(raw_data["stream"],quality)

    print(f'{url} {download_type}')
    # download(_save_path,link,"mp3",raw_data["yt"].title)
    try:
        print(f'try download {raw_data["yt"].title}.{download_type}')
        download(_save_path,link,download_type,raw_data["yt"].title)
        print('SUCCESS DOWNLOAD!!!!!')
    except Exception as e:
        print("FAILED DOWNLOAD")
        # print(e)

    return {"message":"ok"}

@app.get("/test1")
async def one():
    # time.sleep(10)
    await asyncio.sleep(10)
    return {'one'}

@app.get("/test2")
def two():
    return {'two'}

if __name__=="__main__":
    app.run(debug=True)


    
