from flask import Flask, jsonify,request
from flask_cors import CORS
from core.mp3 import *
from core.video import *
from core.downloader import *
from pathlib import Path

app=Flask(__name__)
CORS(app)

_save_path=str(Path.home()/'Downloads')

@app.route("/api/getLink",method=["POST"])
def getLink():
    url=request.form["url"]
    download_type=request.form["download_type"]

    if download_type == "mp3":
        raw_data=get_video_stream_and_quality(url)
        # send quality data to fe to display the list
        # get the key (itag)
        quality=request.form["qualities"]
        link=get_mp3_link(raw_data["streams"],quality)
        return link

if __name__=="__main__":
    app.run(debug=True)


    
