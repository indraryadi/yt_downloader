from flask import Flask, jsonify,request
from flask_cors import CORS
from core.mp3 import *
from core.video import *
from core.downloader import *
from pathlib import Path
import io

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

    if download_type == "mp3":
        raw_data=get_video_stream(url)
        video_quality=get_video_quality(raw_data)
        # send quality data to fe to display the list
        # get the key (itag)

        #for download neet to call function get stream again bc stream can convert to string and vice versa using io but the type need to be pytube.stream to download it but using io become _io.StringIO


        # return {"quality":video_quality}
        response= jsonify(video_quality) 
        # response.headers.add('Access-Control-Allow-Origin', '*')
        # response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        # response.headers.add('Access-Control-Allow-Methods', 'POST')
        return response 

@app.route("/api/downloadVideo",methods=["POST"])
def downloadVideo():
    url=request.form["url"]
    raw_data=get_video_stream(url)
    quality=request.form["qualities"]
    link=get_mp3_link(raw_data["stream"],quality)
    # print(raw_data["yt"].title)
    # print(type(link))
    download(_save_path,link,"mp3",raw_data["yt"].title)

    return {"message":"ok"}

if __name__=="__main__":
    app.run(debug=True)


    
