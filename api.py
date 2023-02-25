from flask import Flask, jsonify,request
from flask_cors import CORS
from core.stream_processing import *
from core.downloader import *
from pathlib import Path

app=Flask(__name__)
CORS(app, origins=["http://localhost:3000"])

_save_path=str(Path.home()/'Downloads')

@app.route("/api/test",methods=["GET"])
def test():
    data={"messsage":"hello"}
    return jsonify(data)

@app.route("/api/getQuality",methods=["POST"])
def getQuality():
    url=request.form["url"]
    download_type=request.form["download_type"]

    raw_data=get_video_stream(url)
    video_quality=get_video_quality(raw_data,download_type)
    response= jsonify(video_quality) 
    # response.headers.add('Access-Control-Allow-Origin', '*')
    # response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    # response.headers.add('Access-Control-Allow-Methods', 'POST')
    return response

@app.route("/api/downloadVideo",methods=["POST"])
def downloadVideo():
    url=request.form["url"]
    download_type=request.form["download_type"]

    raw_data=get_video_stream(url)
    quality=request.form["qualities"]

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

if __name__=="__main__":
    app.run(debug=True)


    
