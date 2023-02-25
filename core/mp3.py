from pytube import YouTube


def get_video_stream(url):
    try:
        _yt=YouTube(url)
        _raw_data=_yt.streams

        res={"yt":_yt,"stream":_raw_data}
        return res 
    except Exception as e:
        print(e)

# def get_video_quality(stream):
#     try:
#         _raw_data=stream["stream"].filter(only_audio=True,mime_type="audio/mp4")
#         _quality={}
#         for i in _raw_data:
#             _quality[i.itag]=i.abr

#         return {"title":stream["yt"].title,"qualities":_quality}

#     except Exception as e:
#         print(e)

def get_video_quality(stream,download_type):
    try:
        if download_type == "mp3":
            _raw_data=stream["stream"].filter(only_audio=True,mime_type="audio/mp4")
            _quality={}

            for i in _raw_data:
                _quality[i.itag]=i.abr

            return {"title":stream["yt"].title,"qualities":_quality}

        elif download_type == "mp4":
            _raw_data=stream["stream"].filter(progressive=True)
            _quality={}

            for i in _raw_data:
                _quality[i.itag]=i.abr

            return {"title":stream["yt"].title,"qualities":_quality}



    except Exception as e:
        print(e)

def get_mp3_link(stream,selected_quality):
    try:
        link=stream.get_by_itag(selected_quality)
        # return {"res":str(link)} 
        return link 
    except:
        print("connection error")

# if __name__=="__main__":
#     yt=get_video_stream("https://www.youtube.com/watch?v=OTBdO18zmxQ")
#     quality=get_video_quality(yt)
#     link=get_mp3_link(yt["stream"],139)
#     print(link)